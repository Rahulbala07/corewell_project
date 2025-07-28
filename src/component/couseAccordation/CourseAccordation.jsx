import React from 'react';

const CourseAccordion = ({ activeAccordion, toggleAccordion, accordionData }) => {
  return (
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
          <div className={`accordion-collapse collapse ${activeAccordion === section.id ? 'show' : ''}`}>
            <div className="accordion-body">
              {section.type === 'text' ? (
                <p>
                  {section.icon && <i className={`${section.icon} me-2`}></i>}
                  {section.content}
                </p>
              ) : (
                <ul className="list-unstyled">
                  {section.content.map((item, i) => (
                    <li key={i} className="mb-2">
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
  );
};

export default CourseAccordion;
