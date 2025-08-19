import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--soft-black)',
      color: 'var(--white)',
      position: 'relative',
      padding: '80px 0 40px'
    }}>
      {/* Fun Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 15% 15%, var(--banana)15 0%, transparent 30%),
          radial-gradient(circle at 85% 85%, var(--citrus)15 0%, transparent 30%),
          radial-gradient(circle at 50% 50%, var(--berry)10 0%, transparent 40%)
        `,
        opacity: 0.4
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
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
              <img 
                src="https://customer-assets.emergentagent.com/job_brand-design-journey/artifacts/46y5ba7g_logo.png"
                alt="XOLO Logo"
                style={{
                  height: '52px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'brightness(1.2)', // Brighten slightly for dark background
                  transition: 'all 0.3s ease'
                }}
                className="animate-wiggle"
              />
            </div>

            <p className="body-medium" style={{
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.7',
              maxWidth: '280px',
              marginBottom: '24px'
            }}>
              Energy drinks that don't taste like they were made in a chemistry lab. 
              Just clean energy with flavors you'll actually crave.
            </p>

            {/* Fun Tagline */}
            <p className="tagline-fun" style={{
              color: 'var(--banana)',
              fontStyle: 'italic'
            }}>
              "Finally, an energy drink your taste buds approve of"
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="heading-playful" style={{
              fontSize: '20px',
              marginBottom: '20px',
              color: 'var(--white)'
            }}>
              Flavors
            </h4>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {['Banana Shock', 'Citrus Blast', 'Berry Rush', 'Extreme'].map((flavor, index) => (
                <a
                  key={flavor}
                  href="#"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontFamily: 'var(--font-sans)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = ['var(--banana)', 'var(--citrus)', 'var(--berry)', 'var(--extreme-light)'][index];
                    e.target.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'rgba(255, 255, 255, 0.7)';
                    e.target.style.transform = 'translateX(0)';
                  }}
                >
                  <span style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: ['var(--banana)', 'var(--citrus)', 'var(--berry)', 'var(--extreme-light)'][index]
                  }} />
                  {flavor}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="heading-playful" style={{
              fontSize: '20px',
              marginBottom: '20px',
              color: 'var(--white)'
            }}>
              Company
            </h4>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {['About Us', 'Our Story', 'Careers', 'Press', 'Contact'].map((link, index) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontFamily: 'var(--font-sans)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'var(--white)';
                    e.target.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'rgba(255, 255, 255, 0.7)';
                    e.target.style.transform = 'translateX(0)';
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Fun Stuff */}
          <div>
            <h4 className="heading-playful" style={{
              fontSize: '20px',
              marginBottom: '20px',
              color: 'var(--white)'
            }}>
              Follow the Fun
            </h4>
            
            {/* Social Icons */}
            <div style={{
              display: 'flex',
              gap: '16px',
              marginBottom: '24px',
              flexWrap: 'wrap'
            }}>
              {[
                { name: 'Instagram', emoji: '📸', color: 'var(--berry)' },
                { name: 'TikTok', emoji: '🎵', color: 'var(--citrus)' },
                { name: 'Twitter', emoji: '🐦', color: 'var(--tropical)' },
                { name: 'YouTube', emoji: '📺', color: 'var(--banana)' }
              ].map((social) => (
                <div
                  key={social.name}
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '2px solid transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = social.color;
                    e.target.style.transform = 'translateY(-4px) rotate(5deg)';
                    e.target.style.borderColor = social.color;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.transform = 'translateY(0) rotate(0deg)';
                    e.target.style.borderColor = 'transparent';
                  }}
                >
                  <span style={{ fontSize: '20px' }}>
                    {social.emoji}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '16px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <p className="body-small" style={{ 
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: '8px'
              }}>
                Got questions? We've got answers:
              </p>
              <p className="body-small" style={{ 
                color: 'var(--banana)',
                fontWeight: '500'
              }}>
                hello@xolo.energy
              </p>
            </div>
          </div>
        </div>

        {/* Fun Divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '40px'
        }}>
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: i % 2 === 0 ? '50%' : '2px',
                background: ['var(--banana)', 'var(--citrus)', 'var(--berry)', 'var(--extreme-light)'][i % 4],
                animation: `float-gentle ${3 + i * 0.5}s ease-in-out infinite ${i * 0.2}s`,
                transform: i % 2 === 0 ? 'none' : 'rotate(45deg)'
              }}
            />
          ))}
        </div>

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          paddingTop: '30px',
          borderTop: '1px solid rgba(255, 255, 255, 0.15)'
        }}>
          <div className="body-small" style={{ 
            color: 'rgba(255, 255, 255, 0.6)'
          }}>
            © 2025 XOLO Energy Co. Made with ☕ and good vibes.
          </div>
          
          <div style={{
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap'
          }}>
            {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((link) => (
              <a
                key={link}
                href="#"
                className="body-small"
                style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--banana)'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Easter Egg */}
        <div style={{
          textAlign: 'center',
          marginTop: '30px'
        }}>
          <p className="body-small" style={{
            color: 'rgba(255, 255, 255, 0.4)',
            fontStyle: 'italic'
          }}>
            P.S. We're still cooler than other energy drinks 😎
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .container > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          
          .container > div:nth-child(3) {
            flex-direction: column !important;
            text-align: center;
            gap: 16px !important;
          }
          
          .container > div:nth-child(3) > div:last-child {
            justify-content: center !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;