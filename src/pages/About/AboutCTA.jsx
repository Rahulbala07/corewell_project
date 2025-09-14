import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show CTA when scrolled past 500px (you can change this)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 700) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div style={styles.card} className="about-cta-card">
      <h3 style={styles.text}>
        Looking for a career in <span style={styles.highlight}>Medical Coding Career</span>
      </h3>
      <a  href="https://wa.me/9629645951"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp" style={styles.button}>
        Contact Us
      </a>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#2f6139",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    borderRadius: "8px",
    margin: "2rem 0",
    color: "#ffffff",
    flexWrap: "wrap",
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    // zIndex: 1000,
    boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
    width:"80%",
  },
  text: {
    fontSize: "1rem",
    fontWeight: "600",
    margin: 0,
    textAlign: "center",
  },
  highlight: {
    color: "#ffffff",
  },
  button: {
    backgroundColor: "#a2e6d1",
    color: "#004d3f",
    padding: "0.5rem 1rem",
    borderRadius: "9999px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "0.9rem",
    transition: "0.3s",
  },
};

export default AboutCTA;
