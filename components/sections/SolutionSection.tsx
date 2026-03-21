'use client';

import { ArrowRight, Search, CalendarDays, Target } from 'lucide-react';
import Link from 'next/link';
import { FloatingCard } from '@/components/ui/FloatingCard';

const BENEFITS = [
  {
    icon: Search,
    title: "Blog & SEO Management AI",
    description: "AI analyzes trends and news in your niche, creates SEO-optimized blogs with meta tags and images. Email approval before publishing."
  },
  {
    icon: CalendarDays,
    title: "Content Calendar & Campaign AI",
    description: "Advanced reasoning AI analyzes niche trends, creates strategic content calendars and campaign scripts for your team."
  },
  {
    icon: Target,
    title: "Multi-Channel Outbound Campaigns",
    description: "Run automated outbound campaigns through calling, WhatsApp, and other channels with AI-driven targeting and tracking."
  }
];

const ROLES = [
  "Social Media Manager",
  "Content Creator", 
  "SEO Specialist",
  "Marketing Automation Expert",
  "Analytics & Strategy Consultant"
];

export default function SolutionSection() {
  return (
    <section 
      id="solution"
      className="relative min-h-screen flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: 'url(/starfield-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Minimal dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 opacity-[0.01]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        backgroundSize: '150px 150px'
      }} />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-[#ff6b35] uppercase tracking-wider mb-4">
            ADVANCED FEATURES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Analytics, Intelligence & Automation
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            AI-powered insights, competitor analysis, and strategic recommendations delivered weekly.
          </p>
          <Link 
            href="/services"
            className="bg-[#ff6b35] hover:bg-[#ff7d4d] text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-soft-lg hover:shadow-float inline-flex items-center gap-2"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Roles Ticker */}
        <div className="mb-16 overflow-hidden">
          <div className="text-center mb-4">
            <span className="text-sm text-gray-500 uppercase tracking-wider">AI Replaces:</span>
          </div>
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[...ROLES, ...ROLES].map((role, i) => (
              <span
                key={i}
                className="inline-block px-6 py-2 bg-white/5 border border-white/10 rounded-full text-white/80 text-sm"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <FloatingCard
                key={index}
                intensity="medium"
                className="p-8 hover:border-[#ff6b35]/50"
              >
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-[1.25rem] bg-[#1a1a1a] border border-neutral-700/50 group-hover:border-[#ff6b35]/50 transition-all duration-500 shadow-xl group-hover:shadow-[0_0_30px_-5px_rgba(255,107,53,0.3)] group-hover:-translate-y-1 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/20 to-transparent opacity-0 group-hover:opacity-100 rounded-[1.25rem] transition-opacity duration-500" />
                  <Icon className="w-8 h-8 text-gray-400 group-hover:text-[#ff6b35] transition-all duration-500 relative z-10" strokeWidth={1.5} />
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-gray-600/50 group-hover:bg-[#ff6b35] transition-colors duration-500 shadow-[0_0_10px_rgba(255,107,53,0)] group-hover:shadow-[0_0_10px_rgba(255,107,53,0.8)]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </FloatingCard>
            );
          })}
        </div>

        {/* Testimonial */}
        <FloatingCard intensity="medium" className="hidden border-[#ff6b35]/20 bg-gradient-to-br from-[#ff6b35]/10 to-transparent p-8 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#ff9d7d] flex-shrink-0" />
            <div>
              <p className="text-white text-lg mb-4 italic">
                "The AI analyzes our competitors every week and provides strategic insights. Our social media engagement increased 300% in the first month. The content calendar AI saves us 20+ hours weekly."
              </p>
              <div className="text-sm">
                <div className="text-white font-semibold">Sarah Chen</div>
                <div className="text-gray-400">VP of Operations, TechCorp</div>
              </div>
            </div>
          </div>
        </FloatingCard>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
