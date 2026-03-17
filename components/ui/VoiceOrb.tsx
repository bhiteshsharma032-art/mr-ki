'use client';

import { useState, useEffect } from 'react';
import { Mic, MicOff } from 'lucide-react';

interface VoiceOrbProps {
  onVapiConnect?: () => void;
}

export function VoiceOrb({ onVapiConnect }: VoiceOrbProps) {
  const [isListening, setIsListening] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);

  useEffect(() => {
    if (isListening) {
      // Simulate audio level animation
      const interval = setInterval(() => {
        setAudioLevel(Math.random() * 100);
      }, 100);
      return () => clearInterval(interval);
    } else {
      setAudioLevel(0);
    }
  }, [isListening]);

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening && onVapiConnect) {
      onVapiConnect();
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Voice Orb */}
      <button
        onClick={toggleListening}
        className="relative group"
      >
        {/* Outer glow rings */}
        <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
          isListening ? 'animate-pulse' : ''
        }`}>
          <div className="absolute inset-0 rounded-full bg-[#ff6b35]/20 blur-2xl scale-150" />
          <div className="absolute inset-0 rounded-full bg-[#ff6b35]/30 blur-xl scale-125" />
        </div>

        {/* Audio level rings */}
        {isListening && (
          <>
            <div 
              className="absolute inset-0 rounded-full border-2 border-[#ff6b35]/40 animate-ping"
              style={{ animationDuration: '2s' }}
            />
            <div 
              className="absolute inset-0 rounded-full border border-[#ff6b35]/30"
              style={{ 
                transform: `scale(${1 + audioLevel / 100})`,
                transition: 'transform 0.1s ease-out'
              }}
            />
          </>
        )}

        {/* Main orb */}
        <div className={`relative w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 ${
          isListening 
            ? 'bg-gradient-to-br from-[#ff6b35] to-[#ff9d7d] scale-110' 
            : 'bg-gradient-to-br from-[#ff6b35]/80 to-[#ff9d7d]/80 group-hover:scale-105'
        }`}>
          {/* Inner glow */}
          <div className="absolute inset-2 rounded-full bg-white/10 blur-md" />
          
          {/* Icon */}
          <div className="relative z-10">
            {isListening ? (
              <MicOff className="w-12 h-12 text-white" />
            ) : (
              <Mic className="w-12 h-12 text-white" />
            )}
          </div>

          {/* Pulse effect when listening */}
          {isListening && (
            <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse" />
          )}
        </div>

        {/* Sparkle particles */}
        {isListening && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-sparkle"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `rotate(${i * 45}deg) translateY(-80px)`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        )}
      </button>

      {/* Status text */}
      <div className="text-center">
        <p className="text-white text-lg font-medium mb-1">
          {isListening ? 'Listening...' : 'Click to speak'}
        </p>
        <p className="text-white/60 text-sm">
          {isListening ? 'AI is ready to help' : 'Have a conversation with our AI agent'}
        </p>
      </div>

      <style jsx>{`
        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: rotate(var(--rotation)) translateY(-80px) scale(0);
          }
          50% {
            opacity: 1;
            transform: rotate(var(--rotation)) translateY(-100px) scale(1);
          }
        }

        :global(.animate-sparkle) {
          animation: sparkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
