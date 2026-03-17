'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Zap, Users, TrendingUp, DollarSign, LucideIcon } from 'lucide-react';

const COMPANIES = [
  "Meridian Labs", "Atlas Corp", "Quantum Dynamics", 
  "Vertex AI", "Prism Health", "NovaStack", 
  "ClearPath", "Helix Systems", "Forge Digital", "Apex Ventures"
];

const COMPANYS_ROW_1 = [...COMPANIES];
const COMPANYS_ROW_2 = [...COMPANIES].reverse();

type StatItem = {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  icon: LucideIcon;
  isFloat?: boolean;
};

const STATS: StatItem[] = [
  { value: 200, suffix: "+", label: "Automations Deployed", icon: Zap },
  { value: 50, suffix: "+", label: "Happy Clients", icon: Users },
  { value: 98, suffix: "%", label: "Client Retention", icon: TrendingUp },
  { value: 2.4, prefix: "$", suffix: "M+", label: "Revenue Generated for Clients", icon: DollarSign, isFloat: true },
];

function Counter({ from = 0, to, duration = 2, isFloat = false }: { from?: number, to: number, duration?: number, isFloat?: boolean }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView || !nodeRef.current) return;
    
    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        if (nodeRef.current) {
          nodeRef.current.textContent = isFloat ? value.toFixed(1) : Math.round(value).toString();
        }
      },
    });

    return () => controls.stop();
  }, [from, to, duration, isInView, isFloat]);

  return <span ref={nodeRef}>{from}</span>;
}

export function LogoMarquee() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section className="py-20 relative overflow-hidden bg-bg-primary">
      {/* Top Label */}
      <div className="text-center mb-12">
        <h3 className="text-text-secondary text-sm font-semibold tracking-[0.2em] uppercase">
          Trusted by forward-thinking companies
        </h3>
      </div>

      {/* Marquee Area */}
      <div className="relative flex flex-col gap-6 group">
        {/* Gradient Mask */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-bg-primary via-transparent to-bg-primary w-full" />
        
        {/* Row 1: Left scrolling */}
        <div className="flex w-max animate-[marquee-left_40s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 px-8 items-center justify-center min-w-max">
              {COMPANYS_ROW_1.map((name, j) => (
                <div 
                  key={`${i}-${j}`} 
                  className="font-display font-semibold text-xl text-text-primary opacity-40 hover:opacity-100 transition-all duration-300 hover:scale-105 cursor-default hover:text-accent-primary"
                >
                  {name}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-border opacity-20 my-2" />

        {/* Row 2: Right scrolling */}
        <div className="flex w-max animate-[marquee-right_40s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 px-8 items-center justify-center min-w-max">
              {COMPANYS_ROW_2.map((name, j) => (
                <div 
                  key={`${i}-${j}`} 
                  className="font-display font-semibold text-xl text-text-primary opacity-40 hover:opacity-100 transition-all duration-300 hover:scale-105 cursor-default hover:text-accent-tertiary"
                >
                  {name}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Stats Bar */}
      <div ref={containerRef} className="container mx-auto px-6 md:px-12 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden group p-6 rounded-2xl bg-bg-secondary/30 border border-border/40 hover:border-accent-primary/30 hover:bg-bg-secondary/50 transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
                <stat.icon className="w-16 h-16 text-text-primary" />
              </div>
              
              <div className="relative z-10 flex flex-col gap-2">
                <div className="flex items-center gap-3 mb-2 text-accent-primary">
                  <div className="p-2 rounded-lg bg-accent-primary/10">
                    <stat.icon className="w-5 h-5 flex-shrink-0" />
                  </div>
                </div>
                
                <h4 className="text-4xl md:text-5xl font-display font-bold text-text-primary tracking-tight">
                  {stat.prefix}
                  <Counter to={stat.value} isFloat={stat.isFloat} />
                  {stat.suffix}
                </h4>
                
                <p className="text-text-secondary font-medium mt-1">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
