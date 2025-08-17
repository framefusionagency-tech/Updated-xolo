import React, { useState, useEffect } from 'react';
import { mockData } from '../data/mock';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
      if (!section) return;

      const sectionTop = section.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;
      
      if (scrollPosition > sectionTop + 200) {
        setIsVisible(true);
      }
    };

    const handleMouseMove = (e) => {
      const rect = document.getElementById('about')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="about" className="section-cyber" style={{
      background: `
        radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
          rgba(212, 175, 55, 0.1) 0%, 
          var(--deep-black) 50%),
        var(--deep-black)
      `,
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Glowing Aztec Glyphs in Corners */}
      <div className="aztec-glyphs" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }}>
        {/* Top Left Glyph */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '80px',
          height: '80px',
          opacity: isVisible ? 0.3 : 0,
          transition: 'opacity 2s ease'
        }}>
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <path d="M40 10L60 30L40 50L20 30L40 10Z" fill="var(--aztec-gold)" opacity="0.6"/>
            <path d="M40 30L60 50L40 70L20 50L40 30Z" fill="var(--jade-green)" opacity="0.4"/>
            <circle cx="40" cy="40" r="8" fill="var(--electric-blue)" opacity="0.8"/>
          </svg>
        </div>

        {/* Top Right Glyph */}
        <div style={{
          position: 'absolute',
          top: '15%',
          right: '5%',
          width: '60px',
          height: '60px',
          opacity: isVisible ? 0.3 : 0,
          transition: 'opacity 2s ease 0.5s',
          animation: isVisible ? 'cyber-rotate 20s linear infinite' : 'none'
        }}>
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <polygon points="30,5 50,25 30,45 10,25" fill="var(--hot-pink)" opacity="0.6"/>
            <polygon points="30,15 40,25 30,35 20,25" fill="var(--electric-blue)" opacity="0.8"/>
          </svg>
        </div>

        {/* Bottom Left Glyph */}
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '8%',
          width: '70px',
          height: '70px',
          opacity: isVisible ? 0.2 : 0,
          transition: 'opacity 2s ease 1s'
        }}>
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
            <rect x="10" y="10" width="50" height="50" fill="none" stroke="var(--lime-green)" strokeWidth="2" opacity="0.8"/>
            <rect x="20" y="20" width="30" height="30" fill="var(--neon-purple)" opacity="0.5"/>
            <circle cx="35" cy="35" r="10" fill="var(--cyber-yellow)" opacity="0.7"/>
          </svg>
        </div>

        {/* Bottom Right Glyph */}
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '8%',
          width: '90px',
          height: '90px',
          opacity: isVisible ? 0.25 : 0,
          transition: 'opacity 2s ease 1.5s',
          animation: isVisible ? 'aztec-glow 6s ease-in-out infinite' : 'none'
        }}>
          <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
            <path d="M45 15L75 45L45 75L15 45L45 15Z" fill="none" stroke="var(--aztec-gold)" strokeWidth="3" opacity="0.8"/>
            <path d="M45 25L65 45L45 65L25 45L45 25Z" fill="var(--jade-green)" opacity="0.3"/>
            <circle cx="45" cy="45" r="15" fill="none" stroke="var(--electric-blue)" strokeWidth="2" opacity="0.9"/>
          </svg>
        </div>
      </div>

      {/* Floating Xolo Spirits */}
      <div className="xolo-spirits" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 2
      }}>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '40px',
              height: '30px',
              background: `rgba(212, 175, 55, ${0.1 + i * 0.05})`,
              borderRadius: '50% 40% 30% 60%',
              top: `${20 + i * 25}%`,
              left: `${10 + i * 30}%`,
              animation: `float-particle ${8 + i * 2}s ease-in-out infinite ${i * 2}s`,
              opacity: isVisible ? 1 : 0,
              transition: `opacity 2s ease ${i * 0.3}s`
            }}
          />
        ))}
      </div>

      <div className="cyber-container">
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 3
        }}>
          {/* Heritage Symbol */}
          <div className={`heritage-symbol ${isVisible ? 'animate-fade-in' : ''}`} style={{
            marginBottom: '60px',
            opacity: isVisible ? 1 : 0,
            animationDelay: '0.2s'
          }}>
            <div style={{
              width: '120px',
              height: '120px',
              margin: '0 auto',
              background: `
                radial-gradient(circle, 
                  var(--aztec-gold) 0%, 
                  var(--jade-green) 50%, 
                  transparent 100%)
              `,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              animation: isVisible ? 'neon-pulse 4s ease-in-out infinite' : 'none'
            }}>
              {/* Xolo Dog Symbol */}
              <div style={{
                width: '60px',
                height: '48px',
                background: 'var(--deep-black)',
                borderRadius: '30px 30px 15px 15px',
                position: 'relative'
              }}>
                {/* Dog ears */}
                <div style={{
                  position: 'absolute',
                  top: '-8px',
                  left: '12px',
                  width: '12px',
                  height: '12px',
                  background: 'var(--deep-black)',
                  borderRadius: '6px 6px 0 0',
                  transform: 'rotate(-15deg)'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '12px',
                  width: '12px',
                  height: '12px',
                  background: 'var(--deep-black)',
                  borderRadius: '6px 6px 0 0',
                  transform: 'rotate(15deg)'
                }} />
              </div>

              {/* Orbital Ring */}
              <div style={{
                position: 'absolute',
                width: '140px',
                height: '140px',
                border: '2px solid var(--electric-blue)',
                borderRadius: '50%',
                borderStyle: 'dashed',
                animation: isVisible ? 'cyber-rotate 15s linear infinite' : 'none',
                opacity: 0.6
              }} />
            </div>
          </div>

          {/* Main Content */}
          <div className={`about-content ${isVisible ? 'animate-fade-in' : ''}`} style={{
            opacity: isVisible ? 1 : 0,
            animationDelay: '0.6s'
          }}>
            <h2 className="heading-heritage" style={{
              marginBottom: '40px',
              fontSize: 'clamp(32px, 5vw, 56px)'
            }}>
              {mockData.about.headline}
            </h2>
            
            <p className="body-cyber" style={{
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              lineHeight: '1.8',
              maxWidth: '700px',
              margin: '0 auto',
              opacity: 0.95
            }}>
              {mockData.about.copy}
            </p>
          </div>

          {/* Energy Flow Lines */}
          <div className={`energy-flow ${isVisible ? 'animate-fade-in' : ''}`} style={{
            marginTop: '80px',
            opacity: isVisible ? 1 : 0,
            animationDelay: '1s'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '40px',
              flexWrap: 'wrap'
            }}>
              {/* Heritage Node */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'var(--heritage-gradient)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 30px var(--aztec-gold)',
                  animation: 'neon-pulse 3s ease-in-out infinite'
                }}>
                  <span style={{
                    fontSize: '24px',
                    color: 'var(--deep-black)',
                    fontWeight: 'bold'
                  }}>🏛️</span>
                </div>
                <span className="body-glow">Heritage</span>
              </div>

              {/* Connection Line */}
              <div style={{
                width: '80px',
                height: '2px',
                background: 'var(--neon-gradient)',
                position: 'relative',
                animation: 'neon-pulse 2s ease-in-out infinite'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '8px',
                  height: '8px',
                  background: 'var(--electric-blue)',
                  borderRadius: '50%',
                  boxShadow: '0 0 15px var(--electric-blue)'
                }} />
              </div>

              {/* Future Node */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'var(--neon-gradient)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 30px var(--electric-blue)',
                  animation: 'neon-pulse 3s ease-in-out infinite 1s'
                }}>
                  <span style={{
                    fontSize: '24px',
                    color: 'var(--deep-black)',
                    fontWeight: 'bold'
                  }}>⚡</span>
                </div>
                <span className="body-glow">Future</span>
              </div>
            </div>
          </div>
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
          animation: animate-fade-in 1s ease-out forwards;
        }
        
        @media (max-width: 768px) {
          .energy-flow > div {
            flex-direction: column !important;
            gap: 20px !important;
          }
          
          .energy-flow .connection-line {
            width: 40px !important;
            transform: rotate(90deg);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;