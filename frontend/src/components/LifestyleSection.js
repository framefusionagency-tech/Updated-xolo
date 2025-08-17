import React, { useState, useEffect } from 'react';
import { mockData } from '../data/mock';

const LifestyleSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('lifestyle');
      if (!section) return;

      const sectionTop = section.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;
      
      if (scrollPosition > sectionTop + 200) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="lifestyle" className="lifestyle-section" style={{
      background: `
        linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
        url('${mockData.lifestyle.image}')
      `,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      padding: '100px 7.6923%'
    }}>
      {/* Animated Overlay */}
      <div className="lifestyle-overlay" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 30% 70%, rgba(0, 255, 209, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 70% 30%, rgba(255, 140, 0, 0.1) 0%, transparent 50%)
        `,
        animation: 'overlayShift 10s ease-in-out infinite'
      }} />

      {/* Content Grid */}
      <div className="lifestyle-content" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
        maxWidth: '1200px',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Text Content */}
        <div className="lifestyle-text" style={{
          transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 1s ease-out 0.2s'
        }}>
          <h2 className="display-large glow-text" style={{
            marginBottom: '30px',
            textShadow: '0 0 30px rgba(0, 255, 209, 0.8)'
          }}>
            {mockData.lifestyle.title}
          </h2>
          
          <p className="body-large" style={{
            marginBottom: '40px',
            color: 'var(--text-secondary)',
            lineHeight: '1.6'
          }}>
            {mockData.lifestyle.description}
          </p>
          
          <div className="lifestyle-features" style={{
            marginBottom: '50px'
          }}>
            {[
              'Urban nightlife energy',
              'Extreme sports fuel',
              'Late-night productivity',
              'Dawn-to-dusk power'
            ].map((feature, index) => (
              <div key={index} className="feature-item" style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '16px',
                transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                opacity: isVisible ? 1 : 0,
                transition: `all 0.8s ease-out ${0.4 + (index * 0.1)}s`
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  background: 'var(--brand-primary)',
                  borderRadius: '50%',
                  marginRight: '16px',
                  boxShadow: '0 0 10px rgba(0, 255, 209, 0.8)'
                }} />
                <span className="body-medium">{feature}</span>
              </div>
            ))}
          </div>
          
          <button className="btn-primary" style={{
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 1s ease-out 0.8s'
          }}>
            Join the Movement
            <span style={{ marginLeft: '8px' }}>🔥</span>
          </button>
        </div>

        {/* Visual Elements */}
        <div className="lifestyle-visual" style={{
          position: 'relative',
          textAlign: 'center',
          transform: isVisible ? 'scale(1)' : 'scale(0.8)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 1s ease-out 0.4s'
        }}>
          {/* Energy Visualization */}
          <div className="energy-rings" style={{
            position: 'relative',
            width: '300px',
            height: '300px',
            margin: '0 auto'
          }}>
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="energy-ring"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: `${100 + (i * 60)}px`,
                  height: `${100 + (i * 60)}px`,
                  border: `2px solid ${i === 0 ? 'var(--brand-primary)' : i === 1 ? '#FF8C00' : '#6A0DAD'}`,
                  borderRadius: '50%',
                  opacity: 0.6,
                  animation: `energyPulse ${3 + i}s ease-in-out infinite ${i * 0.5}s`
                }}
              />
            ))}
            
            {/* Central Power Core */}
            <div className="power-core" style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '60px',
              height: '60px',
              background: 'var(--brand-primary)',
              borderRadius: '50%',
              boxShadow: '0 0 30px rgba(0, 255, 209, 0.8)',
              animation: 'coreGlow 2s ease-in-out infinite'
            }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#000',
                fontWeight: '700',
                fontSize: '20px',
                fontFamily: 'Space Mono, monospace'
              }}>
                ⚡
              </div>
            </div>
          </div>

          {/* Floating Energy Particles */}
          <div className="energy-particles">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  position: 'absolute',
                  width: '4px',
                  height: '4px',
                  background: 'var(--brand-primary)',
                  borderRadius: '50%',
                  top: `${20 + Math.random() * 60}%`,
                  left: `${20 + Math.random() * 60}%`,
                  animation: `particleFloat ${4 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 2}s`,
                  boxShadow: '0 0 6px rgba(0, 255, 209, 0.8)'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes overlayShift {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        
        @keyframes energyPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.8; }
        }
        
        @keyframes coreGlow {
          0%, 100% { box-shadow: 0 0 30px rgba(0, 255, 209, 0.8); }
          50% { box-shadow: 0 0 50px rgba(0, 255, 209, 1); }
        }
        
        @keyframes particleFloat {
          0%, 100% { transform: translateY(0px); opacity: 0.4; }
          50% { transform: translateY(-20px); opacity: 1; }
        }
        
        @media (max-width: 768px) {
          .lifestyle-content {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          
          .energy-rings {
            width: 200px !important;
            height: 200px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default LifestyleSection;