// components/WhyChooseUs.jsx
import React from "react";
import CountUp from "react-countup";
import "./choose.css";

const stats = [
  { label: "Certified Students", value: 10000, suffix: "+" },
  { label: "Courses Completed", value: 500, suffix: "+" },
  { label: "Placement Rate", value: 100, suffix: "%" },
  { label: "Expert Mentors", value: 25, suffix: "+" },
];

function WhyChooseUs() {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        {/* Left: Counters */}
        <div className="why-choose-stats" data-aos="fade-right">
          {stats.map((stat, i) => (
            <div key={i} className="stat-box">
              <h2>
                <CountUp end={stat.value} duration={2} />{stat.suffix}
              </h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Right: Reasons */}
        <div className="why-choose-reasons" data-aos="fade-left">
          <h3>Why Choose Us?</h3>
          <ul>
            <li>Globally Recognized Certification Programs</li>
            <li>Live Mentorship from Certified Coders</li>
            <li>100% Placement Support Rate</li>
            <li>Hands-on, Practical Medical Coding Training</li>
            <li>Online Learning Training</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
