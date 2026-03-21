'use client';

import { Mail, Phone, MessageCircle, TrendingUp, Globe, FileText, Video, BarChart3, Users, Zap, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const SERVICES = [
  {
    icon: Mail,
    title: "Email Automation",
    description: "AI-powered email management system that handles customer inquiries, automates responses, and maintains engagement across all email channels."
  },
  {
    icon: Phone,
    title: "AI Calling Agents",
    description: "Intelligent voice AI agents for inbound and outbound calls, handling customer service, sales, and support with natural conversations."
  },
  {
    icon: MessageCircle,
    title: "Social Media Management",
    description: "Complete AI-driven social media automation across all platforms - managing comments, DMs, and customer interactions 24/7."
  },
  {
    icon: TrendingUp,
    title: "Content Marketing AI",
    description: "AI analyzes your brand, niche, and target location to create strategic content that resonates with your audience."
  },
  {
    icon: Video,
    title: "Creative Content Production",
    description: "AI-generated UGC content, commercial ads, and 3D product renders for product launches and marketing campaigns."
  },
  {
    icon: Globe,
    title: "AI-Powered Web Development",
    description: "Modern, advanced UI websites integrated with AI agents for enhanced user experience and automated customer interactions."
  },
  {
    icon: FileText,
    title: "Blog & SEO Management",
    description: "AI agent that analyzes trends, creates SEO-optimized blog content with meta tags and images, and manages publishing."
  },
  {
    icon: Brain,
    title: "Content Calendar AI",
    description: "Advanced reasoning AI that analyzes niche trends and creates strategic content calendars with scripts for your team."
  },
  {
    icon: Zap,
    title: "Outbound Campaign Automation",
    description: "Run multi-channel outbound campaigns through calling, WhatsApp, and other platforms with AI-driven targeting."
  },
  {
    icon: BarChart3,
    title: "Analytics & Competitor Intelligence",
    description: "Comprehensive AI analysis of your social media performance, competitor strategies, and weekly insights with recommendations."
  }
];

export default function PainPointsSection() {
  return (
    <section 
      id="services-section"
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
        <div className="text-center mb-16 mt-20 md:mt-0">
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

        {/* Services List */}
        <div className="flex flex-col gap-6 lg:gap-8 relative z-20 max-w-4xl mx-auto">
          {SERVICES.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: (index % 10) * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                key={index} 
                className="group relative bg-[#111111]/80 backdrop-blur-3xl rounded-[2rem] p-6 lg:p-8 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(255,107,53,0.15)] hover:bg-[#151515] border border-neutral-800/60 hover:border-[#ff6b35]/40 overflow-hidden flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-8 cursor-pointer"
                onClick={() => window.location.href = '/contact'}
              >
                {/* Background Accents */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-32 h-64 bg-gradient-to-r from-[#ff6b35]/10 to-transparent rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />
                
                {/* Icon */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-2xl bg-[#1a1a1a] border border-neutral-700/50 group-hover:border-[#ff6b35]/50 transition-all duration-500 shadow-xl group-hover:shadow-[0_0_20px_-5px_rgba(255,107,53,0.3)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                  <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-gray-400 group-hover:text-[#ff6b35] transition-all duration-500 relative z-10" strokeWidth={1.2} />
                </div>

                {/* Content */}
                <div className="flex-1 pr-4 md:pr-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#ff6b35] transition-all duration-300 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light mt-2 max-w-2xl">
                    {service.description}
                  </p>
                </div>
                
                {/* CTA Arrow Button */}
                <div className="shrink-0 pt-4 md:pt-0 border-t border-neutral-800/60 md:border-t-0 w-full md:w-auto flex justify-end">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1a1a] border border-neutral-800 text-gray-400 group-hover:bg-[#ff6b35] group-hover:border-[#ff6b35] group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_-5px_rgba(255,107,53,0.5)]">
                    <svg className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
