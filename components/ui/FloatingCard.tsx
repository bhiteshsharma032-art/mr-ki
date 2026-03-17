'use client';

import { ReactNode } from 'react';

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'strong';
}

export function FloatingCard({ children, className = '', intensity = 'medium' }: FloatingCardProps) {
  const intensityClasses = {
    light: 'hover:translate-y-[-4px] shadow-soft-sm hover:shadow-soft-md',
    medium: 'hover:translate-y-[-8px] shadow-soft-md hover:shadow-soft-lg',
    strong: 'hover:translate-y-[-12px] shadow-soft-lg hover:shadow-float'
  };

  return (
    <div 
      className={`
        bg-bg-card 
        border border-border 
        rounded-3xl 
        transition-all 
        duration-300 
        ease-out
        ${intensityClasses[intensity]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
