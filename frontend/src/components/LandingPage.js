import React from 'react';
import HeroSection from './HeroSection';
import FlavorShowcase from './FlavorShowcase';
import AboutSection from './AboutSection';
import CommunitySection from './CommunitySection';
import Footer from './Footer';
import { Toaster } from './ui/toaster';

const LandingPage = () => {
  return (
    <div className="cyberpunk-heritage">
      <HeroSection />
      <FlavorShowcase />
      <AboutSection />
      <CommunitySection />
      <Footer />
      <Toaster />
    </div>
  );
};

export default LandingPage;