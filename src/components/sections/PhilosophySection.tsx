"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const quoteText =
  '"Technology is only as valuable as the problems it solves. I approach engineering with a focus on purposeful design—building software and systems that serve a clear function without unnecessary bloat. From translating complex engineering concepts into actionable documentation to developing end-to-end web platforms, I build solutions that are complex under the hood, yet effortless to use."';

export default function PhilosophySection() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !textRef.current) return;

    const words = textRef.current.querySelectorAll(".philosophy-word");

    gsap.fromTo(
      words,
      { opacity: 0.2, color: "#4B5563" },
      {
        opacity: 1,
        color: "#FFFFFF",
        stagger: 0.05,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 40%",
          scrub: 0.8,
        },
      }
    );
  }, []);

  return (
    <section
      ref={containerRef}
      id="philosophy"
      className="w-full min-h-screen bg-[#0B0B0C] text-[#F4F4F5] px-8 py-32 md:py-48 flex items-center justify-center border-t border-neutral-800 relative select-none"
    >
      <div className="max-w-5xl text-center md:text-left">
        <div className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-12">
          (03) PHILOSOPHY
        </div>

        <p
          ref={textRef}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.2] tracking-tight transition-colors duration-200"
        >
          {quoteText.split(" ").map((word, index) => (
            <span
              key={index}
              className="philosophy-word inline-block mr-[0.28em] transition-opacity duration-150"
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
