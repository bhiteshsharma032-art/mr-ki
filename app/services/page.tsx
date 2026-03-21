'use client';

import { Mail, Phone, MessageCircle, TrendingUp, Globe, FileText, Video, BarChart3, Users, Zap, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const SERVICES = [
  {
    icon: Mail,
    title: "Email Automation",
    description: "AI-powered email management system that handles customer inquiries, automates responses, and maintains engagement across all email channels.",
    features: [
      "Automated email responses and follow-ups",
      "Smart inbox management and categorization",
      "Personalized email campaigns",
      "Performance tracking and analytics"
    ]
  },
  {
    icon: Phone,
    title: "AI Calling Agents",
    description: "Intelligent voice AI agents for inbound and outbound calls, handling customer service, sales, and support with natural conversations.",
    features: [
      "Inbound customer support automation",
      "Outbound sales and follow-up calls",
      "Natural language processing",
      "Call recording and transcription"
    ]
  },
  {
    icon: MessageCircle,
    title: "Social Media Management",
    description: "Complete AI-driven social media automation across all platforms - managing comments, DMs, and customer interactions 24/7.",
    features: [
      "Automated comment and DM responses",
      "Multi-platform integration (Instagram, Facebook, Twitter, LinkedIn)",
      "Customer data collection and storage",
      "Weekly performance reports and insights"
    ]
  },
  {
    icon: TrendingUp,
    title: "Content Marketing AI",
    description: "AI analyzes your brand, niche, and target location to create strategic content that resonates with your audience.",
    features: [
      "Brand and niche analysis",
      "Target audience research",
      "Educational and promotional content creation",
      "Content calendar with approval workflow"
    ]
  },
  {
    icon: Video,
    title: "Creative Content Production",
    description: "AI-generated UGC content, commercial ads, and 3D product renders for product launches and marketing campaigns.",
    features: [
      "UGC-style content creation",
      "Commercial video ads",
      "3D product renders and visualizations",
      "Ad creative optimization"
    ]
  },
  {
    icon: Globe,
    title: "AI-Powered Web Development",
    description: "Modern, advanced UI websites integrated with AI agents for enhanced user experience and automated customer interactions.",
    features: [
      "Custom modern UI/UX design",
      "AI chatbot integration",
      "Responsive and fast-loading",
      "SEO-optimized architecture"
    ]
  },
  {
    icon: FileText,
    title: "Blog & SEO Management",
    description: "AI agent that analyzes trends, creates SEO-optimized blog content with meta tags and images, and manages publishing.",
    features: [
      "Trend and news analysis in your niche",
      "SEO-optimized blog creation",
      "Meta tags and image generation",
      "Email approval workflow before publishing"
    ]
  },
  {
    icon: Brain,
    title: "Content Calendar AI",
    description: "Advanced reasoning AI that analyzes niche trends and creates strategic content calendars with scripts for your team.",
    features: [
      "Niche trend analysis",
      "Strategic content planning",
      "Campaign scripts and guidelines",
      "Multi-channel campaign coordination"
    ]
  },
  {
    icon: Zap,
    title: "Outbound Campaign Automation",
    description: "Run multi-channel outbound campaigns through calling, WhatsApp, and other platforms with AI-driven targeting.",
    features: [
      "Multi-channel outbound campaigns",
      "WhatsApp automation",
      "Smart targeting and segmentation",
      "Campaign performance tracking"
    ]
  },
  {
    icon: BarChart3,
    title: "Analytics & Competitor Intelligence",
    description: "Comprehensive AI analysis of your social media performance, competitor strategies, and weekly insights with recommendations.",
    features: [
      "Weekly performance reports",
      "Competitor analysis and benchmarking",
      "Strategic recommendations",
      "Cross-platform analytics dashboard"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen relative bg-[#030303] selection:bg-[#ff6b35]/30">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute inset-0 bg-black/60 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#ff6b35]/15 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neutral-800/20 rounded-full blur-[100px] pointer-events-none translate-x-1/2 translate-y-1/2 opacity-30" />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden z-10 flex flex-col items-center justify-center min-h-[50vh]">
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff6b35]/10 border border-[#ff6b35]/20 text-[#ff6b35] text-sm font-semibold uppercase tracking-widest mb-8 hover:bg-[#ff6b35]/20 transition-all duration-300">
            <span className="w-2 h-2 rounded-full bg-[#ff6b35] animate-pulse shadow-[0_0_10px_rgba(255,107,53,0.8)]" />
            Our Services
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
            Complete AI Automation<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] via-orange-400 to-[#ff6b35] bg-[length:200%_auto] animate-gradient">
              Solutions for Your Business
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            From email automation to social media management, content creation to web development -
            we build, train, and deploy intelligent AI systems that transform your entire operation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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

      {/* How It Works */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-24 relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-orange-400">Deliver Results</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg px-4 font-light">
              Our proven process ensures your AI automation system is perfectly tailored to your business needs, from strategy to deployment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
            {/* Connecting line for large screens */}
            <div className="hidden lg:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-gray-700 to-transparent -z-10" />

            {[
              { step: "01", title: "Analysis", desc: "We analyze your brand, niche, target location, and business processes" },
              { step: "02", title: "Development", desc: "Custom AI system development and training specific to your needs" },
              { step: "03", title: "Integration", desc: "Seamless integration with your existing tools and platforms" },
              { step: "04", title: "Support", desc: "Ongoing monitoring, optimization, and 24/7 support" }
            ].map((item, index) => (
              <div key={index} className="relative group text-center">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-[#111111] rounded-full flex items-center justify-center mx-auto mb-6 relative border-2 border-neutral-800 transition-all duration-500 shadow-xl group-hover:border-[#ff6b35] group-hover:shadow-[0_0_30px_-5px_rgba(255,107,53,0.3)] group-hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/20 to-transparent opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-500" />
                  <span className="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-500 to-gray-700 group-hover:from-[#ff6b35] group-hover:to-orange-400 transition-all duration-500 relative z-10">{item.step}</span>
                  {/* Outer glowing ring on hover */}
                  <div className="absolute -inset-2 border border-[#ff6b35]/20 rounded-full scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-[#ff6b35] transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 mb-8 px-4">
            Let's discuss which AI automation solutions are right for your business.
          </p>
          <button
            onClick={() => window.location.href = '/contact'}
            className="bg-[#ff6b35] hover:bg-[#ff7d4d] text-white font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 text-sm lg:text-base"
          >
            Get Started Today
            <Users className="w-4 h-4 lg:w-5 lg:h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}