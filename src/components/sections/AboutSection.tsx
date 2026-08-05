"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (textRef.current && sectionRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full bg-[#0B0B0C] text-[#F4F4F5] px-8 py-24 md:py-36 border-t border-neutral-800 relative select-none"
    >
      {/* Top Section Index */}
      <div className="flex justify-between items-center text-xs font-mono tracking-widest text-neutral-400 uppercase mb-16">
        <span>(01) ABOUT</span>
        <span>BASED IN MUMBAI</span>
      </div>

      {/* Main Headline & Statement */}
      <div className="max-w-6xl">
        <h2 className="text-6xl md:text-9xl font-extrabold tracking-tight uppercase leading-none mb-12 text-white">
          ABOUT
        </h2>

        <p
          ref={textRef}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.15] tracking-tight text-white max-w-5xl"
        >
          IT engineering student and Co-Head of Documentation at CSI VIT, specializing in system architecture and AI tools. Passionate about translating complex concepts into actionable reports and building efficient, tech-driven solutions.
        </p>

        <div className="mt-12 md:mt-20 pt-12 border-t border-neutral-800 grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-300 text-lg md:text-xl font-normal leading-relaxed">
          <p>
            Specializing in system architecture and AI tools, I help build digital infrastructures that are as intelligent as they are efficient.
          </p>
          <p>
            Bridging the gap between high-performance engineering and ecological responsibility, every solution is optimized for scale, clarity, and sustainability.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap gap-8 items-center justify-end text-xs font-mono tracking-widest text-neutral-400 uppercase">
          <div>[ SCROLL TO EXPLORE MORE ]</div>
        </div>
      </div>
    </section>
  );
}
