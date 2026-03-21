'use client';

import { ArrowRight, UserPlus, Shield, Clock, Award, Infinity } from 'lucide-react';
import { FloatingCard } from '@/components/ui/FloatingCard';

const FEATURES = [
  { icon: UserPlus, text: "Beginner Friendly", subtext: "No coding required" },
  { icon: Clock, text: "4 Weeks", subtext: "Self-paced learning" },
  { icon: Award, text: "Certificate", subtext: "Upon completion" },
  { icon: Infinity, text: "Lifetime Access", subtext: "All future updates" }
];

const INCLUDED = [
  "24 video lessons (6+ hours of content)",
  "50+ automation templates ready to use",
  "Private community access",
  "Weekly live Q&A sessions",
  "1-on-1 implementation review",
  "Automation toolkit & resources",
  "Money-back guarantee (30 days)"
];

export default function OfferSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        {/* Guarantee Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-full shadow-soft-md">
            <Shield className="w-5 h-5 text-green-500" />
            <span className="text-green-500 font-semibold text-sm">
              30-Day Money-Back Guarantee
            </span>
          </div>
        </div>

        {/* Main Content */}
        <FloatingCard intensity="strong" className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join the Automation Revolution Today
            </h2>
            <p className="text-gray-400 text-lg">
              Everything you need to automate your business and scale without limits
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1a1a1a] border border-neutral-700/50 hover:border-[#ff6b35]/50 transition-all duration-500 shadow-lg hover:shadow-[0_0_20px_-5px_rgba(255,107,53,0.3)] hover:-translate-y-1 mx-auto mb-4 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                    <Icon className="w-6 h-6 text-gray-400 group-hover:text-[#ff6b35] transition-all duration-500 relative z-10" strokeWidth={1.5} />
                    <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-gray-600/50 group-hover:bg-[#ff6b35] transition-colors duration-500 shadow-[0_0_10px_rgba(255,107,53,0)] group-hover:shadow-[0_0_10px_rgba(255,107,53,0.8)]" />
                  </div>
                  <div className="text-white font-semibold text-sm mb-1">
                    {feature.text}
                  </div>
                  <div className="text-gray-500 text-xs">
                    {feature.subtext}
                  </div>
                </div>
              );
            })}
          </div>

          {/* What's Included */}
          <div className="bg-[#0a0a0a]/50 border border-white/5 rounded-3xl p-8 mb-8 shadow-soft-md">
            <h3 className="text-xl font-bold text-white mb-6">
              What's Included:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {INCLUDED.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ff6b35]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#ff6b35]" />
                  </div>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button className="bg-[#ff6b35] hover:bg-[#ff7d4d] text-white font-bold px-12 py-5 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-soft-lg hover:shadow-float inline-flex items-center gap-3">
              Get Started Today
              <ArrowRight className="w-6 h-6" />
            </button>
            <p className="text-gray-500 text-sm mt-4">
              One-time payment • Instant access • No subscription
            </p>
          </div>
        </FloatingCard>
      </div>
    </section>
  );
}
