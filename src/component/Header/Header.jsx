import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import "./header.css"; // Assuming you have a CSS file for styling
function Header() {
   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
   const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);

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
    <li><NavLink to="/admission/process">How do Join</NavLink></li>
    <li><NavLink to="/admission/eligibility">Enroll now</NavLink></li>
    <li><NavLink to="/admission/fees">Refer a Friend</NavLink></li>
  </ul>
</li>

						<li>
							<NavLink to="/contact" activeClassName="active">
								CAREER
							</NavLink>
						</li>
					</ul>
				</div>

					<>
						<NavLink to="/add_property">
							<Button
								className="submit_bt"
								text="Join Now"
								shape="square"
							/>
						</NavLink>
						
					</>
				
				<div className="menu" onClick={toggleMobileMenu}>
					<i className="fa-solid fa-bars"></i>
				</div>
			</header>
			<div className={`mobile_header ${isMobileMenuOpen ? "open" : ""}`}>
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
						<NavLink to="/properties" activeClassName="active">
							COURSES
						</NavLink>
					</li>
					<li className="mobile-dropdown">
						<div className="dropdown-mobiletoggle" onClick={toggleMobileDropdown}>
							ADMISSION 
							<span className="icon">{isMobileDropdownOpen ? '−' : '+'}</span>
						</div>
						
							<ul className={`mobile-dropdownmenu ${isMobileDropdownOpen ? 'open' : ''}`}>
								<li><NavLink to="/admission/process">How do Join</NavLink></li>
								<li><NavLink to="/admission/eligibility">Enroll now</NavLink></li>
								<li><NavLink to="/admission/fees">Refer a Friend</NavLink></li>
							</ul>
						
					</li>
					<li>
						<NavLink to="/contact" activeClassName="active">
							CAREER
						</NavLink>
					</li>
				</ul>
				<div className="mob_login">
					
						<div className="mobile_submit">
							<NavLink to="/add_property">
								<Button
									className="submit_bt_mobile"
									text="Join Now"
									shape="square"
								/>
							</NavLink>
						</div>
					
				</div>
			</div>
		</div>
	);
}

export default Header