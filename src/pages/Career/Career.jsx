import React, { useState } from "react";
import { FaLaptopCode, FaGraduationCap, FaCertificate, FaChalkboardTeacher } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./career.css";
import PopupForm from "../../component/information_form/Informationform";
import Button from "../../component/Button/Button";
// import { Button } from "bootstrap";

const CareerPage = () => {
  const courses = [
    { title: "BMCT – Basic Medical Coding Training", duration: "3 Months", mode: "Online" ,abb:"BMCT"},
    { title: "CPC – Certified Professional Coder", duration: "4 Months", mode: "Online",abb :"CPC" },
    { title: "AMCT – Advanced Medical Coding Training", duration: "6 Months", mode: "Online",abb:"AMCT" },
  ];

  const primaryBlue = "#039efeff";
  const softBlueBg = "#eaf6ff";
  const [isPopupOpen, setIsPopupOpen] = useState(false);
   const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <>
    <div className="careers-page" style={{ backgroundColor: softBlueBg ,marginTop:"80px"}}>
      {/* Hero Section */}
      <section className="text-center py-5 career-header" style={{ backgroundColor: primaryBlue }}>
        <div className="container">
          <h1>Career</h1>
          <p className="lead mx-auto" style={{ maxWidth: "650px" }}>
            Join our IT Learning Institute and gain in-demand skills through BMCT, CPC, AMCT, and other career-oriented courses.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-5 career-courses">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold">Our Courses</h2>
          <div className="row">
            {courses.map((course, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card shadow-sm border-0 h-100">
                  <div className="card-body d-flex flex-column gap-2">
                    <h5 className="card-title" >{course.title}</h5>
                    <p className="text-muted mb-1"><strong>Duration:</strong> {course.duration}</p>
                    <p className="text-secondary"><strong>Mode:</strong> {course.mode}</p>
                    <div className="mt-auto">
                      <Button
								className="submit_bt"
								text="Enroll now"
								shape="square"
                onClick={() => {setIsPopupOpen(true)
                setSelectedCourse(course)}}
							/>
                    </div>
                  </div>
                </div>
               
              </div>
              
            ))}
            
          </div>
          
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5" style={{ backgroundColor: softBlueBg }}>
        <div className="container">
          <h2 className="text-center  fw-bold" style={{marginBottom:"2rem"}} >Why Choose Our Institute?</h2>
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <FaLaptopCode size={40} style={{ color: primaryBlue }} className="mb-3" />
              <h5>Industry-Relevant Skills</h5>
              <p className="text-muted">Learn the latest coding and IT skills employers need.</p>
            </div>
            <div className="col-md-3 mb-4">
              <FaGraduationCap size={40} style={{ color: primaryBlue }} className="mb-3" />
              <h5>Expert Trainers</h5>
              <p className="text-muted">Get guidance from certified professionals with years of experience.</p>
            </div>
            <div className="col-md-3 mb-4">
              <FaCertificate size={40} style={{ color: primaryBlue }} className="mb-3" />
              <h5>Certification</h5>
              <p className="text-muted">Earn globally recognized certifications like CPC and AMCT.</p>
            </div>
            <div className="col-md-3 mb-4">
              <FaChalkboardTeacher size={40} style={{ color: primaryBlue }} className="mb-3" />
              <h5>Practical Training</h5>
              <p className="text-muted">Hands-on projects and real-world case studies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-5" style={{ backgroundColor: primaryBlue, color: "#fff" }}>
        <div className="container">
          <h2 className="fw-bold mb-3">Start Your Learning Journey Today!</h2>
          <p className="mb-4">
            Enroll now and take the first step towards a successful career in medical coding and IT.
          </p>
          <button
  className="btn btn-light btn-lg"
  onClick={() => window.open("https://wa.me/9629645951", "_blank")}
>
  Contact Us
</button>
        </div>
      </section>
    </div>
      {isPopupOpen && (
          <PopupForm
            onClose={() => setIsPopupOpen(false)}
            Register={selectedCourse?.abb} // now works
          />
        )} 
    </>
  );
};

export default CareerPage;
