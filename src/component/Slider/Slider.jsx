import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import any modules you plan to use
// import { Autoplay, Navigation, Pagination } from "swiper/modules";

import './slider.css';
function Slider() {
  const slides = [
    {
      id: 1,
      title: "Our Courses",
      content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      bgColor: "#4a90a4"
    },
    {
      id: 2,
      title: "Expert Instructors",
      content: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      bgColor: "#e67e22"
    },
    {
      id: 3,
      title: "Flexible Learning",
      content: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      bgColor: "#9b59b6"
    },
    {
      id: 4,
      title: "Certification",
      content: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      bgColor: "#2ecc71"
    },
    {
      id: 5,
      title: "Community",
      content: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.",
      bgColor: "#e74c3c"
    }
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="slider-container">
        <div className="slider-header">
          <h1>Our Courses</h1>
          
        </div>
        
        <div className="slider-wrapper">
          <div className="nav-button prev-button" onClick={prevSlide}>
            <span>PREV</span>
          </div>
          
          <div className="slider-content">
            {slides.map((slide, index) => (
              <div 
                key={slide.id}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
                style={{backgroundColor: slide.bgColor}}
              >
                <div className="slide-inner">
                  <h2>{slide.title}</h2>
                  <p>{slide.content}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="nav-button next-button" onClick={nextSlide}>
            <span>NEXT</span>
          </div>
        </div>
        
        <div className="pagination-dots">
          {slides.map((_, index) => (
            <span 
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Slider;