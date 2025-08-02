import React, { useEffect, useState } from 'react';
import './scrollindicator.css'

const ScrollTopButton = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
const [showUp, setShowUp] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const maxScroll = scrollHeight - clientHeight;

      const percentScrolled = scrollTop / maxScroll;
      const clampedPercent = Math.min(Math.max(percentScrolled, 0), 1);
      setScrollPercent(clampedPercent * 100); // Fill progress circle
      setShowUp(scrollTop > 100); // Show button after scrolling a bit
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button className="scroll-top-button" onClick={scrollToTop} aria-label="Scroll to top">
      <svg className="progress-ring" viewBox="0 0 36 36">
        <path
          className="progress-ring-track"
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="progress-ring-indicator"
          strokeDasharray={`${scrollPercent}, 100`}
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <i className="fas fa-arrow-up arrow-icon"></i>
    </button>
  );
};

export default ScrollTopButton;
