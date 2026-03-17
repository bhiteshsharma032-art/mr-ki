'use client';

import { ArrowRight, Users, MessageCircle, Lightbulb, Trophy } from 'lucide-react';

const COMMUNITY_STATS = [
  { number: "2,500+", label: "Active Members" },
  { number: "150+", label: "AI Projects Shared" },
  { number: "95%", label: "Success Rate" },
  { number: "24/7", label: "Community Support" }
];

const MEMBER_AVATARS = [
  { id: 1, name: "Sarah Chen", avatar: "/api/placeholder/60/60", position: { top: "20%", left: "15%" } },
  { id: 2, name: "Marcus Rodriguez", avatar: "/api/placeholder/60/60", position: { top: "35%", right: "20%" } },
  { id: 3, name: "Elena Vogt", avatar: "/api/placeholder/60/60", position: { bottom: "30%", left: "25%" } },
  { id: 4, name: "James Park", avatar: "/api/placeholder/60/60", position: { top: "15%", right: "15%" } },
  { id: 5, name: "Lisa Wang", avatar: "/api/placeholder/60/60", position: { bottom: "20%", right: "30%" } },
  { id: 6, name: "David Kim", avatar: "/api/placeholder/60/60", position: { top: "45%", left: "10%" } }
];

const COMMUNITY_FEATURES = [
  {
    icon: MessageCircle,
    title: "Private Discussions",
    description: "Access exclusive discussions and insights you won't find anywhere else"
  },
  {
    icon: Users,
    title: "Expert Network",
    description: "Connect with AI automation experts and successful entrepreneurs"
  },
  {
    icon: Lightbulb,
    title: "Project Collaboration",
    description: "Share your projects, get feedback, and collaborate on new ideas"
  },
  {
    icon: Trophy,
    title: "Success Stories",
    description: "Learn from real case studies and celebrate member achievements"
  }
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #ff6b35 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-[#ff6b35] uppercase tracking-wider mb-4">
              Join Our Community
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Join an <span className="text-[#ff6b35]">Exclusive</span><br />
              Network of AI Innovators
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Join our private community to access discussions, job opportunities,<br />
              and insights you won't find on Twitter or any public forum.
            </p>
            <button className="bg-[#ff6b35] hover:bg-[#ff7d4d] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 mx-auto">
              Join Our Community - It's Free
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {COMMUNITY_STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Globe Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="relative flex items-center justify-center min-h-[600px]">
            {/* Globe */}
            <div className="relative w-96 h-96 md:w-[500px] md:h-[500px]">
              {/* Globe base */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-full shadow-2xl">
                {/* Dot pattern overlay */}
                <div 
                  className="absolute inset-0 rounded-full opacity-30"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }}
                />
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ff6b35]/20 via-transparent to-transparent" />
              </div>

              {/* Member Avatars */}
              {MEMBER_AVATARS.map((member) => (
                <div
                  key={member.id}
                  className="absolute w-16 h-16 md:w-20 md:h-20 animate-pulse"
                  style={member.position}
                >
                  <div className="relative group">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full rounded-full border-4 border-white shadow-lg object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-[#ff6b35]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {member.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Join Our Community?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get exclusive access to resources, connections, and opportunities that will accelerate your AI automation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COMMUNITY_FEATURES.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                  <div className="w-16 h-16 bg-[#ff6b35]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-[#ff6b35]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#ff6b35] to-[#ff7d4d]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Join the Network?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Connect with like-minded innovators, share your projects, and accelerate your success in AI automation.
          </p>
          <button className="bg-white hover:bg-gray-100 text-[#ff6b35] font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 mx-auto">
            Get the Template
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}