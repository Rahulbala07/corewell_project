import React from 'react';
import './footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaArrowRightLong } from "react-icons/fa6";


function Footer() {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-section about">
					<img src="/logo.png" alt="Focus Logo" className="footer-logo" />
					<p>
						We are counted as building a platform where people can explore exciting and lucrative careers. 
						We focus on bringing out the best in individuals by helping students excel in their professional skills.
					</p>
					<div className="footer-socials">
						<a href="#"><FaFacebookF /></a>
						<a href="#"><FaTwitter /></a>
						<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
						<a href="#"><FaLinkedinIn /></a>
					</div>
                <button className="contact-btn">
                    <span className="text-wrapper" onClick={() => window.open("https://wa.me/9629645951", "_blank", "noopener,noreferrer")}>
                        <span className="arrow before"><FaArrowRightLong /></span>
                        <span className="text" >Contact With Us</span>
                        <span className="arrow after"><FaArrowRightLong /></span>
                    </span>
                    </button>

                        
				</div>

				<div className="footer-section links">
					<h3>Useful Links</h3>
					<ul>
						<li><a href="#">About Us</a></li>
						<li><a href="#">Contact Us</a></li>
						<li><a href="#">Course</a></li>
						<li><a href="#">Career</a></li>
					</ul>
				</div>

				<div className="footer-section office">
					<h3>Head Office</h3>
					<p><strong>Phone:</strong> +91 9150851067</p>
					<p><strong>Area:</strong> RTO office near,Sholinganallur,Chennai-600119</p>
				</div>

				<div className="footer-section office">
					<h3>Branch Office</h3>
					<p><strong>Phone:</strong> +91 9363939377</p>
					<p><strong>Area:</strong> #154, GRD Towers, 2nd Floor, AA Block 3rd Avenue, Anna Nagar, Chennai - 600040</p>
				</div>

				<div className="footer-section office">
					<h3>Branch Office</h3>
					<p><strong>Phone:</strong> +91 9597055202</p>
					
				</div>
			</div>
            <hr/>
            <div>
                <p className="footer-text">
                    &copy; {new Date().getFullYear()} Corewell Healthcare Solutions. Designed By Brand It Now
                    </p>
            </div>
		</footer>
	);
}

export default Footer;
