import React from 'react';
import { mockData } from '../data/mock';

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--deep-black)',
      borderTop: '1px solid rgba(0, 217, 255, 0.2)',
      position: 'relative',
      padding: '80px 0 40px'
    }}>
      {/* Cyber Grid Background */}
      <div className="cyber-grid" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.1
      }} />

      {/* Floating Particles */}
      <div className="cyber-particles">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              background: [
                'var(--electric-blue)',
                'var(--hot-pink)', 
                'var(--lime-green)',
                'var(--aztec-gold)'
              ][i % 4],
              width: '3px',
              height: '3px'
            }}
          />
        ))}
      </div>

      <div className="cyber-container">
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '60px',
          marginBottom: '60px',
          position: 'relative',
          zIndex: 2
        }}>
          {/* Brand Section */}
          <div>
            {/* Glowing XOLO Logo */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '30px'
            }}>
              {/* Cyber Xolo Icon */}
              <div style={{
                width: '60px',
                height: '60px',
                background: 'var(--neon-gradient)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                animation: 'neon-pulse 4s ease-in-out infinite'
              }}>
                {/* Xolo Symbol */}
                <div style={{
                  width: '30px',
                  height: '24px',
                  background: 'var(--deep-black)',
                  borderRadius: '15px 15px 8px 8px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-3px',
                    left: '6px',
                    width: '6px',
                    height: '6px',
                    background: 'var(--deep-black)',
                    borderRadius: '3px 3px 0 0',
                    transform: 'rotate(-10deg)'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '-3px',
                    right: '6px',
                    width: '6px',
                    height: '6px',
                    background: 'var(--deep-black)',
                    borderRadius: '3px 3px 0 0',
                    transform: 'rotate(10deg)'
                  }} />
                </div>

                {/* Orbital Ring */}
                <div style={{
                  position: 'absolute',
                  width: '80px',
                  height: '80px',
                  border: '1px solid var(--electric-blue)',
                  borderRadius: '50%',
                  borderStyle: 'dashed',
                  animation: 'cyber-rotate 12s linear infinite',
                  opacity: 0.5
                }} />
              </div>
              
              <span className="display-large" style={{
                fontSize: '36px',
                fontFamily: 'var(--font-display)',
                letterSpacing: '3px'
              }}>
                XOLO
              </span>
            </div>

            <p className="body-cyber" style={{
              maxWidth: '300px',
              opacity: 0.8,
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              Where ancient legends meet the future of energy. 
              Born of fire, powered by innovation.
            </p>

            {/* Tagline */}
            <p className="body-glow" style={{
              fontStyle: 'italic',
              fontSize: '16px'
            }}>
              {mockData.footer.tagline}
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="heading-cyber" style={{
              fontSize: '20px',
              marginBottom: '24px',
              color: 'var(--electric-blue)'
            }}>
              Flavors
            </h4>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              {['Extreme', 'Berry Rush', 'Citrus Blast', 'Banana Shock', 'Tropical Storm'].map((flavor) => (
                <a
                  key={flavor}
                  href="#"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '16px',
                    transition: 'all 0.3s ease',
                    fontFamily: 'var(--font-body)',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'var(--hot-pink)';
                    e.target.style.textShadow = '0 0 10px var(--hot-pink)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'rgba(255, 255, 255, 0.7)';
                    e.target.style.textShadow = 'none';
                  }}
                >
                  {flavor}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="heading-cyber" style={{
              fontSize: '20px',
              marginBottom: '24px',
              color: 'var(--lime-green)'
            }}>
              Company
            </h4>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              {['About', 'Heritage', 'Innovation', 'Careers', 'Press'].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '16px',
                    transition: 'all 0.3s ease',
                    fontFamily: 'var(--font-body)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'var(--lime-green)';
                    e.target.style.textShadow = '0 0 10px var(--lime-green)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'rgba(255, 255, 255, 0.7)';
                    e.target.style.textShadow = 'none';
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Connect */}
          <div>
            <h4 className="heading-cyber" style={{
              fontSize: '20px',
              marginBottom: '24px',
              color: 'var(--neon-purple)'
            }}>
              Connect
            </h4>
            
            {/* Social Icons */}
            <div style={{
              display: 'flex',
              gap: '20px',
              marginBottom: '30px',
              flexWrap: 'wrap'
            }}>
              {['Instagram', 'Twitter', 'TikTok', 'YouTube'].map((platform, index) => (
                <div
                  key={platform}
                  style={{
                    width: '50px',
                    height: '50px',
                    background: `
                      linear-gradient(135deg, 
                        rgba(0, 217, 255, 0.2) 0%, 
                        rgba(255, 0, 128, 0.2) 100%)
                    `,
                    backdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    border: '1px solid rgba(0, 217, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px) scale(1.1)';
                    e.target.style.boxShadow = '0 0 30px var(--electric-blue)';
                    e.target.style.borderColor = 'var(--electric-blue)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = 'none';
                    e.target.style.borderColor = 'rgba(0, 217, 255, 0.3)';
                  }}
                >
                  {/* Icon representation */}
                  <div style={{
                    width: '20px',
                    height: '20px',
                    background: 'var(--electric-blue)',
                    borderRadius: index === 0 ? '4px' : index === 1 ? '50%' : index === 2 ? '6px' : '2px',
                    opacity: 0.8,
                    animation: `neon-pulse ${3 + index * 0.5}s ease-in-out infinite`
                  }} />

                  {/* Hover Effect */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'var(--neon-gradient)',
                    transition: 'left 0.4s ease',
                    opacity: 0.3,
                    zIndex: -1
                  }} className="social-hover" />
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <span className="body-cyber" style={{ fontSize: '14px', opacity: 0.7 }}>
                support@xolo.energy
              </span>
              <span className="body-cyber" style={{ fontSize: '14px', opacity: 0.7 }}>
                Join the legend
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(0, 217, 255, 0.2)',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          position: 'relative',
          zIndex: 2
        }}>
          <div className="body-cyber" style={{ 
            fontSize: '14px',
            opacity: 0.6
          }}>
            © 2025 XOLO Energy. All rights reserved. Born of legends.
          </div>
          
          <div style={{
            display: 'flex',
            gap: '30px',
            flexWrap: 'wrap'
          }}>
            {['Privacy', 'Terms', 'Cookies'].map((link) => (
              <a
                key={link}
                href="#"
                className="body-cyber"
                style={{
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.6)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--electric-blue)';
                  e.target.style.textShadow = '0 0 8px var(--electric-blue)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(255, 255, 255, 0.6)';
                  e.target.style.textShadow = 'none';
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Energy Signature */}
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '4px'
        }}>
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              style={{
                width: '20px',
                height: '1px',
                background: [
                  'var(--electric-blue)',
                  'var(--hot-pink)', 
                  'var(--lime-green)',
                  'var(--neon-purple)',
                  'var(--cyber-yellow)',
                  'var(--aztec-gold)',
                  'var(--jade-green)'
                ][i],
                animation: `neon-pulse ${1.5 + i * 0.2}s ease-in-out infinite ${i * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .social-hover:hover {
          left: 0 !important;
        }
        
        @media (max-width: 768px) {
          .cyber-container > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          
          .cyber-container > div:last-child {
            flex-direction: column !important;
            text-align: center;
            gap: 16px !important;
          }
          
          .cyber-container > div:last-child > div:last-child {
            justify-content: center !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;