import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CourseAccordion from '../../component/couseAccordation/CourseAccordation';
import courseData from '../../data/coursedata.json';
import './coursedetails.css';
import { useRef,useEffect } from 'react';
import Button from '../../component/Button/Button';
import PopupForm from '../../component/information_form/Informationform';

const CourseDetailsPage = () => {
  const { title } = useParams();
  const normalizedName = title.replace(/-/g, ' ').toLowerCase();
  const course = courseData.find(c => c.abb.toLowerCase() === normalizedName);

  const [activeAccordion, setActiveAccordion] = useState('');
  const [activeTab, setisactiveTab] = useState('overview');
  const [showAll, setShowAll] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
    const overviewRef = useRef(null);
  const courseContentRef = useRef(null);
    useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4, // 40% visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setisactiveTab(id); // This will be 'overview' or 'coursecontent'
        }
      });
    }, options);

    if (overviewRef.current) observer.observe(overviewRef.current);
    if (courseContentRef.current) observer.observe(courseContentRef.current);

    return () => {
      if (overviewRef.current) observer.unobserve(overviewRef.current);
      if (courseContentRef.current) observer.unobserve(courseContentRef.current);
    };
  }, []);

  if (!course) return <div className="container py-5">Course Not Found</div>;

  const handleTabClick = (tabId) => setisactiveTab(tabId);
  const toggleAccordion = (id) => setActiveAccordion(activeAccordion === id ? '' : id);

  const allItems = course.keyComponents || [];
  const itemsToShow = showAll ? allItems : allItems.slice(0, 4);
  const mid = Math.ceil(itemsToShow.length / 2);
  const column1 = itemsToShow.slice(0, mid);
  const column2 = itemsToShow.slice(mid);




  return (
    <>
      <div className='courseDeatil'>
        <img src='/gradient-light.png' alt="Background" />
        <div className="container sub-container">
          <div className="row">
            <div className="col-lg-8">
              <div className="content text-start">
                <ul className="page-list">
                  <li className="rbt-breadcrumb-item"><a href="/">Home</a></li>
                  <li><div className="icon-right"><i className="fas fa-chevron-right"></i></div></li>
                  <li className="rbt-breadcrumb-item active">{course.abb.toUpperCase()}</li>
                </ul>
                  <h2 className="title">Basic Medical Coding Training (BMCT)</h2>
                <p className="description">{course.description}</p>
                <ul className="rbt-meta">
                  {course.tags?.map((tag, i) => (
                    <li key={i}><i className={tag.icon}></i> {tag.label}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-4 course-page">
          <div className="col-lg-8">
            <div className="card shadow-sm mb-4 course-image">
              <img src={course.image || "/default-course.png"} className="card-img-top w-100" alt={course.title} />
            </div>

            <div className="mb-4 sticky-top bg-white course-nav" style={{ top: '100px', zIndex: 10, borderRadius: '30px' }}>
              <ul className="nav nav-pills nav-fill border rounded">
                <li className="nav-item">
                  <a className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`} href="#overview" onClick={() => handleTabClick('overview')}>Overview</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeTab === 'coursecontent' ? 'active' : ''}`} href="#coursecontent" onClick={() => handleTabClick('coursecontent')}>Course Content</a>
                </li>
              </ul>
            </div>

            <div className="card shadow-sm mb-4" id="overview" ref={overviewRef}>
              <div className="card-body">
                <h4 className="card-title mb-3">What you'll learn</h4>
                <hr />
                <p className="card-text mb-4">{course.overview}</p>
                <h5 className="mb-3">Key Components</h5>
                <hr />
                <div className='row'>
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      {column1.map((item, i) => (
                        <li key={i} className="mb-2">
                          <i className="fas fa-check text-success me-2"></i>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      {column2.map((item, i) => (
                        <li key={i} className="mb-2">
                          <i className="fas fa-check text-success me-2"></i>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {allItems.length > 4 && (
                  <div className="mt-2">
                    <span className='span-show' onClick={() => setShowAll(!showAll)}>
                      {showAll ? 'Show Less' : 'Show More'}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="card shadow-sm mb-4" id="coursecontent" ref={courseContentRef}>
              <div className="card-body">
                <h4 className="card-title mb-3">Course Content</h4>
                <CourseAccordion
                  activeAccordion={activeAccordion}
                  toggleAccordion={toggleAccordion}
                  accordionData={course.sections}
                />
              </div>
            </div>
            {courseData.length > 1 && (
  <div className="mt-5">
    <div className="row align-items-center mb-4">
      <div className="col-md-8">
        <span className="badge bg-pink-100 text-pink-800 mb-2">Top Course</span>
        <h4>More Courses by <strong className="text-primary">Corewell</strong></h4>
      </div>
      <div className="col-md-4 text-end">
        <a href="/courses" className="btn btn-outline-primary">View All Courses</a>
      </div>
    </div>

    <div className="row g-4">
      {courseData.filter(c => c.abb !== course.abb).map((otherCourse, index) => (
        <div className="col-md-6" key={index}>
          <div className="card h-100 shadow-sm">
            <img src={otherCourse.image || "/default-course.png"} className="card-img-top" alt={otherCourse.title} />
            <div className="card-body">
              <h5 className="card-title">{otherCourse.abb.toUpperCase()}</h5>
              <div className="mb-2">
                <small className="text-muted">
                  <i className="fas fa-book me-1"></i>
                  {otherCourse.mode || "Online Training"}
                </small>
              </div>
              <p className="card-text">{otherCourse.shortDescription || otherCourse.description?.slice(0, 100) + "..."}</p>
              <a href={`/detail/${otherCourse.abb.toLowerCase().replace(/\s+/g, '-')}`} className="btn btn-link p-0">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

          </div>

          <div className="col-lg-4">
            <div className="card enroll-card shadow-sm sticky-top">
              <div className="card-body">
                <div className="d-grid gap-2 mb-4 enroll-buttons">
                  <Button
								className="submit_bt"
								text="Enroll now"
								shape="square"
                onClick={() => setIsPopupOpen(true)}
							/>
                  <a href="https://wa.me/9629645951" className="btn btn-outline-primary">Contact Us <i className="fas fa-arrow-right ms-2"></i></a>
                </div>
                <h6 className="text-muted mb-3"><i className="fas fa-rotate-ccw me-2"></i>{course.title}</h6>

                <div className="mb-4">
                  <table className="table table-sm">
                    <tbody>
                      {course.details?.map((detail, idx) => (
                        <tr key={idx}>
                          <td>{detail.label}</td>
                          <td>
                            <span className={`badge ${detail.badgeClass || 'bg-light'}`} style={{color:"#6b7385",fontSize:"14px"}}>{detail.value}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="text-center mb-4">
                  <div className="d-flex justify-content-center align-items-center gap-2 mb-3 social-icon">
                    <a href="https://www.facebook.com/focusmedicalcoding" target="_blank" rel="noopener noreferrer" >
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://www.twitter.com" >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/focushealthcare.info/?hl=en" target="_blank" rel="noopener noreferrer" >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/focus-healthcare-solutions-764b1a199/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                  <hr />
                  <div>
                    <p className="mb-2">For details about the course</p>
                    <div className="alert alert-info py-2">
                      <i className="fas fa-phone me-2"></i>
                      Call Us: <a href="tel:+919150851067" className="fw-bold text-decoration-none">+91-9150851067</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
        {isPopupOpen && <PopupForm onClose={() => setIsPopupOpen(false)} Register={course.abb}/>}
      </div>
    </>
  );
};

export default CourseDetailsPage;
