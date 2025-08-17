import React, { useState } from 'react';
import { useToast } from '../hooks/use-toast';
import { mockData } from '../data/mock';

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
        title: mockData.newsletter.success,
        description: "You're now part of the pack. Get ready for exclusive updates and early access to new flavors.",
        duration: 5000,
      });
      
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="section" style={{
      background: 'var(--primary-white)',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          {/* Newsletter Card */}
          <div className="card" style={{
            background: 'var(--primary-white)',
            border: '2px solid var(--aztec-gold)',
            borderRadius: '20px',
            padding: '60px 40px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Aztec Border Pattern */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: `
                repeating-linear-gradient(
                  90deg,
                  var(--aztec-gold),
                  var(--aztec-gold) 20px,
                  transparent 20px,
                  transparent 40px
                )
              `
            }} />
            
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: `
                repeating-linear-gradient(
                  90deg,
                  var(--aztec-gold),
                  var(--aztec-gold) 20px,
                  transparent 20px,
                  transparent 40px
                )
              `
            }} />

            {/* Header */}
            <div style={{ marginBottom: '40px' }}>
              {/* Xolo Icon */}
              <div style={{
                width: '60px',
                height: '48px',
                background: 'var(--text-dark)',
                borderRadius: '30px 30px 15px 15px',
                position: 'relative',
                margin: '0 auto 20px'
              }}>
                {/* Dog ears */}
                <div style={{
                  position: 'absolute',
                  top: '-6px',
                  left: '12px',
                  width: '12px',
                  height: '12px',
                  background: 'var(--text-dark)',
                  borderRadius: '6px 6px 0 0',
                  transform: 'rotate(-10deg)'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '-6px',
                  right: '12px',
                  width: '12px',
                  height: '12px',
                  background: 'var(--text-dark)',
                  borderRadius: '6px 6px 0 0',
                  transform: 'rotate(10deg)'
                }} />
              </div>

              <h2 className="section-headline" style={{
                fontSize: '32px',
                marginBottom: '16px'
              }}>
                {mockData.newsletter.headline}
              </h2>
              
              <p className="body-medium" style={{
                color: 'var(--text-medium)'
              }}>
                {mockData.newsletter.subline}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{
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
                  placeholder="Enter your email address"
                  required
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    background: 'var(--warm-grey)',
                    border: '2px solid var(--accent-grey)',
                    borderRadius: '12px',
                    color: 'var(--text-dark)',
                    fontSize: '16px',
                    fontFamily: 'var(--font-primary)',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--aztec-gold)';
                    e.target.style.background = 'var(--primary-white)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--accent-grey)';
                    e.target.style.background = 'var(--warm-grey)';
                  }}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
                style={{
                  minWidth: '140px',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? 'Joining...' : 'Join Tribe'}
              </button>
            </form>

            {/* Footer Text */}
            <p className="body-small" style={{
              color: 'var(--text-light)',
              lineHeight: '1.4'
            }}>
              No spam, just energy. Unsubscribe anytime.
            </p>

            {/* Decorative Aztec Elements */}
            <div style={{
              position: 'absolute',
              top: '30px',
              left: '30px',
              width: '20px',
              height: '20px',
              background: 'var(--aztec-gold)',
              borderRadius: '2px',
              transform: 'rotate(45deg)',
              opacity: 0.3
            }} />
            
            <div style={{
              position: 'absolute',
              top: '30px',
              right: '30px',
              width: '20px',
              height: '20px',
              background: 'var(--aztec-gold)',
              borderRadius: '2px',
              transform: 'rotate(45deg)',
              opacity: 0.3
            }} />
          </div>
        </div>
      </div>

      <style jsx>{`
        input::placeholder {
          color: var(--text-light);
        }
        
        @media (max-width: 768px) {
          .card {
            padding: 40px 24px !important;
          }
          
          form {
            flex-direction: column !important;
            align-items: stretch;
          }
          
          form input {
            min-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Newsletter;