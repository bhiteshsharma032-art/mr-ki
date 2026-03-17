'use client';

import { useEffect, useRef, useState, CSSProperties } from 'react';
import { Search, PenTool, Code, Rocket } from 'lucide-react';
import { FloatingCard } from '@/components/ui/FloatingCard';

interface Step {
  week: string;
  title: string;
  icon: React.ElementType;
  description: string;
  deliverable: string;
}

const steps: Step[] = [
  {
    week: "Week 1",
    title: "Discovery & Audit",
    icon: Search,
    description: "We map every manual process, identify automation opportunities, and calculate potential ROI for each.",
    deliverable: "Complete Process Audit Report + ROI Projections"
  },
  {
    week: "Week 2",
    title: "Architecture & Design",
    icon: PenTool,
    description: "We design the automation architecture, select the right AI models, and create detailed technical specifications.",
    deliverable: "Technical Blueprint + Integration Plan"
  },
  {
    week: "Week 2-3",
    title: "Build & Test",
    icon: Code,
    description: "Our engineers build, integrate, and rigorously test every automation against real-world scenarios.",
    deliverable: "Fully Built & Tested Automation System"
  },
  {
    week: "Week 3-4",
    title: "Deploy & Optimize",
    icon: Rocket,
    description: "We deploy to production, train your team, monitor performance, and continuously optimize for better results.",
    deliverable: "Live System + Training + 90-Day Support"
  }
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSteps, setActiveSteps] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !timelineRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const scrollStart = windowHeight * 0.3;
      const scrollEnd = windowHeight * 0.7;
      
      if (sectionTop < scrollEnd && sectionTop + sectionHeight > scrollStart) {
        const progress = Math.max(0, Math.min(1, (scrollEnd - sectionTop) / (sectionHeight + scrollEnd - scrollStart)));
        setScrollProgress(progress);
        
        const newActiveSteps: number[] = [];
        steps.forEach((_, index) => {
          const stepThreshold = (index + 1) / steps.length;
          if (progress >= stepThreshold * 0.7) {
            newActiveSteps.push(index);
          }
        });
        setActiveSteps(newActiveSteps);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="process"
      ref={sectionRef} 
      className="relative min-h-screen flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: 'url(/starfield-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Minimal dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 opacity-[0.01]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        backgroundSize: '150px 150px'
      }} />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center mb-20">
          <div className="text-sm font-medium text-accent-primary uppercase tracking-wider mb-4">
            OUR PROCESS
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6">
            From Chaos to Automated in 4 Weeks
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            A proven, transparent process that takes you from manual headaches to fully automated workflows.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div 
            ref={timelineRef}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"
          >
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent-primary to-accent-secondary transition-all duration-300 ease-out"
              style={{ 
                height: `${scrollProgress * 100}%`,
                boxShadow: '0 0 10px var(--accent-primary)'
              }}
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeSteps.includes(index);
              const isEven = index % 2 === 0;
              
              const nodeStyle: CSSProperties = isActive 
                ? { animation: 'pulse 2s ease-in-out infinite' }
                : {};
              
              const badgeStyle: CSSProperties = isActive
                ? { animation: 'spring 0.6s ease-out' }
                : {};
              
              return (
                <div 
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-16`}
                >
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <div 
                      className={`w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-500 shadow-soft-md ${
                        isActive 
                          ? 'bg-accent-primary border-accent-primary scale-110 shadow-soft-lg' 
                          : 'bg-bg-card border-border'
                      }`}
                      style={nodeStyle}
                    >
                      <Icon 
                        className={`w-7 h-7 transition-colors duration-500 ${
                          isActive ? 'text-white' : 'text-text-secondary'
                        }`}
                      />
                    </div>
                  </div>

                  <div 
                    className={`w-full md:w-[calc(50%-4rem)] ml-24 md:ml-0 transition-all duration-700 ${
                      isActive 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-10'
                    }`}
                    style={{
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    <div 
                      className={`inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-500 ${
                        isActive
                          ? 'bg-accent-primary text-white scale-100'
                          : 'bg-bg-secondary text-text-secondary scale-95'
                      }`}
                      style={badgeStyle}
                    >
                      {step.week}
                    </div>

                    <FloatingCard intensity="medium" className="p-6 md:p-8">
                      <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
                        {step.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed mb-6">
                        {step.description}
                      </p>
                      
                      <div className="bg-accent-primary/5 border border-accent-primary/20 rounded-2xl p-4 shadow-soft-sm">
                        <div className="text-xs font-semibold text-accent-primary uppercase tracking-wider mb-1">
                          Deliverable
                        </div>
                        <div className="text-text-primary font-medium">
                          {step.deliverable}
                        </div>
                      </div>
                    </FloatingCard>
                  </div>

                  <div className="hidden md:block w-[calc(50%-4rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(232, 85, 61, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(232, 85, 61, 0);
          }
        }
        
        @keyframes spring {
          0% {
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
