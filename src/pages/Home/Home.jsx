import React from 'react';
import './home.css';
import { FaPlay } from 'react-icons/fa6';
import WhyChooseUs from '../../component/Choose/Choose';

function Home() {
  return (
    <div className="parent-home" >
      <div className="hero-container" data-aos="fade-up" data-aos-duration="2000">
        <div className='hero-sub-container'>
        <h5 className="achievement-badge">
             
        </h5>
        <div className="ribbon-banner">
              <span className="ribbon-text">🏆 In India’s Most Trusted Platform for Medical Coding Careers</span>
          </div>


        <h1 className="main-heading" >
          Transform Your Future with Next-Gen <span>Medical Coding</span> Education
        </h1>
        <p className="description">
          Gain in-demand skills through expert-led, interactive training designed for real-world success.
          Our comprehensive online medical coding programs combine live mentorship, hands-on learning,
          and globally recognized certifications to help you advance confidently in the healthcare industry.
        </p>
        </div>
        <div className="hero-buttons">
          <button className="enroll-btn">
            Enroll Now
            <FaPlay className="btn-icon" />
          </button>
          <button className="download-btn">Download Brochure</button>
        </div>
      </div>
      <div className="hero-image" data-aos="fade-left" data-aos-duration="2000">
      <WhyChooseUs/>
      </div>
    </div>
  );
}

export default Home;
