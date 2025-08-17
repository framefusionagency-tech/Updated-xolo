import React, { useState } from 'react';
import { mockData } from '../data/mock';

const CanGallery = () => {
  const [hoveredCan, setHoveredCan] = useState(null);

  return (
    <section id="can-gallery" className="can-gallery stone-texture section-padding" style={{
      background: `
        linear-gradient(180deg, #151922 0%, var(--obsidian) 50%, #151922 100%)
      `,
      position: 'relative'
    }}>
      <div className="temple-container">
        {/* Section Header */}
        <div className="section-header" style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <h2 className="headline-medium">On the Plinth</h2>
        </div>

        {/* Can Grid */}
        <div className="can-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '60px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {mockData.cans.map((can, index) => (
            <div
              key={can.id}
              className="can-card"
              onMouseEnter={() => setHoveredCan(can.id)}
              onMouseLeave={() => setHoveredCan(null)}
              style={{
                textAlign: 'center',
                position: 'relative',
                transform: hoveredCan === can.id ? 'translateY(-10px)' : 'translateY(0)',
                transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
              }}
            >
              {/* Jade Plinth */}
              <div className="plinth" style={{
                width: '160px',
                height: '30px',
                background: `
                  linear-gradient(135deg, var(--jade) 0%, #1FC4AB 100%)
                `,
                margin: '0 auto 20px',
                borderRadius: '4px',
                boxShadow: hoveredCan === can.id 
                  ? '0 10px 40px var(--jade-glow)' 
                  : '0 5px 20px rgba(26, 167, 149, 0.3)',
                transition: 'all 0.6s ease',
                position: 'relative'
              }}>
                {/* Glowing Inlays */}
                <div className="inlay-pattern" style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '80%',
                  height: '2px',
                  background: `
                    linear-gradient(90deg, 
                      transparent 0%, 
                      var(--gold) 25%, 
                      var(--gold) 75%, 
                      transparent 100%
                    )
                  `,
                  boxShadow: '0 0 10px var(--gold-glow)',
                  opacity: hoveredCan === can.id ? 1 : 0.6,
                  transition: 'opacity 0.6s ease'
                }} />
              </div>

              {/* Can Image */}
              <div className="can-container" style={{
                position: 'relative',
                marginBottom: '30px',
                height: '320px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src={can.image}
                  alt={can.name}
                  style={{
                    maxWidth: '240px',
                    height: 'auto',
                    maxHeight: '300px',
                    objectFit: 'contain',
                    filter: hoveredCan === can.id 
                      ? `drop-shadow(0 20px 40px ${can.color}80)` 
                      : `drop-shadow(0 10px 20px ${can.color}40)`,
                    transform: hoveredCan === can.id ? 'scale(1.05)' : 'scale(1)',
                    transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
                  }}
                />

                {/* Specular Sweep on Hover */}
                {hoveredCan === can.id && (
                  <div className="specular-sweep" style={{
                    position: 'absolute',
                    top: '10%',
                    left: '20%',
                    width: '20px',
                    height: '70%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                    animation: 'specular-sweep 2s ease-in-out',
                    borderRadius: '20px',
                    pointerEvents: 'none'
                  }} />
                )}

                {/* Animated Droplets on Hover */}
                {hoveredCan === can.id && [...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="droplet"
                    style={{
                      position: 'absolute',
                      width: '3px',
                      height: '6px',
                      background: 'var(--moonlight)',
                      borderRadius: '50% 50% 50% 0',
                      left: `${40 + i * 15}%`,
                      top: '25%',
                      opacity: 0.8,
                      animation: `droplet-fall ${1.5 + i * 0.3}s ease-in-out infinite ${i * 0.2}s`
                    }}
                  />
                ))}
              </div>

              {/* Can Info */}
              <div className="can-info">
                <h3 className="headline-large" style={{
                  fontSize: '28px',
                  marginBottom: '12px',
                  color: hoveredCan === can.id ? can.color : 'var(--moonlight)',
                  transition: 'color 0.6s ease'
                }}>
                  {can.name}
                </h3>
                
                <p className="body-medium" style={{
                  opacity: hoveredCan === can.id ? 1 : 0.8,
                  transition: 'opacity 0.6s ease'
                }}>
                  {can.tagline}
                </p>
              </div>

              {/* Hover Glow Effect */}
              {hoveredCan === can.id && (
                <div className="hover-glow" style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '300px',
                  height: '300px',
                  background: `radial-gradient(circle, ${can.color}20 0%, transparent 70%)`,
                  borderRadius: '50%',
                  pointerEvents: 'none',
                  zIndex: -1,
                  animation: 'glow-pulse 2s ease-in-out infinite'
                }} />
              )}
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="gallery-decorations" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0
        }}>
          {/* Stone Pillars */}
          <div className="pillar left" style={{
            position: 'absolute',
            left: '5%',
            top: '20%',
            width: '40px',
            height: '60%',
            background: `
              linear-gradient(180deg, var(--obsidian-light) 0%, var(--obsidian) 100%)
            `,
            borderRadius: '20px',
            opacity: 0.6,
            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)'
          }} />
          
          <div className="pillar right" style={{
            position: 'absolute',
            right: '5%',
            top: '20%',
            width: '40px',
            height: '60%',
            background: `
              linear-gradient(180deg, var(--obsidian-light) 0%, var(--obsidian) 100%)
            `,
            borderRadius: '20px',
            opacity: 0.6,
            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)'
          }} />
        </div>
      </div>
    </section>
  );
};

export default CanGallery;