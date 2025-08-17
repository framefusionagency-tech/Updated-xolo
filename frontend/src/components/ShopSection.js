import React, { useState } from 'react';
import { mockData } from '../data/mock';

const ShopSection = () => {
  const [quantities, setQuantities] = useState({});
  const [selectedPack, setSelectedPack] = useState('variety');

  const updateQuantity = (flavorId, change) => {
    setQuantities(prev => ({
      ...prev,
      [flavorId]: Math.max(0, (prev[flavorId] || 0) + change)
    }));
  };

  const getTotalItems = () => {
    return Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(quantities).reduce((total, [flavorId, qty]) => {
      const flavor = mockData.flavors.find(f => f.id === parseInt(flavorId));
      return total + (flavor ? flavor.price * qty : 0);
    }, 0).toFixed(2);
  };

  return (
    <section id="shop" className="section-large" style={{
      background: 'var(--warm-white)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <h2 className="display-large" style={{ 
            marginBottom: '20px' 
          }}>
            Start Your Energy Journey
          </h2>
          <p className="heading-editorial" style={{
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Pick your favorites or try them all
          </p>
        </div>

        {/* Pack Selection */}
        <div style={{
          marginBottom: '60px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}>
            <button
              className={selectedPack === 'variety' ? 'btn-primary' : 'btn-secondary'}
              onClick={() => setSelectedPack('variety')}
              style={{
                padding: '16px 32px'
              }}
            >
              Variety Pack
            </button>
            
            <button
              className={selectedPack === 'individual' ? 'btn-primary' : 'btn-secondary'}
              onClick={() => setSelectedPack('individual')}
              style={{
                padding: '16px 32px'
              }}
            >
              Individual Cans
            </button>
          </div>

          {/* Variety Pack Option */}
          {selectedPack === 'variety' && (
            <div className="card-minimal animate-fade-in" style={{
              maxWidth: '600px',
              margin: '0 auto',
              textAlign: 'center',
              background: 'linear-gradient(135deg, var(--banana-light) 0%, var(--citrus-light) 100%)'
            }}>
              <h3 className="heading-playful" style={{
                marginBottom: '12px',
                color: 'var(--soft-black)'
              }}>
                {mockData.shop.varietyPack.name}
              </h3>
              
              <p className="body-medium" style={{
                marginBottom: '24px',
                lineHeight: '1.6'
              }}>
                {mockData.shop.varietyPack.description}
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '30px',
                flexWrap: 'wrap'
              }}>
                <div className="display-large" style={{
                  fontSize: '36px',
                  color: 'var(--soft-black)'
                }}>
                  ${mockData.shop.varietyPack.price}
                </div>
                
                <div style={{
                  background: 'var(--tropical)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                  {mockData.shop.varietyPack.savings}
                </div>
              </div>

              <button className="btn-primary interactive-hover" style={{
                fontSize: '16px',
                padding: '16px 32px'
              }}>
                Add Variety Pack to Cart
                <span style={{ fontSize: '16px' }}>🎉</span>
              </button>
            </div>
          )}

          {/* Individual Cans Option */}
          {selectedPack === 'individual' && (
            <div className="animate-fade-in">
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '30px',
                marginBottom: '40px'
              }}>
                {mockData.flavors.map((flavor) => (
                  <div
                    key={flavor.id}
                    className="card-minimal"
                    style={{
                      background: `linear-gradient(135deg, ${flavor.accentColor}15 0%, var(--white) 100%)`,
                      border: `2px solid ${flavor.accentColor}30`
                    }}
                  >
                    <div style={{
                      textAlign: 'center',
                      marginBottom: '20px'
                    }}>
                      <img 
                        src={flavor.image}
                        alt={flavor.name}
                        style={{
                          width: '120px',
                          height: 'auto',
                          marginBottom: '15px'
                        }}
                      />
                      
                      <h4 className="heading-playful" style={{
                        fontSize: '20px',
                        marginBottom: '8px'
                      }}>
                        {flavor.name}
                      </h4>
                      
                      <p className="body-medium" style={{
                        opacity: 0.8,
                        marginBottom: '15px'
                      }}>
                        ${flavor.price} each
                      </p>
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '15px'
                    }}>
                      <div className="quantity-selector">
                        <button
                          className="quantity-btn"
                          onClick={() => updateQuantity(flavor.id, -1)}
                          disabled={!quantities[flavor.id]}
                        >
                          −
                        </button>
                        
                        <span style={{
                          fontWeight: '600',
                          minWidth: '30px',
                          textAlign: 'center'
                        }}>
                          {quantities[flavor.id] || 0}
                        </span>
                        
                        <button
                          className="quantity-btn"
                          onClick={() => updateQuantity(flavor.id, 1)}
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="btn-flavor"
                        onClick={() => updateQuantity(flavor.id, 1)}
                        style={{
                          backgroundColor: flavor.accentColor,
                          color: 'white',
                          borderColor: flavor.accentColor
                        }}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              {getTotalItems() > 0 && (
                <div className="card-minimal animate-fade-in" style={{
                  maxWidth: '500px',
                  margin: '0 auto',
                  textAlign: 'center',
                  background: 'var(--soft-black)',
                  color: 'var(--white)'
                }}>
                  <h4 className="heading-playful" style={{
                    color: 'var(--white)',
                    marginBottom: '16px'
                  }}>
                    Your Cart
                  </h4>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '20px'
                  }}>
                    <span className="body-medium" style={{ color: 'var(--white)' }}>
                      {getTotalItems()} items
                    </span>
                    <span className="body-large" style={{ 
                      fontWeight: '700',
                      color: 'var(--banana)'
                    }}>
                      ${getTotalPrice()}
                    </span>
                  </div>

                  <button className="btn-primary" style={{
                    background: 'var(--banana)',
                    color: 'var(--soft-black)',
                    width: '100%',
                    justifyContent: 'center'
                  }}>
                    Checkout
                    <span style={{ fontSize: '16px' }}>→</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .quantity-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        
        .quantity-btn:disabled:hover {
          background: none !important;
          color: var(--charcoal) !important;
        }
        
        @media (max-width: 768px) {
          .card-minimal {
            padding: 24px !important;
          }
          
          .card-minimal img {
            width: 80px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ShopSection;