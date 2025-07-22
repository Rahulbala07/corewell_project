import React from 'react';
import './coursecard.css';

const CourseCard = ({ image, title, mode, description }) => {
  return (
    <div className="course-card">
      <img src={image} alt={title} className="card-img" />
      <div className="card-body">
        <h2>{title}</h2>
        <p className="card-mode">📖 {mode}</p>
        <p className="card-desc">{description}</p>
        <a href="#" className="card-link">Learn More →</a>
      </div>
    </div>
  );
};

export default CourseCard;
