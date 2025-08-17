import React, { useState, useEffect } from 'react';
import { mockData } from '../data/mock';

const HeroSection = () => {
  const [currentFlavorIndex, setCurrentFlavorIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-cycle through flavors every 3.5 seconds
    const interval = setInterval(() => {
      setCurrentFlavorIndex((prev) => (prev + 1) % mockData.flavors.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const currentFlavor = mockData.flavors[currentFlavorIndex];

  const scrollToFlavors = () => {
    document.getElementById('flavors')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" style={{
      minHeight: '100vh',
      background: 'var(--cream)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      paddingTop: '80px'
    }}>
      {/* Subtle Pattern Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 20% 20%, ${currentFlavor?.accentColor}15 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, ${currentFlavor?.accentColor}10 0%, transparent 50%)
        `,
        transition: 'all 1.5s ease-in-out',
        zIndex: 1
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
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
            <h1 className="hero-headline" style={{
              marginBottom: '24px'
            }}>
              {mockData.hero.headline}
            </h1>
            
            <p className="body-large" style={{
              marginBottom: '40px',
              maxWidth: '480px'
            }}>
              {mockData.hero.subline}
            </p>

            <div style={{
              display: 'flex',
              gap: '16px',
              marginBottom: '50px',
              flexWrap: 'wrap'
            }}>
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
              
              <button 
                className="btn-secondary"
                onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Flavors
              </button>
            </div>

            {/* Flavor Dots */}
            <div style={{
              display: 'flex',
              gap: '12px',
              alignItems: 'center'
            }}>
              <span className="body-small" style={{ marginRight: '8px' }}>
                Try all flavors:
              </span>
              {mockData.flavors.map((flavor, index) => (
                <button
                  key={flavor.id}
                  onClick={() => setCurrentFlavorIndex(index)}
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    border: 'none',
                    background: currentFlavorIndex === index ? flavor.accentColor : 'var(--light-grey)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: currentFlavorIndex === index ? 'scale(1.3)' : 'scale(1)'
                  }}
                  title={flavor.name}
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
            {/* Background Shape */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '400px',
              height: '400px',
              background: `${currentFlavor?.accentColor}20`,
              borderRadius: '50%',
              transition: 'all 1s ease-in-out',
              zIndex: 1
            }} />

            {/* Main Can */}
            <div className="can-container animate-float" style={{
              position: 'relative',
              zIndex: 2,
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
              <img 
                src={currentFlavor?.image}
                alt={currentFlavor?.name}
                style={{
                  maxWidth: '320px',
                  height: 'auto',
                  filter: `drop-shadow(0 20px 40px ${currentFlavor?.accentColor}30)`,
                  transition: 'all 0.8s ease-in-out',
                  objectFit: 'contain',
                  background: 'transparent'
                }}
              />
            </div>

            {/* Flavor Badge */}
            <div style={{
              position: 'absolute',
              bottom: '20%',
              right: '10%',
              background: 'var(--white)',
              padding: '12px 20px',
              borderRadius: '25px',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.8s ease',
              zIndex: 3
            }}>
              <p className="tagline-fun" style={{
                color: currentFlavor?.accentColor,
                margin: 0,
                whiteSpace: 'nowrap'
              }}>
                {currentFlavor?.tagline}
              </p>
            </div>

            {/* Floating Elements */}
            <div style={{
              position: 'absolute',
              top: '15%',
              left: '15%',
              width: '60px',
              height: '60px',
              background: `${currentFlavor?.accentColor}25`,
              borderRadius: '50%',
              animation: 'float-gentle 6s ease-in-out infinite',
              transition: 'background 1s ease'
            }} />
            
            <div style={{
              position: 'absolute',
              bottom: '30%',
              left: '5%',
              width: '40px',
              height: '40px',
              background: `${currentFlavor?.accentColor}30`,
              borderRadius: '8px',
              transform: 'rotate(45deg)',
              animation: 'float-gentle 4s ease-in-out infinite 1s',
              transition: 'background 1s ease'
            }} />
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
        gap: '12px',
        zIndex: 2
      }}>
        <span className="body-small">Scroll for flavors</span>
        <div style={{
          width: '2px',
          height: '30px',
          background: 'var(--medium-grey)',
          borderRadius: '1px',
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
            max-width: 250px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;