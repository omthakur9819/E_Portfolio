"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

// Mock JSON data (10 Activities: 1 to 10)
const activitiesData = Array.from({ length: 10 }, (_, i) => {
  const num = i + 1;
  return {
    id: num,
    date: `Activity ${String(num).padStart(2, '0')}`,
    title: `ACTIVITY ${num}`,
    category: num === 1 ? "Pledge" : "Crossword",
    hoverImageUrl: `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop&sig=${num}`,
    slug: `/activities/activity-${num}`,
  };
});

export default function ActivitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const hoverImageRef = useRef<HTMLImageElement>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    const hoverImage = hoverImageRef.current;
    if (!hoverImage || !sectionRef.current) return;

    // Fast setter for the image reveal
    const setX = gsap.quickSetter(hoverImage, "x", "px");
    const setY = gsap.quickSetter(hoverImage, "y", "px");

    const mouse = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    const speed = 0.15; // spring delay (lerp)

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      
      // Center image on cursor
      setX(pos.x - hoverImage.offsetWidth / 2);
      setY(pos.y - hoverImage.offsetHeight / 2);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <section ref={sectionRef} id="activities" data-chapter="2" className="min-h-screen py-32 bg-black text-white relative">
      <div className="px-6 mb-20 text-xs font-bold tracking-[0.2em] text-white/50">
        [ 03 ] — ACTIVITIES
      </div>

      <div className="flex flex-col border-t border-white/10 w-full relative">
        {activitiesData.map((activity) => (
          <a
            key={activity.id}
            id={activity.id === 1 ? "assignments-01" : activity.id === 6 ? "assignments-06" : `activity-${activity.id}`}
            href={activity.slug}
            onMouseEnter={() => setActiveImage(activity.hoverImageUrl)}
            onMouseLeave={() => setActiveImage(null)}
            className="activity-row group flex items-center justify-between px-6 py-8 md:py-12 border-b border-white/10 transition-all duration-500 hover:px-12 hover:bg-white/5 interactable"
          >
            {/* Date */}
            <div className="w-1/4 text-sm md:text-base font-medium text-white/40 group-hover:text-white/60 transition-colors">
              {activity.date}
            </div>

            {/* Title */}
            <div className="w-1/2 text-center text-4xl md:text-6xl lg:text-[6vw] font-black tracking-tighter uppercase transition-colors group-hover:text-white">
              {activity.title}
            </div>

            {/* Category */}
            <div className="w-1/4 text-right text-sm md:text-base font-bold tracking-widest text-white/40 group-hover:text-white transition-colors uppercase">
              {activity.category}
            </div>
          </a>
        ))}
      </div>

      {/* Hover Image Reveal */}
      <img
        ref={hoverImageRef}
        src={activeImage || activitiesData[0].hoverImageUrl}
        alt="Preview"
        className={cn(
          "hover-image-reveal fixed top-0 left-0 w-[300px] h-[400px] object-cover z-50 rounded-sm pointer-events-none",
          activeImage ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}
      />
    </section>
  );
}
