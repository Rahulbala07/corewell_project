import React from 'react'
import './home.css'
import { FaLandmark } from "react-icons/fa6";
import { HiHomeModern, HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LiaIndustrySolid } from "react-icons/lia";
import { FaPlay } from "react-icons/fa6";

function Home() {
  return (
    <div className="parent-home">
        <div className='hero-container'>
        
            <h5>India’s Most Trusted Platform for Medical Coding Careers</h5>
            <h1>TRANSFORM YOUR FUTURE WITH NEXT-GEN MEDICAL CODING EDUCATION.</h1>
            <p>Gain in-demand skills through expert-led, interactive training designed for real-world success. Our comprehensive online medical coding programs combine live mentorship, hands-on learning, and globally recognized certifications to help you advance confidently in the healthcare industry.</p>
          <div>
            <button className='Enroll-btn'>Enroll Now</button>
            <button className='Download-btn'>Download Brouchure</button>
          </div>
        </div>
    </div>
  )
}

export default Home