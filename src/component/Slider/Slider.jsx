import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css';
import Button from '../Button/Button';

const slides = [
  {
    image: "/course-1.png",
    caption: "Flexible Learning"
  },
  {
    image: "course-2.png",
    caption: "Expert Mentors"
  },
  {
    image: "/course-3.png",
    caption: "Interactive Projects"
  }
];

const Slider = () => {
  return (
    <>
    <div className='Slide-head'>
      <h2>Our Courses</h2>
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
            >
              <div className="slide-caption">
                <Button className="submit_bt" text="Learn more" shape="square"/>
                <Button className="submit_bt" text="Enquire Now" shape="square"/>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
};

export default Slider;
