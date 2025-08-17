import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`dark-header ${scrolled ? 'scrolled' : ''}`} style={{
      background: scrolled ? 'rgba(0, 0, 0, 0.95)' : 'var(--bg-primary)',
      borderBottom: `1px solid var(--border-subtle)`,
      padding: '16px 7.6923%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'fixed',
      top: 0,
      width: '100%',
      height: '80px',
      zIndex: 10,
      boxSizing: 'border-box',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'all 0.4s ease-in-out'
    }}>
      <div className="logo" style={{
        color: 'var(--brand-primary)',
        fontSize: '24px',
        fontWeight: '700',
        fontFamily: 'Space Mono, monospace',
        textShadow: '0 0 10px rgba(0, 255, 209, 0.8)'
      }}>
        XOLO
      </div>

      <nav className="dark-nav" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '32px'
      }}>
        <a href="#flavors" className="dark-nav-link" style={{
          color: 'var(--text-muted)',
          textDecoration: 'none',
          fontSize: '18px',
          fontWeight: '400',
          transition: 'color 0.3s ease'
        }}>
          Flavors
        </a>
        <a href="#lifestyle" className="dark-nav-link" style={{
          color: 'var(--text-muted)',
          textDecoration: 'none',
          fontSize: '18px',
          fontWeight: '400',
          transition: 'color 0.3s ease'
        }}>
          Lifestyle
        </a>
        <button className="btn-primary">
          Get XOLO
        </button>
      </nav>

      <style jsx>{`
        .dark-nav-link:hover {
          color: var(--text-primary);
        }
        
        @media (max-width: 768px) {
          .dark-header {
            padding: 16px 20px !important;
            height: 70px !important;
          }
          
          .dark-nav {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;