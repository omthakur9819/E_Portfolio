"use client";

import React from "react";

const services = [
  { title: "SYSTEM ARCHITECTURE", icon: "⚙️", align: "start" },
  { title: "AI OPTIMIZATION", icon: "🧠", align: "end" },
  { title: "TECH DOCUMENTATION", icon: "📄", align: "center" },
  { title: "WEB DEVELOPMENT", icon: "💻", align: "end" },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full bg-[#0B0B0C] text-[#F4F4F5] px-8 py-24 md:py-36 border-t border-neutral-800 relative select-none flex flex-col justify-between"
    >
      {/* Top Header */}
      <div className="flex justify-between items-center text-xs font-mono tracking-widest text-neutral-400 uppercase mb-20">
        <span>(04) SERVICES & CAPABILITIES</span>
        <span>WHAT I DO</span>
      </div>

      {/* Giant Staggered Services Typography */}
      <div className="flex flex-col gap-6 md:gap-10 max-w-7xl mx-auto w-full mb-24">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 text-4xl sm:text-6xl md:text-8xl lg:text-[7.5vw] font-black tracking-tight uppercase leading-none text-white hover:text-emerald-400 transition-colors interactable ${
              service.align === "end"
                ? "justify-end"
                : service.align === "center"
                ? "justify-center"
                : "justify-start"
            }`}
          >
            <span>{service.title}</span>
            <span className="inline-flex items-center justify-center text-2xl md:text-5xl px-4 py-2 bg-neutral-900 rounded-full border border-neutral-800 shadow-sm font-normal text-white">
              ({service.icon})
            </span>
          </div>
        ))}
      </div>

      {/* Engineer Philosophy Paragraph */}
      <div className="flex justify-end max-w-7xl mx-auto w-full mb-32">
        <p className="max-w-3xl text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
          I'm not a founder, a visionary, or a strategist hiding behind a title. I'm an engineer. Someone who architects, builds, and documents in equal measure, and uses that to walk projects through every stage of their lifecycle—from the first system diagram to the moment production-ready code goes live. I'm not here to chase trends or pile on unnecessary complexity. I'm here to take intricate technical challenges and translate them into optimized, sustainable digital solutions. Work that serves a clear, logical purpose, rather than just taking up space.
        </p>
      </div>

      {/* Pre-Contact Callout (Right Above "Get In Touch") */}
      <div className="border-t border-neutral-800 pt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 max-w-7xl mx-auto w-full">
        <div>
          <div className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-2">
            [ WANT TO START A PROJECT? ]
          </div>
          <p className="text-xl md:text-3xl font-semibold tracking-tight text-white max-w-xl">
            For enquiries, collaboration requests or job opportunities, don’t hesitate to reach out!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 font-mono text-sm uppercase">
          <a
            href="mailto:iomthakur97@gmail.com"
            className="px-6 py-4 bg-white text-black rounded-full font-bold tracking-widest hover:bg-neutral-200 transition-all text-center interactable"
          >
            iomthakur97@gmail.com
          </a>
          <a
            href="tel:+919326872046"
            className="px-6 py-4 border border-neutral-700 rounded-full font-bold tracking-widest hover:border-white transition-all text-center interactable text-white"
          >
            +91 9326872046
          </a>
        </div>
      </div>
    </section>
  );
}
