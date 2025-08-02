import React from 'react';

const TrainingPlacementSection = () => {
  // Your existing serviceItems array structure
  const serviceItems = [
    {
      icon: <i className="fas fa-book-open"></i>,
      label: "Comprehensive Training Programs",
      description: "Industry-relevant curriculum designed by experts with hands-on practical experience and real-world projects."
    },
    {
      icon: <i className="fas fa-users"></i>,
      label: "Expert Mentorship",
      description: "Learn from industry professionals with years of experience and get personalized guidance throughout your journey."
    },
    {
      icon: <i className="fas fa-award"></i>,
      label: "Industry Certification",
      description: "Get certified with recognized industry certifications that add value to your resume and career prospects."
    },
    {
      icon: <i className="fas fa-briefcase"></i>,
      label: "100% Job Placement",
      description: "Guaranteed placement assistance in top-tier companies with dedicated career support and interview preparation."
    },
    {
      icon: <i className="fas fa-clock"></i>,
      label: "Flexible Scheduling",
      description: "Choose between online and classroom training with flexible timings that suit your schedule and lifestyle."
    },
    {
      icon: <i className="fas fa-bullseye"></i>,
      label: "Career Guidance",
      description: "Personalized career counseling, resume building, and interview preparation to ensure your success."
    }
  ];

  return (
    <>
      {/* Custom CSS Styles */}
      <style>{`
        .service-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 50%, #e8eaf6 100%);
          padding: 80px 0;
          min-height: 100vh;
        }

        .service-section .section-title {
          font-size: 3.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #4dbbff 50%, #6cff5f 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 2rem;
          line-height: 1.2;
        }

        .service-section .section-description {
          font-size: 1.25rem;
          color: #6c757d;
          font-weight:500;
          line-height: 1.75;
          margin-bottom: 4rem;
        }

        .service-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          border: 1px solid #e9ecef;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          height: 100%;
          margin-bottom: 2rem;
        }

        .service-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #e3f2fd 0%, #e8eaf6 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          border-radius: 20px;
        }

        .service-card:hover::before {
          opacity: 0.7;
        }

        .service-card-content {
          position: relative;
          z-index: 10;
        }

        .service-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #2196f3, #673ab7);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          box-shadow: 0 8px 20px rgba(33, 150, 243, 0.3);
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .service-icon i {
          font-size: 2rem;
          color: #ffffff;
        }

        .service-label {
          font-size: 1.4rem;
          font-weight: 700;
          color: #212529;
          margin-bottom: 1rem;
          transition: color 0.3s ease;
        }

        .service-card:hover .service-label {
          color: #2196f3;
        }

        .service-description {
          color: #6c757d;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .service-badge {
          display: inline-flex;
          align-items: center;
          color: #28a745;
          font-weight: 600;
          font-size: 0.9rem;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease;
        }

        .service-card:hover .service-badge {
          opacity: 1;
          transform: translateY(0);
        }

        .service-badge i {
          margin-right: 0.5rem;
        }

        .service-card .decoration-1 {
          position: absolute;
          top: -10px;
          right: -10px;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #2196f3, #673ab7);
          border-radius: 50%;
          opacity: 0.1;
          transition: transform 0.6s ease;
        }

        .service-card:hover .decoration-1 {
          transform: scale(1.5);
        }

        .service-card .decoration-2 {
          position: absolute;
          bottom: -20px;
          left: -20px;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #673ab7, #9c27b0);
          border-radius: 50%;
          opacity: 0.1;
          transition: transform 0.6s ease;
        }

        .service-card:hover .decoration-2 {
          transform: scale(1.3);
        }

        .cta-section {
          background: linear-gradient(135deg, #2196f3, #673ab7);
          border-radius: 20px;
          padding: 3rem;
          margin-top: 4rem;
          text-align: center;
          box-shadow: 0 15px 35px rgba(33, 150, 243, 0.3);
          transition: transform 0.3s ease;
        }

        .cta-section:hover {
          transform: scale(1.02);
        }

        .cta-title {
          color: #ffffff;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .cta-description {
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2rem;
        }

        .cta-buttons .btn {
          padding: 12px 30px;
          border-radius: 12px;
          font-weight: 600;
          margin: 0 0.5rem;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .btn-cta-primary {
          background: #ffffff;
          color: #2196f3;
        }

        .btn-cta-primary:hover {
          background: #f8f9fa;
          color: #1976d2;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .btn-cta-outline {
          background: transparent;
          color: #ffffff;
          border: 2px solid #ffffff !important;
        }

        .btn-cta-outline:hover {
          background: #ffffff;
          color: #2196f3;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .service-section .section-title {
            font-size: 2.5rem;
          }
          
          .service-card {
            padding: 2rem;
            margin-bottom: 1.5rem;
          }
          
          .cta-section {
            padding: 2rem;
          }
          
          .cta-buttons .btn {
            display: block;
            margin: 0.5rem 0;
            width: 100%;
          }
        }

        @media (max-width: 576px) {
          .service-section .section-title {
            font-size: 2rem;
          }
          
          .service-section .section-description {
            font-size: 1.1rem;
          }
        }
      `}</style>

     

      {/* Your existing motion.section structure */}
      <section className="service-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="section-title text-center">
                We provide the best Training & Placement Services
              </h3>
              <p className="section-description text-center mx-auto" style={{ maxWidth: '800px' }}>
                We provide ready-to-work, high-quality training programs with job placement in top companies. 
                Choose from online or classroom training as per your flexibility.
              </p>
            </div>
          </div>
          
          {/* Enhanced grid with your existing structure */}
          <div className="row g-4">
            {serviceItems.map((item, idx) => (
              <div key={idx} className="col-lg-6 col-md-6">
                <div className="service-card">
                  <div className="service-card-content">
                    {/* Icon container with your existing structure */}
                    <div className="service-icon">
                      {item.icon}
                    </div>
                    
                    {/* Label with your existing structure */}
                    <div className="service-label">{item.label}</div>
                    
                    {/* Description */}
                    <div className="service-description">
                      {item.description}
                    </div>
                    
                    {/* Success indicator */}
                    <div className="service-badge">
                      <i className="fas fa-check-circle"></i>
                      High Success Rate
                    </div>
                  </div>
                  
                  {/* Decorative floating elements */}
                  <div className="decoration-1"></div>
                  <div className="decoration-2"></div>
                </div>
              </div>
            ))}
          </div>
          

        </div>
      </section>
    </>
  );
};

export default TrainingPlacementSection;