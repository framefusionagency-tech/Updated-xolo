import React, { useState } from 'react';
import { useToast } from '../hooks/use-toast';
import { mockData } from '../data/mock';

const CommunitySection = () => {
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
        title: mockData.community.success,
        description: "The future awaits. You'll receive exclusive updates about new flavors and legendary experiences.",
        duration: 5000,
      });
      
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="section-cyber" style={{
      background: `
        linear-gradient(135deg, var(--deep-black) 0%, var(--charcoal) 50%, var(--deep-black) 100%)
      `,
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Neon Grid */}
      <div className="cyber-grid" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.4,
        animation: 'grid-move 15s linear infinite'
      }} />

      {/* Aztec Mask Silhouette */}
      <div className="aztec-mask" style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        height: '300px',
        opacity: 0.1,
        zIndex: 1
      }}>
        <svg width="400" height="300" viewBox="0 0 400 300" fill="none">
          {/* Mask Base */}
          <path d="M200 50C250 50 300 100 300 150C300 200 250 250 200 250C150 250 100 200 100 150C100 100 150 50 200 50Z" 
                fill="var(--aztec-gold)" opacity="0.3"/>
          
          {/* Eye Sockets */}
          <ellipse cx="160" cy="130" rx="25" ry="30" fill="var(--electric-blue)" opacity="0.5"/>
          <ellipse cx="240" cy="130" rx="25" ry="30" fill="var(--electric-blue)" opacity="0.5"/>
          
          {/* Nose */}
          <polygon points="200,140 220,180 180,180" fill="var(--hot-pink)" opacity="0.4"/>
          
          {/* Mouth */}
          <rect x="180" y="200" width="40" height="20" rx="10" fill="var(--lime-green)" opacity="0.4"/>
          
          {/* Decorative Elements */}
          <circle cx="120" cy="100" r="8" fill="var(--neon-purple)" opacity="0.6"/>
          <circle cx="280" cy="100" r="8" fill="var(--neon-purple)" opacity="0.6"/>
          <circle cx="200" cy="80" r="12" fill="var(--cyber-yellow)" opacity="0.7"/>
        </svg>
      </div>

      {/* Floating Energy Orbs */}
      <div className="energy-orbs" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 2
      }}>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${12 + Math.random() * 8}px`,
              height: `${12 + Math.random() * 8}px`,
              background: [
                'var(--electric-blue)',
                'var(--hot-pink)', 
                'var(--lime-green)',
                'var(--neon-purple)',
                'var(--cyber-yellow)'
              ][i % 5],
              borderRadius: '50%',
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              animation: `float-particle ${6 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`,
              boxShadow: `0 0 20px currentColor`
            }}
          />
        ))}
      </div>

      <div className="cyber-container">
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 3
        }}>
          {/* Community Card */}
          <div style={{
            background: `
              linear-gradient(135deg, 
                rgba(0, 217, 255, 0.1) 0%, 
                rgba(255, 0, 128, 0.1) 50%,
                rgba(57, 255, 20, 0.1) 100%)
            `,
            backdropFilter: 'blur(30px)',
            border: '2px solid rgba(0, 217, 255, 0.3)',
            borderRadius: '24px',
            padding: '60px 40px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
          }}>
            {/* Holographic Border Effect */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `
                linear-gradient(45deg, 
                  var(--electric-blue) 0%, 
                  var(--hot-pink) 25%, 
                  var(--lime-green) 50%, 
                  var(--neon-purple) 75%, 
                  var(--electric-blue) 100%)
              `,
              borderRadius: '24px',
              padding: '2px',
              zIndex: -1,
              animation: 'cyber-rotate 8s linear infinite'
            }}>
              <div style={{
                background: 'var(--deep-black)',
                borderRadius: '22px',
                width: '100%',
                height: '100%'
              }} />
            </div>

            {/* Header */}
            <div style={{ marginBottom: '40px' }}>
              {/* Cyber XOLO Icon */}
              <div style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 30px',
                background: 'var(--neon-gradient)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                animation: 'neon-pulse 3s ease-in-out infinite'
              }}>
                {/* Xolo Symbol */}
                <div style={{
                  width: '40px',
                  height: '32px',
                  background: 'var(--deep-black)',
                  borderRadius: '20px 20px 10px 10px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-4px',
                    left: '8px',
                    width: '8px',
                    height: '8px',
                    background: 'var(--deep-black)',
                    borderRadius: '4px 4px 0 0',
                    transform: 'rotate(-10deg)'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '8px',
                    width: '8px',
                    height: '8px',
                    background: 'var(--deep-black)',
                    borderRadius: '4px 4px 0 0',
                    transform: 'rotate(10deg)'
                  }} />
                </div>

                {/* Orbital Rings */}
                <div style={{
                  position: 'absolute',
                  width: '100px',
                  height: '100px',
                  border: '1px solid var(--electric-blue)',
                  borderRadius: '50%',
                  borderStyle: 'dashed',
                  animation: 'cyber-rotate 10s linear infinite reverse',
                  opacity: 0.6
                }} />
                <div style={{
                  position: 'absolute',
                  width: '120px',
                  height: '120px',
                  border: '1px solid var(--hot-pink)',
                  borderRadius: '50%',
                  borderStyle: 'dotted',
                  animation: 'cyber-rotate 15s linear infinite',
                  opacity: 0.4
                }} />
              </div>

              <h2 className="heading-cyber" style={{
                marginBottom: '16px',
                fontSize: 'clamp(28px, 5vw, 48px)'
              }}>
                {mockData.community.headline}
              </h2>
              
              <p className="body-cyber" style={{
                opacity: 0.9,
                fontSize: '18px'
              }}>
                {mockData.community.subline}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              gap: '20px',
              marginBottom: '30px',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <div style={{ flex: '1', minWidth: '280px', maxWidth: '400px' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email to join the legends"
                  required
                  style={{
                    width: '100%',
                    padding: '18px 24px',
                    background: 'rgba(0, 0, 0, 0.8)',
                    border: '2px solid var(--electric-blue)',
                    borderRadius: '12px',
                    color: 'white',
                    fontSize: '16px',
                    fontFamily: 'var(--font-body)',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    backdropFilter: 'blur(10px)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--hot-pink)';
                    e.target.style.boxShadow = '0 0 30px rgba(255, 0, 128, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--electric-blue)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-neon neon-glow"
                style={{
                  minWidth: '160px',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  fontSize: '16px',
                  padding: '18px 32px'
                }}
              >
                {isSubmitting ? 'Connecting...' : 'Join Tribe'}
                <span style={{ marginLeft: '8px' }}>
                  {isSubmitting ? '⚡' : '🚀'}
                </span>
              </button>
            </form>

            {/* Footer Text */}
            <p className="body-glow" style={{
              fontSize: '14px',
              opacity: 0.7
            }}>
              No spam. Pure energy. Legendary updates only.
            </p>

            {/* Energy Pulse Lines */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '8px'
            }}>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: '30px',
                    height: '2px',
                    background: [
                      'var(--electric-blue)',
                      'var(--hot-pink)', 
                      'var(--lime-green)',
                      'var(--neon-purple)',
                      'var(--cyber-yellow)'
                    ][i],
                    animation: `neon-pulse ${2 + i * 0.3}s ease-in-out infinite ${i * 0.2}s`,
                    borderRadius: '1px'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
        
        @media (max-width: 768px) {
          .cyber-container > div > div {
            padding: 40px 24px !important;
          }
          
          form {
            flex-direction: column !important;
            align-items: center;
          }
          
          form input {
            min-width: 100% !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CommunitySection;