import React from 'react';
import './team.css';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Button from '../Button/Button';

const teamMembers = [
  {
    name: 'Cameron Williamson',
    position: 'CEO & Founder',
    image: 'https://images.stockcake.com/public/1/b/2/1b233006-c7d5-4955-8499-b591153b7fd7_large/confident-business-professional-stockcake.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Wade Warren',
    position: 'Co-Founder',
    image: 'https://images.stockcake.com/public/1/b/2/1b233006-c7d5-4955-8499-b591153b7fd7_large/confident-business-professional-stockcake.jpg',
    description: 'Praesent commodo cursus magna, vel scelerisque nisl.',
  },
  {
    name: 'Courtney Henry',
    position: 'Designer',
    image: 'https://images.stockcake.com/public/1/b/2/1b233006-c7d5-4955-8499-b591153b7fd7_large/confident-business-professional-stockcake.jpg',
    description: 'Donec ullamcorper nulla non metus auctor fringilla.',
  },
];

const MeetTheTeam = () => {
  return (
    <div className="team-section">
      <h2>Meet The Team</h2>
      <p>People behind our success</p>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <span>{member.position}</span>
            <p>{member.description}</p>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
            <div className='Enquiry-btn'>
            <Button className="submit_bt" text="CONNECT" shape="square"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
