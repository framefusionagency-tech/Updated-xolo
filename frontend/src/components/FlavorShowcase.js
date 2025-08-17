import React, { useState, useEffect } from 'react';
import { mockData } from '../data/mock';

const FlavorShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleFlavors, setVisibleFlavors] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('flavors');
      if (!section) return;

      const sectionTop = section.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;
      
      if (scrollPosition > sectionTop + 200) {
        setVisibleFlavors(mockData.flavors.map((_, index) => index));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-cycle through flavors
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % mockData.flavors.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="flavors" className="section-cyber" style={{
      background: `
        linear-gradient(135deg, var(--charcoal) 0%, var(--deep-black) 50%, var(--obsidian) 100%)
      `,
      position: 'relative'
    }}>
      {/* Cyber Grid Background */}
      <div className="cyber-grid" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.2
      }} />

      {/* Floating Particles */}
      <div className="cyber-particles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              background: mockData.flavors[i % mockData.flavors.length]?.accentColor || 'var(--electric-blue)'
            }}
          />
        ))}
      </div>

      <div className="cyber-container">
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '100px'
        }}>
          <h2 className="display-large" style={{ marginBottom: '20px' }}>
            Choose Your Energy
          </h2>
          <p className="body-cyber">
            Five flavors. Infinite possibilities. Legendary power.
          </p>
        </div>

        {/* Flavors Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '60px',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {mockData.flavors.map((flavor, index) => (
            <div
              key={flavor.id}
              className={`flavor-card ${visibleFlavors.includes(index) ? 'animate-fade-in' : ''}`}
              style={{
                opacity: visibleFlavors.includes(index) ? 1 : 0,
                animationDelay: `${index * 0.2}s`,
                position: 'relative',
                transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)'
              }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* Burst Background */}
              <div 
                className={flavor.burstClass}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  opacity: activeIndex === index ? 0.8 : 0.4,
                  transition: 'opacity 0.8s ease',
                  zIndex: 1
                }}
              />

              {/* Card Content */}
              <div style={{
                background: `
                  linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.1) 0%, 
                    rgba(255, 255, 255, 0.05) 100%)
                `,
                backdropFilter: 'blur(20px)',
                border: `2px solid ${activeIndex === index ? flavor.accentColor : 'rgba(255, 255, 255, 0.1)'}`,
                borderRadius: '20px',
                padding: '40px',
                textAlign: 'center',
                position: 'relative',
                zIndex: 2,
                transition: 'all 0.6s ease',
                boxShadow: activeIndex === index 
                  ? `0 0 40px ${flavor.accentColor}50` 
                  : '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}>
                {/* Can Image */}
                <div style={{
                  position: 'relative',
                  marginBottom: '30px',
                  height: '300px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src={flavor.image}
                    alt={flavor.name}
                    className="can-3d"
                    style={{
                      maxWidth: '200px',
                      height: 'auto',
                      maxHeight: '280px',
                      filter: `drop-shadow(0 0 30px ${flavor.accentColor})`,
                      transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
                      transform: activeIndex === index ? 'rotateY(10deg) scale(1.1)' : 'rotateY(0deg) scale(1)'
                    }}
                  />

                  {/* Energy Sparks */}
                  {activeIndex === index && [...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      style={{
                        position: 'absolute',
                        width: '4px',
                        height: '4px',
                        background: flavor.accentColor,
                        borderRadius: '50%',
                        top: `${20 + Math.random() * 60}%`,
                        left: `${20 + Math.random() * 60}%`,
                        animation: `float-particle ${2 + Math.random()}s ease-in-out infinite`,
                        boxShadow: `0 0 10px ${flavor.accentColor}`
                      }}
                    />
                  ))}
                </div>

                {/* Flavor Info */}
                <div>
                  <h3 className="heading-cyber" style={{
                    color: flavor.accentColor,
                    marginBottom: '12px',
                    fontSize: '28px'
                  }}>
                    {flavor.name}
                  </h3>
                  
                  <p className="body-glow" style={{
                    marginBottom: '16px',
                    fontStyle: 'italic',
                    color: flavor.accentColor
                  }}>
                    "{flavor.tagline}"
                  </p>
                  
                  <p className="body-cyber" style={{
                    opacity: 0.9,
                    fontSize: '16px'
                  }}>
                    {flavor.shortDesc}
                  </p>
                </div>

                {/* Neon Accent Line */}
                <div style={{
                  width: '60px',
                  height: '3px',
                  background: flavor.accentColor,
                  margin: '20px auto 0',
                  borderRadius: '2px',
                  boxShadow: `0 0 15px ${flavor.accentColor}`,
                  animation: activeIndex === index ? 'neon-pulse 2s ease-in-out infinite' : 'none'
                }} />
              </div>

              {/* Holographic Effect */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(135deg, transparent 0%, ${flavor.accentColor}10 45%, transparent 50%, ${flavor.accentColor}10 55%, transparent 100%)`,
                borderRadius: '20px',
                opacity: activeIndex === index ? 0.3 : 0,
                transition: 'opacity 0.6s ease',
                pointerEvents: 'none',
                zIndex: 3
              }} />
            </div>
          ))}
        </div>

        {/* Flavor Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '80px'
        }}>
          {mockData.flavors.map((flavor, index) => (
            <button
              key={flavor.id}
              onClick={() => setActiveIndex(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: activeIndex === index ? flavor.accentColor : 'rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeIndex === index ? `0 0 20px ${flavor.accentColor}` : 'none',
                transform: activeIndex === index ? 'scale(1.5)' : 'scale(1)'
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes animate-fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: animate-fade-in 0.8s ease-out forwards;
        }
        
        @media (max-width: 768px) {
          .flavor-card {
            max-width: 300px;
            margin: 0 auto;
          }
          
          .flavor-card img {
            max-width: 160px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FlavorShowcase;