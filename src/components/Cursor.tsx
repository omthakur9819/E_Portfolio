"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Fast setter for performance
    const setX = gsap.quickSetter(cursor, "x", "px");
    const setY = gsap.quickSetter(cursor, "y", "px");

    const mouse = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    const speed = 0.2; // lerp speed

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      setX(pos.x);
      setY(pos.y);
    });

    // Magnetic and scale effect on interactables via event delegation
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .interactable")) {
        gsap.to(cursor, { scale: 3, duration: 0.3, ease: "power3.out" });
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .interactable")) {
        gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power3.out" });
      }
    };

    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={cn(
        "fixed top-0 left-0 w-4 h-4 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference",
        "transform -translate-x-1/2 -translate-y-1/2 will-change-transform"
      )}
    />
  );
}
