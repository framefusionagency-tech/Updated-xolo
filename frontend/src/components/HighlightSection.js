import React, { useState, useEffect } from 'react';
import { mockData } from '../data/mock';

const HighlightSection = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('highlights');
      if (!section) return;

      const sectionTop = section.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;
      
      if (scrollPosition > sectionTop + 200) {
        setVisibleItems(mockData.highlights.map((_, index) => index));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Aztec-inspired icons
  const aztecIcons = {
    "🔥": (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 8L24 16L20 20L16 16L20 8Z" fill="currentColor" opacity="0.8"/>
        <path d="M20 20L28 20L24 28L20 24L20 20Z" fill="currentColor" opacity="0.6"/>
        <path d="M20 20L20 28L12 28L16 20L20 20Z" fill="currentColor" opacity="0.4"/>
        <path d="M20 20L12 20L16 12L20 16L20 20Z" fill="currentColor" opacity="0.7"/>
      </svg>
    ),
    "⚡": (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 4L28 16H24L28 32L12 16H16L20 4Z" fill="currentColor"/>
        <rect x="18" y="6" width="4" height="8" fill="currentColor" opacity="0.6"/>
      </svg>
    ),
    "🏛️": (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="8" y="32" width="24" height="4" fill="currentColor"/>
        <rect x="10" y="12" width="3" height="20" fill="currentColor"/>
        <rect x="14.5" y="12" width="3" height="20" fill="currentColor"/>
        <rect x="19" y="12" width="3" height="20" fill="currentColor"/>
        <rect x="23.5" y="12" width="3" height="20" fill="currentColor"/>
        <rect x="28" y="12" width="3" height="20" fill="currentColor"/>
        <polygon points="20,4 32,12 8,12" fill="currentColor"/>
      </svg>
    )
  };

  return (
    <section id="highlights" className="section" style={{
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
            Why XOLO Energy
          </h2>
        </div>

        {/* Highlights Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '60px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {mockData.highlights.map((highlight, index) => (
            <div
              key={index}
              className={`highlight-item ${visibleItems.includes(index) ? 'animate-fade-in' : ''}`}
              style={{
                textAlign: 'center',
                animationDelay: `${index * 0.2}s`,
                opacity: visibleItems.includes(index) ? 1 : 0
              }}
            >
              {/* Icon */}
              <div style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 30px',
                background: 'var(--primary-white)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                border: '1px solid var(--accent-grey)',
                color: 'var(--aztec-gold)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="highlight-icon"
              >
                {aztecIcons[highlight.icon] || (
                  <span style={{ fontSize: '32px' }}>{highlight.icon}</span>
                )}
                
                {/* Hover effect */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(135deg, var(--aztec-gold)10, transparent)`,
                  opacity: 0,
                  transition: 'opacity 0.4s ease'
                }} className="icon-hover" />
              </div>

              {/* Content */}
              <h3 className="body-large" style={{
                marginBottom: '16px',
                fontWeight: '700',
                color: 'var(--text-dark)'
              }}>
                {highlight.title}
              </h3>
              
              <p className="body-medium" style={{
                color: 'var(--text-medium)',
                lineHeight: '1.6'
              }}>
                {highlight.description}
              </p>

              {/* Decorative underline */}
              <div style={{
                width: '40px',
                height: '2px',
                background: 'var(--aztec-gold)',
                margin: '24px auto 0',
                borderRadius: '1px',
                opacity: 0.6
              }} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '80px'
        }}>
          <p className="body-large" style={{
            marginBottom: '30px',
            color: 'var(--text-medium)'
          }}>
            Ready to fuel your journey?
          </p>
          
          <button className="btn-primary">
            Get Your XOLO
          </button>
        </div>
      </div>

      {/* Aztec Divider */}
      <div className="aztec-divider" />

      <style jsx>{`
        .highlight-icon:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12) !important;
        }
        
        .highlight-icon:hover .icon-hover {
          opacity: 1;
        }
        
        @media (max-width: 768px) {
          .highlight-item {
            max-width: 280px;
            margin: 0 auto;
          }
          
          .highlights-grid {
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HighlightSection;