import React, { useState, useEffect } from 'react';
import { mockData } from '../data/mock';

const FlavorSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredFlavor, setHoveredFlavor] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('flavors');
      if (!section) return;

      const sectionTop = section.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;
      
      if (scrollPosition > sectionTop + 200) {
        setVisibleCards(mockData.flavors.map((_, index) => index));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="flavors" className="section-large" style={{
      background: 'var(--warm-white)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <h2 className="display-large" style={{ 
            marginBottom: '20px' 
          }}>
            Pick Your Vibe
          </h2>
          <p className="heading-editorial" style={{
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Five flavors that don't taste like they came from a lab
          </p>
        </div>

        {/* Scrollable Flavor Row */}
        <div style={{
          display: 'flex',
          gap: '30px',
          overflowX: 'auto',
          paddingBottom: '20px',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch'
        }}>
          {mockData.flavors.map((flavor, index) => (
            <div
              key={flavor.id}
              className={`card-flavor ${flavor.colorClass} ${visibleCards.includes(index) ? 'animate-fade-in' : ''}`}
              style={{
                minWidth: '280px',
                opacity: visibleCards.includes(index) ? 1 : 0,
                animationDelay: `${index * 0.15}s`,
                scrollSnapAlign: 'center',
                position: 'relative'
              }}
              onMouseEnter={() => setHoveredFlavor(flavor.id)}
              onMouseLeave={() => setHoveredFlavor(null)}
            >
              {/* Can Image */}
              <div style={{
                textAlign: 'center',
                marginBottom: '25px',
                position: 'relative',
                height: '280px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src={flavor.image}
                  alt={flavor.name}
                  className="can-hover"
                  style={{
                    maxWidth: '180px',
                    height: 'auto',
                    maxHeight: '260px',
                    filter: hoveredFlavor === flavor.id 
                      ? 'drop-shadow(0 15px 35px rgba(0, 0, 0, 0.2))' 
                      : 'drop-shadow(0 8px 20px rgba(0, 0, 0, 0.1))',
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />

                {/* Price Tag */}
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'var(--white)',
                  padding: '8px 12px',
                  borderRadius: '20px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  transform: hoveredFlavor === flavor.id ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.3s ease'
                }}>
                  <span style={{
                    fontFamily: 'var(--font-quirky)',
                    fontWeight: '700',
                    fontSize: '14px',
                    color: 'var(--soft-black)'
                  }}>
                    ${flavor.price}
                  </span>
                </div>
              </div>

              {/* Flavor Info */}
              <div style={{ textAlign: 'center' }}>
                <h3 className="heading-playful" style={{
                  fontSize: '24px',
                  marginBottom: '8px',
                  color: 'var(--soft-black)'
                }}>
                  {flavor.name}
                </h3>
                
                <p className="tagline-fun" style={{
                  marginBottom: '16px',
                  color: flavor.accentColor,
                  fontStyle: 'italic'
                }}>
                  "{flavor.tagline}"
                </p>
                
                <p className="body-medium" style={{
                  marginBottom: '25px',
                  lineHeight: '1.5',
                  opacity: 0.9
                }}>
                  {flavor.description}
                </p>

                {/* Add to Cart Button */}
                <button 
                  className="btn-flavor"
                  style={{
                    backgroundColor: hoveredFlavor === flavor.id ? flavor.accentColor : 'var(--white)',
                    color: hoveredFlavor === flavor.id ? 'var(--white)' : 'var(--soft-black)',
                    borderColor: flavor.accentColor,
                    transition: 'all 0.3s ease'
                  }}
                >
                  Add to Cart
                  <span style={{ fontSize: '16px' }}>🛒</span>
                </button>
              </div>

              {/* Hover Glow Effect */}
              {hoveredFlavor === flavor.id && (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `${flavor.accentColor}10`,
                  borderRadius: '24px',
                  pointerEvents: 'none',
                  zIndex: -1,
                  animation: 'fade-in-up 0.3s ease-out forwards'
                }} />
              )}
            </div>
          ))}
        </div>

        {/* Navigation Hint */}
        <div style={{
          textAlign: 'center',
          marginTop: '40px'
        }}>
          <p className="body-small" style={{
            color: 'var(--medium-grey)'
          }}>
            ← Scroll to see all flavors →
          </p>
        </div>

        {/* Shop All Button */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px'
        }}>
          <button 
            className="btn-primary interactive-hover"
            onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              fontSize: '16px',
              padding: '16px 32px'
            }}
          >
            Shop All Flavors
          </button>
        </div>
      </div>

      <style jsx>{`
        /* Custom scrollbar for flavor row */
        div::-webkit-scrollbar {
          height: 8px;
        }
        
        div::-webkit-scrollbar-track {
          background: var(--light-grey);
          border-radius: 4px;
        }
        
        div::-webkit-scrollbar-thumb {
          background: var(--medium-grey);
          border-radius: 4px;
        }
        
        div::-webkit-scrollbar-thumb:hover {
          background: var(--charcoal);
        }
        
        @media (max-width: 768px) {
          .container > div:first-child {
            margin-bottom: 60px !important;
          }
          
          .card-flavor {
            min-width: 240px !important;
            padding: 20px !important;
          }
          
          .card-flavor img {
            max-width: 140px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FlavorSection;