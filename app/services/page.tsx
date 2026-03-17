'use client';

import { Mail, Phone, MessageCircle, TrendingUp, Globe, FileText, Video, Image, BarChart3, Users, Zap, Brain } from 'lucide-react';

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
    <div className="min-h-screen relative bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="text-sm font-semibold text-[#ff6b35] uppercase tracking-wider mb-4">
            Our Services
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Complete AI Automation<br />
            <span className="text-[#ff6b35]">Solutions for Your Business</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            From email automation to social media management, content creation to web development - 
            we build, train, and deploy AI systems that transform your business operations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-neutral-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#ff6b35]/50 border border-neutral-600">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-[#ff6b35]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-7 h-7 text-[#ff6b35]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-neutral-700 pt-6">
                    <h4 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-[#ff6b35] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300 text-sm leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How We <span className="text-[#ff6b35]">Deliver Results</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our proven process ensures your AI automation system is perfectly tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Analysis", desc: "We analyze your brand, niche, target location, and business processes" },
              { step: "02", title: "Development", desc: "Custom AI system development and training specific to your needs" },
              { step: "03", title: "Integration", desc: "Seamless integration with your existing tools and platforms" },
              { step: "04", title: "Support", desc: "Ongoing monitoring, optimization, and 24/7 support" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#ff6b35]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#ff6b35]">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss which AI automation solutions are right for your business.
          </p>
          <button 
            onClick={() => window.location.href = '/contact'}
            className="bg-[#ff6b35] hover:bg-[#ff7d4d] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
          >
            Get Started Today
            <Users className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}