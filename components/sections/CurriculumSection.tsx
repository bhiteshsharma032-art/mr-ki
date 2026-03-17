'use client';

import { useState } from 'react';
import { Plus, Minus, Check, ArrowRight, Clock, Award, Users, Infinity } from 'lucide-react';

const CURRICULUM_ITEMS = [
  {
    week: "Phase 01",
    title: "Discovery & Strategy",
    lessons: [
      "Complete business process audit and automation opportunities analysis",
      "Custom AI strategy development tailored to your specific needs",
      "ROI projections and implementation timeline planning",
      "Technology stack selection and integration planning",
      "Detailed project roadmap with milestones and deliverables"
    ]
  },
  {
    week: "Phase 02", 
    title: "AI System Development",
    lessons: [
      "Custom AI agent development for your specific use cases",
      "Advanced prompt engineering and model fine-tuning",
      "Integration with your existing CRM, email, and business systems",
      "Quality assurance testing and performance optimization",
      "Security implementation and data protection protocols"
    ]
  },
  {
    week: "Phase 03",
    title: "Deployment & Integration", 
    lessons: [
      "Seamless deployment to your business infrastructure",
      "Staff training and change management support",
      "Live testing with real business scenarios",
      "Performance monitoring and initial optimizations",
      "Documentation and handover procedures"
    ]
  },
  {
    week: "Phase 04",
    title: "Optimization & Support",
    lessons: [
      "Ongoing performance monitoring and analytics",
      "Continuous optimization based on usage data",
      "24/7 technical support and maintenance",
      "Regular updates and feature enhancements",
      "Scaling strategies for business growth"
    ]
  }
];

const COURSE_FEATURES = [
  { icon: Users, text: "Done-For-You Service" },
  { icon: Award, text: "30-Day Guarantee" },
  { icon: Clock, text: "2-4 Week Delivery" },
  { icon: Infinity, text: "Ongoing Support" }
];

const COURSE_BENEFITS = [
  "Complete AI automation system built for your business",
  "Full deployment and integration with your existing tools", 
  "Staff training and change management support",
  "24/7 ongoing maintenance and optimization"
];

const CURRICULUM_PARTNERS = [
  { name: "OpenAI", logo: "/api/placeholder/120/40" },
  { name: "Anthropic", logo: "/api/placeholder/120/40" },
  { name: "Google AI", logo: "/api/placeholder/120/40" },
  { name: "Arena AI", logo: "/api/placeholder/120/40" },
  { name: "Meta AI", logo: "/api/placeholder/120/40" },
  { name: "n8n", logo: "/api/placeholder/120/40" },
  { name: "Slack", logo: "/api/placeholder/120/40" },
  { name: "Notion", logo: "/api/placeholder/120/40" }
];

export default function CurriculumSection() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  return (
    <section 
      className="relative min-h-screen py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: 'url(/starfield-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Top subtle gradient - blends from previous section */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-white/8 via-white/4 to-transparent" />
      {/* Dark overlay with gradient blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/80" />
      {/* Bottom subtle gradient - continues the theme */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white/8 via-white/4 to-transparent" />
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
        backgroundSize: '100px 100px'
      }} />

      {/* Background gradient */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="w-[800px] h-[800px] bg-[#ff6b35]/20 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-[#ff6b35] uppercase tracking-wider mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Complete AI Automation<br />
            <span className="text-[#ff6b35]">Solutions for Your Business</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left side - Expandable curriculum items */}
          <div className="space-y-4">
            {CURRICULUM_ITEMS.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm"
              >
                <button
                  onClick={() => setExpandedItem(expandedItem === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-all duration-200"
                >
                  <div>
                    <div className="text-sm text-white/60 mb-1">{item.week}</div>
                    <div className="text-lg font-semibold text-white">{item.title}</div>
                  </div>
                  <div className="text-white/60">
                    {expandedItem === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>
                
                {expandedItem === index && (
                  <div className="px-6 pb-6 border-t border-white/10">
                    <ul className="space-y-3 mt-4">
                      {item.lessons.map((lesson, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-[#ff6b35] flex-shrink-0 mt-0.5" />
                          <span className="text-white/80 text-sm">{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side - Course info card */}
          <div className="lg:sticky lg:top-32">
            <div className="bg-[#0f0f0f]/90 border border-white/20 rounded-3xl p-8 backdrop-blur-sm">
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-2 bg-[#ff6b35] text-white text-sm font-semibold rounded-full mb-4">
                  30 day money back guarantee
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Get Your AI Automation System</h3>
              </div>

              {/* Features grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {COURSE_FEATURES.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <IconComponent className="w-5 h-5 text-[#ff6b35]" />
                      <span className="text-sm font-medium text-[#ff6b35]">
                        {feature.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-white/10 pt-6 mb-6">
                <div className="text-sm text-white/60 mb-4 uppercase tracking-wide">
                  WHAT'S INCLUDED IN YOUR SERVICE
                </div>
                <ul className="space-y-3">
                  {COURSE_BENEFITS.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#ff6b35] flex-shrink-0 mt-0.5" />
                      <span className="text-white text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-[#ff6b35] hover:bg-[#ff7d4d] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Technology Partners Section */}
        <div className="text-center mb-12">
          <div className="text-sm text-white/60 mb-8 uppercase tracking-wide">
            Technology partners
          </div>
        </div>

        {/* Marquee Area */}
        <div className="relative flex flex-col gap-8 group mb-20">
          {/* Row 1: Left scrolling */}
          <div className="flex w-max animate-[marquee-left_40s_linear_infinite] group-hover:[animation-play-state:paused]">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-12 px-6 items-center justify-center min-w-max">
                {CURRICULUM_PARTNERS.slice(0, 4).map((partner, j) => (
                  <div 
                    key={`${i}-${j}`} 
                    className="relative font-semibold text-xl text-white/50 hover:text-white transition-all duration-300 hover:scale-110 cursor-default px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20"
                  >
                    <span className="relative z-10">{partner.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Row 2: Right scrolling */}
          <div className="flex w-max animate-[marquee-right_40s_linear_infinite] group-hover:[animation-play-state:paused]">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-12 px-6 items-center justify-center min-w-max">
                {CURRICULUM_PARTNERS.slice(4, 8).map((partner, j) => (
                  <div 
                    key={`${i}-${j}`} 
                    className="relative font-semibold text-xl text-white/50 hover:text-white transition-all duration-300 hover:scale-110 cursor-default px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20"
                  >
                    <span className="relative z-10">{partner.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}