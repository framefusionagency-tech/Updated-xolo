import React from 'react';
import { mockData } from '../data/mock';

const Footer = () => {
  return (
    <footer className="temple-footer" style={{
      background: `
        linear-gradient(180deg, #0F1219 0%, var(--obsidian) 100%)
      `,
      padding: '80px 0 40px',
      position: 'relative',
      borderTop: '1px solid rgba(26, 167, 149, 0.2)'
    }}>
      <div className="temple-container">
        {/* Main Footer Content */}
        <div className="footer-content" style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          {/* XOLO Logo Seal */}
          <div className="logo-seal" style={{
            display: 'inline-block',
            position: 'relative',
            marginBottom: '40px'
          }}>
            {/* Outer Ring */}
            <div style={{
              width: '120px',
              height: '120px',
              border: '3px solid var(--gold)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              boxShadow: '0 0 30px var(--gold-glow)',
              animation: 'glow-pulse 6s ease-in-out infinite'
            }}>
              {/* Inner Xolo Symbol */}
              <div style={{
                width: '60px',
                height: '40px',
                background: 'var(--gold)',
                borderRadius: '30px 30px 15px 15px',
                position: 'relative',
                boxShadow: '0 0 20px var(--gold-glow)'
              }}>
                {/* Dog ears */}
                <div style={{
                  position: 'absolute',
                  top: '-5px',
                  left: '15px',
                  width: '12px',
                  height: '12px',
                  background: 'var(--gold)',
                  borderRadius: '6px 6px 0 0',
                  transform: 'rotate(-10deg)'
                }} />
                
                <div style={{
                  position: 'absolute',
                  top: '-5px',
                  right: '15px',
                  width: '12px',
                  height: '12px',
                  background: 'var(--gold)',
                  borderRadius: '6px 6px 0 0',
                  transform: 'rotate(10deg)'
                }} />
              </div>

              {/* Ring Segments */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    width: '4px',
                    height: '15px',
                    background: 'var(--jade)',
                    top: '10px',
                    left: '50%',
                    transformOrigin: '2px 50px',
                    transform: `translateX(-50%) rotate(${i * 45}deg)`,
                    opacity: 0.6,
                    boxShadow: '0 0 8px var(--jade-glow)'
                  }}
                />
              ))}
            </div>

            {/* Brand Name */}
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontFamily: 'var(--font-headline)',
              fontSize: '24px',
              color: 'var(--gold)',
              letterSpacing: '2px',
              textShadow: '0 0 15px var(--gold-glow)'
            }}>
              XOLO
            </div>
          </div>

          {/* Aztec Glyph Divider */}
          <div className="glyph-divider" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '40px'
          }}>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === 2 ? '16px' : '8px',
                  height: i === 2 ? '16px' : '8px',
                  background: i === 2 ? 'var(--gold)' : 'var(--jade)',
                  borderRadius: '2px',
                  transform: `rotate(${i * 15}deg)`,
                  opacity: 0.7,
                  boxShadow: `0 0 10px ${i === 2 ? 'var(--gold-glow)' : 'var(--jade-glow)'}`,
                  animation: `glow-pulse ${3 + i}s ease-in-out infinite`
                }}
              />
            ))}
          </div>

          {/* Social Section */}
          <div className="social-section" style={{ marginBottom: '40px' }}>
            <p className="body-medium" style={{ 
              marginBottom: '20px',
              opacity: 0.8
            }}>
              {mockData.footer.socialText}
            </p>

            {/* Social Icons */}
            <div className="social-icons" style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '30px'
            }}>
              {['Instagram', 'Twitter', 'TikTok'].map((platform, index) => (
                <div
                  key={platform}
                  className="social-icon"
                  style={{
                    width: '50px',
                    height: '50px',
                    background: `
                      linear-gradient(135deg, var(--obsidian-light) 0%, var(--obsidian) 100%)
                    `,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(26, 167, 149, 0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.4s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = 'var(--jade)';
                    e.target.style.boxShadow = '0 0 20px var(--jade-glow)';
                    e.target.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = 'rgba(26, 167, 149, 0.3)';
                    e.target.style.boxShadow = 'none';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Simple Icon Representation */}
                  <div style={{
                    width: '20px',
                    height: '20px',
                    background: 'var(--jade)',
                    borderRadius: index === 0 ? '4px' : index === 1 ? '50%' : '6px',
                    opacity: 0.8,
                    animation: `glow-pulse ${4 + index}s ease-in-out infinite`
                  }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom" style={{
          borderTop: '1px solid rgba(26, 167, 149, 0.2)',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div className="body-small" style={{ opacity: 0.6 }}>
            © 2025 XOLO Energy. Ancient power. Modern fuel.
          </div>
          
          <div className="footer-links" style={{
            display: 'flex',
            gap: '30px'
          }}>
            {['Terms', 'Privacy', 'Contact'].map((link) => (
              <a
                key={link}
                href="#"
                className="body-small"
                style={{
                  color: 'var(--moonlight-soft)',
                  textDecoration: 'none',
                  opacity: 0.7,
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--jade)';
                  e.target.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--moonlight-soft)';
                  e.target.style.opacity = '0.7';
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Background Decorations */}
        <div className="footer-decorations" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: -1
        }}>
          {/* Corner Torches */}
          <div className="corner-torch left" style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            width: '40px',
            height: '60px',
            background: `
              radial-gradient(ellipse at bottom, var(--ember) 0%, rgba(196, 89, 43, 0.3) 60%, transparent 80%)
            `,
            animation: 'ember-flicker 5s ease-in-out infinite'
          }} />
          
          <div className="corner-torch right" style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '40px',
            height: '60px',
            background: `
              radial-gradient(ellipse at bottom, var(--ember) 0%, rgba(196, 89, 43, 0.3) 60%, transparent 80%)
            `,
            animation: 'ember-flicker 4.5s ease-in-out infinite'
          }} />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-bottom {
            flex-direction: column !important;
            text-align: center;
          }
          
          .social-icons {
            gap: 20px !important;
          }
          
          .footer-links {
            justify-content: center !important;
          }
          
          .logo-seal {
            transform: scale(0.8);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;