import React, { useState, useEffect } from 'react';
import { mockData } from '../data/mock';

const LifestyleSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('story');
      if (!section) return;

      const sectionTop = section.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;
      
      if (scrollPosition > sectionTop + 200) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="story" className="section-large" style={{
      background: 'var(--primary-white)',
      position: 'relative'
    }}>
      {/* Wide Banner Image */}
      <div style={{
        height: '60vh',
        minHeight: '400px',
        background: `
          linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
          url('https://customer-assets.emergentagent.com/job_23384bed-fe27-4192-befa-5aaf101d7338/artifacts/odetp45a_XOLO%20Drink%20Over%20Urban%20Nightscape.png')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginBottom: '80px'
      }}>
        {/* Overlay Content */}
        <div className="container">
          <div style={{
            textAlign: 'center',
            color: 'var(--primary-white)',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h2 className={`section-headline ${isVisible ? 'animate-fade-in' : ''}`} style={{
              color: 'var(--primary-white)',
              marginBottom: '30px',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
            }}>
              {mockData.lifestyle.headline}
            </h2>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container">
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          {mockData.lifestyle.copy.map((paragraph, index) => (
            <p 
              key={index}
              className={`body-large ${isVisible ? 'animate-fade-in' : ''}`}
              style={{
                marginBottom: '24px',
                animationDelay: `${0.2 + (index * 0.1)}s`,
                opacity: isVisible ? 1 : 0
              }}
            >
              {paragraph}
            </p>
          ))}

          {/* Heritage Elements */}
          <div className={`heritage-elements ${isVisible ? 'animate-fade-in' : ''}`} style={{
            marginTop: '60px',
            animationDelay: '0.6s',
            opacity: isVisible ? 1 : 0
          }}>
            {/* Aztec Symbol */}
            <div style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 30px',
              background: 'var(--aztec-gold)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              {/* Xolo Dog Symbol */}
              <div style={{
                width: '40px',
                height: '32px',
                background: 'var(--primary-white)',
                borderRadius: '20px 20px 10px 10px',
                position: 'relative'
              }}>
                {/* Dog ears */}
                <div style={{
                  position: 'absolute',
                  top: '-4px',
                  left: '8px',
                  width: '8px',
                  height: '8px',
                  background: 'var(--primary-white)',
                  borderRadius: '4px 4px 0 0',
                  transform: 'rotate(-10deg)'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '8px',
                  width: '8px',
                  height: '8px',
                  background: 'var(--primary-white)',
                  borderRadius: '4px 4px 0 0',
                  transform: 'rotate(10deg)'
                }} />
              </div>

              {/* Ring decoration */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    width: '4px',
                    height: '12px',
                    background: 'var(--primary-white)',
                    top: '10px',
                    left: '50%',
                    transformOrigin: '2px 30px',
                    transform: `translateX(-50%) rotate(${i * 45}deg)`,
                    borderRadius: '2px',
                    opacity: 0.8
                  }}
                />
              ))}
            </div>

            <p className="body-medium" style={{
              fontStyle: 'italic',
              color: 'var(--text-light)'
            }}>
              Energy that honors the past, powers the future.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div style={{
        position: 'absolute',
        top: '60%',
        left: '5%',
        width: '100px',
        height: '2px',
        background: 'var(--aztec-gold)',
        opacity: 0.3,
        transform: 'rotate(45deg)'
      }} />
      
      <div style={{
        position: 'absolute',
        top: '70%',
        right: '5%',
        width: '100px',
        height: '2px',
        background: 'var(--aztec-gold)',
        opacity: 0.3,
        transform: 'rotate(-45deg)'
      }} />

      <style jsx>{`
        @media (max-width: 768px) {
          .heritage-elements {
            margin-top: 40px !important;
          }
          
          .section-large > div:first-child {
            height: 50vh !important;
            min-height: 300px !important;
            background-attachment: scroll !important;
          }
        }
      `}</style>
    </section>
  );
};

export default LifestyleSection;