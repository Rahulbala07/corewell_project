import React, { useState } from 'react';
import './home.css';
import { FaPlay } from 'react-icons/fa6';
import WhyChooseUs from '../../component/Choose/Choose';
import Slider from '../../component/Slider/Slider';
import Team from '../../component/Team/Team';
import InformationForm from '../../component/information_form/Informationform';
import PopupForm from '../../component/information_form/Informationform';

function Home() {

 const [isPopupOpen, setIsPopupOpen] = useState(false); 
 const handleDownload = () => {
    const pdfUrl = "/Cluster_WorkerThreads_WorkerPool_Presentation.pdf"; 
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "downloaded-file.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
    <div className="parent-home" >
       <div className="hero-container">

        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2"></div>
        
        <div className="hero-content-wrapper">

            <div className="hero-left">
                <div className="ribbon-banner">
                    <span className="ribbon-text">
                        🏆 In India's Most Trusted Platform for Medical Coding Careers
                    </span>
                </div>

                <h1 className="main-heading">
                    Transform Your Future with <span className="gradient-text">Next-Gen</span>
                    <span className="gradient-text">Medical Coding Education</span>
                </h1>

                <p className="home-description">
                    Gain in-demand skills through expert-led, interactive training designed for real-world success.
                    Our comprehensive online medical coding programs combine live mentorship, hands-on learning,
                    and globally recognized certifications to help you advance confidently in the healthcare industry.
                </p>

              
            </div>


            <div className="hero-right">

                {/* <div className="stats-container">
                    <div className="stat-card">
                        <div className="stat-number">200+</div>
                        <div className="stat-label">Courses • 1000+ students</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">100+</div>
                        <div className="stat-label">Super mentors who give experience in their respective fields</div>
                    </div>
                </div> */}

                <div className="hero-buttons">
                    <button className="enroll-btn" onClick={() => setIsPopupOpen(true)}>
                        Enroll Now
                        <span style={{"margin-left": "0.5rem"}}>▶</span>
                    </button>
                    <button className="download-btn" onClick={handleDownload}>Download Brochure</button>
                </div>

                <img
                    src="/student.jpg"
                    alt="Medical Coding Training"
                    className="hero-image-logo"
                />
            </div>
        </div>
    </div>

    
        <Slider/>
      
      <div className="hero-image" data-aos="fade-left" data-aos-duration="2000">
      <WhyChooseUs/>
      </div>
      {/* <div className='Team-container'>
      <Team/>
      </div> */}
      
    </div>
    {isPopupOpen && <PopupForm onClose={() => setIsPopupOpen(false)} />}
      </>


    
  );
}

export default Home;
