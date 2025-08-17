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
            {/* Clean X Icon */}
            <div style={{
              width: '44px',
              height: '44px',
              background: 'var(--soft-black)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              position: 'relative'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{
                color: 'white'
              }}>
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <span style={{
              fontSize: '28px',
              fontWeight: '700',
              color: 'var(--soft-black)',
              fontFamily: 'var(--font-quirky)',
              letterSpacing: '1px'
            }}>
              XOLO
            </span>
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
        .logo:hover > div {
          background: var(--banana) !important;
        }
        
        .logo:hover > div svg {
          color: var(--soft-black) !important;
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