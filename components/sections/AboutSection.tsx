'use client';

import { motion } from 'framer-motion';

const TEAM_MEMBERS = [
  {
    name: "Yash Raj",
    role: "Chief Technology Officer",
    image: "/team-4.jpeg",
    company: "",
    description: "I build AI-driven systems that replace manual work inside businesses.",
    focus: "My work is focused on designing structured automation infrastructures — not experiments, not demos.",
    quote: "I don't sell tools. I design systems that run businesses without constant human involvement.",
    linkedin: "#"
  },
  {
    name: "Heiko Knoedel",
    role: "Chief Executive Officer",
    image: "/team-3.jpeg",
    company: "efacon GmbH - Expert in IT consulting",
    description: "Specializing in IT Law, Business Consulting, Information Management, and Custom Software Development.",
    focus: "",
    quote: "Künstliche Intelligenz & Mindset & Leadership",
    linkedin: "#"
  },
  {
    name: "Queeny Jane Cabizares",
    role: "Chief Marketing Officer",
    image: "/team-2.jpeg",
    objectPosition: "center 10%",
    company: "Investor and Business Connect",
    description: "Partners Director at Saisygermany.com and CEO/Owner of QueenGlobal.",
    focus: "",
    quote: "One to Evolve Your Mindset - Business Founder!!!",
    linkedin: "#"
  },
  {
    name: "Bhitesh Sharma",
    role: "AI Automation Engineer & Developer",
    image: "/team-bhitesh.png",
    objectPosition: "center 15%",
    company: "",
    description: "I architect and build advanced AI agents, combining custom software development with cutting-edge LLM capabilities.",
    focus: "My focus is on robust backend development, scalable code, and seamless API integrations to drive measurable business efficiency.",
    quote: "Automation isn't just about saving time—it's about unlocking capabilities you didn't know your business had.",
    linkedin: "#"
  }
];

export function AboutSection() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="text-sm font-semibold text-[#ff6b35] uppercase tracking-wider mb-4">
            Our Team
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Meet the <span className="text-[#ff6b35]">Experts</span> Behind Your Success
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-base lg:text-lg">
            A team of four seasoned professionals dedicated to transforming businesses through AI automation, strategic innovation, and robust engineering.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              key={index} 
              className="group relative bg-[#111111] rounded-[2rem] p-6 lg:p-8 flex flex-col shadow-xl border border-neutral-800 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_-5px_rgba(255,107,53,0.15)] hover:border-[#ff6b35]/30 overflow-hidden h-full"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Profile Image */}
              <div className="relative w-28 h-28 lg:w-36 lg:h-36 mx-auto mb-6 rounded-full overflow-hidden border-[3px] border-[#1a1a1a] group-hover:border-[#ff6b35]/50 transition-colors duration-500 shadow-2xl group-hover:shadow-[0_0_30px_rgba(255,107,53,0.2)] z-10 shrink-0">
                <div className="absolute inset-0 bg-[#ff6b35]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover relative z-0 group-hover:scale-110 transition-transform duration-700"
                  style={{ objectPosition: member.objectPosition || 'center' }}
                />
              </div>

              {/* Name and Role */}
              <div className="text-center mb-4 relative z-20 shrink-0">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-[#ff6b35] transition-colors duration-300">
                  {member.name}
                </h3>
                <div className="inline-block px-3 py-1 rounded-full bg-[#1a1a1a] border border-neutral-800 text-[#ff6b35] text-xs font-semibold">
                  {member.role}
                </div>
              </div>

              {/* Company Info */}
              {member.company && (
                <p className="text-gray-400 text-xs text-center mb-4 leading-relaxed relative z-20 font-medium shrink-0">
                  {member.company}
                </p>
              )}

              {/* Description (flex-1 pushes quote to bottom) */}
              <div className="flex-1 flex flex-col justify-between text-center relative z-20">
                <div className="space-y-3 mb-6">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.description}
                  </p>
                  
                  {member.focus && (
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {member.focus}
                    </p>
                  )}
                </div>

                {/* Quote */}
                <div className="pt-4 mt-auto border-t border-neutral-800/80">
                  <p className="text-gray-400 text-xs italic leading-relaxed group-hover:text-white transition-colors duration-300 relative inline-block">
                    <span className="text-[#ff6b35]/40 font-serif text-3xl absolute -top-3 -left-2">"</span>
                    <span className="relative z-10">{member.quote}</span>
                    <span className="text-[#ff6b35]/40 font-serif text-3xl absolute -bottom-4 -right-2 transform rotate-180">"</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#ff6b35]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#ff6b35]/5 blur-[120px] rounded-full" />
      </div>
    </section>
  );
}
