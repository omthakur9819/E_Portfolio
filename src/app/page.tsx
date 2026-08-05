"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import MeSection from "@/components/sections/MeSection";
import AboutSection from "@/components/sections/AboutSection";
import FeaturedWorkSection from "@/components/sections/FeaturedWorkSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import ServicesSection from "@/components/sections/ServicesSection";
import ActivitiesSection from "@/components/sections/ActivitiesSection";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {!loading && (
        <main className="min-h-screen bg-black text-white relative flex flex-col">
          <Header />
          <MeSection />
          <AboutSection />
          <FeaturedWorkSection />
          <PhilosophySection />
          <ServicesSection />
          <ActivitiesSection />
        </main>
      )}
    </>
  );
}
