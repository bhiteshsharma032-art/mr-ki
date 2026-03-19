'use client';

import { Linkedin } from 'lucide-react';
import Image from 'next/image';

const TEAM_MEMBERS = [
  {
    name: "Yash Rai",
    role: "Chief Technology Officer",
    image: "/team/yash-rai.jpg", // You'll add this image later
    company: "",
    description: "I build AI-driven systems that replace manual work inside businesses.",
    focus: "My work is focused on designing structured automation infrastructures — not experiments, not demos.",
    quote: "I don't sell tools. I design systems that run businesses without constant human involvement.",
    linkedin: "#"
  },
  {
    name: "Heiko Knoedel",
    role: "Chief Executive Officer",
    image: "/team/heiko-knoedel.jpg", // You'll add this image later
    company: "efacon GmbH - Expert in IT consulting, training, and project management.",
    description: "Specializing in IT Law, Business Consulting, Information Management, and Custom Software Development.",
    focus: "",
    quote: "Künstliche Intelligenz & Mindset & Leadership",
    linkedin: "#"
  },
  {
    name: "Queeny Jane Cabizares",
    role: "Chief Marketing Officer",
    image: "/team/queeny-jane.jpg", // You'll add this image later
    company: "Investor and Business Connect - Connecting 10M to 500M+ capital opportunities across UAE, UK, and US markets.",
    description: "Partners Director at Saisygermany.com and CEO/Owner of QueenGlobal.",
    focus: "",
    quote: "One to Evolve Your Mindset - Business Founder!!!",
    linkedin: "#"
  }
];

export function AboutSection() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="text-sm font-semibold text-[#ff6b35] uppercase tracking-wider mb-4">
            Our Team
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Meet the <span className="text-[#ff6b35]">Experts</span> Behind Your Success
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-base lg:text-lg">
            A team of seasoned professionals dedicated to transforming businesses through AI automation and strategic innovation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-800 hover:border-[#ff6b35]/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Profile Image */}
              <div className="relative w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-2xl overflow-hidden bg-gray-800 border-4 border-gray-700">
                {/* Placeholder for image - you'll add actual images later */}
                <div className="w-full h-full flex items-center justify-center text-gray-600">
                  <span className="text-4xl font-bold">{member.name.charAt(0)}</span>
                </div>
              </div>

              {/* Name and Role */}
              <div className="text-center mb-4">
                <h3 className="text-xl lg:text-2xl font-bold text-[#00d4ff] mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm lg:text-base mb-4">
                  {member.role}
                </p>
                
                {/* LinkedIn Button */}
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-[#00d4ff]/10 hover:bg-[#00d4ff]/20 rounded-full transition-colors"
                >
                  <Linkedin className="w-5 h-5 lg:w-6 lg:h-6 text-[#00d4ff]" />
                </a>
              </div>

              {/* Company Info */}
              {member.company && (
                <p className="text-gray-400 text-xs lg:text-sm text-center mb-4 leading-relaxed">
                  {member.company}
                </p>
              )}

              {/* Description */}
              <div className="space-y-3 text-center">
                <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                  {member.description}
                </p>
                
                {member.focus && (
                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                    {member.focus}
                  </p>
                )}

                {/* Quote */}
                <div className="pt-4 border-t border-gray-800">
                  <p className="text-[#00d4ff] text-xs lg:text-sm italic leading-relaxed">
                    "{member.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-[#ff6b35]/5 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-1/3 h-1/3 bg-[#00d4ff]/5 blur-3xl rounded-full" />
      </div>
    </section>
  );
}
