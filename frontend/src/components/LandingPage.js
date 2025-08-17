import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import FlavorHighlights from './FlavorHighlights';
import LifestyleSection from './LifestyleSection';
import JoinTribe from './JoinTribe';
import Header from './Header';
import { Toaster } from './ui/toaster';
import { mockData } from '../data/mock';

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simple loading simulation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen" style={{
        background: 'var(--bg-primary)',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--brand-primary)'
      }}>
        <div className="display-medium glow-text">XOLO</div>
      </div>
    );
  }

  return (
    <div className="landing-page">
      <Header />
      <HeroSection />
      <FlavorHighlights flavors={mockData.flavors} />
      <LifestyleSection />
      <JoinTribe />
    </div>
  );
};

export default LandingPage;