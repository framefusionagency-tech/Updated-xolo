import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { mockData } from '../data/mock';

const MotionStrip = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="motion-strip" style={{
      height: '60vh',
      position: 'relative',
      background: `
        linear-gradient(135deg, var(--obsidian) 0%, #0F1219 50%, var(--obsidian) 100%)
      `,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* 3D Motion Background - Desktop Only */}
      {!isMobile && (
        <div className="motion-3d" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: isSplineLoaded ? 0.3 : 0,
          transition: 'opacity 2s ease-in-out'
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

      {/* Animated Elements */}
      <div className="motion-elements" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1
      }}>
        {/* Orbiting Moon */}
        <div className="moon-orbit" style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          border: '1px solid rgba(185, 197, 214, 0.2)',
          animation: 'float 8s ease-in-out infinite'
        }}>
          <div className="moon" style={{
            position: 'absolute',
            top: '-10px',
            left: '-10px',
            width: '30px',
            height: '30px',
            background: `
              radial-gradient(circle at 30% 30%, var(--moonlight) 0%, #8A9BB5 100%)
            `,
            borderRadius: '50%',
            boxShadow: '0 0 20px rgba(185, 197, 214, 0.6)',
            animation: 'orbit 12s linear infinite'
          }} />
        </div>

        {/* Rotating Glyph Tiles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="glyph-tile"
            style={{
              position: 'absolute',
              width: '20px',
              height: '20px',
              background: i % 3 === 0 ? 'var(--jade)' : i % 3 === 1 ? 'var(--gold)' : 'var(--ember)',
              top: `${20 + (i % 4) * 20}%`,
              left: `${10 + Math.floor(i / 4) * 25}%`,
              opacity: 0.4,
              borderRadius: '2px',
              boxShadow: `0 0 15px ${i % 3 === 0 ? 'var(--jade-glow)' : i % 3 === 1 ? 'var(--gold-glow)' : 'var(--ember-glow)'}`,
              animation: `rotate-glyph ${8 + (i % 3) * 2}s linear infinite, glow-pulse ${4 + (i % 4)}s ease-in-out infinite`
            }}
          />
        ))}

        {/* Ember Glow Particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="ember-particle"
            style={{
              position: 'absolute',
              width: '6px',
              height: '6px',
              background: 'var(--ember)',
              borderRadius: '50%',
              top: `${30 + Math.random() * 40}%`,
              left: `${20 + Math.random() * 60}%`,
              opacity: 0.6,
              boxShadow: '0 0 15px var(--ember-glow)',
              animation: `ember-float ${6 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`
            }}
          />
        ))}

        {/* Parallax Stone Pillars */}
        <div className="pillar-left" style={{
          position: 'absolute',
          left: '5%',
          top: '10%',
          width: '60px',
          height: '80%',
          background: `
            linear-gradient(180deg, var(--obsidian-light) 0%, var(--obsidian) 100%)
          `,
          borderRadius: '30px',
          opacity: 0.6,
          boxShadow: 'inset 0 0 30px rgba(0,0,0,0.8)',
          animation: 'parallax-left 10s ease-in-out infinite'
        }} />

        <div className="pillar-right" style={{
          position: 'absolute',
          right: '5%',
          top: '10%',
          width: '60px',
          height: '80%',
          background: `
            linear-gradient(180deg, var(--obsidian-light) 0%, var(--obsidian) 100%)
          `,
          borderRadius: '30px',
          opacity: 0.6,
          boxShadow: 'inset 0 0 30px rgba(0,0,0,0.8)',
          animation: 'parallax-right 10s ease-in-out infinite'
        }} />
      </div>

      {/* Main Content */}
      <div className="motion-content" style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center'
      }}>
        <h2 className="headline-huge" style={{
          fontSize: 'clamp(36px, 6vw, 64px)',
          animation: 'float 6s ease-in-out infinite'
        }}>
          {mockData.motionStrip.text}
        </h2>
      </div>

      {/* Additional Animations */}
      <style jsx>{`
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(75px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(75px) rotate(-360deg); }
        }
        
        @keyframes rotate-glyph {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes ember-float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
          33% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
          66% { transform: translateY(-10px) translateX(-10px); opacity: 0.6; }
        }
        
        @keyframes parallax-left {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(-10px); }
        }
        
        @keyframes parallax-right {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(10px); }
        }
        
        @media (max-width: 768px) {
          .motion-elements {
            opacity: 0.5;
          }
          
          .pillar-left,
          .pillar-right {
            width: 30px !important;
          }
          
          .moon-orbit {
            width: 100px !important;
            height: 100px !important;
          }
          
          .glyph-tile {
            width: 12px !important;
            height: 12px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default MotionStrip;