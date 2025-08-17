import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import FlavorSection from './FlavorSection';
import TaglineSection from './TaglineSection';
import ShopSection from './ShopSection';
import Newsletter from './Newsletter';
import Footer from './Footer';
import { Toaster } from './ui/toaster';

const LandingPage = () => {
  return (
    <div className="playful-landing">
      <Header />
      <HeroSection />
      <FlavorSection />
      <TaglineSection />
      <ShopSection />
      <Newsletter />
      <Footer />
      <Toaster />
    </div>
  );
};

export default LandingPage;