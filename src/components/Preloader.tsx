"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate loading progress
    const intervals = [25, 50, 75, 100];
    let currentIndex = 0;

    const timer = setInterval(() => {
      if (currentIndex < intervals.length) {
        setProgress(intervals[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(timer);
        
        // Animate out (2x speed)
        gsap.to(textRef.current, {
          y: -45,
          opacity: 0,
          duration: 0.5,
          ease: "power3.inOut",
        });

        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: "expo.inOut",
          delay: 0.2,
          onComplete: () => {
            onComplete();
          },
        });
      }
    }, 200);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white px-6 select-none"
    >
      <div ref={textRef} className="flex flex-col items-center gap-6 text-center">
        <div className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-white leading-none">
          E-WASTE PORTFOLIO
        </div>
        <div className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter text-neutral-400 font-mono">
          ...{progress}%
        </div>
      </div>
    </div>
  );
}
