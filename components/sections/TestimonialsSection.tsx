'use client';

import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Cooper Geidt",
    title: "Senior Prompt Engineer",
    company: "EcoPure",
    avatar: "/api/placeholder/60/60",
    before: "I kept copying random prompts from Twitter threads, hoping one would finally work.",
    after: "I now have my own prompt system that consistently delivers high-quality outputs tailored to any project—no more guesswork or rewrites."
  },
  {
    name: "Ruben Gouse", 
    title: "Senior Prompt Engineer",
    company: "EcoPure",
    avatar: "/api/placeholder/60/60",
    before: "I kept copying random prompts from Twitter threads, hoping one would finally work.",
    after: "I now have my own prompt system that consistently delivers high-quality outputs tailored to any project—no more guesswork or rewrites."
  },
  {
    name: "Rayna Mango",
    title: "Senior Prompt Engineer", 
    company: "EcoPure",
    avatar: "/api/placeholder/60/60",
    before: "I kept copying random prompts from Twitter threads, hoping one would finally work.",
    after: "I now have my own prompt system that consistently delivers high-quality outputs tailored to any project—no more guesswork or rewrites."
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Our Graduates Don't Just<br />
            Learn, <span className="text-[#ff6b35]">They Achieve.</span>
          </h2>
        </div>

        {/* Video Testimonial */}
        <div className="mb-20">
          <div className="relative bg-gray-700 rounded-3xl overflow-hidden aspect-video max-w-4xl mx-auto">
            {/* YouTube Video Embed */}
            <iframe
              src="https://www.youtube.com/embed/lRkQmZNdbGo"
              title="Video testimonial"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            
            {/* Video Label */}
            <div className="absolute top-4 left-4">
              <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-white text-sm font-medium">Video testimonial</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-6 shadow-lg">
              {/* Header with avatar and info */}
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-5 h-5 bg-white rounded flex items-center justify-center text-gray-900 text-xs font-bold">E</span>
                    <span className="text-xs text-gray-500">{testimonial.company}</span>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-[#ff6b35]" />
              </div>

              {/* Before section */}
              <div className="mb-6">
                <div className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                  BEFORE
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  "{testimonial.before}"
                </p>
              </div>

              {/* After section */}
              <div className="bg-gray-900 rounded-xl p-4">
                <div className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">
                  AFTER
                </div>
                <p className="text-white text-sm leading-relaxed">
                  "{testimonial.after}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}