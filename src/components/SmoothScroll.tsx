"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo.inOut like feel
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 2,
    });

    lenis.on("scroll", ScrollTrigger.update);

    // 1. Assign the loop to a named function variable
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    // 2. Add the named function
    gsap.ticker.add(update);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).lenis = lenis;

    gsap.ticker.lagSmoothing(0);

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (window as any).lenis;

      // 3. Remove the exact same named function before destroying lenis
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
