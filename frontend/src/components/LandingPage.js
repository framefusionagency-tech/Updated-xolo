import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import FlavorShowcase from './FlavorShowcase';
import LifestyleSection from './LifestyleSection';
import HighlightSection from './HighlightSection';
import Newsletter from './Newsletter';
import Footer from './Footer';
import { Toaster } from './ui/toaster';

const LandingPage = () => {
  return (
    <div className="brand-landing">
      <Header />
      <HeroSection />
      <FlavorShowcase />
      <LifestyleSection />
      <HighlightSection />
      <Newsletter />
      <Footer />
      <Toaster />
    </div>
  );
};

export default LandingPage;