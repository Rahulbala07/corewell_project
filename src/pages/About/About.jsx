import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { FaChalkboardTeacher, FaBuilding, FaGlobe, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
import AboutCTA from "./AboutCTA";
import "./About.css";

const coreValues = [
  { title: "Collaboration", desc: "We grow together through teamwork and shared success." },
  { title: "Transparency", desc: "Open communication and honesty in all our actions." },
  { title: "Trust", desc: "Building confidence with integrity and commitment." },
  { title: "Integrity", desc: "Upholding strong ethics in every interaction." },
];

const serviceItems = [
  { icon: <FaChalkboardTeacher />, label: "Classroom Trainings" },
  { icon: <FaBuilding />, label: "Corporate Trainings" },
  { icon: <FaGlobe />, label: "Online Trainings" },
  { icon: <FaUserTie />, label: "HR Consultancy" },
];

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        {/* INTRO */}
        <motion.h2 className="about-title" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          About Corewell
        </motion.h2>
        <motion.p className="about-description" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          Corewell is an ISO-certified, AAPC-licensed institution providing high-quality online medical coding & billing training. With experienced mentors, certified trainers, and industry-aligned modules, we empower you for global healthcare careers.
        </motion.p>

        {/* HIGHLIGHT CARDS */}
        <div className="about-cards">
          {[
            {
              icon: "/accreditation-icon.svg",
              title: "Accredited",
              desc: "AAPC licensed & ISO certified. Recognized by IA&F and IAS.",
            },
            {
              icon: "/mentorship-icon.svg",
              title: "1:1 Mentorship",
              desc: "Get personal guidance from certified experts.",
            },
            {
              icon: "/training-icon.svg",
              title: "Top Notch Training",
              desc: "Live classes by experts with placement support.",
            },
            {
              icon: "/placement-icon.svg",
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
                <CheckCircle color="#0d6efd" />
                <div>
                  <h5>{value.title}</h5>
                  <p>{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* TRAINING HIGHLIGHT */}
        <div className="training-highlight-section grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h5 className="text-sm text-blue-600 uppercase">Get to know about us</h5>
            <h2 className="text-3xl font-bold text-gray-900">
              Dive into our <span className="text-blue-600">Medical Coding Courses</span> and Ignite Your Career!
            </h2>
            <p className="text-gray-600">
              Our online medical coding training empowers you with the essential skills and certifications to thrive in healthcare documentation, insurance coding, and revenue cycle management.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Master ICD-10, CPT, HCPCS coding systems from certified professionals</li>
              <li>Access over 50+ hours of interactive, job-focused training</li>
              <li>Boost your employability with industry-recognized certifications</li>
            </ul>
            <Link to="/about" className="cta-btn">
              About More →
            </Link>
          </div>

          <div className="relative">
            <img src="/images/medical-training-1.jpg" alt="Medical coding students" className="rounded-lg shadow-lg" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src="/images/experience-badge.png" alt="Experience badge" className="w-24 h-24" />
            </div>
            <img src="/images/medical-training-2.jpg" alt="Online learning" className="absolute bottom-0 right-0 w-40 rounded-lg shadow-md border-4 border-white" />
          </div>
        </div>

        {/* WHATSAPP FORM & METRICS */}
        <motion.section className="whatsapp-metrics" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="section-heading">Get the Latest Updates</h2>
          <p className="section-subtext">Stay informed about our courses, training opportunities, and success stories.</p>
          <div className="whatsapp-form">
            <input type="text" placeholder="Enter Your WhatsApp Number" />
            <button>Submit</button>
          </div>
          <p className="note-text">Quick Response, No Spam</p>
          <div className="metrics-grid">
            <div>
              <h3>10,000+</h3>
              <p>Successfully Trained<br />Learners & Counting</p>
            </div>
            <div>
              <h3>5,000+</h3>
              <p>Students working<br />as Medical Coders</p>
            </div>
          </div>
        </motion.section>

        {/* SERVICE SECTION */}
        <motion.section className="service-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h3 className="text-center text-2xl font-semibold mb-6">We provide the best Training & Placement Services</h3>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            We provide ready-to-work, high-quality training programs with job placement in top companies. Choose from online or classroom training as per your flexibility.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceItems.map((item, idx) => (
              <div key={idx} className="service-card">
                <div className="icon">{item.icon}</div>
                <div className="label">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* EMAIL SUBSCRIPTION */}
        <motion.section className="subscribe-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <div>
            <h3>Ready to Get Started</h3>
            <p>Join thousands of learners and future-proof your career today.</p>
          </div>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email..." />
            <button>Subscribe</button>
          </div>
        </motion.section>

        {/* CTA */}
        <AboutCTA />
      </div>
    </section>
  );
};

export default About;
