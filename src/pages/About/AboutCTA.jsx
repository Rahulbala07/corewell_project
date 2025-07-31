import React from "react";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <div style={styles.card}>
      <h3 style={styles.text}>
        Looking for a career in <span style={styles.highlight}>Medical Coding Carrer</span>
      </h3>
      <Link to="/contact" style={styles.button}>
        Contact Us
      </Link>
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
  },
  text: {
    fontSize: "1rem",
    fontWeight: "600",
    margin: 0,
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
