"use client";

import React, { useRef } from "react";

interface InteractivePortraitProps {
  imageSrc?: string;
  className?: string;
}

export default function InteractivePortrait({
  imageSrc = "/test_portrait.png?v=4",
  className = "",
}: InteractivePortraitProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-sm cursor-pointer shadow-2xl transition-transform duration-500 hover:scale-[1.02] ${className}`}
    >
      {/* Clean high quality image display without glitch or color displacement */}
      <img
        src={imageSrc}
        alt="Portrait"
        className="w-full h-full object-cover block transition-opacity duration-300"
      />
    </div>
  );
}
