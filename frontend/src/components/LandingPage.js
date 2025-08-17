import React from 'react';
import HeroSection from './HeroSection';
import CanGallery from './CanGallery';
import BrandStory from './BrandStory';
import MotionStrip from './MotionStrip';
import Newsletter from './Newsletter';
import Footer from './Footer';
import { Toaster } from './ui/toaster';

const LandingPage = () => {
  return (
    <div className="midnight-temple">
      <HeroSection />
      <CanGallery />
      <BrandStory />
      <MotionStrip />
      <Newsletter />
      <Footer />
      <Toaster />
    </div>
  );
};

export default LandingPage;