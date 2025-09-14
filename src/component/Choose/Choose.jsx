// components/WhyChooseUs.jsx
import React from "react";
import CountUp from "react-countup";
import "./choose.css";
import { useNavigate } from "react-router-dom";

const stats = [
  { label: "Certified Students", value: 1000, suffix: "+" ,icon:"/image.png"},
  { label: "Courses Completed", value: 50, suffix: "+",icon:"/education.png" },
  { label: "Placement Rate", value: 100, suffix: "%",icon:"/staffing.png" },
  { label: "Expert Mentors", value: 15 , suffix: "+",icon:"/leadership.png" },
];
const reasons = [
  "Globally Recognized Certification Programs",
  "Live Mentorship from Certified Coders", 
  "100% Placement Support Rate",
  "Hands-on, Practical Medical Coding Training",
  "Online Learning Training"
];


function WhyChooseUs() {
  const navigate = useNavigate();
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        {/* Left: Counters */}
        <div className="why-choose-stats" data-aos="fade-right">
          {stats.map((stat, i) => (
             <div
    key={i}
    className={`stat-box box${i+1}`}
  >
    <h2>
      <CountUp end={stat.value} duration={2} />
      {stat.suffix}
    </h2>
    <p>{stat.label}</p>
    <img src={stat.icon} alt={stat.label} className="stat-icon" />
  </div>
          ))}
        </div>

        <div className="col-lg-6">
              <div className="ps-lg-4">
                {/* Header */}
                <div className="badge-custom">
                  WHY CHOOSE US
                </div>
                
                <h2 className="main-title">
                  Empowering You with
                  <br />
                  <span className="gradient-text">
                    Expertise and Support
                  </span>
                </h2>
                
                <p className="description-text">
                  Benefit from our expert-led medical coding courses designed for your success. 
                  We offer comprehensive support and industry-relevant knowledge.
                </p>

                {/* Reasons List */}
                <div className="mb-4">
                  {reasons.map((reason, index) => (
                    <div key={index} className="reason-item">
                      <div className="check-icon">
                        <svg width="12" height="12" fill="white" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      </div>
                      <p className="reason-text">
                        {reason}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="btn cta-button" onClick={()=>navigate('/career')}>
                  Get Started Today
                </button>
              </div>
            </div>
        </div>
    </section>
    
  );
}

export default WhyChooseUs;
