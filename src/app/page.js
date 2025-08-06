import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import StarsCanvas from "./components/StarsCanvas";
import AdBanner from "./components/AdBanner"; // QC trên cùng

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] relative">
      <AdBanner />
      {/* 👇 Spacer để đẩy Navbar xuống, cao bằng chiều cao của AdBanner */}
      <div className="h-10" />
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4 relative">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
      <div className="stars-canvas">
        <StarsCanvas />
      </div>
    </main>
  );
}
