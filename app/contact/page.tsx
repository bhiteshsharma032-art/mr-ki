'use client';

import { useEffect } from 'react';

export default function ContactPage() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen relative pt-32 pb-20 bg-black">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="text-sm font-semibold text-[#ff6b35] uppercase tracking-wider mb-4">
            Get In Touch
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Schedule a <span className="text-[#ff6b35]">Free Consultation</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Book a 30-minute call to discuss your automation needs and see how we can help transform your business.
          </p>
        </div>

        {/* Calendly Booking Section */}
        <div className="max-w-5xl mx-auto">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/mrkiglobal/30min?hide_gdpr_banner=1&hide_event_type_details=1" 
            style={{ minWidth: '320px', height: '900px', width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
}