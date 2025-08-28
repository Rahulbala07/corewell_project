import React from 'react';

const CourseAccordion = ({ activeAccordion, toggleAccordion, accordionData }) => {
  const contentRefs = React.useRef({});

  React.useEffect(() => {
    // Set dynamic heights for smooth transitions (both opening and closing)
    accordionData.forEach((section) => {
      const element = contentRefs.current[section.id];
      if (element) {
        if (activeAccordion === section.id) {
          // Opening animation
          element.style.height = '0px';
          // Force reflow to ensure the height change is applied
          void element.offsetHeight;
          element.style.height = element.scrollHeight + 'px';
        } else {
          // Closing animation (smooth but simple)
          element.style.height = element.scrollHeight + 'px';
          // Force reflow to ensure the height change is applied
          void element.offsetHeight;
          element.style.height = '0px';
        }
      }
    });
  }, [activeAccordion, accordionData]);

  return (
    <>
      <style>{`
        .accordion-collapse {
          transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1), 
                      opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          height: 0;
          opacity: 0;
        }
          .accordion hr{
            color:#777;
          }
        .accordion{
            --bs-accordion-border-color:none !important;
            }
        .accordion-collapse.show {
          opacity: 1;
        }
        
        .accordion-body {
          transition: opacity 0.3s ease;
        }
        
        .accordion-collapse:not(.show) .accordion-body {
          opacity: 0.8;
        }
        
        .accordion-collapse.show .accordion-body {
          opacity: 1;
        }
        
        .accordion-button {
          position: relative;
          transition: all 0.2s ease;
        }
        
        /* Replace Bootstrap's default arrow with +/- */
        .accordion-button::after {
          content: '+' !important;
          background-image: none !important;
          font-size: 18px;
          font-weight: bold;
          transform: none !important;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .accordion-button:not(.collapsed)::after {
          content: '−' !important;
          transform: rotate(180deg) scale(1.1);
        }
        
        /* Enhanced button animations */
        .accordion-button.collapsed {
          background-color: transparent;
          transform: translateY(0);
        }
        
        .accordion-button:not(.collapsed) {
          background-color: rgba(13, 110, 253, 0.1);
          transform: translateY(1px);
        }
        
        .accordion-button:hover {
          transform: translateY(-1px);
        }
        
        .accordion-button:hover::after {
          transform: scale(1.2);
        }
        
        .accordion-button:not(.collapsed):hover::after {
          transform: rotate(180deg) scale(1.3);
        }
      `}</style>
      
      <div className="accordion" id="courseAccordion">
        {accordionData.map((section, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${activeAccordion !== section.id ? 'collapsed' : ''}`}
                type="button"
                onClick={() => toggleAccordion(section.id)}
              >
                {section.title}
              </button>
            </h2>
              <hr/>
            <div 
              className={`accordion-collapse collapse ${activeAccordion === section.id ? 'show' : ''}`}
              ref={el => contentRefs.current[section.id] = el}
              style={{ height: activeAccordion === section.id ? 'max-content' : '0px' }}
            >
              <div className="accordion-body">
                {section.type === 'text' ? (
                  <p>
                    {section.icon && <i className={`${section.icon} me-2`}></i>}
                    {section.content}
                  </p>
                ) : (
                  <ul className="list-unstyled">
                    {section.content.map((item, i) => (
                      <li key={i} className="mb-2 accordian-list-item">
                        {section.icon && <i className={`${section.icon} me-2`}></i>}
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            
      
          </div>
          
        ))}
      </div>
    </>
  );
};

export default CourseAccordion;

// Example usage with sample data
