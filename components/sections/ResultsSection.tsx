'use client';

import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import { FloatingCard } from '@/components/ui/FloatingCard';

interface ResultCard {
  id: string;
  number: string;
  label: string;
  subtitle: string;
  span?: string;
  visual?: 'line-chart' | 'bar-chart' | 'stars';
  countUp?: boolean;
}

const results: ResultCard[] = [
  {
    id: '1',
    number: '847',
    label: 'Hours Saved',
    subtitle: 'per month, per client average',
    span: 'md:col-span-2 lg:col-span-2',
    visual: 'line-chart',
    countUp: true
  },
  {
    id: '2',
    number: '312',
    label: 'Average ROI',
    subtitle: 'within first 6 months',
    countUp: true
  },
  {
    id: '3',
    number: '99.7',
    label: 'Uptime',
    subtitle: 'across all deployed systems',
    countUp: true
  },
  {
    id: '4',
    number: '24',
    label: 'Response Time',
    subtitle: 'for any system issues',
    countUp: true
  },
  {
    id: '5',
    number: '50',
    label: 'Tasks Automated',
    subtitle: 'completed automatically across all systems every month',
    span: 'md:col-span-2 lg:col-span-2',
    visual: 'bar-chart',
    countUp: true
  },
  {
    id: '6',
    number: '4.9',
    label: 'Client Satisfaction',
    subtitle: 'based on 50+ reviews',
    visual: 'stars',
    countUp: true
  }
];

const LineChart = () => (
  <svg className="w-full h-16 mt-4" viewBox="0 0 200 60" fill="none">
    <path
      d="M0 50 L40 45 L80 30 L120 35 L160 15 L200 10"
      stroke="url(#lineGradient)"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="animate-draw-line"
    />
    <defs>
      <linearGradient id="lineGradient" x1="0" y1="0" x2="200" y2="0">
        <stop offset="0%" stopColor="var(--accent-primary)" />
        <stop offset="100%" stopColor="var(--accent-secondary)" />
      </linearGradient>
    </defs>
  </svg>
);

const BarChart = () => (
  <div className="flex items-end gap-2 h-16 mt-4">
    {[40, 60, 45, 75, 55, 85, 70, 90].map((height, i) => (
      <div
        key={i}
        className="flex-1 bg-gradient-to-t from-accent-primary to-accent-secondary rounded-t animate-bar-grow"
        style={{
          height: `${height}%`,
          animationDelay: `${i * 0.1}s`
        }}
      />
    ))}
  </div>
);

const StarsRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1 mt-4">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        className={`w-6 h-6 ${
          star <= Math.floor(rating)
            ? 'fill-accent-tertiary text-accent-tertiary'
            : star - 0.5 <= rating
            ? 'fill-accent-tertiary/50 text-accent-tertiary'
            : 'fill-none text-border'
        }`}
      />
    ))}
  </div>
);

function useCountUp(end: number, duration: number = 2000, isInView: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Spring easing with overshoot
      const easeOutBack = (x: number): number => {
        const c1 = 1.70158;
        const c3 = c1 + 1;
        return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
      };
      
      const currentCount = startValue + (end - startValue) * easeOutBack(progress);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  return count;
}

function ResultCardComponent({ result, index }: { result: ResultCard; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const numericValue = parseFloat(result.number);
  const animatedValue = useCountUp(numericValue, 2000, result.countUp ? isInView : false);
  
  const formatNumber = (value: number, original: string) => {
    if (original.includes('.')) {
      return value.toFixed(1);
    }
    return Math.round(value).toString();
  };

  const displayValue = result.countUp ? formatNumber(animatedValue, result.number) : result.number;
  
  // Add prefix/suffix based on label
  let prefix = '';
  let suffix = '';
  if (result.label === 'Average ROI') suffix = '%';
  if (result.label === 'Uptime') suffix = '%';
  if (result.label === 'Response Time') prefix = '< ';
  if (result.label === 'Response Time') suffix = 'hrs';
  if (result.label === 'Tasks Automated') suffix = 'k+';
  if (result.label === 'Client Satisfaction') suffix = '/5';

  const isLarge = result.span?.includes('col-span-2');

  return (
    <div
      ref={cardRef}
      className={`${result.span || 'col-span-1'} opacity-0 scale-95 transition-all duration-700`}
      style={{
        animation: isInView ? `fadeInScale 0.7s ease-out ${index * 0.1}s forwards` : 'none'
      }}
    >
      <FloatingCard 
        intensity="medium"
        className={`p-6 md:p-8 h-full relative overflow-hidden group ${
          isLarge ? '' : ''
        }`}
      >
        {/* Glow effect for large cards */}
        {isLarge && (
          <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        )}
        
        <div className="relative z-10">
          <div className={`font-display font-bold text-text-primary mb-2 ${
            isLarge ? 'text-5xl md:text-6xl' : 'text-4xl md:text-5xl'
          }`}>
            {prefix}{displayValue}{suffix}
          </div>
          
          <div className={`font-semibold text-text-primary mb-1 ${
            isLarge ? 'text-xl' : 'text-lg'
          }`}>
            {result.label}
          </div>
          
          <div className="text-text-secondary text-sm">
            {result.subtitle}
          </div>

          {/* Visual elements */}
          {result.visual === 'line-chart' && isInView && <LineChart />}
          {result.visual === 'bar-chart' && isInView && <BarChart />}
          {result.visual === 'stars' && <StarsRating rating={parseFloat(result.number)} />}
        </div>
      </FloatingCard>
    </div>
  );
}

export default function ResultsSection() {
  return (
    <section 
      id="results"
      className="relative min-h-screen flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8 -mt-16 overflow-hidden"
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
          <div className="text-sm font-medium text-accent-primary uppercase tracking-wider mb-4">
            PROVEN RESULTS
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6">
            Numbers That Speak Louder Than Promises
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Real results from real clients. Every metric independently verified.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <ResultCardComponent key={result.id} result={result} index={index} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes draw-line {
          from {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
          }
        }

        @keyframes bar-grow {
          from {
            transform: scaleY(0);
            transform-origin: bottom;
          }
          to {
            transform: scaleY(1);
            transform-origin: bottom;
          }
        }

        :global(.animate-draw-line) {
          animation: draw-line 2s ease-out forwards;
        }

        :global(.animate-bar-grow) {
          animation: bar-grow 0.8s ease-out forwards;
          transform-origin: bottom;
        }
      `}</style>
    </section>
  );
}
