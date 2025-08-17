import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { mockData } from '../data/mock';

const HeroSection = () => {
  const [currentCanIndex, setCurrentCanIndex] = useState(0);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-cycle cans every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCanIndex((prev) => (prev + 1) % mockData.cans.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const scrollToGallery = () => {
    document.getElementById('can-gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNewsletter = () => {
    document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentCan = mockData.cans[currentCanIndex];

  return (
    <section className="hero-section stone-texture" style={{
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: `
        radial-gradient(circle at 20% 20%, rgba(26, 167, 149, 0.1) 0%, transparent 40%),
        radial-gradient(circle at 80% 80%, rgba(217, 164, 65, 0.08) 0%, transparent 40%),
        linear-gradient(180deg, var(--obsidian) 0%, #151922 100%)
      `,
      overflow: 'hidden'
    }}>
      {/* Spline 3D Background - Desktop Only */}
      {!isMobile && (
        <div className="spline-background" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: isSplineLoaded ? 0.4 : 0,
          transition: 'opacity 2s ease-in-out',
          zIndex: 1
        }}>
          <Spline
            scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode"
            onLoad={() => setIsSplineLoaded(true)}
            style={{
              width: '100%',
              height: '100%',
              pointerEvents: 'none'
            }}
          />
        </div>
      )}

      {/* Temple Courtyard Elements */}
      <div className="temple-elements" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
        pointerEvents: 'none'
      }}>
        {/* Stone Xolo Head (Background) */}
        <div className="xolo-head" style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          background: `
            radial-gradient(ellipse at center, rgba(217, 164, 65, 0.3) 0%, transparent 70%),
            linear-gradient(135deg, var(--obsidian-light) 0%, var(--obsidian) 100%)
          `,
          borderRadius: '50% 50% 30% 30%',
          opacity: 0.6,
          filter: 'blur(1px)'
        }}>
          {/* Glowing Eyes */}
          <div style={{
            position: 'absolute',
            top: '40%',
            left: '25%',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: 'var(--gold)',
            boxShadow: '0 0 30px var(--gold-glow)',
            animation: 'glow-pulse 4s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            top: '40%',
            right: '25%',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: 'var(--gold)',
            boxShadow: '0 0 30px var(--gold-glow)',
            animation: 'glow-pulse 4s ease-in-out infinite 2s'
          }} />
        </div>

        {/* Jade Inlay Patterns */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="jade-inlay"
            style={{
              position: 'absolute',
              width: '2px',
              height: '60px',
              background: 'var(--jade)',
              left: `${15 + i * 12}%`,
              top: `${20 + Math.sin(i) * 20}%`,
              transform: `rotate(${i * 15}deg)`,
              opacity: 0.4,
              boxShadow: '0 0 10px var(--jade-glow)',
              animation: `glow-pulse ${3 + i * 0.5}s ease-in-out infinite`
            }}
          />
        ))}

        {/* Ember Torchlight */}
        <div className="torchlight left" style={{
          position: 'absolute',
          top: '20%',
          left: '5%',
          width: '80px',
          height: '120px',
          background: `
            radial-gradient(ellipse at bottom, var(--ember) 0%, rgba(196, 89, 43, 0.4) 40%, transparent 70%)
          `,
          animation: 'ember-flicker 3s ease-in-out infinite'
        }} />
        
        <div className="torchlight right" style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '80px',
          height: '120px',
          background: `
            radial-gradient(ellipse at bottom, var(--ember) 0%, rgba(196, 89, 43, 0.4) 40%, transparent 70%)
          `,
          animation: 'ember-flicker 2.5s ease-in-out infinite'
        }} />
      </div>

      {/* Main Content */}
      <div className="temple-container" style={{ position: 'relative', zIndex: 3 }}>
        <div className="hero-content" style={{
          textAlign: 'center',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {/* Headlines */}
          <h1 className="headline-huge" style={{ 
            marginBottom: '20px',
            animation: 'float 6s ease-in-out infinite'
          }}>
            {mockData.hero.headline}
          </h1>
          
          <p className="subline" style={{ 
            marginBottom: '60px',
            maxWidth: '600px',
            margin: '0 auto 60px'
          }}>
            {mockData.hero.subline}
          </p>

          {/* Hero Can on Plinth */}
          <div className="hero-plinth" style={{
            position: 'relative',
            margin: '60px auto',
            maxWidth: '400px'
          }}>
            {/* Jade Plinth Base */}
            <div className="plinth-base" style={{
              width: '200px',
              height: '40px',
              background: `
                linear-gradient(135deg, var(--jade) 0%, #1FC4AB 100%)
              `,
              margin: '0 auto',
              borderRadius: '4px',
              boxShadow: '0 10px 40px var(--jade-glow)',
              position: 'relative',
              zIndex: 1
            }}>
              {/* Glowing Inlays */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '20%',
                width: '8px',
                height: '2px',
                background: 'var(--gold)',
                boxShadow: '0 0 10px var(--gold-glow)'
              }} />
              <div style={{
                position: 'absolute',
                top: '50%',
                right: '20%',
                width: '8px',
                height: '2px',
                background: 'var(--gold)',
                boxShadow: '0 0 10px var(--gold-glow)'
              }} />
            </div>

            {/* Hero Can */}
            <div className="hero-can" style={{
              position: 'relative',
              marginTop: '-20px',
              zIndex: 2
            }}>
              <img 
                src={currentCan.image}
                alt={currentCan.name}
                style={{
                  maxWidth: '300px',
                  height: 'auto',
                  filter: `drop-shadow(0 20px 40px ${currentCan.color}60)`,
                  animation: 'float 4s ease-in-out infinite',
                  transition: 'all 1s ease-in-out'
                }}
              />

              {/* Specular Sweep on Can */}
              <div className="specular-sweep" style={{
                position: 'absolute',
                top: '10%',
                left: 0,
                width: '30px',
                height: '80%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                animation: 'specular-sweep 8s ease-in-out infinite',
                borderRadius: '50px'
              }} />

              {/* Animated Droplets */}
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="droplet"
                  style={{
                    position: 'absolute',
                    width: '4px',
                    height: '8px',
                    background: 'var(--moonlight)',
                    borderRadius: '50% 50% 50% 0',
                    left: `${30 + i * 20}%`,
                    top: '20%',
                    opacity: 0.8,
                    animation: `droplet-fall ${2 + i * 0.5}s ease-in-out infinite ${i * 0.5}s`
                  }}
                />
              ))}
            </div>

            {/* Can Selection Dots */}
            <div className="can-selector" style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '30px'
            }}>
              {mockData.cans.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCanIndex(index)}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: 'none',
                    background: currentCanIndex === index ? 'var(--gold)' : 'rgba(185, 197, 214, 0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: currentCanIndex === index ? '0 0 15px var(--gold-glow)' : 'none'
                  }}
                />
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="hero-ctas" style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '60px'
          }}>
            <button 
              className="btn-primary glow-gold"
              onClick={scrollToGallery}
            >
              {mockData.hero.primaryCTA}
            </button>
            
            <button 
              className="btn-secondary"
              onClick={scrollToNewsletter}
            >
              {mockData.hero.secondaryCTA}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        zIndex: 3
      }}>
        <div className="body-small">Explore the temple</div>
        <div style={{
          width: '2px',
          height: '30px',
          background: 'var(--jade)',
          opacity: 0.6,
          animation: 'glow-pulse 2s ease-in-out infinite'
        }} />
      </div>
    </section>
  );
};

export default HeroSection;