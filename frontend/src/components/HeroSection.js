import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { mockData } from '../data/mock';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToFlavors = () => {
    document.getElementById('flavors')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" style={{
      minHeight: '100vh',
      background: `
        radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
          rgba(0, 217, 255, 0.1) 0%, 
          rgba(255, 0, 128, 0.05) 50%, 
          var(--deep-black) 100%)
      `,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      {/* Cyber Grid Background */}
      <div className="cyber-grid" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.3
      }} />

      {/* Aztec Pattern Overlay */}
      <div className="aztec-pattern" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.1,
        animation: 'aztec-glow 8s ease-in-out infinite'
      }} />

      {/* 3D Spline Background - Desktop Only */}
      {!isMobile && (
        <div className="spline-cyber" style={{
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

      {/* Floating Particles */}
      <div className="cyber-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Pyramid Silhouettes */}
      <div className="heritage-elements" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
        pointerEvents: 'none'
      }}>
        {/* Large Pyramid */}
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '10%',
          width: '200px',
          height: '150px',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          background: 'rgba(212, 175, 55, 0.1)',
          animation: 'aztec-glow 6s ease-in-out infinite'
        }} />
        
        {/* Small Pyramid */}
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '15%',
          width: '120px',
          height: '90px',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          background: 'rgba(0, 168, 107, 0.1)',
          animation: 'aztec-glow 4s ease-in-out infinite'
        }} />

        {/* Xolo Silhouette */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '20%',
          width: '80px',
          height: '60px',
          background: 'rgba(255, 215, 0, 0.2)',
          borderRadius: '40% 60% 30% 70%',
          animation: 'neon-pulse 5s ease-in-out infinite'
        }} />
      </div>

      {/* Main Content */}
      <div className="cyber-container" style={{ position: 'relative', zIndex: 3 }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {/* XOLO Logo */}
          <div style={{
            marginBottom: '60px',
            animation: 'float-particle 6s ease-in-out infinite'
          }}>
            <div className="display-large neon-glow" style={{
              fontSize: 'clamp(48px, 8vw, 80px)',
              fontFamily: 'var(--font-display)',
              letterSpacing: '8px'
            }}>
              XOLO
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="display-massive" style={{
            marginBottom: '30px',
            maxWidth: '900px',
            margin: '0 auto 30px'
          }}>
            {mockData.hero.headline}
          </h1>
          
          <p className="body-cyber" style={{
            marginBottom: '60px',
            maxWidth: '600px',
            margin: '0 auto 60px',
            opacity: 0.9
          }}>
            {mockData.hero.subline}
          </p>

          {/* Floating Cans */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            marginBottom: '60px',
            flexWrap: 'wrap'
          }}>
            {mockData.flavors.slice(0, 3).map((flavor, index) => (
              <div
                key={flavor.id}
                className="can-3d"
                style={{
                  animation: `float-particle ${6 + index}s ease-in-out infinite ${index * 0.5}s`
                }}
              >
                <img 
                  src={flavor.image}
                  alt={flavor.name}
                  style={{
                    width: '120px',
                    height: 'auto',
                    filter: `drop-shadow(0 0 20px ${flavor.accentColor})`,
                    transition: 'all 0.6s ease'
                  }}
                />
              </div>
            ))}
          </div>

          {/* CTA */}
          <button 
            className="btn-neon neon-glow"
            onClick={scrollToFlavors}
            style={{
              fontSize: '18px',
              padding: '20px 40px'
            }}
          >
            {mockData.hero.cta}
          </button>

          {/* Scroll Indicator */}
          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div className="body-glow">Scroll to explore</div>
            <div style={{
              width: '2px',
              height: '40px',
              background: 'var(--electric-blue)',
              opacity: 0.8,
              animation: 'neon-pulse 2s ease-in-out infinite'
            }} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hero-section .can-3d {
            width: 80px !important;
          }
          
          .hero-section .can-3d img {
            width: 80px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;