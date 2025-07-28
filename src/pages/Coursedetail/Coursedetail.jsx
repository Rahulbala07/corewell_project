import React from 'react';
import './coursedetails.css'; // Optional custom styles
import slideDetails from '../../data/sliderdetails.json';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import courseData from '../../data/coursedata.json';
import CourseAccordion from '../../component/couseAccordation/CourseAccordation';
const CourseDetailsPage = () => {
  const { title } = useParams();
   const [activeAccordion, setActiveAccordion] = useState('collapseTwo1');

  const [activeTab,setisactiveTab]=useState('overview')
  const handleTabClick=(tabId)=>{
    setisactiveTab(tabId)
  }
const normalizedName = title.replace(/-/g, ' ').toLowerCase();

  const course = courseData.find(c => c.abb.toLowerCase() === normalizedName);
const featureData = [
  {
    items: [
      "ICD-10-CM (International Classification of Diseases, 10th Edition, Clinical Modification)",
      "CPT (Current Procedural Terminology) Coding",
      "HIPAA Compliance"
    ]
  },
  {
    items: [
      "Medical Terminology (Anatomy, Physiology, Pathology, Laboratory Techniques, etc.)",
      "HCPCS (Healthcare Common Procedure Coding System)",
      "Coding Guidelines"
    ]
  }
];
const [showAll, setShowAll] = useState(false);
  const allItems = featureData.flatMap(col => col.items);
  const itemsToShow = showAll ? allItems : allItems.slice(0, 2);
  const mid = Math.ceil(itemsToShow.length / 2);
  const column1 = itemsToShow.slice(0, mid);
  const column2 = itemsToShow.slice(mid);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? '' : id);
  };


  return (
    <>
     <div className='courseDeatil'>
        <div>
      <img src='/gradient-light.png'/>
      </div>
        <div className="container sub-container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="content text-start">
                        <ul className="page-list">
                            <li className="rbt-breadcrumb-item"><a href="index">Home</a></li>
                            <li>
                                <div className="icon-right"><i class="fas fa-chevron-right"></i></div>
                            </li>
                            <li className="rbt-breadcrumb-item active">BMCT</li>
                        </ul>
                        <h2 className="title">Basic Medical Coding Training (BMCT)</h2>
                        <p className="description">Medical coding is essential in healthcare because it converts procedures, diagnoses, and services into standardized alphanumeric codes. These codes play critical roles in billing, recordkeeping, research, and ensuring accurate insurance reimbursements.
</p>

                       

                        <ul className="rbt-meta">
                            <li><i className="feather-calendar"></i>Expert Trainers</li>
                            <li><i className="feather-globe"></i> Online Training</li>
                            <li><i className="feather-award"></i>Certified Course</li>
                        </ul>

                    </div>
                </div>
            </div>
        
      </div>
     
     </div>
     <div className="container py-5">
        <div className="row g-4">

          <div className="col-lg-8">
            {/* Course Image */}
            <div className="card shadow-sm mb-4 course-image">
              <img  src="/course-1.png" className="card-img-top w-100" alt="BMCT Course" />
            </div>

            {/* Navigation Pills */}
            <div className="mb-4 sticky-top bg-white course-nav" style={{top: '100px', zIndex: 10}}>
              <ul className="nav nav-pills nav-fill border rounded">
                <li className="nav-item">
                  <a className="nav-link active" href="#overview">Overview</a>
                </li>
                <li className="nav-item">
                     <a
          className={`nav-link ${activeTab === 'coursecontent' ? 'active' : ''}`}
          href="#coursecontent"
          onClick={() => handleTabClick('coursecontent')}
        > Course Content </a>
                </li>
               
              </ul>
            </div>

            {/* Overview Section */}
            <div className="card shadow-sm mb-4" id="overview">
              <div className="card-body">
                <h4 className="card-title mb-3">What you'll learn</h4>
                <hr/>
                <p className="card-text mb-4">This course provides essential skills and knowledge to kickstart a career in medical coding. Our meticulously crafted curriculum offers a deep understanding of healthcare coding essentials, preparing you for roles in medical coding departments, healthcare facilities, and insurance companies.</p>

                <h5 className="mb-3">Key Components</h5>
                <hr/>
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

       {allItems.length > 2 && (
        <div className="mt-2">
          <span
            className='span-show'
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'Show More'}
          </span>
        </div>
      )}
              </div>
            </div>

            {/* Course Content */}
            <div className="card shadow-sm mb-4" id="coursecontent">
              <div className="card-body">
                <h4 className="card-title mb-3">Course Content</h4>
                
                     <CourseAccordion
        activeAccordion={activeAccordion}
        toggleAccordion={toggleAccordion}
        accordionData={course.sections}
      />

              </div>
            </div>

        
            {/* Related Courses */}
            <div className="mt-5">
              <div className="row align-items-center mb-4">
                <div className="col-md-8">
                  <span className="badge bg-pink-100 text-pink-800 mb-2">Top Course</span>
                  <h4>More Course By <strong className="text-primary">Focus Healthcare</strong></h4>
                </div>
                <div className="col-md-4 text-end">
                  <a href="course" className="btn btn-outline-primary">View All Course</a>
                </div>
              </div>
              
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="card h-100 shadow-sm">
                    <img src="assets/images/course/course-cpc-02.png" className="card-img-top" alt="CPC Course" />
                    <div className="card-body">
                      <h5 className="card-title">CPC</h5>
                      <div className="mb-2">
                        <small className="text-muted"><i className="fas fa-book me-1"></i>Classroom / Online Training</small>
                      </div>
                      <p className="card-text">CPC courses are structured to equip individuals with the skills and knowledge required to accurately assign medical codes</p>
                      <a href="focus-cpc" className="btn btn-link p-0">Learn More <i className="fas fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="card h-100 shadow-sm">
                    <img src="assets/images/course/course-amct-02.png" className="card-img-top" alt="AMCT Course" />
                    <div className="card-body">
                      <h5 className="card-title">AMCT</h5>
                      <div className="mb-2">
                        <small className="text-muted"><i className="fas fa-book me-1"></i>Classroom / Online Training</small>
                      </div>
                      <p className="card-text">This course aims to provide a foundational understanding of medical coding principles while preparing participants for the CPC</p>
                      <a href="focus-amct" className="btn btn-link p-0">Learn More <i className="fas fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card enroll-card shadow-sm sticky-top">
              <div className="card-body">
                <div className="d-grid gap-2 mb-4">
                  <a href="focus-enroll" className="btn btn-primary btn-lg">
                    Enroll Now <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                  <a href="focus-contact" className="btn btn-outline-primary">
                    Contact Us <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>

                <h6 className="text-muted mb-3"><i className="fas fa-rotate-ccw me-2"></i>Basic Medical Coding Training</h6>

                {/* Course Details */}
                <div className="mb-4">
                  <table className="table table-sm">
                    <tbody>
                      <tr>
                        <td>Weekdays</td>
                        <td><span className="badge bg-light text-dark">1.5 months / 2hrs per day</span></td>
                      </tr>
                      <tr>
                        <td>Weekends</td>
                        <td><span className="badge bg-light text-dark">2.5 months / 3hrs per day</span></td>
                      </tr>
                      <tr>
                        <td>Learning Mode</td>
                        <td><span className="badge bg-light text-dark">Online</span></td>
                      </tr>
                      <tr>
                        <td>Joining Kit</td>
                        <td><span className="badge bg-light text-dark">Study Materials</span></td>
                      </tr>
                      <tr>
                        <td>Assessments</td>
                        <td><span className="badge bg-light text-dark">Chapter Wise Test Every Week</span></td>
                      </tr>
                      <tr>
                        <td>Mock Interview</td>
                        <td><span className="badge bg-light text-dark">To Crack Placements</span></td>
                      </tr>
                      <tr>
                        <td>Certification</td>
                        <td><span className="badge bg-success">YES - Provided</span></td>
                      </tr>
                      <tr>
                        <td>Placement Assistance</td>
                        <td><span className="badge bg-success">100%</span></td>
                      </tr>
                      <tr>
                        <td>Students Placed</td>
                        <td><span className="badge bg-success">100%</span></td>
                      </tr>
                      <tr>
                        <td><strong>Course Fees</strong></td>
                        <td><span className="badge bg-primary">Rs.8000/-</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Social Share */}
                <div className="text-center mb-4">
                  <div className="d-flex justify-content-center gap-2 mb-3">
                    <a href="https://www.facebook.com/focusmedicalcoding" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.twitter.com" className="btn btn-outline-info btn-sm">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/focushealthcare.info/?hl=en" target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger btn-sm">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/focus-healthcare-solutions-764b1a199/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">
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
      </div>

    </>
  );
};

export default CourseDetailsPage;
