'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const trustBadges = [
  { icon: '🔒', text: 'SOC 2 Compliant' },
  { icon: '⚡', text: 'Results in 4 Weeks' },
  { icon: '💰', text: 'Money-Back Guarantee' },
  { icon: '🏆', text: '50+ Happy Clients' }
];

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsMounted(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: 'url(/starfield-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Light overlay to show starfield background - same as other sections */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
        backgroundSize: '100px 100px'
      }} />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/20 via-[#ff6b35]/10 to-transparent" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {isMounted && [...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#ff6b35]/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        {/* Headline with gradient text */}
        <h2 
          className={`font-display font-bold text-white mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
        >
          Ready to{' '}
          <span className="bg-gradient-to-r from-[#ff6b35] via-[#ff7d4d] to-[#ff9d7d] bg-clip-text text-transparent animate-gradient-x">
            Automate
          </span>{' '}
          Your Growth?
        </h2>

        {/* Subtitle */}
        <p 
          className={`text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Book a free 30-minute discovery call. We&apos;ll audit your processes, identify quick wins, 
          and show you exactly how much time and money you can save.
        </p>

        {/* CTA Button */}
        <div 
          className={`mb-4 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <button className="group relative bg-[#ff6b35] hover:bg-[#ff7d4d] text-white font-semibold py-5 px-10 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-soft-lg hover:shadow-float overflow-hidden">
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <span className="relative flex items-center gap-2">
              Book Your Free Discovery Call
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>

            {/* Pulse glow */}
            <div className="absolute inset-0 rounded-full animate-pulse-glow" />
          </button>
        </div>

        {/* Subtext */}
        <p 
          className={`text-sm text-gray-400 mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          No commitment required • Free process audit included
        </p>

        {/* Trust badges */}
        <div 
          className={`flex flex-wrap justify-center gap-6 md:gap-8 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-gray-400 text-sm transition-all duration-300"
              style={{
                transitionDelay: `${700 + index * 100}ms`
              }}
            >
              <span className="text-lg">{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: 0% 50%;
          }
          50% {
            background-size: 200% 200%;
            background-position: 100% 50%;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(232, 85, 61, 0.7);
          }
          50% {
            box-shadow: 0 0 20px 10px rgba(232, 85, 61, 0);
          }
        }

        :global(.animate-float) {
          animation: float linear infinite;
        }

        :global(.animate-gradient-x) {
          animation: gradient-x 3s ease infinite;
        }

        :global(.animate-pulse-glow) {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
