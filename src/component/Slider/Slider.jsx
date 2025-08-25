import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    image: "/course-1.png",
    caption: "Flexible Learning",
    abb:"BMCT",
  },
  {
    image: "course-2.png",
    caption: "Expert Mentors",
    abb:"CPC"
  },
  {
    image: "/course-3.png",
    caption: "Interactive Projects",
    abb:"AMCT"
  }
];

const Slider = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  function hadlenavigate() {
    window.location.href = "https://wa.me/9629645951";
  }

  function handleLearnMore(title) {
    console.log(title);
    navigate(`/detail/${title}`);
  }

  return (
    <>
      <div className='Slide-head'>
        <h2 className='gradient-text'>Our Courses</h2>
      </div>
      <div className="slider-container">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="slide-image"
                style={{ backgroundImage: `url(${slide.image})` }}
                // on mobile → whole slide is clickable
                onClick={() => isMobile && handleLearnMore(slide.abb)}
              >
                {!isMobile && (
                  <div className="slide-caption">
                    <Button
                      className="submit_bt"
                      text="Learn more"
                      shape="square"
                      onClick={() => handleLearnMore(slide.abb)}
                    />
                    <Button
                      className="submit_bt"
                      text="Enquire Now"
                      shape="square"
                      onClick={hadlenavigate}
                    />
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
