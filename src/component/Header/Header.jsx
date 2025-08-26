import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import "./header.css"; // Assuming you have a CSS file for styling
import PopupForm from '../information_form/Informationform';
function Header() {
   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
   const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);
   const [isPopupOpen, setIsPopupOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	const toggleMobileDropdown = () => {
		setMobileDropdownOpen(!isMobileDropdownOpen);
	};
    
    useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 900) {
				setMobileMenuOpen(false);
				setMobileDropdownOpen(false);
			}
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	
  return (
		<div className="parent_head">
			<header className="parent_header mx-auto container-xxl">
				<div className="brand">
					<img src='/logo.png' alt="Brand Logo" style={{width:"60px",height:"50px"}} />
                    <div className="brand_name">
                        <img src="/name.png" alt="Brand Name" style={{width:"150px",height:"30px"}} />
                    </div>
				</div>
				<div className='nav-container'>
					<ul>
						<li>
							<NavLink to="/" activeClassName="active">
								HOME
							</NavLink>
						</li>
						<li>
							<NavLink to="/about" activeClassName="active">
								ABOUT
							</NavLink>
						</li>
						<li>
							<NavLink to="/courses" activeClassName="active">
								COURSES
							</NavLink>
						</li>
						<li className="dropdown">
								<span className="dropdown-toggle">
									ADMISSION <i className="arrow-icon fa-solid fa-chevron-down"></i>
								</span>
								<ul className="dropdown-menu">
									<li ><a onClick={() => setIsPopupOpen(true)}>How do Join</a></li>
									<li><a href="https://wa.me/9629645951">Enroll now</a></li>
								</ul>
								</li>

						<li>
							<NavLink to="/career" activeClassName="active">
								CAREER
							</NavLink>
						</li>
					</ul>
				</div>

					<>
						
							<Button
								className="submit_bt"
								text="Join Now"
								shape="square"
								onClick={() => setIsPopupOpen(true)}
							/>
						
						
					</>
				
				<div className="menu" onClick={toggleMobileMenu}>
					<i className="fa-solid fa-bars"></i>
				</div>
			</header>
			<div className={`mobile_header ${isMobileMenuOpen ? "open" : ""}`}>
				<ul>
					<li>
						<NavLink to="/" activeClassName="active" onClick={() => setMobileMenuOpen(false)}>
							HOME
						</NavLink>
					</li>
					<li>
						<NavLink to="/about" activeClassName="active" onClick={() => setMobileMenuOpen(false)}>
							ABOUT
						</NavLink>
					</li>
					<li>
						<NavLink to="/courses" activeClassName="active" onClick={() => setMobileMenuOpen(false)}>
							COURSES
						</NavLink>
					</li>
					<li className="mobile-dropdown">
						<div className="dropdown-mobiletoggle" onClick={toggleMobileDropdown}>
							ADMISSION 
							<span className="icon">{isMobileDropdownOpen ? '−' : '+'}</span>
						</div>
						
							<ul className={`mobile-dropdownmenu ${isMobileDropdownOpen ? 'open' : ''}`}>
								<li ><a onClick={() => { setIsPopupOpen(true); setMobileMenuOpen(false); }}>How do Join</a></li>
								<li><a href="https://wa.me/9629645951" onClick={() => setMobileMenuOpen(false)}>Enroll now</a></li>
								
							</ul>
						
					</li>
					<li>
						<NavLink to="/career" activeClassName="active">
							CAREER
						</NavLink>
					</li>
				</ul>
				<div className="mob_login">
					
						<div className="mobile_submit">
							<Button
								className="submit_bt"
								text="Join Now"
								shape="square"
								onClick={() => setIsPopupOpen(true)}
							/>
						</div>
					
				</div>
			</div>
			{isPopupOpen && <PopupForm onClose={() => setIsPopupOpen(false)} />}
				
		</div>
	);
}

export default Header