import React, { useState, useEffect, useRef } from 'react';
import { isFreedomWeek } from '@/lib/independence';

const IndependenceSplash: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showText, setShowText] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if we're in Independence Week using existing function
    if (!isFreedomWeek()) {
      return; // Don't show splash outside Independence Week
    }

    setIsVisible(true);

    // Timeline sequence
    const timeline = setTimeout(() => {
      // At ~3.5s: cross-fade from video to text
      setShowText(true);
      
      // At ~6s: start exit animation
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
        
        // At ~7s: remove from DOM
        const removeTimer = setTimeout(() => {
          if (overlayRef.current) {
            overlayRef.current.remove();
          }
        }, 1000);

        return () => clearTimeout(removeTimer);
      }, 2500); // 2.5s after text shows (6s total)

      return () => clearTimeout(exitTimer);
    }, 3500); // 3.5s for video

    return () => clearTimeout(timeline);
  }, []);

  const handleVideoError = () => {
    // If video fails, skip to text immediately
    setShowText(true);
    setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        if (overlayRef.current) {
          overlayRef.current.remove();
        }
      }, 1000);
    }, 2000);
  };

  if (!isVisible) return null;

  return (
    <div
      id="independence-splash"
      ref={overlayRef}
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ backgroundColor: '#0B1F3B' }}
      aria-hidden="true"
    >
      {/* Flag Video */}
      <video
        id="flagVideo"
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
          showText ? 'opacity-0' : 'opacity-100'
        }`}
        autoPlay
        muted
        playsInline
        preload="auto"
        onError={handleVideoError}
      >
        <source src="/indianflag waving.mp4" type="video/mp4" />
      </video>

      {/* Text Container */}
      <div
        id="splashText"
        className={`relative z-10 text-center px-6 max-w-4xl transition-all duration-600 ease-in-out ${
          showText 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-2'
        }`}
        style={{
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
        }}
      >
        {/* Quote */}
        <p 
          className="text-white mb-8 leading-relaxed"
          style={{
            fontFamily: 'Merriweather, serif',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: '1.25rem',
            lineHeight: '1.5'
          }}
        >
          "They may kill me, but they cannot kill my ideas. They can crush my body, but they will not be able to crush my spirit"
          <br />
          <span className="block mt-2 text-right">— Bhagat Singh</span>
        </p>

        {/* Greeting */}
        <h1 
          className="text-white font-bold leading-tight"
          style={{
            fontFamily: 'Poppins, system-ui, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            lineHeight: '1.2',
            background: 'linear-gradient(90deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            opacity: 0.9
          }}
        >
          Happy 79th Independence Day
        </h1>
      </div>
    </div>
  );
};

export default IndependenceSplash;