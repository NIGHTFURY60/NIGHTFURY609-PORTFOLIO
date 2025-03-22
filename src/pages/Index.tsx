
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Layout from '@/components/Layout';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  // Initialize GSAP on page load
  useEffect(() => {
    // Initial page fade in
    gsap.fromTo(
      "body",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );
    
    // Clean up all ScrollTriggers when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
