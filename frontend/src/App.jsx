import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FleetSection from "./components/FleetSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import NewSection from "./components/NewSection";
import ContactSection from "./components/ContactSection";

const App = () => {
  return (
    <div className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
      <Navbar />
      <section id="hero" className="h-screen snap-start transition-snap animate-soft-landing">
        <HeroSection />
      </section>
      <section id="fleet" className="h-screen snap-start transition-snap animate-soft-landing">
        <FleetSection />
      </section>
      <section id="about" className="h-screen snap-start transition-snap animate-soft-landing">
        <AboutSection />
      </section>
      <section id="services" className="h-screen snap-start transition-snap animate-soft-landing">
        <ServicesSection />
      </section>
      <section id="news" className="h-screen snap-start transition-snap animate-soft-landing">
        <NewSection />
      </section>
      <section id="contact" className="h-screen snap-start transition-snap animate-soft-landing">
        <ContactSection />
      </section>
    </div>
  );
};

export default App;
