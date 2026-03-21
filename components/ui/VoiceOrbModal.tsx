'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Mic, MicOff } from 'lucide-react';
import { setupVapiEventHandlers, startVapiCall, stopVapiCall } from '@/lib/vapi';

interface VoiceOrbModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVapiConnect?: () => void;
}

export function VoiceOrbModal({ isOpen, onClose, onVapiConnect }: VoiceOrbModalProps) {
  const [isListening, setIsListening] = useState(false);
  const [audioLevels, setAudioLevels] = useState<number[]>(Array(12).fill(0));
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Setup Vapi event handlers when modal opens
      setupVapiEventHandlers(
        () => {
          setIsConnected(true);
          setIsConnecting(false);
          setIsListening(true);
          setError(null);
        },
        () => {
          setIsConnected(false);
          setIsListening(false);
          setIsConnecting(false);
        },
        () => {
          // User started speaking
          setIsListening(true);
        },
        () => {
          // User stopped speaking
          // Keep listening state true as AI might respond
        },
        (error) => {
          setError(error.message || 'Connection failed');
          setIsConnecting(false);
          setIsConnected(false);
          setIsListening(false);
        }
      );
    }

    return () => {
      // Cleanup when modal closes
      if (isConnected) {
        stopVapiCall();
      }
    };
  }, [isOpen, isConnected]);

  useEffect(() => {
    if (isListening) {
      // Simulate audio level animation for visualization bars
      const interval = setInterval(() => {
        setAudioLevels(Array(12).fill(0).map(() => Math.random() * 100));
      }, 100);
      return () => clearInterval(interval);
    } else {
      setAudioLevels(Array(12).fill(0));
    }
  }, [isListening]);

  const toggleVapiCall = async () => {
    if (isConnected) {
      // Stop the call
      stopVapiCall();
      setIsConnected(false);
      setIsListening(false);
    } else {
      // Start the call
      setIsConnecting(true);
      setError(null);
      try {
        await startVapiCall();
        onVapiConnect?.();
      } catch (err: any) {
        setError(err.message || 'Failed to connect');
        setIsConnecting(false);
      }
    }
  };

  const handleClose = () => {
    if (isConnected) {
      stopVapiCall();
    }
    setIsConnected(false);
    setIsListening(false);
    setIsConnecting(false);
    setError(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      {/* Backdrop with blur */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-xl cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      />
      
      {/* White gradient overlays for depth */}
      <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-white/5 via-white/2 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-1/3 h-[50vh] bg-gradient-to-br from-white/3 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-1/3 h-[50vh] bg-gradient-to-bl from-white/3 to-transparent blur-3xl pointer-events-none" />

      {/* Modal content */}
      <div 
        className="relative z-[210] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute -top-16 right-0 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-[220] cursor-pointer"
          type="button"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Voice Orb */}
        <div className="relative flex items-center justify-center mb-12 mt-8">
          {/* Outer glow rings */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div 
              animate={{ 
                scale: isConnected ? [1, 1.2, 1] : [1, 1.05, 1],
                opacity: isConnected ? [0.6, 0.8, 0.6] : [0.3, 0.5, 0.3]
              }}
              transition={{ repeat: Infinity, duration: isConnected ? 2 : 4, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-[#ff6b35]/30 blur-[80px] scale-[2.5]" 
            />
          </div>

          {/* Audio visualization rings */}
          {isListening && (
            <>
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 rounded-full border border-[#ff6b35]/40 mix-blend-screen"
                  style={{
                    animation: `ping-slow ${2 + i * 0.5}s cubic-bezier(0, 0, 0.2, 1) infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </>
          )}

          {/* Main orb using Framer Motion */}
          <motion.button
            onClick={toggleVapiCall}
            disabled={isConnecting}
            type="button"
            animate={
              isConnected 
                ? { scale: [1.05, 1.1, 1.05], boxShadow: "0 0 80px 20px rgba(255,107,53,0.3)" } 
                : isConnecting 
                ? { scale: [1, 1.02, 1], opacity: [0.8, 1, 0.8] } 
                : { y: [-8, 8, -8] } // Smooth floating effect
            }
            transition={{
              repeat: Infinity,
              duration: isConnected ? 2 : isConnecting ? 1 : 4,
              ease: "easeInOut"
            }}
            whileHover={!isConnected && !isConnecting ? { scale: 1.05, boxShadow: "0 0 50px 15px rgba(255,107,53,0.2)" } : {}}
            whileTap={{ scale: 0.95 }}
            className={`relative w-64 h-64 md:w-72 md:h-72 rounded-full flex items-center justify-center cursor-pointer disabled:cursor-not-allowed group isolation-auto border border-white/20 ${
              isConnected
                ? 'bg-[radial-gradient(circle_at_30%_30%,#ff9d7d,#ff6b35_60%,#992d00)]' 
                : isConnecting
                ? 'bg-[radial-gradient(circle_at_50%_50%,#ff7d4d,#ff6b35_80%)]'
                : 'bg-[radial-gradient(circle_at_35%_25%,#ff7d4d,#ff6b35_60%,#802600)] shadow-[inset_0_-15px_30px_rgba(0,0,0,0.4),0_20px_40px_rgba(255,107,53,0.2)]'
            }`}
          >
            {/* Glassmorphism Inner Overlay & Specular Highlight */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/40 opacity-70 mix-blend-overlay pointer-events-none" />
            <div className="absolute top-[8%] left-[15%] w-[40%] h-[20%] rounded-[100%] bg-white/30 blur-md transform -rotate-12 pointer-events-none" />
            
            {/* Dynamic rotating rim light */}
            <div className="absolute inset-[-2px] rounded-full bg-[conic-gradient(from_0deg,transparent_0_280deg,rgba(255,255,255,0.8)_360deg)] animate-[spin_4s_linear_infinite] opacity-30 mix-blend-overlay pointer-events-none" />
            <div className="absolute inset-1 rounded-full border border-white/10 pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center gap-4">
              {isConnecting ? (
                <div className="flex flex-col items-center gap-4">
                  <div className="w-24 h-24 rounded-full bg-black/20 backdrop-blur-lg border border-white/30 flex items-center justify-center shadow-inner">
                    <div className="w-10 h-10 border-[3px] border-white/80 border-t-transparent rounded-full animate-spin" />
                  </div>
                  <span className="text-white text-sm font-semibold tracking-widest uppercase drop-shadow-md">Connecting...</span>
                </div>
              ) : isConnected ? (
                <div className="flex flex-col items-center gap-4">
                  <div className="w-24 h-24 rounded-full bg-black/30 backdrop-blur-lg flex items-center justify-center border border-white/40 shadow-[0_0_40px_rgba(255,255,255,0.3)] group-hover:bg-red-500/80 group-hover:border-red-400 group-hover:shadow-[0_0_40px_rgba(239,68,68,0.6)] transition-all duration-300">
                    <MicOff className="w-10 h-10 text-white" />
                  </div>
                  <span className="text-white text-sm font-semibold tracking-widest uppercase drop-shadow-md">Tap to end</span>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-5">
                  <div className="relative w-28 h-28 rounded-full bg-black/20 backdrop-blur-xl flex items-center justify-center border border-white/30 group-hover:bg-black/40 group-hover:border-[#ff6b35] transition-all duration-500 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
                    <Mic className="w-12 h-12 text-white group-hover:scale-110 group-hover:text-[#ff9d7d] transition-all duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
                    
                    {/* Inner glowing ring on hover */}
                    <div className="absolute inset-0 rounded-full border border-[#ff6b35]/0 group-hover:border-[#ff6b35] group-hover:scale-90 transition-all duration-500" />
                  </div>
                  <span className="text-white text-sm font-bold tracking-[0.2em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Start AI Call</span>
                </div>
              )}
            </div>
            
            {/* Sparkle particles inside orb when connected */}
            {isConnected && (
              <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={`sparkle-${i}`}
                    className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-0"
                    style={{
                      left: `${40 + Math.random() * 20}%`,
                      top: `${40 + Math.random() * 20}%`,
                      animation: `sparkle-float ${2 + Math.random() * 2}s ease-in-out infinite`,
                      animationDelay: `${Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>
            )}
          </motion.button>
        </div>

        {/* Audio visualization bars */}
        {isListening && (
          <div className="flex items-center justify-center gap-2 mb-6">
            {audioLevels.map((level, i) => (
              <div
                key={i}
                className="w-1.5 bg-gradient-to-t from-[#ff6b35] to-[#ff9d7d] rounded-full transition-all duration-100"
                style={{
                  height: `${20 + level * 0.6}px`,
                }}
              />
            ))}
          </div>
        )}

        {/* Status text */}
        <div className="text-center">
          {error ? (
            <div className="mb-4">
              <p className="text-red-400 text-lg font-semibold mb-2">Connection Error</p>
              <p className="text-red-300/80 text-sm max-w-md">{error}</p>
              <button
                onClick={() => setError(null)}
                className="mt-3 px-4 py-2 bg-[#ff6b35] hover:bg-[#ff7d4d] text-white text-sm rounded-lg transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : (
            <>
              <p className="text-white text-xl font-semibold mb-2">
                {isConnecting 
                  ? 'Connecting to AI agent...' 
                  : isConnected 
                  ? 'Connected to AI agent' 
                  : 'Start your AI conversation'}
              </p>
              <p className="text-white/60 text-sm max-w-md">
                {isConnecting
                  ? 'Please wait while we establish the connection'
                  : isConnected 
                  ? 'You can now speak naturally with our AI agent. Click the orb to end the call.' 
                  : 'Click the orb above to begin a voice conversation with our AI agent'}
              </p>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes sparkle-orbit {
          0%, 100% {
            opacity: 0;
            transform: rotate(var(--rotation)) translateY(-160px) scale(0);
          }
          50% {
            opacity: 1;
            transform: rotate(var(--rotation)) translateY(-180px) scale(1.5);
          }
        }

        @keyframes ping-slow {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        :global(.animate-sparkle-orbit) {
          animation: sparkle-orbit 3s ease-in-out infinite;
        }

        :global(.animate-pulse-slow) {
          animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}
