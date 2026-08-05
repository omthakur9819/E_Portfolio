"use client";

import React from "react";

const projects = [
  {
    id: "01",
    role: "Full-Stack Development & Design",
    year: "2026",
    client: "BuyVora",
    title: "BUYVORA",
    description:
      "An end-to-end modern e-commerce platform featuring intelligent product search, category filtering, real-time analytics, and admin order management.",
    image: "/projects/buyvora.png?v=2",
    link: "https://github.com/omthakur9819/Buyvora",
    align: "left",
  },
  {
    id: "02",
    role: "Machine Learning & System Architecture",
    year: "2026",
    client: "Weather Forecasting System",
    title: "WEATHER FORECASTING",
    description:
      "An intelligent machine learning system utilizing Random Forest & XGBoost models to predict temperature MAE and rain chance using live Open-Meteo data for Mumbai, India.",
    image: "/projects/weather_predictor.png?v=2",
    link: "#",
    align: "right",
  },
];

export default function FeaturedWorkSection() {
  return (
    <section
      id="projects"
      className="w-full bg-[#0B0B0C] text-[#F4F4F5] px-8 py-24 md:py-36 border-t border-neutral-800 relative select-none"
    >
      {/* Top Header */}
      <div className="flex justify-between items-center text-xs font-mono tracking-widest text-neutral-400 uppercase mb-16">
        <span>(02) FEATURED WORK</span>
        <span>[ SCROLL TO EXPLORE MORE ]</span>
      </div>

      <h2 className="text-5xl sm:text-7xl md:text-9xl font-extrabold tracking-tight uppercase leading-none mb-24 text-center md:text-left text-white">
        FEATURED WORK
      </h2>

      {/* Projects Grid */}
      <div className="flex flex-col gap-32 md:gap-48 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`flex flex-col ${
              project.align === "right" ? "md:items-end" : "md:items-start"
            } group interactable`}
          >
            <div className="w-full md:w-[70%] space-y-6">
              {/* Project Image Card with Hover Zoom & Hyperlink */}
              <a
                href={project.link}
                target={project.link !== "#" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-sm bg-neutral-950 aspect-[16/10] shadow-2xl relative group/img border border-neutral-800 flex items-center justify-center cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </a>

              {/* Project Metadata */}
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs md:text-sm font-mono uppercase text-neutral-400 pt-2 border-t border-neutral-800">
                <span>
                  ({project.id}) {project.role}
                </span>
                <span>{project.year}</span>
                <span>{project.client}</span>
              </div>

              {/* Project Title with Hyperlink */}
              <a
                href={project.link}
                target={project.link !== "#" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="inline-block group/link cursor-pointer"
              >
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white group-hover:text-emerald-400 group-hover/link:text-emerald-400 transition-colors flex items-center gap-3">
                  <span>{project.title}</span>
                  {project.link !== "#" && (
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8 text-emerald-400 opacity-90 transition-transform transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  )}
                </h3>
              </a>

              {/* Project Description */}
              <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
