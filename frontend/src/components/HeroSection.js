import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { mockData } from '../data/mock';

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToFlavors = () => {
    document.getElementById('flavors')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" style={{
      position: 'relative',
      height: '100vh',
      background: 'var(--bg-primary)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '80px'
    }}>
      {/* Animated Background Grid */}
      <div className="hero-background" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 20%, rgba(0, 255, 209, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(0, 139, 139, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(106, 13, 173, 0.05) 0%, transparent 50%)
        `,
        animation: 'gradientShift 8s ease-in-out infinite'
      }} />

      {/* Spline 3D Background - Only on Desktop */}
      {!isMobile && (
        <div className="spline-container" style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          opacity: splineLoaded ? 0.6 : 0,
          transition: 'opacity 1s ease-in-out',
          overflow: 'hidden'
        }}>
          <Spline
            scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode"
            onLoad={() => setSplineLoaded(true)}
            style={{
              width: '700px',
              height: '700px',
              position: 'relative',
              overflow: 'visible'
            }}
          />
        </div>
      )}

      {/* Canvas Fallback for Mobile */}
      {isMobile && (
        <div className="mobile-particles" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 30% 30%, rgba(0, 255, 209, 0.2) 0%, transparent 30%),
            radial-gradient(circle at 70% 70%, rgba(106, 13, 173, 0.2) 0%, transparent 30%)
          `,
          animation: 'mobileFloat 6s ease-in-out infinite'
        }} />
      )}

      {/* Main Content */}
      <div className="hero-content" style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        maxWidth: '1200px',
        padding: '0 20px'
      }}>
        {/* Hero Text */}
        <div className="hero-text" style={{ marginBottom: '60px' }}>
          <h1 className="display-huge glow-text" style={{ 
            marginBottom: '20px',
            textShadow: '0 0 30px rgba(0, 255, 209, 0.8)'
          }}>
            {mockData.hero.mainTitle}
          </h1>
          <p className="display-medium" style={{ 
            marginBottom: '40px',
            color: 'var(--text-secondary)'
          }}>
            {mockData.hero.subtitle}
          </p>
          <button 
            className="btn-primary"
            onClick={scrollToFlavors}
            style={{
              fontSize: '20px',
              padding: '18px 36px',
              minHeight: '64px'
            }}
          >
            {mockData.hero.ctaText}
            <span style={{ marginLeft: '12px' }}>⚡</span>
          </button>
        </div>

        {/* Cans Showcase */}
        <div className="cans-showcase" style={{
          position: 'relative',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <img 
            src={mockData.hero.allCansImage}
            alt="XOLO Energy Drinks"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '400px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 20px 40px rgba(0, 255, 209, 0.3))',
              animation: 'canFloat 4s ease-in-out infinite'
            }}
          />
          
          {/* Floating Energy Drops */}
          <div className="energy-drops">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="energy-drop"
                style={{
                  position: 'absolute',
                  width: '4px',
                  height: '20px',
                  background: 'var(--brand-primary)',
                  borderRadius: '50px',
                  opacity: 0.8,
                  animation: `dropFall 3s ease-in-out infinite ${i * 0.5}s`,
                  left: `${20 + (i * 12)}%`,
                  top: '-20px',
                  boxShadow: '0 0 10px rgba(0, 255, 209, 0.8)'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'var(--text-muted)',
        fontSize: '14px',
        animation: 'bounce 2s infinite'
      }}>
        <div style={{ marginBottom: '8px' }}>Scroll to explore</div>
        <div style={{ 
          width: '2px', 
          height: '30px', 
          background: 'var(--brand-primary)', 
          margin: '0 auto',
          opacity: 0.6
        }} />
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes canFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes dropFall {
          0% { transform: translateY(-20px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100px); opacity: 0; }
        }
        
        @keyframes mobileFloat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-10px); }
          60% { transform: translateX(-50%) translateY(-5px); }
        }
        
        @media (max-width: 768px) {
          .hero-content {
            padding: 0 20px;
          }
          
          .display-huge {
            font-size: 36px;
          }
          
          .display-medium {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;