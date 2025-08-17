import React, { useState, useEffect } from 'react';

const FlavorHighlights = ({ flavors }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('flavors');
      if (!section) return;

      const sectionTop = section.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      flavors.forEach((_, index) => {
        const flavorElement = document.getElementById(`flavor-${index}`);
        if (flavorElement) {
          const elementTop = flavorElement.offsetTop;
          const elementHeight = flavorElement.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementTop + elementHeight) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [flavors]);

  return (
    <section id="flavors" className="flavor-highlights" style={{
      background: 'var(--bg-primary)',
      position: 'relative'
    }}>
      {flavors.map((flavor, index) => (
        <div
          key={flavor.id}
          id={`flavor-${index}`}
          className="flavor-section"
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            background: activeIndex === index ? flavor.backgroundGradient : 'var(--bg-primary)',
            transition: 'background 0.8s ease-in-out',
            padding: '100px 7.6923%'
          }}
        >
          {/* Background Pattern */}
          <div className="flavor-pattern" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: activeIndex === index ? 0.1 : 0,
            background: `
              repeating-linear-gradient(
                45deg,
                ${flavor.color}20,
                ${flavor.color}20 10px,
                transparent 10px,
                transparent 20px
              )
            `,
            transition: 'opacity 0.8s ease-in-out'
          }} />

          <div className="flavor-content" style={{
            display: 'grid',
            gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
            maxWidth: '1200px',
            position: 'relative',
            zIndex: 2
          }}>
            {/* Text Content */}
            <div className={`flavor-text ${index % 2 === 0 ? 'order-1' : 'order-2'}`} style={{
              order: index % 2 === 0 ? 1 : 2
            }}>
              <h2 className="display-large" style={{
                marginBottom: '20px',
                color: activeIndex === index ? flavor.color : 'var(--text-primary)',
                textShadow: activeIndex === index ? `0 0 20px ${flavor.color}80` : 'none',
                transition: 'all 0.8s ease-in-out'
              }}>
                {flavor.name}
              </h2>
              
              <p className="heading-1" style={{
                marginBottom: '24px',
                color: 'var(--text-secondary)',
                fontStyle: 'italic'
              }}>
                {flavor.tagline}
              </p>
              
              <p className="body-large" style={{
                marginBottom: '40px',
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                {flavor.description}
              </p>
              
              <button 
                className="btn-primary"
                style={{
                  background: activeIndex === index ? flavor.color : 'var(--brand-primary)',
                  transition: 'background 0.8s ease-in-out'
                }}
              >
                Try {flavor.name}
                <span style={{ marginLeft: '8px' }}>→</span>
              </button>
            </div>

            {/* Image Content */}
            <div className={`flavor-image ${index % 2 === 0 ? 'order-2' : 'order-1'}`} style={{
              order: index % 2 === 0 ? 2 : 1,
              textAlign: 'center'
            }}>
              <div className="image-container" style={{
                position: 'relative',
                display: 'inline-block'
              }}>
                <img
                  src={flavor.image}
                  alt={flavor.name}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    maxHeight: '500px',
                    objectFit: 'contain',
                    filter: activeIndex === index 
                      ? `drop-shadow(0 20px 40px ${flavor.color}60)` 
                      : 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))',
                    transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)',
                    transition: 'all 0.8s ease-in-out'
                  }}
                />
                
                {/* Glow Effect */}
                <div className="can-glow" style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '120%',
                  height: '120%',
                  background: `radial-gradient(circle, ${flavor.color}30 0%, transparent 70%)`,
                  opacity: activeIndex === index ? 1 : 0,
                  transition: 'opacity 0.8s ease-in-out',
                  pointerEvents: 'none',
                  animation: activeIndex === index ? 'pulse 3s ease-in-out infinite' : 'none'
                }} />
              </div>
            </div>
          </div>

          {/* Flavor Navigation Dots */}
          <div className="flavor-nav" style={{
            position: 'fixed',
            right: '40px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            {flavors.map((_, dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => {
                  document.getElementById(`flavor-${dotIndex}`)?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  background: activeIndex === dotIndex ? 'var(--brand-primary)' : 'rgba(255, 255, 255, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: activeIndex === dotIndex ? '0 0 10px rgba(0, 255, 209, 0.8)' : 'none'
                }}
              />
            ))}
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.1); }
        }
        
        @media (max-width: 768px) {
          .flavor-content {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          
          .flavor-text {
            order: 2 !important;
          }
          
          .flavor-image {
            order: 1 !important;
          }
          
          .flavor-nav {
            right: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FlavorHighlights;