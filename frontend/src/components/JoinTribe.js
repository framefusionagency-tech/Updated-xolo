import React, { useState } from 'react';
import { useToast } from '../hooks/use-toast';

const JoinTribe = () => {
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
        title: "Welcome to the XOLO Tribe! 🔥",
        description: "You're now part of the energy revolution. Check your email for exclusive updates.",
        duration: 5000,
      });
      
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="join-tribe" style={{
      background: 'var(--bg-primary)',
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      padding: '100px 7.6923%'
    }}>
      {/* Animated Background */}
      <div className="tribe-background" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 25% 25%, rgba(0, 255, 209, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(106, 13, 173, 0.1) 0%, transparent 50%)
        `,
        animation: 'tribeGlow 8s ease-in-out infinite'
      }} />

      {/* XOLO Claw Mark Pattern */}
      <div className="claw-marks" style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '200px',
        height: '100px',
        opacity: 0.1
      }}>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${i * 30}px`,
              top: 0,
              width: '4px',
              height: '80px',
              background: 'var(--brand-primary)',
              borderRadius: '2px',
              transform: `rotate(${15 + i * 5}deg)`,
              animation: `clawGlow 4s ease-in-out infinite ${i * 0.3}s`
            }}
          />
        ))}
      </div>

      <div className="tribe-content" style={{
        textAlign: 'center',
        maxWidth: '600px',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Main Heading */}
        <h2 className="display-large glow-text" style={{
          marginBottom: '30px',
          textShadow: '0 0 30px rgba(0, 255, 209, 0.8)'
        }}>
          Join the XOLO Tribe
        </h2>

        <p className="body-large" style={{
          marginBottom: '50px',
          color: 'var(--text-secondary)',
          lineHeight: '1.6'
        }}>
          Get exclusive access to new flavors, underground events, and the raw energy that fuels legends.
        </p>

        {/* Newsletter Form */}
        <form onSubmit={handleSubmit} className="tribe-form" style={{
          display: 'flex',
          gap: '16px',
          marginBottom: '40px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email to join the revolution"
            required
            style={{
              flex: '1',
              minWidth: '300px',
              padding: '16px 20px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid var(--border-subtle)',
              borderRadius: '0px',
              color: 'var(--text-primary)',
              fontSize: '16px',
              fontFamily: 'Space Mono, monospace',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              outline: 'none'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--brand-primary)';
              e.target.style.boxShadow = '0 0 20px rgba(0, 255, 209, 0.3)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--border-subtle)';
              e.target.style.boxShadow = 'none';
            }}
          />
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary"
            style={{
              minWidth: '180px',
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? 'not-allowed' : 'pointer'
            }}
          >
            {isSubmitting ? 'Joining...' : 'Join the Tribe'}
            <span style={{ marginLeft: '8px' }}>
              {isSubmitting ? '⏳' : '⚡'}
            </span>
          </button>
        </form>

        {/* Social Proof */}
        <div className="social-proof" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px',
          flexWrap: 'wrap'
        }}>
          <div className="stat" style={{ textAlign: 'center' }}>
            <div className="heading-1" style={{ color: 'var(--brand-primary)' }}>10K+</div>
            <div className="body-medium" style={{ color: 'var(--text-muted)' }}>Energy Warriors</div>
          </div>
          <div className="stat" style={{ textAlign: 'center' }}>
            <div className="heading-1" style={{ color: 'var(--brand-primary)' }}>24/7</div>
            <div className="body-medium" style={{ color: 'var(--text-muted)' }}>Power Flow</div>
          </div>
          <div className="stat" style={{ textAlign: 'center' }}>
            <div className="heading-1" style={{ color: 'var(--brand-primary)' }}>∞</div>
            <div className="body-medium" style={{ color: 'var(--text-muted)' }}>Possibilities</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        padding: '40px 7.6923%',
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div style={{
          color: 'var(--brand-primary)',
          fontSize: '20px',
          fontWeight: '700',
          fontFamily: 'Space Mono, monospace',
          textShadow: '0 0 10px rgba(0, 255, 209, 0.8)'
        }}>
          XOLO
        </div>
        
        <div style={{
          color: 'var(--text-muted)',
          fontSize: '14px'
        }}>
          © 2025 XOLO Energy. Unleash the ancient power.
        </div>
      </footer>

      <style jsx>{`
        @keyframes tribeGlow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        
        @keyframes clawGlow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        
        .tribe-form input::placeholder {
          color: var(--text-muted);
        }
        
        @media (max-width: 768px) {
          .tribe-form {
            flex-direction: column;
            align-items: center;
          }
          
          .tribe-form input {
            min-width: 280px;
          }
          
          .social-proof {
            gap: 20px;
          }
          
          footer {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default JoinTribe;