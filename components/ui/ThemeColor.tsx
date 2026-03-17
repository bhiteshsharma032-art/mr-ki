'use client';

import { useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeColor() {
  const { theme } = useTheme();

  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    const color = theme === 'dark' ? '#0F0F0E' : '#FAFAF9';
    
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', color);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = color;
      document.head.appendChild(meta);
    }
  }, [theme]);

  return null;
}
