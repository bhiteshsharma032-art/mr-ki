'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 800; // Reduced from 2000ms to 800ms
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = (currentStep / steps) * 100;
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => setIsLoading(false), 150); // Reduced from 300ms to 150ms
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const letters = 'MR KI'.split('');

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }} // Reduced from 0.8s to 0.5s
          className="fixed inset-0 z-[100] bg-bg-primary flex flex-col items-center justify-center"
        >
          {/* Logo Animation */}
          <div className="flex gap-1 mb-12">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3, // Reduced from 0.5s to 0.3s
                  delay: index * 0.05, // Reduced from 0.1s to 0.05s
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="text-5xl md:text-6xl font-display font-bold text-text-primary"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-64 h-1 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
