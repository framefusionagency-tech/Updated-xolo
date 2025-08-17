import React, { useState, useEffect } from 'react';
import { mockData } from '../data/mock';

const HeroSection = () => {
  const [currentCanIndex, setCurrentCanIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-cycle cans every 4 seconds
    const interval = setInterval(() => {
      setCurrentCanIndex((prev) => (prev + 1) % mockData.cans.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentCan = mockData.cans[currentCanIndex];

  const scrollToFlavors = () => {
    document.getElementById('flavors')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" style={{
      minHeight: '100vh',
      background: `
        linear-gradient(135deg, var(--primary-white) 0%, var(--light-stone) 100%)
      `,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      paddingTop: '80px'
    }}>
      {/* Subtle Aztec Pattern Background */}
      <div className="aztec-pattern" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.03
      }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Content Side */}
          <div className={`hero-content ${isVisible ? 'animate-fade-in' : ''}`} style={{
            animationDelay: '0.2s'
          }}>
            <h1 className="hero-headline">
              {mockData.hero.headline}
            </h1>
            
            <p className="hero-sub">
              {mockData.hero.subline}  
            </p>

            <button 
              className="btn-primary"
              onClick={scrollToFlavors}
              style={{
                fontSize: '16px',
                padding: '18px 36px'
              }}
            >
              {mockData.hero.cta}
            </button>

            {/* Can Selector Dots */}
            <div style={{
              display: 'flex',
              gap: '12px',
              marginTop: '40px'
            }}>
              {mockData.cans.map((can, index) => (
                <button
                  key={can.id}
                  onClick={() => setCurrentCanIndex(index)}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: 'none',
                    background: currentCanIndex === index ? can.color : 'var(--accent-grey)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: currentCanIndex === index ? 'scale(1.2)' : 'scale(1)'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Can Display Side */}
          <div className={`hero-can ${isVisible ? 'animate-fade-in' : ''}`} style={{
            animationDelay: '0.4s',
            textAlign: 'center',
            position: 'relative'
          }}>
            {/* Background Circle */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '400px',
              height: '400px',
              background: `radial-gradient(circle, ${currentCan.color}15 0%, transparent 70%)`,
              borderRadius: '50%',
              transition: 'all 1s ease',
              zIndex: 1
            }} />

            {/* Can Image */}
            <div className="can-container" style={{
              position: 'relative',
              zIndex: 2,
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
              <img 
                src={currentCan.image}
                alt={currentCan.name}
                style={{
                  maxWidth: '350px',
                  height: 'auto',
                  filter: `drop-shadow(0 20px 40px ${currentCan.color}30)`,
                  transition: 'all 0.8s ease',
                  animation: 'float 6s ease-in-out infinite'
                }}
              />

              {/* Shine Effect */}
              <div style={{
                position: 'absolute',
                top: '15%',
                left: '30%',
                width: '30px',
                height: '60%',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)',
                borderRadius: '15px',
                animation: 'shine 3s ease-in-out infinite',
                pointerEvents: 'none'
              }} />
            </div>

            {/* Floating Elements */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  width: '6px',
                  height: '6px',
                  background: currentCan.color,
                  borderRadius: '50%',
                  top: `${20 + Math.random() * 60}%`,
                  left: `${20 + Math.random() * 60}%`,
                  opacity: 0.4,
                  animation: `float ${4 + Math.random() * 2}s ease-in-out infinite ${Math.random() * 2}s`,
                  zIndex: 1
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }}>
        <span className="body-small">Explore flavors</span>
        <div style={{
          width: '2px',
          height: '30px',
          background: 'var(--text-light)',
          opacity: 0.6
        }} />
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hero-section > .container > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          
          .hero-content {
            order: 2;
          }
          
          .hero-can {
            order: 1;
          }
          
          .hero-can img {
            max-width: 280px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;