import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--black)',
      color: 'var(--primary-white)',
      padding: '80px 0 40px',
      position: 'relative'
    }}>
      <div className="container">
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '60px',
          marginBottom: '60px'
        }}>
          {/* Brand Section */}
          <div>
            {/* XOLO Logo */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '24px'
            }}>
              {/* Golden Xolo Dog Icon */}
              <div style={{
                width: '48px',
                height: '40px',
                background: 'var(--aztec-gold)',
                borderRadius: '24px 24px 12px 12px',
                position: 'relative'
              }}>
                {/* Dog ears */}
                <div style={{
                  position: 'absolute',
                  top: '-6px',
                  left: '10px',
                  width: '10px',
                  height: '10px',
                  background: 'var(--aztec-gold)',
                  borderRadius: '5px 5px 0 0',
                  transform: 'rotate(-10deg)'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '-6px',
                  right: '10px',
                  width: '10px',
                  height: '10px',
                  background: 'var(--aztec-gold)',
                  borderRadius: '5px 5px 0 0',
                  transform: 'rotate(10deg)'
                }} />
              </div>
              
              <span style={{
                fontSize: '28px',
                fontWeight: '800',
                color: 'var(--aztec-gold)',
                letterSpacing: '1px'
              }}>
                XOLO
              </span>
            </div>

            <p className="body-medium" style={{
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.6',
              maxWidth: '300px'
            }}>
              Energy rooted in ancient wisdom, crafted for modern life. 
              The guardian spirit lives on.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '20px',
              color: 'var(--primary-white)'
            }}>
              Shop
            </h4>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {['All Flavors', 'Extreme', 'Berry Rush', 'Citrus Blast', 'Classic'].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '16px',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--aztec-gold)'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '20px',
              color: 'var(--primary-white)'
            }}>
              Company
            </h4>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {['About Us', 'Our Story', 'Careers', 'Press', 'Contact'].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '16px',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--aztec-gold)'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Support */}
          <div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '20px',
              color: 'var(--primary-white)'
            }}>
              Connect
            </h4>
            
            {/* Social Icons */}
            <div style={{
              display: 'flex',
              gap: '16px',
              marginBottom: '24px'
            }}>
              {['Instagram', 'Twitter', 'TikTok', 'Facebook'].map((platform, index) => (
                <div
                  key={platform}
                  style={{
                    width: '44px',
                    height: '44px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'var(--aztec-gold)';
                    e.target.style.borderColor = 'var(--aztec-gold)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Simple icon representation */}
                  <div style={{
                    width: '16px',
                    height: '16px',
                    background: 'currentColor',
                    borderRadius: index === 0 ? '3px' : index === 1 ? '50%' : '4px',
                    opacity: 0.8
                  }} />
                </div>
              ))}
            </div>

            {/* Support Links */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {['Help & FAQ', 'Shipping Info', 'Returns'].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '16px',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--aztec-gold)'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div className="body-small" style={{ 
            color: 'rgba(255, 255, 255, 0.6)'
          }}>
            © 2025 XOLO Energy Co. All rights reserved.
          </div>
          
          <div style={{
            display: 'flex',
            gap: '30px'
          }}>
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((link) => (
              <a
                key={link}
                href="#"
                className="body-small"
                style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--aztec-gold)'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .container > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          
          .container > div:last-child {
            flex-direction: column !important;
            text-align: center;
            gap: 16px !important;
          }
          
          .container > div:last-child > div:last-child {
            justify-content: center !important;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;