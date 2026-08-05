"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { cn } from "@/lib/utils";

const meSubChapters = [
  { id: "about", title: "About" },
  { id: "projects", title: "Featured Work" },
  { id: "philosophy", title: "Philosophy" },
  { id: "services", title: "Services" },
];

const activitiesSubChapters = [
  { id: "activities", title: "All Activities" },
  { id: "assignments-01", title: "Activities 01-05" },
  { id: "assignments-06", title: "Activities 06-10" },
];

export default function Header() {
  const [activeChapter, setActiveChapter] = useState(1);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const sections = document.querySelectorAll("section[data-chapter]");
    const triggers: ScrollTrigger[] = [];

    sections.forEach((section, index) => {
      const st = ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => {
          if (self.isActive) {
            setActiveChapter(index + 1);
          }
        },
      });
      triggers.push(st);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  const scrollToSection = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (!target) return;
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(target, { duration: 1.5, offset: 0 });
      } else {
        gsap.to(window, { scrollTo: target, duration: 1.5, ease: "power3.inOut" });
      }
    } catch {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const chapters = [
    { num: 1, title: "ME", id: "chapter-1" },
    { num: 2, title: "ACTIVITIES", id: "activities" },
  ];

  return (
    <>
      {/* Top Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] p-6 flex justify-between items-start pointer-events-none mix-blend-difference text-white">
        <div className="flex flex-col pointer-events-auto interactable">
          <span className="text-sm font-bold tracking-widest uppercase">OM THAKUR.</span>
          <span className="text-[10px] font-mono tracking-widest text-neutral-400 mt-0.5 font-normal">24101C0041</span>
        </div>
      </header>

      {/* Chapter Index Sidebar with Interactive Hover Expansion */}
      <div className="fixed bottom-6 left-6 z-[100] text-emerald-400">
        <div className="flex flex-col gap-4 text-xs font-bold tracking-widest">
          {chapters.map((ch) => (
            <div key={ch.num} className="group relative flex flex-col gap-2">
              <a
                href={`#${ch.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(ch.id);
                }}
                className={cn(
                  "flex items-center gap-3 text-left transition-all duration-500 interactable hover:opacity-100 text-emerald-400",
                  activeChapter === ch.num ? "opacity-100" : "opacity-60"
                )}
              >
                {/* Circular Icon */}
                <div className="flex items-center justify-center w-8 h-8 rounded-full border border-emerald-400/50 text-emerald-400 group-hover:border-emerald-400 group-hover:scale-105 transition-all">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </div>
                <span className="uppercase text-emerald-400">Chp. — {ch.title}</span>
              </a>

              {/* Sub-Chapters Expandable Accordion Menu for Chp. - ME */}
              {ch.num === 1 && (
                <div className="flex flex-col gap-2 pl-11 overflow-hidden max-h-0 opacity-0 group-hover:max-h-60 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  {meSubChapters.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(sub.id);
                      }}
                      className="text-left text-[11px] font-medium tracking-wide text-emerald-400/70 hover:text-emerald-400 hover:translate-x-1.5 transition-all duration-300 flex items-center gap-2 interactable"
                    >
                      <span className="text-emerald-400/40">↳</span>
                      <span>{sub.title}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Sub-Chapters Expandable Accordion Menu for Chp. - ACTIVITIES */}
              {ch.num === 2 && (
                <div className="flex flex-col gap-2 pl-11 overflow-hidden max-h-0 opacity-0 group-hover:max-h-60 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  {activitiesSubChapters.map((sub, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(sub.id);
                      }}
                      className="text-left text-[11px] font-medium tracking-wide text-emerald-400/70 hover:text-emerald-400 hover:translate-x-1.5 transition-all duration-300 flex items-center gap-2 interactable"
                    >
                      <span className="text-emerald-400/40">↳</span>
                      <span>{sub.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
