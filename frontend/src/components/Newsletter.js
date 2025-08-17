import React, { useState } from 'react';
import { useToast } from '../hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Mock submission delay
    setTimeout(() => {
      toast({
        title: "Welcome to the Tribe",
        description: "The ancient energy awakens within you. Check your email for what comes next.",
        duration: 5000,
      });
      
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="newsletter" className="newsletter stone-texture section-padding" style={{
      background: `
        linear-gradient(180deg, var(--obsidian) 0%, #0F1219 100%)
      `,
      position: 'relative'
    }}>
      <div className="temple-container">
        <div className="newsletter-content" style={{
          maxWidth: '600px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2
        }}>
          {/* Newsletter Card */}
          <div className="newsletter-card" style={{
            background: `
              linear-gradient(135deg, var(--obsidian-light) 0%, var(--obsidian) 100%)
            `,
            borderRadius: '12px',
            padding: '60px 40px',
            boxShadow: `
              0 20px 60px rgba(0, 0, 0, 0.8),
              inset 0 1px 0 rgba(185, 197, 214, 0.1)
            `,
            border: '1px solid rgba(26, 167, 149, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Card Glow Effect */}
            <div className="card-glow" style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `
                radial-gradient(circle at 50% 0%, var(--jade-glow) 0%, transparent 50%)
              `,
              opacity: 0.1,
              pointerEvents: 'none'
            }} />

            {/* Header */}
            <div className="newsletter-header" style={{ marginBottom: '40px' }}>
              <h2 className="headline-medium" style={{ marginBottom: '16px' }}>
                Join the Pack
              </h2>
              <p className="body-medium" style={{ opacity: 0.9 }}>
                Ancient wisdom. Modern energy. Delivered to your inbox.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="newsletter-form" style={{
              display: 'flex',
              gap: '16px',
              marginBottom: '30px',
              flexWrap: 'wrap'
            }}>
              <div style={{ flex: '1', minWidth: '250px' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email to awaken the energy"
                  required
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    background: 'rgba(185, 197, 214, 0.05)',
                    border: '2px solid rgba(26, 167, 149, 0.3)',
                    borderRadius: '8px',
                    color: 'var(--moonlight)',
                    fontSize: '16px',
                    fontFamily: 'var(--font-body)',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    backdropFilter: 'blur(10px)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--jade)';
                    e.target.style.boxShadow = '0 0 20px var(--jade-glow)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(26, 167, 149, 0.3)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary glow-gold"
                style={{
                  minWidth: '140px',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? 'Joining...' : 'Join'}
                <span style={{ marginLeft: '8px' }}>
                  {isSubmitting ? '⏳' : '⚡'}
                </span>
              </button>
            </form>

            {/* Footer Text */}
            <p className="body-small" style={{ 
              opacity: 0.7,
              lineHeight: '1.4'
            }}>
              No spam. Just the energy you need when you need it.
            </p>

            {/* Decorative Elements */}
            <div className="card-decorations" style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: 'none'
            }}>
              {/* Jade Inlays */}
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                width: '40px',
                height: '2px',
                background: 'var(--jade)',
                boxShadow: '0 0 10px var(--jade-glow)',
                opacity: 0.6
              }} />
              
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '40px',
                height: '2px',
                background: 'var(--jade)',
                boxShadow: '0 0 10px var(--jade-glow)',
                opacity: 0.6
              }} />

              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                width: '40px',
                height: '2px',
                background: 'var(--gold)',
                boxShadow: '0 0 10px var(--gold-glow)',
                opacity: 0.4
              }} />
              
              <div style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                width: '40px',
                height: '2px',
                background: 'var(--gold)',
                boxShadow: '0 0 10px var(--gold-glow)',
                opacity: 0.4
              }} />
            </div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="newsletter-decorations" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1
        }}>
          {/* Temple Torches */}
          <div className="torch left" style={{
            position: 'absolute',
            top: '30%',
            left: '10%',
            width: '60px',
            height: '80px',
            background: `
              radial-gradient(ellipse at bottom, var(--ember) 0%, rgba(196, 89, 43, 0.4) 50%, transparent 80%)
            `,
            animation: 'ember-flicker 3s ease-in-out infinite'
          }} />
          
          <div className="torch right" style={{
            position: 'absolute',
            top: '30%',
            right: '10%',
            width: '60px',
            height: '80px',
            background: `
              radial-gradient(ellipse at bottom, var(--ember) 0%, rgba(196, 89, 43, 0.4) 50%, transparent 80%)
            `,
            animation: 'ember-flicker 4s ease-in-out infinite'
          }} />

          {/* Floating Glyphs */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="floating-glyph"
              style={{
                position: 'absolute',
                width: '12px',
                height: '12px',
                background: i % 2 === 0 ? 'var(--jade)' : 'var(--gold)',
                borderRadius: '2px',
                top: `${20 + (i % 3) * 25}%`,
                left: `${15 + (i % 2) * 70}%`,
                opacity: 0.3,
                boxShadow: `0 0 15px ${i % 2 === 0 ? 'var(--jade-glow)' : 'var(--gold-glow)'}`,
                animation: `float ${4 + i}s ease-in-out infinite ${i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .newsletter-form input::placeholder {
          color: rgba(185, 197, 214, 0.6);
        }
        
        @media (max-width: 768px) {
          .newsletter-card {
            padding: 40px 24px !important;
          }
          
          .newsletter-form {
            flex-direction: column !important;
            align-items: center;
          }
          
          .newsletter-form input {
            min-width: 100% !important;
          }
          
          .torch {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Newsletter;