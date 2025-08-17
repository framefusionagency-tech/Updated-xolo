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
      background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--accent-grey)' : 'none',
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
          <div className="logo" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            {/* Xolo Dog Icon */}
            <div style={{
              width: '40px',
              height: '32px',
              background: 'var(--text-dark)',
              borderRadius: '16px 16px 8px 8px',
              position: 'relative',
              transition: 'all 0.3s ease'
            }}>
              {/* Dog ears */}
              <div style={{
                position: 'absolute',
                top: '-4px',
                left: '8px',
                width: '8px',
                height: '8px',
                background: 'var(--text-dark)',
                borderRadius: '4px 4px 0 0',
                transform: 'rotate(-10deg)'
              }} />
              <div style={{
                position: 'absolute',
                top: '-4px',
                right: '8px',
                width: '8px',
                height: '8px',
                background: 'var(--text-dark)',
                borderRadius: '4px 4px 0 0',
                transform: 'rotate(10deg)'
              }} />
            </div>
            
            <span style={{
              fontSize: '24px',
              fontWeight: '800',
              color: 'var(--text-dark)',
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
              color: 'var(--text-medium)',
              fontWeight: '500',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--text-dark)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-medium)'}
            >
              Flavors
            </a>
            
            <a href="#story" style={{
              textDecoration: 'none',
              color: 'var(--text-medium)',
              fontWeight: '500',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--text-dark)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-medium)'}
            >
              Story
            </a>

            <button className="btn-primary" style={{
              fontSize: '14px',
              padding: '12px 24px'
            }}>
              Shop Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="mobile-menu" style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '24px'
          }}>
            ☰
          </button>
        </div>
      </div>

      <style jsx>{`
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