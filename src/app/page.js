import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import StarsCanvas from "./components/StarsCanvas"; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] relative" style={{ height: "100vh" }}>
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
