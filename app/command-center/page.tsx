'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { Send, ArrowLeft, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { VoiceOrbModal } from '@/components/ui/VoiceOrbModal';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function CommandCenter() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showVoiceOrb, setShowVoiceOrb] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Generate stable sparkle positions
  const sparkles = useMemo(() => {
    return {
      white: Array(20).fill(0).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 8 + Math.random() * 8
      })),
      orange: Array(10).fill(0).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 10 + Math.random() * 12
      }))
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('https://n8n.srv967587.hstgr.cloud/webhook/c4c6a588-36f1-4c97-a405-272747948943', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: inputMessage,
          timestamp: new Date().toISOString()
        }),
      });

      const data = await response.json();
      console.log('Webhook response:', data); // Debug log
      
      // Handle different response structures from n8n
      let responseContent = 'I received your message!';
      
      if (typeof data === 'string') {
        responseContent = data;
      } else if (data.response) {
        responseContent = data.response;
      } else if (data.message) {
        responseContent = data.message;
      } else if (data.output) {
        responseContent = data.output;
      } else if (data.reply) {
        responseContent = data.reply;
      } else if (data.text) {
        responseContent = data.text;
      } else if (Array.isArray(data) && data.length > 0) {
        // If n8n returns an array, get the first item
        const firstItem = data[0];
        responseContent = firstItem.response || firstItem.message || firstItem.output || firstItem.reply || firstItem.text || JSON.stringify(firstItem);
      } else {
        // If none of the expected fields exist, stringify the whole response
        responseContent = JSON.stringify(data);
      }
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: responseContent,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVapiConnect = () => {
    console.log('Connecting to Vapi.ai...');
    // Add your Vapi.ai integration here
  };

  return (
    <div 
      className="min-h-screen w-full relative overflow-hidden"
      style={{
        backgroundImage: 'url(/starfield-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* White gradient overlays for depth */}
      <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-white/5 via-white/2 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-1/3 h-[50vh] bg-gradient-to-br from-white/3 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-1/3 h-[50vh] bg-gradient-to-bl from-white/3 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-1/2 h-[40vh] bg-gradient-to-t from-white/2 to-transparent blur-2xl pointer-events-none" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {sparkles.white.map((sparkle, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full animate-gentle-float opacity-50"
            style={{
              left: `${sparkle.left}%`,
              top: `${sparkle.top}%`,
              animationDelay: `${sparkle.delay}s`,
              animationDuration: `${sparkle.duration}s`
            }}
          />
        ))}
        
        {sparkles.orange.map((sparkle, i) => (
          <div
            key={`orange-${i}`}
            className="absolute w-0.5 h-0.5 bg-[#ff6b35] rounded-full animate-gentle-float opacity-30"
            style={{
              left: `${sparkle.left}%`,
              top: `${sparkle.top}%`,
              animationDelay: `${sparkle.delay}s`,
              animationDuration: `${sparkle.duration}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col p-4">
        {/* Top controls */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back</span>
          </button>

          <button
            onClick={() => setShowVoiceOrb(!showVoiceOrb)}
            className="px-4 py-2 rounded-full bg-[#ff6b35] hover:bg-[#ff7d4d] text-white font-medium transition-all text-sm"
          >
            Voice Mode
          </button>
        </div>

        {/* Voice Orb Modal */}
        <VoiceOrbModal 
          isOpen={showVoiceOrb}
          onClose={() => setShowVoiceOrb(false)}
          onVapiConnect={handleVapiConnect}
        />

        {/* Chat area */}
        <div className="flex-1 overflow-hidden flex items-center justify-center pt-20">
          <div className="w-full max-w-5xl h-full max-h-[calc(100vh-120px)] flex flex-col">
            {/* Chat Mode */}
            <>
              {/* Messages */}
                <div className="flex-1 overflow-y-auto mb-6 space-y-4 px-4">
                  {messages.length === 0 ? (
                    <div className="h-full flex items-center justify-center">
                      <div className="text-center">
                        <Sparkles className="w-16 h-16 text-[#ff6b35] mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-white mb-2">
                          Welcome to Command Center
                        </h2>
                        <p className="text-white/60">
                          Start a conversation with our AI agent
                        </p>
                      </div>
                    </div>
                  ) : (
                    messages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[70%] rounded-2xl px-6 py-4 ${
                            msg.role === 'user'
                              ? 'bg-gradient-to-br from-[#ff6b35] to-[#ff7d4d] text-white'
                              : 'bg-[#0f0f0f]/90 border border-white/10 text-white backdrop-blur-sm'
                          }`}
                        >
                          <p className="text-base leading-relaxed">{msg.content}</p>
                          <p className="text-xs mt-2 opacity-60">
                            {msg.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-[#0f0f0f]/90 border border-white/10 rounded-2xl px-6 py-4 backdrop-blur-sm">
                        <div className="flex gap-2">
                          <div className="w-2 h-2 bg-[#ff6b35] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <div className="w-2 h-2 bg-[#ff6b35] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="w-2 h-2 bg-[#ff6b35] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input area */}
                <div className="bg-[#0f0f0f]/90 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="flex items-end gap-3">
                    <textarea
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                      placeholder="Type your message here..."
                      rows={1}
                      className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#ff6b35]/50 transition-all resize-none"
                      disabled={isLoading}
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={isLoading || !inputMessage.trim()}
                      className="bg-[#ff6b35] hover:bg-[#ff7d4d] text-white p-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-white/40 text-xs mt-2 px-1">
                    Press Enter to send, Shift + Enter for new line
                  </p>
                </div>
              </>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gentle-float {
          0% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-10px) translateX(5px);
          }
          66% {
            transform: translateY(-5px) translateX(-5px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }

        :global(.animate-gentle-float) {
          animation: gentle-float 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
