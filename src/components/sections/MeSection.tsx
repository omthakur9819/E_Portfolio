"use client";

import React, { useEffect, useState } from "react";

const MarqueeRow1 = () => (
  <div className="whitespace-nowrap font-bebas text-[calc(16vw-4px)] md:text-[calc(14vw-4px)] tracking-tighter animate-marquee flex gap-8">
    <span>E-WASTE</span>
    <span>E-WASTE</span>
    <span>E-WASTE</span>
    <span>E-WASTE</span>
    <span>E-WASTE</span>
    <span>E-WASTE</span>
  </div>
);

const MarqueeRow2 = () => (
  <div className="whitespace-nowrap font-bebas text-[calc(16vw-4px)] md:text-[calc(14vw-4px)] tracking-tighter animate-marquee-reverse flex gap-8">
    <span>AND</span>
    <span>AND</span>
    <span>AND</span>
    <span>AND</span>
    <span>AND</span>
    <span>AND</span>
    <span>AND</span>
    <span>AND</span>
  </div>
);

const MarqueeRow3 = () => (
  <div className="whitespace-nowrap font-bebas text-[calc(16vw-4px)] md:text-[calc(14vw-4px)] tracking-tighter animate-marquee flex gap-8">
    <span>ENVIRONMENTAL MANAGEMENT</span>
    <span>ENVIRONMENTAL MANAGEMENT</span>
    <span>ENVIRONMENTAL MANAGEMENT</span>
    <span>ENVIRONMENTAL MANAGEMENT</span>
  </div>
);

const BackgroundMarquee = () => (
  <div className="w-screen flex flex-col justify-center gap-2 md:gap-4 pointer-events-none leading-none select-none text-white font-extrabold opacity-95">
    <MarqueeRow1 />
    <MarqueeRow2 />
    <MarqueeRow3 />
  </div>
);

const ForegroundClippedMarquee = () => (
  <div className="w-screen flex flex-col justify-center gap-2 md:gap-4 pointer-events-none leading-none select-none text-black font-extrabold opacity-95">
    <MarqueeRow1 />
    <div className="opacity-0 pointer-events-none">
      <MarqueeRow2 />
    </div>
    <MarqueeRow3 />
  </div>
);

export default function MeSection() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="chapter-1"
      data-chapter="1"
      className="min-h-screen bg-[#0B0B0C] text-[#F4F4F5] relative flex flex-col justify-between overflow-hidden select-none"
    >


      {/* Main Center Area: 100% Identical Sub-Pixel Synced Marquees */}
      <div className="relative flex-1 flex items-center justify-center py-12">
        {/* Background Marquee: WHITE Text Outside Photo Card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen flex flex-col justify-center items-center pointer-events-none z-0">
          <BackgroundMarquee />
        </div>

        {/* Centered Portrait Card with Border Overlay (0px content offset) */}
        <div className="z-10 relative w-[280px] sm:w-[340px] md:w-[420px] aspect-[3/4] overflow-hidden rounded-sm shadow-[0_25px_60px_-15px_rgba(255,255,255,0.12)] group cursor-pointer transition-transform duration-500 hover:scale-[1.02]">
          {/* Portrait Photo */}
          <img
            src="/test_portrait.png?v=4"
            alt="Portrait"
            className="w-full h-full object-cover block"
          />

          {/* Foreground Clipped Marquee: BLACK Text Positioned Identically */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen flex flex-col justify-center items-center pointer-events-none z-20">
            <ForegroundClippedMarquee />
          </div>

          {/* Border Overlay on top so box-model border does not displace inner content by 1px */}
          <div className="absolute inset-0 border border-white/10 rounded-sm pointer-events-none z-30" />
        </div>
      </div>

      {/* Bottom Metadata Bar */}
      <div className="w-full px-8 pb-8 flex justify-between items-center z-30 text-xs md:text-sm font-bold tracking-widest text-neutral-300 uppercase">
        <div>
          BASED IN MUMBAI • {currentTime || "20:12:04"}
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>OPEN TO WORK</span>
        </div>
      </div>
    </section>
  );
}
