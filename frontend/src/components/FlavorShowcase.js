import React, { useState, useEffect } from 'react';
import { mockData } from '../data/mock';

const FlavorShowcase = () => {
  const [visibleCans, setVisibleCans] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('flavors');
      if (!section) return;

      const sectionTop = section.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;
      
      if (scrollPosition > sectionTop + 200) {
        setVisibleCans(mockData.cans.map((_, index) => index));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="flavors" className="section" style={{
      background: 'var(--light-stone)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <h2 className="section-headline">
            Four Bold Flavors
          </h2>
          <p className="body-medium" style={{
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Each one crafted for taste, energy, and the moments that matter most.
          </p>
        </div>

        {/* Flavor Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {mockData.cans.map((can, index) => (
            <div
              key={can.id}
              className={`flavor-card ${visibleCans.includes(index) ? 'animate-fade-in' : ''}`}
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: visibleCans.includes(index) ? 1 : 0
              }}
            >
              <div className="card can-hover" style={{
                textAlign: 'center',
                position: 'relative',
                background: 'var(--primary-white)',
                border: `1px solid ${can.color}20`
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
                    src={can.image}
                    alt={can.name}
                    style={{
                      maxWidth: '200px',
                      height: 'auto',
                      maxHeight: '280px',
                      objectFit: 'contain',
                      filter: `drop-shadow(0 8px 24px ${can.color}25)`,
                      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  />

                  {/* Hover Background Circle */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '200px',
                    height: '200px',
                    background: `radial-gradient(circle, ${can.color}10 0%, transparent 70%)`,
                    borderRadius: '50%',
                    opacity: 0,
                    transition: 'opacity 0.6s ease',
                    pointerEvents: 'none',
                    zIndex: 1
                  }} className="hover-bg" />
                </div>

                {/* Can Info */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <h3 className="body-large" style={{
                    marginBottom: '8px',
                    color: 'var(--text-dark)',
                    fontWeight: '700'
                  }}>
                    {can.name}
                  </h3>
                  
                  <p className="body-medium" style={{
                    marginBottom: '24px',
                    color: 'var(--text-medium)'
                  }}>
                    {can.tagline}
                  </p>

                  {/* Color Accent Bar */}
                  <div style={{
                    width: '60px',
                    height: '3px',
                    background: can.color,
                    margin: '0 auto',
                    borderRadius: '2px'
                  }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          marginTop: '80px'
        }}>
          <button className="btn-primary" style={{
            fontSize: '16px',
            padding: '16px 32px'
          }}>
            Shop All Flavors
          </button>
        </div>
      </div>

      {/* Aztec Divider */}
      <div className="aztec-divider" />

      <style jsx>{`
        .can-hover:hover .hover-bg {
          opacity: 1 !important;
        }
        
        .can-hover:hover img {
          transform: scale(1.05) rotate(1deg);
        }
        
        @media (max-width: 768px) {
          .flavor-card {
            max-width: 320px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default FlavorShowcase;