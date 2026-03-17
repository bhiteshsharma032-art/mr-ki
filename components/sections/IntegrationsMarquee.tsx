'use client';

const INTEGRATIONS_ROW_1 = [
  { name: "OpenAI", glow: "rgba(116, 220, 204, 0.3)" },
  { name: "Claude", glow: "rgba(204, 143, 116, 0.3)" },
  { name: "Groq", glow: "rgba(255, 107, 53, 0.3)" },
  { name: "n8n", glow: "rgba(255, 107, 107, 0.3)" },
  { name: "Make", glow: "rgba(107, 107, 255, 0.3)" },
  { name: "Zapier", glow: "rgba(255, 143, 0, 0.3)" },
  { name: "WhatsApp", glow: "rgba(37, 211, 102, 0.3)" },
  { name: "Instagram", glow: "rgba(225, 48, 108, 0.3)" },
];

const INTEGRATIONS_ROW_2 = [
  { name: "Facebook", glow: "rgba(24, 119, 242, 0.3)" },
  { name: "Gmail", glow: "rgba(234, 67, 53, 0.3)" },
  { name: "Slack", glow: "rgba(74, 21, 75, 0.3)" },
  { name: "GoHighLevel", glow: "rgba(67, 97, 238, 0.3)" },
  { name: "Notion", glow: "rgba(255, 255, 255, 0.3)" },
  { name: "Airtable", glow: "rgba(252, 205, 0, 0.3)" },
  { name: "HubSpot", glow: "rgba(255, 122, 89, 0.3)" },
  { name: "Salesforce", glow: "rgba(0, 161, 224, 0.3)" },
];

export function IntegrationsMarquee() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#0a0a0a]">
      {/* Top Label */}
      <div className="text-center mb-12">
        <h3 className="text-white/60 text-sm font-semibold tracking-[0.2em] uppercase">
          Seamlessly Integrates With Your Favorite Tools
        </h3>
      </div>

      {/* Marquee Area */}
      <div className="relative flex flex-col gap-8 group">
        {/* Gradient Mask */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a] w-full" />
        
        {/* Row 1: Left scrolling */}
        <div className="flex w-max animate-[marquee-left_40s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-12 px-6 items-center justify-center min-w-max">
              {INTEGRATIONS_ROW_1.map((app, j) => (
                <div 
                  key={`${i}-${j}`} 
                  className="relative font-semibold text-2xl text-white/50 hover:text-white transition-all duration-300 hover:scale-110 cursor-default px-6 py-3 rounded-xl"
                  style={{
                    textShadow: `0 0 20px ${app.glow}, 0 0 40px ${app.glow}`,
                  }}
                >
                  <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${app.glow} 0%, transparent 70%)`,
                      filter: 'blur(10px)',
                    }}
                  />
                  <span className="relative z-10">{app.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Row 2: Right scrolling */}
        <div className="flex w-max animate-[marquee-right_40s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-12 px-6 items-center justify-center min-w-max">
              {INTEGRATIONS_ROW_2.map((app, j) => (
                <div 
                  key={`${i}-${j}`} 
                  className="relative font-semibold text-2xl text-white/50 hover:text-white transition-all duration-300 hover:scale-110 cursor-default px-6 py-3 rounded-xl"
                  style={{
                    textShadow: `0 0 20px ${app.glow}, 0 0 40px ${app.glow}`,
                  }}
                >
                  <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${app.glow} 0%, transparent 70%)`,
                      filter: 'blur(10px)',
                    }}
                  />
                  <span className="relative z-10">{app.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
