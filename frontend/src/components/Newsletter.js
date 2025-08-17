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
        description: "Thanks for joining! You'll hear from us soon (in a good way).",
        duration: 5000,
      });
      
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="section" style={{
      background: 'var(--cream)',
      position: 'relative'
    }}>
      {/* Fun Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 20% 20%, var(--berry)12 0%, transparent 40%),
          radial-gradient(circle at 80% 80%, var(--tropical)12 0%, transparent 40%)
        `,
        opacity: 0.8
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div className="card-minimal" style={{
            background: 'var(--white)',
            borderRadius: '32px',
            border: '3px solid var(--soft-black)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Decorative Corner Elements */}
            <div style={{
              position: 'absolute',
              top: '-10px',
              left: '-10px',
              width: '40px',
              height: '40px',
              background: 'var(--banana)',
              borderRadius: '50%',
              transform: 'rotate(-15deg)'
            }} />
            
            <div style={{
              position: 'absolute',
              top: '-5px',
              right: '-5px',
              width: '30px',
              height: '30px',
              background: 'var(--citrus)',
              borderRadius: '6px',
              transform: 'rotate(25deg)'
            }} />

            {/* Header */}
            <div style={{ marginBottom: '30px' }}>
              <h2 className="display-large" style={{
                fontSize: 'clamp(28px, 5vw, 48px)',
                marginBottom: '12px',
                color: 'var(--soft-black)'
              }}>
                {mockData.newsletter.headline}
              </h2>
              
              <p className="heading-editorial" style={{
                fontSize: '18px',
                color: 'var(--charcoal)'
              }}>
                {mockData.newsletter.subline}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              gap: '16px',
              marginBottom: '24px',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <div style={{ flex: '1', minWidth: '250px', maxWidth: '350px' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    background: 'var(--light-grey)',
                    border: '2px solid transparent',
                    borderRadius: '25px',
                    color: 'var(--soft-black)',
                    fontSize: '16px',
                    fontFamily: 'var(--font-sans)',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--banana)';
                    e.target.style.background = 'var(--white)';
                    e.target.style.transform = 'scale(1.02)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'transparent';
                    e.target.style.background = 'var(--light-grey)';
                    e.target.style.transform = 'scale(1)';
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
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  background: 'var(--soft-black)',
                  padding: '16px 24px'
                }}
              >
                {isSubmitting ? 'Joining...' : 'Count Me In'}
                <span style={{ fontSize: '16px' }}>
                  {isSubmitting ? '⏳' : '✨'}
                </span>
              </button>
            </form>

            {/* Footer Text */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}>
              <span className="body-small">
                We promise not to spam you
              </span>
              <span style={{ fontSize: '16px' }}>🤝</span>
            </div>

            {/* Bottom Decorative Elements */}
            <div style={{
              position: 'absolute',
              bottom: '-8px',
              left: '20%',
              width: '25px',
              height: '25px',
              background: 'var(--berry)',
              borderRadius: '50%'
            }} />
            
            <div style={{
              position: 'absolute',
              bottom: '-6px',
              right: '25%',
              width: '20px',
              height: '20px',
              background: 'var(--tropical)',
              borderRadius: '4px',
              transform: 'rotate(45deg)'
            }} />
          </div>

          {/* Social Proof */}
          <div style={{
            marginTop: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
            flexWrap: 'wrap'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div className="heading-playful" style={{ 
                fontSize: '24px',
                color: 'var(--banana)',
                marginBottom: '4px'
              }}>
                2.5K+
              </div>
              <div className="body-small">Happy Sippers</div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div className="heading-playful" style={{ 
                fontSize: '24px',
                color: 'var(--citrus)',
                marginBottom: '4px'
              }}>
                4.8★
              </div>
              <div className="body-small">Average Rating</div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div className="heading-playful" style={{ 
                fontSize: '24px',
                color: 'var(--berry)',
                marginBottom: '4px'
              }}>
                99%
              </div>
              <div className="body-small">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        input::placeholder {
          color: var(--medium-grey);
        }
        
        @media (max-width: 768px) {
          .card-minimal {
            padding: 30px 24px !important;
          }
          
          form {
            flex-direction: column !important;
            align-items: center;
          }
          
          form input {
            min-width: 100% !important;
            max-width: 100% !important;
          }
          
          .social-proof {
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Newsletter;