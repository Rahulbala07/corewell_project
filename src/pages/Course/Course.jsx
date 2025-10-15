import React from 'react';
import CourseCard from '../../component/Coursecard/Coursecard';
import './course.css';
import { useNavigate } from 'react-router-dom';

const courses = [
  {
    title: 'BMCT',
    mode: 'Online Training',
    description: 'Medical coding is essential in healthcare because it converts procedures, diagnoses, and services into standardized alphanumeric codes. These codes play critical roles in billing, recordkeeping, research, and ensuring accurate insurance reimbursements.',
    image: '/basic medical coding .jpg'
  },
  {
    title: 'AMCT',
    mode: 'Online Training',
    description: 'This course aims to provide a foundational understanding of medical coding principles while preparing participants for the CPC certification exam administered by the American Academy of Professional Coders (AAPC). It integrates basic coding skills with advanced training required for CPC certification.',
    image: '/AMCT Course.jpg'
  },
  {
    title: 'CPC',
    mode: 'Online Training',
    description: 'CPC courses are structured to equip individuals with the skills and knowledge required to accurately assign medical codes to diagnoses and procedures for reimbursement purposes in healthcare settings.',
    image: '/cpc.jpg'
  },
];


const CourseList = () => {
    const navigate=useNavigate()
const handleNavigate = () => {
    navigate('/'); 
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
