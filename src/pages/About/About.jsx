import React from "react";
import { motion } from "framer-motion";
import { Users,Eye,ShieldCheck,CheckCircle } from "lucide-react";
import { FaChalkboardTeacher, FaBuilding, FaGlobe, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
import AboutCTA from "./AboutCTA";
import "./About.css";
import Button from "../../component/Button/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import TrainingPlacementSection from "../../component/training/Training";

const coreValues = [
  { title: "Collaboration",icon:<Users className="icon" />, desc: "We grow together through teamwork and shared success." },
  { title: "Transparency",icon:<Eye className="icon"/>, desc: "Open communication and honesty in all our actions." },
  { title: "Trust", icon:<ShieldCheck className="icon" />,desc: "Building confidence with integrity and commitment." },
  { title: "Integrity",icon:<CheckCircle className="icon"/>, desc: "Upholding strong ethics in every interaction." },
];

const serviceItems = [
  { icon: <FaChalkboardTeacher />, label: "Classroom Trainings" },
  { icon: <FaBuilding />, label: "Corporate Trainings" },
  { icon: <FaGlobe />, label: "Online Trainings" },
  { icon: <FaUserTie />, label: "HR Consultancy" },
];

const About = () => {
  return (
<>

        {/* INTRO */}
        <section className="about-inner-section">
  <div className="overlay">
    <motion.div
      className="about-header"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="about-title">About Corewell</h2>
      <div className="underline"></div>
    </motion.div>

    <motion.p
      className="about-description"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      Corewell is an ISO-certified, AAPC-licensed institution providing high-quality online medical coding & billing training. With experienced mentors, certified trainers, and industry-aligned modules, we empower you for global healthcare careers.
    </motion.p>
  </div>
</section>
    <section className="about-section">
        {/* HIGHLIGHT CARDS */}
        <div className="about-cards">
          {[
            {
              icon: "/award.png",
              title: "Accredited",
              desc: "AAPC licensed & ISO certified. Recognized by IA&F and IAS.",
            },
            {
              icon: "/stakeholder.png",
              title: "1:1 Mentorship",
              desc: "Get personal guidance from certified experts.",
            },
            {
              icon: "/book.png",
              title: "Top Notch Training",
              desc: "Live classes by experts with placement support.",
            },
            {
              icon: "/shaking-hands.png",
              title: "100% Placement",
              desc: "Work with top MNCs. Complete job assistance.",
            },
          ].map((card, idx) => (
            <motion.div className="about-card" whileHover={{ scale: 1.05 }} key={idx}>
              <img src={card.icon} alt={card.title} />
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CORE VALUES */}
 <motion.div className="values-section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
  <h3 className="values-title">Our Core Values</h3>
  <div className="values-grid">
    {coreValues.map((value, i) => (
      <motion.div key={i} className="value-card" whileHover={{ y: -5 }}>
        <div className="icon-square">
          {value.icon}
        </div>
        <div className="card-content">
          <h5>{value.title}</h5>
          <p>{value.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>



        {/* TRAINING HIGHLIGHT */}
        <div className="container py-5">
  <div className="row align-items-center g-5">
    <div className="col-lg-6 left-about" >
      <h6 className=" fw-semibold mb-2 header-about">Get to know about us</h6>
      <h2 className="fw-bold text-dark mb-3">
        Dive into our <span className="para-bold">Medical Coding Courses</span> and Ignite Your Career!
      </h2>
      <p className="text-muted mb-4">
        Our online medical coding training empowers you with the essential skills and certifications to thrive in healthcare documentation, insurance coding, and revenue cycle management.
      </p>
     <ul className="list-unstyled ps-3 mb-4">
  <li className="mb-3 d-flex align-items-center">
    <span className="icon-circle bg-primary-light text-primary me-3">
      <i className="fas fa-rocket"></i>
    </span>
    Master ICD-10, CPT, HCPCS coding systems from certified professionals
  </li>
  <li className="mb-3 d-flex align-items-center">
    <span className="icon-circle bg-warning-light text-warning me-3">
      <i className="fas fa-star"></i>
    </span>
    Access over 50+ hours of interactive, job-focused training
  </li>
  <li className="d-flex align-items-center">
    <span className="icon-circle bg-success-light text-success me-3">
      <i className="fas fa-briefcase"></i>
    </span>
    Boost your employability with industry-recognized certifications
  </li>
</ul>

      <Button className="submit_bt learnmore"
								 text='Learn More'
								shape="square"/>
    </div>

<div className="col-lg-6">
  <div className="thumbnail-wrapper">
    <div className="thumbnail image-1">
      <img
        src="corewell_project\public\about-1.jpg"
        alt="Education Images"
        style={{
          transform: 'translate3d(0px, -16.515px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)',
          WebkitTransform: 'translate3d(0px, -16.515px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)',
        }}
      />
    </div>
    <div className="thumbnail image-2 d-none d-xl-block">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2u30y1RuvnINlGTmR67PiWbZkdV7vkVi4A&s"
        alt="Education Images"
        style={{
          transform: 'translate3d(0px, 43.686px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)',
          WebkitTransform: 'translate3d(0px, 43.686px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)',
        }}
      />
    </div>
    <div className="thumbnail image-3 d-none d-md-block">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2u30y1RuvnINlGTmR67PiWbZkdV7vkVi4A&s"
        alt="Education Images"
        style={{
          transform: 'translate3d(0px, 20.957px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)',
          WebkitTransform: 'translate3d(0px, 20.957px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)',
        }}
      />
    </div>
  </div>
</div>

  </div>
</div>


        {/* WHATSAPP FORM & METRICS */}
        <motion.section className="whatsapp-metrics" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h5 className="text-uppercase section-subtitle">Stay Connected</h5>
          <h2 className="section-heading">Get the Latest Updates</h2>
          <p className="section-subtext">Stay informed about our courses, training opportunities, and success stories.</p>
          <div className="whatsapp-form">
            <input type="text" placeholder="Enter Your WhatsApp Number" />
                <button className="contact-btn send-feedback">
                                <span className="text-wrapper">
                                    <span className="arrow before"><FaArrowRightLong /></span>
                                    <span className="text">Submit</span>
                                    <span className="arrow after"><FaArrowRightLong /></span>
                                </span>
              </button>
          </div>
            <div class="trust-indicators">
            <div class="trust-item">
                <svg class="trust-icon" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                No Spam Guarantee
            </div>
            <div class="trust-item">
                <svg class="trust-icon" viewBox="0 0 24 24">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
                Quick Response
            </div>
            <div class="trust-item">
                <svg class="trust-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
                </svg>
                Trusted by 15,000+
            </div>
        </div>
          <div class="metrics-grid">
            <div>
                <div class="achievement-badge">
                    <svg class="achievement-icon" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                </div>
                <h3>10,000+</h3>
                <p>Successfully Trained<br />Learners & Counting</p>
            </div>
            <div>
                <div class="achievement-badge">
                    <svg class="achievement-icon" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"/>
                    </svg>
                </div>
                <h3>5,000+</h3>
                <p>Students working<br />as Medical Coders</p>
            </div>
        </div>
        </motion.section>

        {/* SERVICE SECTION */}
        <motion.section className="service-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
         <TrainingPlacementSection/>
        </motion.section>

        {/* EMAIL SUBSCRIPTION */}
        <motion.section className="subscribe-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <div>
            <h3>Ready to Get Started</h3>
            <p>Join thousands of learners and future-proof your career today.</p>
          </div>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email..." />
             <button className="contact-btn send-feedback">
                                <span className="text-wrapper">
                                    <span className="arrow before"><FaArrowRightLong /></span>
                                    <span className="text">Submit</span>
                                    <span className="arrow after"><FaArrowRightLong /></span>
                                </span>
              </button>
          </div>
        </motion.section>

        {/* CTA */}
        <AboutCTA />

    </section>
    </>
  );
};

export default About;
