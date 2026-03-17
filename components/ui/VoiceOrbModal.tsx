'use client';

import { useState, useEffect } from 'react';
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
      } catch (err: Error) {
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
        <div className="relative flex items-center justify-center mb-8">
          {/* Outer glow rings */}
          <div className={`absolute inset-0 transition-all duration-500 ${
            isListening ? 'animate-pulse-slow' : ''
          }`}>
            <div className="absolute inset-0 rounded-full bg-[#ff6b35]/30 blur-3xl scale-[2.5]" />
            <div className="absolute inset-0 rounded-full bg-[#ff6b35]/40 blur-2xl scale-[2]" />
          </div>

          {/* Audio visualization rings */}
          {isListening && (
            <>
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 rounded-full border-2 border-[#ff6b35]/30"
                  style={{
                    animation: `ping-slow ${2 + i * 0.5}s cubic-bezier(0, 0, 0.2, 1) infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </>
          )}

          {/* Main orb */}
          <button
            onClick={toggleVapiCall}
            disabled={isConnecting}
            type="button"
            className={`relative w-64 h-64 rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer disabled:cursor-not-allowed ${
              isConnected
                ? 'bg-gradient-to-br from-[#ff6b35] via-[#ff7d4d] to-[#ff9d7d] scale-110 shadow-2xl shadow-[#ff6b35]/50' 
                : isConnecting
                ? 'bg-gradient-to-br from-[#ff6b35]/70 to-[#ff9d7d]/70 animate-pulse'
                : 'bg-gradient-to-br from-[#ff6b35]/90 to-[#ff9d7d]/90 hover:scale-105 shadow-xl'
            }`}
          >
            {/* Inner glow */}
            <div className="absolute inset-4 rounded-full bg-white/10 blur-xl" />
            
            {/* Icon */}
            <div className="relative z-10">
              {isConnecting ? (
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center animate-spin">
                    <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full" />
                  </div>
                  <span className="text-white text-sm font-medium">Connecting...</span>
                </div>
              ) : isConnected ? (
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                    <MicOff className="w-10 h-10 text-white" />
                  </div>
                  <span className="text-white text-sm font-medium">Connected - Click to end</span>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <Mic className="w-16 h-16 text-white" />
                  <span className="text-white text-sm font-medium">Click to start AI call</span>
                </div>
              )}
            </div>

            {/* Pulse effect when listening */}
            {isListening && (
              <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse-slow" />
            )}
          </button>

          {/* Sparkle particles */}
          {isListening && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full animate-sparkle-orbit"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `rotate(${i * 30}deg) translateY(-160px)`,
                    animationDelay: `${i * 0.15}s`,
                  }}
                />
              ))}
            </div>
          )}
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
