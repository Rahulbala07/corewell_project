import React, { useEffect, useRef, useState, useCallback } from 'react';
import './slider.css';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

function Slider() {
  const slides = [
    {
      id: 1,
      title: "Our Courses",
      content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      bgColor: "#FFFFFF",
      image: "https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg"
    },
    {
      id: 2,
      title: "Expert Instructors",
      content: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      bgColor: "#FFFFFF",
      image: "https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg"
    },
    {
      id: 3,
      title: "Flexible Learning",
      content: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      bgColor: "#FFFFFF",
      image: "https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg"
    },
    {
      id: 4,
      title: "Certification",
      content: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      bgColor: "#FFFFFF",
      image: "https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg"
    },
    {
      id: 5,
      title: "Community",
      content: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.",
      bgColor: "#FFFFFF",
      image: "https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg"
    }
  ];
   const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState('');
  const sliderRef = useRef(null);
  const sliderStripRef = useRef(null);

  const extendedSlides = [
    slides[slides.length - 1], 
    ...slides,
    slides[0]
  ];

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTransitionDirection('next');
    
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(slides.length);
      

      setTimeout(() => {
        if (sliderStripRef.current) {
          sliderStripRef.current.classList.add('no-transition');
          setCurrentSlide(0);
          
          setTimeout(() => {
            if (sliderStripRef.current) {
              sliderStripRef.current.classList.remove('no-transition');
            }
            setIsTransitioning(false);
            setTransitionDirection('');
          }, 50);
        }
      }, 800);
    } else {
      setCurrentSlide(prev => prev + 1);
      setTimeout(() => {
        setIsTransitioning(false);
        setTransitionDirection('');
      }, 800);
    }
  }, [currentSlide, isTransitioning, slides.length]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTransitionDirection('prev');
    
    if (currentSlide === 0) {
      // If we're at the first slide, move to the duplicate last slide
      setCurrentSlide(-1);
      
      // After transition, reset to actual last slide without animation
      setTimeout(() => {
        if (sliderStripRef.current) {
          sliderStripRef.current.classList.add('no-transition');
          setCurrentSlide(slides.length - 1);
          
          // Re-enable transitions after DOM update
          setTimeout(() => {
            if (sliderStripRef.current) {
              sliderStripRef.current.classList.remove('no-transition');
            }
            setIsTransitioning(false);
            setTransitionDirection('');
          }, 50);
        }
      }, 800);
    } else {
      setCurrentSlide(prev => prev - 1);
      setTimeout(() => {
        setIsTransitioning(false);
        setTransitionDirection('');
      }, 800);
    }
  }, [currentSlide, isTransitioning, slides.length]);

  const goToSlide = useCallback((index) => {
    if (isTransitioning || index === currentSlide) return;
    
    setIsTransitioning(true);
    setTransitionDirection(index > currentSlide ? 'next' : 'prev');
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
      setTransitionDirection('');
    }, 800);
  }, [currentSlide, isTransitioning]);

  // Touch swipe gesture with improved handling
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let startX = 0;
    let startY = 0;
    let isDragging = false;
    let hasMoved = false;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isDragging = true;
      hasMoved = false;
    };

    const handleTouchMove = (e) => {
      if (!isDragging || isTransitioning) return;
      
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const diffX = startX - currentX;
      const diffY = startY - currentY;
      
      // Only handle horizontal swipes
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 10) {
        hasMoved = true;
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e) => {
      if (!isDragging || !hasMoved || isTransitioning) {
        isDragging = false;
        hasMoved = false;
        return;
      }
      
      const currentX = e.changedTouches[0].clientX;
      const diffX = startX - currentX;

      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
      
      isDragging = false;
      hasMoved = false;
    };

    slider.addEventListener("touchstart", handleTouchStart, { passive: false });
    slider.addEventListener("touchmove", handleTouchMove, { passive: false });
    slider.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchmove", handleTouchMove);
      slider.removeEventListener("touchend", handleTouchEnd);
    };
  }, [nextSlide, prevSlide, isTransitioning]);

  // Auto-play functionality (optional)
  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 8000); // Change slide every 5 seconds

    return () => clearInterval(autoPlayInterval);
  }, [nextSlide, isTransitioning]);

  // Calculate the actual slide index for display
  const getActualSlideIndex = (index) => {
    if (index === -1) return slides.length - 1;
    if (index === slides.length) return 0;
    return index;
  };

  return (
    <div className="slider-container">
      <div className="slider-header">
        <h1>Our Courses</h1>
      </div>

      <div className="slider-wrapper">
        <div className="nav-button prev-button" onClick={prevSlide}>
          <span><i class="fas fa-arrow-left"></i></span>
        </div>

        <div className="slider-content" ref={sliderRef}>
          <div
            ref={sliderStripRef}
            className="slider-strip"
            style={{
              width: `${extendedSlides.length * 100}%`,
              transform: `translateX(-${(100 / extendedSlides.length) * (currentSlide + 1)}%)`,
              display: 'flex'
            }}
          >
            {extendedSlides.map((slide, index) => {
              const actualIndex = index - 1; // Adjust for the duplicate slide at the beginning
              const isActive = actualIndex === currentSlide;
              const isPrev = actualIndex === currentSlide - 1;
              const isNext = actualIndex === currentSlide + 1;
              
              return (
                <div
                  key={`${slide.id}-${index}`}
                  className={`slide ${isActive ? 'active' : ''} ${isPrev ? 'prev' : ''} ${isNext ? 'next' : ''} ${
                    isTransitioning && isActive ? 
                      (transitionDirection === 'next' ? 'slide-entering-right' : 'slide-entering-left') : ''
                  }`}
                  style={{
                    backgroundColor: slide.bgColor,
                    width: `${100 / extendedSlides.length}%`,
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div className="slide-inner">
                    <div className="slide-image">
                      <img src={slide.image} alt={slide.title} />
                    </div>
                    <div className="slide-text">
                      <h2>{slide.title}</h2>
                      <p>{slide.content}</p>
                      <Button
								className="submit_bt"
								text="Learn More"
								shape="square"
                onClick={() => navigate(`/detail/${slide.id}`)}
							/>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="nav-button next-button" onClick={nextSlide}>
          <span><i class="fas fa-arrow-right"></i></span>
        </div>
      </div>

      <div className="pagination-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === getActualSlideIndex(currentSlide) ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;