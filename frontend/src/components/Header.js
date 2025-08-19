import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled ? 'rgba(250, 249, 246, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(26, 26, 26, 0.1)' : 'none',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      padding: '16px 0'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* XOLO Logo */}
          <div className="logo animate-wiggle" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer'
          }}>
            {/* Use the provided logo image */}
            <img 
              src="https://customer-assets.emergentagent.com/job_brand-design-journey/artifacts/46y5ba7g_logo.png"
              alt="XOLO Logo"
              style={{
                height: '44px',
                width: 'auto',
                objectFit: 'contain',
                transition: 'all 0.3s ease'
              }}
            />
          </div>

          {/* Navigation */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px'
          }}>
            <a href="#flavors" style={{
              textDecoration: 'none',
              color: 'var(--charcoal)',
              fontWeight: '500',
              fontFamily: 'var(--font-sans)',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--soft-black)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--charcoal)'}
            >
              Flavors
            </a>
            
            <a href="#shop" style={{
              textDecoration: 'none',
              color: 'var(--charcoal)',
              fontWeight: '500',
              fontFamily: 'var(--font-sans)',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--soft-black)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--charcoal)'}
            >
              Shop
            </a>

            <button className="btn-primary" style={{
              fontSize: '14px',
              padding: '12px 24px'
            }}>
              Try XOLO
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="mobile-menu" style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '24px',
            color: 'var(--soft-black)'
          }}>
            ☰
          </button>
        </div>
      </div>

      <style jsx>{`
        .logo:hover img {
          transform: scale(1.05);
        }
        
        @media (max-width: 768px) {
          nav {
            display: none !important;
          }
          
          .mobile-menu {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;