import React from 'react';
import CourseCard from '../../component/Coursecard/Coursecard';
import './course.css';
import { useNavigate } from 'react-router-dom';

const courses = [
  {
    title: 'BMCT',
    mode: 'Online Training',
    description: 'Medical coding is indispensable in healthcare, as it transforms procedures, diagnoses, and services into universal alphanumeric codes.',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/035/314/037/small_2x/ai-generated-professional-man-in-suit-standing-confidently-in-office-generative-ai-free-photo.jpg'
  },
  {
    title: 'CPC',
    mode: 'Online Training',
    description: 'CPC courses are structured to equip individuals with the skills and knowledge required to accurately assign medical codes.',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/035/314/037/small_2x/ai-generated-professional-man-in-suit-standing-confidently-in-office-generative-ai-free-photo.jpg'
  }
];


const CourseList = () => {
    const navigate=useNavigate()
const handleNavigate = () => {
    navigate('/'); // Navigates to home page
  };
  return (
    <div className="course-page">
      <div className="course-header">
        <div className="breadcrumb"><span onClick={handleNavigate}>Home &gt;</span> <span>All Courses</span> </div>
        <div className="header-title-row">
          <h1>All Courses</h1>
          <span className="course-count">🎉 3 Courses</span>
        </div>
      </div>

      {/* Main white area */}
      <div className="course-content-section">
        <div className="course-grid">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
