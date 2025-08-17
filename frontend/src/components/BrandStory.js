import React, { useState, useEffect } from 'react';
import { mockData } from '../data/mock';

const BrandStory = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('brand-story');
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
    <section id="brand-story" className="brand-story stone-texture section-padding" style={{
      background: `
        linear-gradient(180deg, var(--obsidian) 0%, #0F1219 50%, var(--obsidian) 100%)
      `,
      position: 'relative'
    }}>
      <div className="temple-container">
        <div className="story-layout" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Carved Relief Mural */}
          <div className="mural-section" style={{
            position: 'relative',
            transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.23, 1, 0.32, 1)'
          }}>
            {/* Stone Relief Background */}
            <div className="stone-relief" style={{
              width: '100%',
              height: '400px',
              background: `
                linear-gradient(135deg, var(--obsidian-light) 0%, var(--obsidian) 100%)
              `,
              borderRadius: '8px',
              position: 'relative',
              boxShadow: 'inset 0 0 40px rgba(0,0,0,0.8)',
              overflow: 'hidden'
            }}>
              {/* Carved Xolo Dog */}
              <div className="xolo-carving" style={{
                position: 'absolute',
                top: '20%',
                left: '20%',
                width: '120px',
                height: '80px',
                background: `
                  radial-gradient(ellipse at center, var(--gold) 0%, transparent 70%)
                `,
                borderRadius: '60% 40% 30% 70%',
                opacity: 0.4,
                animation: 'glow-pulse 6s ease-in-out infinite'
              }}>
                {/* Dog features */}
                <div style={{
                  position: 'absolute',
                  top: '30%',
                  left: '70%',
                  width: '40px',
                  height: '20px',
                  background: 'var(--gold)',
                  borderRadius: '0 50% 50% 0',
                  opacity: 0.6
                }} />
              </div>

              {/* Running Figures */}
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="runner-figure"
                  style={{
                    position: 'absolute',
                    bottom: '25%',
                    left: `${30 + i * 20}%`,
                    width: '20px',
                    height: '40px',
                    background: 'var(--jade)',
                    borderRadius: '10px 10px 5px 5px',
                    opacity: 0.3,
                    transform: `rotate(${i * 5}deg)`,
                    animation: `glow-pulse ${4 + i}s ease-in-out infinite ${i * 0.5}s`
                  }}
                />
              ))}

              {/* Pyramid Silhouettes */}
              <div className="pyramid" style={{
                position: 'absolute',
                bottom: '10%',
                right: '15%',
                width: '60px',
                height: '50px',
                background: 'var(--ember)',
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                opacity: 0.4
              }} />
              
              <div className="pyramid small" style={{
                position: 'absolute',
                bottom: '15%',
                right: '25%',
                width: '40px',
                height: '35px',
                background: 'var(--ember)',
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                opacity: 0.3
              }} />

              {/* Glowing Glyphs */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="glyph"
                  style={{
                    position: 'absolute',
                    width: '8px',
                    height: '8px',
                    background: 'var(--jade)',
                    top: `${20 + (i % 4) * 20}%`,
                    left: `${10 + Math.floor(i / 4) * 70}%`,
                    opacity: 0.4,
                    boxShadow: '0 0 10px var(--jade-glow)',
                    animation: `glow-pulse ${3 + (i % 3)}s ease-in-out infinite ${i * 0.3}s`
                  }}
                />
              ))}
            </div>

            {/* Torch Light Effect */}
            <div className="torch-glow" style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '80px',
              height: '100px',
              background: `
                radial-gradient(ellipse at bottom, var(--ember) 0%, rgba(196, 89, 43, 0.3) 40%, transparent 70%)
              `,
              animation: 'ember-flicker 4s ease-in-out infinite',
              pointerEvents: 'none'
            }} />
          </div>

          {/* Story Content */}
          <div className="story-content" style={{
            transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.23, 1, 0.32, 1) 0.2s'
          }}>
            <h2 className="headline-medium" style={{
              marginBottom: '40px',
              textAlign: 'left'
            }}>
              {mockData.brandStory.headline}
            </h2>

            <div className="story-points">
              {mockData.brandStory.points.map((point, index) => (
                <div
                  key={index}
                  className="story-point"
                  style={{
                    marginBottom: '30px',
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    opacity: isVisible ? 1 : 0,
                    transition: `all 0.8s cubic-bezier(0.23, 1, 0.32, 1) ${0.4 + (index * 0.2)}s`
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px'
                  }}>
                    {/* Gold Bullet */}
                    <div style={{
                      width: '8px',
                      height: '8px',
                      background: 'var(--gold)',
                      borderRadius: '50%',
                      marginTop: '8px',
                      flexShrink: 0,
                      boxShadow: '0 0 10px var(--gold-glow)',
                      animation: `glow-pulse ${3 + index}s ease-in-out infinite`
                    }} />
                    
                    <p className="body-large" style={{
                      lineHeight: '1.6',
                      color: 'var(--moonlight)'
                    }}>
                      {point}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Divider */}
            <div className="story-divider" style={{
              width: '120px',
              height: '2px',
              background: `
                linear-gradient(90deg, var(--jade) 0%, var(--gold) 50%, var(--jade) 100%)
              `,
              margin: '40px 0',
              boxShadow: '0 0 15px var(--jade-glow)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
              transformOrigin: 'left',
              transition: 'all 1s cubic-bezier(0.23, 1, 0.32, 1) 1s'
            }} />

            <p className="body-medium" style={{
              fontStyle: 'italic',
              opacity: 0.8,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1) 1.2s'
            }}>
              The ancient energy lives on.
            </p>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="story-decorations" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: -1
        }}>
          {/* Stone Columns */}
          <div className="column left" style={{
            position: 'absolute',
            left: '2%',
            top: '15%',
            width: '20px',
            height: '70%',
            background: `
              linear-gradient(180deg, var(--obsidian-light) 0%, var(--obsidian) 100%)
            `,
            borderRadius: '10px',
            opacity: 0.4
          }} />
          
          <div className="column right" style={{
            position: 'absolute',
            right: '2%',
            top: '15%',
            width: '20px',
            height: '70%',
            background: `
              linear-gradient(180deg, var(--obsidian-light) 0%, var(--obsidian) 100%)
            `,
            borderRadius: '10px',
            opacity: 0.4
          }} />
        </div>
      </div>

      {/* Mobile Layout */}
      <style jsx>{`
        @media (max-width: 768px) {
          .story-layout {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
            text-align: center;
          }
          
          .story-content {
            order: 1;
          }
          
          .mural-section {
            order: 2;
          }
          
          .stone-relief {
            height: 300px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BrandStory;