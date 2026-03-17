'use client';

import { ArrowRight, Send, AudioWaveform, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { VoiceOrbModal } from '@/components/ui/VoiceOrbModal';

export function HeroSection() {
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);
  
  return (
    <section 
      className="relative min-h-[150vh] w-full flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 overflow-hidden pt-32 pb-16"
      style={{
        backgroundImage: 'url(/starfield-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Darker overlay to match reference */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* White gradient overlays for depth */}
      <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-white/5 via-white/2 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-1/3 h-[50vh] bg-gradient-to-br from-white/3 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-1/3 h-[50vh] bg-gradient-to-bl from-white/3 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-1/2 h-[40vh] bg-gradient-to-t from-white/2 to-transparent blur-2xl pointer-events-none" />
      
      {/* Smooth bottom gradient for seamless blending into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-b from-transparent via-black/20 via-black/40 via-black/60 to-black/80 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.01]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        backgroundSize: '150px 150px'
      }} />

      {/* Floating sparkles and motion elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* White sparkles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`
            }}
          />
        ))}
        
        {/* Orange accent particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`orange-${i}`}
            className="absolute w-0.5 h-0.5 bg-[#ff6b35] rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 15}s`
            }}
          />
        ))}

        {/* Subtle moving dots */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute w-px h-px bg-white/30 rounded-full animate-drift opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${20 + Math.random() * 15}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-[1.15] tracking-tight px-4 animate-text-pop-up-top tracking-in-expand">
          Custom <span className="text-[#ff6b35]">AI Agents</span> & Automation<br />
          That Solve Real Problems — With<br />
          Full Ownership and Control
        </h1>

        {/* Interactive Chat Interface */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-[#0f0f0f]/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-start gap-3 mb-5">
              <Sparkles className="w-5 h-5 text-[#ff6b35] flex-shrink-0 mt-1" />
              <p className="text-white/85 text-left text-base leading-relaxed">
                Complete AI automation for emails, calls, social media, content, websites, and SEO. 
                Built, trained, and optimized for your business.
              </p>
            </div>
            
            {/* Chat Input with Arrow */}
            <div className="relative pt-5 border-t border-white/10">
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsVoiceModalOpen(true)}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all flex-shrink-0"
                >
                  <AudioWaveform className="w-4 h-4" />
                </button>
                <input
                  type="text"
                  placeholder="Have a conversation with our AI agent..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#ff6b35]/50 transition-all"
                  onFocus={(e) => {
                    e.currentTarget.blur();
                    window.location.href = '/command-center';
                  }}
                />
                <button 
                  onClick={() => window.location.href = '/command-center'}
                  className="bg-[#ff6b35] hover:bg-[#ff7d4d] text-white p-2.5 rounded-xl transition-all flex-shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* YouTube Video */}
        <div className="relative max-w-7xl mx-auto mb-12">
          <div className="relative rounded-3xl overflow-hidden border border-white/20 bg-[#0f0f0f]/60 backdrop-blur-sm shadow-2xl">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/pOvV35FxdEo?si=dRtWRnlCwh21PSj7"
                title="YouTube video player"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Call to Action Text */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <p className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed">
            Join <span className="text-[#ff6b35] font-semibold">500+ businesses</span> using our AI automation ecosystem to scale operations and boost revenue
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => window.location.href = '/services'}
              className="bg-[#ff6b35] hover:bg-[#ff7d4d] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <p className="text-white/60 text-sm mt-4">
            ✓ No sales pressure  ✓ Quick 15-min chat  ✓ Custom solution roadmap
          </p>
        </div>
      </div>

      {/* Voice Orb Modal - Outside content for proper z-index */}
      <VoiceOrbModal 
        isOpen={isVoiceModalOpen}
        onClose={() => setIsVoiceModalOpen(false)}
        onVapiConnect={() => console.log('Connecting to Vapi.ai...')}
      />

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.4;
            transform: translateY(0) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translateY(-3px) scale(1.1);
          }
        }

        @keyframes text-pop-up-top {
          0% {
            transform: translateY(0);
            transform-origin: 50% 50%;
            text-shadow: none;
          }
          100% {
            transform: translateY(-50px);
            transform-origin: 50% 50%;
            text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
          }
        }

        @keyframes tracking-in-expand {
          0% {
            letter-spacing: -0.5em;
            opacity: 0;
          }
          40% {
            opacity: 0.6;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-5px) translateX(2px);
            opacity: 0.5;
          }
        }

        @keyframes drift {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-3px) translateX(1px);
            opacity: 0.4;
          }
        }

        :global(.animate-text-pop-up-top) {
          animation: text-pop-up-top 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }

        :global(.tracking-in-expand) {
          animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
        }

        :global(.animate-twinkle) {
          animation: twinkle linear infinite;
        }

        :global(.animate-float) {
          animation: float linear infinite;
        }

        :global(.animate-drift) {
          animation: drift linear infinite;
        }
      `}</style>
    </section>
  );
}