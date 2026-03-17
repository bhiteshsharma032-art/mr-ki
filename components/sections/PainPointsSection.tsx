'use client';

import { Clock, DollarSign, Users, TrendingDown, AlertCircle, Zap } from 'lucide-react';
import { FloatingCard } from '@/components/ui/FloatingCard';

const PAIN_POINTS = [
  {
    icon: Clock,
    title: "Email Automation & Management",
    description: "AI handles all your email communications - automated responses, follow-ups, and customer engagement across all channels."
  },
  {
    icon: DollarSign,
    title: "AI Calling Agents (Inbound & Outbound)",
    description: "Intelligent voice AI for customer support, sales calls, and follow-ups. Natural conversations that convert."
  },
  {
    icon: Users,
    title: "Complete Social Media Automation",
    description: "AI manages comments, DMs, and customer interactions across all platforms. Stores data and provides weekly reports."
  },
  {
    icon: TrendingDown,
    title: "Content Creation & Marketing",
    description: "AI analyzes your brand, niche, and target location to create educational posts, marketing content, and ad creatives."
  },
  {
    icon: AlertCircle,
    title: "UGC & Commercial Video Production",
    description: "AI-generated UGC content, commercial ads, and 3D product renders for launches and campaigns."
  },
  {
    icon: Zap,
    title: "Web Development with AI Integration",
    description: "Modern, advanced UI websites with integrated AI agents for enhanced user experience and automation."
  }
];

export default function PainPointsSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: 'url(/starfield-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Professional dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/60" />
      {/* Enhanced top gradient for smooth blending with hero section */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-black/80 via-black/40 via-black/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
        backgroundSize: '100px 100px'
      }} />

      {/* Floating sparkles and motion elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* White sparkles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s linear infinite`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Orange accent particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`orange-${i}`}
            className="absolute w-0.5 h-0.5 bg-[#ff6b35] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 12}s linear infinite`,
              animationDelay: `${Math.random() * 6}s`
            }}
          />
        ))}

        {/* Subtle moving dots */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute w-px h-px bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `drift ${15 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(90deg);
          }
          50% {
            transform: translateY(-10px) translateX(-15px) rotate(180deg);
          }
          75% {
            transform: translateY(-25px) translateX(5px) rotate(270deg);
          }
        }

        @keyframes drift {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }
      `}</style>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-[#ff6b35] uppercase tracking-wider mb-4">
            OUR SERVICES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Complete AI Automation Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From email to social media, content creation to analytics - we build, train, and deploy everything.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PAIN_POINTS.map((point, index) => {
            const Icon = point.icon;
            return (
              <FloatingCard
                key={index}
                intensity="light"
                className="p-6 hover:border-[#ff6b35]/50 group"
              >
                <div className="w-12 h-12 rounded-3xl bg-[#ff6b35]/10 flex items-center justify-center mb-4 group-hover:bg-[#ff6b35]/20 transition-all duration-300 group-hover:scale-110 shadow-soft-sm">
                  <Icon className="w-6 h-6 text-[#ff6b35]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {point.description}
                </p>
              </FloatingCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
