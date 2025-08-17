import React, { useState, useEffect } from 'react';
import { mockData } from '../data/mock';

const TaglineSection = () => {
  const [visibleTaglines, setVisibleTaglines] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('taglines');
      if (!section) return;

      const sectionTop = section.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;
      
      if (scrollPosition > sectionTop + 100) {
        setVisibleTaglines(mockData.taglines.map((_, index) => index));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-cycle taglines
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockData.taglines.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="taglines" className="section-large" style={{
      background: 'var(--cream)',
      position: 'relative'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 25% 25%, var(--banana)08 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, var(--citrus)08 0%, transparent 50%)
        `,
        opacity: 0.6
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Main Tagline Display */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <div className="tagline-container" style={{
            maxWidth: '800px',
            margin: '0 auto',
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            {mockData.taglines.map((tagline, index) => (
              <div
                key={tagline.id}
                style={{
                  opacity: currentIndex === index ? 1 : 0,
                  transform: currentIndex === index ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: currentIndex === index ? 'relative' : 'absolute',
                  width: '100%'
                }}
              >
                <h2 className="display-large" style={{
                  marginBottom: '20px',
                  color: 'var(--soft-black)'
                }}>
                  {tagline.text}
                </h2>
                
                <p className="heading-editorial" style={{
                  fontSize: 'clamp(18px, 2.5vw, 28px)',
                  color: 'var(--charcoal)'
                }}>
                  {tagline.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Tagline Dots */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginTop: '40px'
          }}>
            {mockData.taglines.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  background: currentIndex === index ? 'var(--soft-black)' : 'var(--light-grey)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  transform: currentIndex === index ? 'scale(1.3)' : 'scale(1)'
                }}
              />
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className={`about-content ${visibleTaglines.includes(0) ? 'animate-fade-in' : ''}`} style={{
          opacity: visibleTaglines.includes(0) ? 1 : 0,
          animationDelay: '0.4s'
        }}>
          <div className="card-minimal" style={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto',
            background: 'var(--white)',
            borderRadius: '32px'
          }}>
            <h3 className="heading-playful" style={{
              marginBottom: '16px',
              color: 'var(--soft-black)'
            }}>
              {mockData.about.headline}
            </h3>
            
            <p className="heading-editorial" style={{
              marginBottom: '24px',
              fontSize: '18px',
              color: 'var(--citrus)'
            }}>
              {mockData.about.subtitle}
            </p>
            
            <p className="body-large" style={{
              lineHeight: '1.7',
              maxWidth: '500px',
              margin: '0 auto',
              color: 'var(--charcoal)'
            }}>
              {mockData.about.copy}
            </p>
          </div>
        </div>

        {/* Fun Facts */}
        <div className={`fun-facts ${visibleTaglines.includes(0) ? 'animate-fade-in' : ''}`} style={{
          marginTop: '80px',
          opacity: visibleTaglines.includes(0) ? 1 : 0,
          animationDelay: '0.8s'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {[
              { number: '4', label: 'Bold Flavors', emoji: '🎯' },
              { number: '0', label: 'Weird Aftertaste', emoji: '🚫' },
              { number: '∞', label: 'Good Vibes', emoji: '✨' }
            ].map((fact, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  padding: '30px 20px',
                  background: 'var(--white)',
                  borderRadius: '20px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.3s ease'
                }}
                className="interactive-hover"
              >
                <div style={{
                  fontSize: '32px',
                  marginBottom: '8px'
                }}>
                  {fact.emoji}
                </div>
                
                <div className="display-large" style={{
                  fontSize: '48px',
                  marginBottom: '8px',
                  color: 'var(--banana)'
                }}>
                  {fact.number}
                </div>
                
                <p className="tagline-fun" style={{
                  color: 'var(--charcoal)',
                  fontWeight: '600'
                }}>
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .tagline-container {
          position: relative;
        }
        
        @media (max-width: 768px) {
          .tagline-container {
            min-height: 250px !important;
          }
          
          .fun-facts > div {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          .fun-facts > div > div {
            padding: 20px 15px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TaglineSection;