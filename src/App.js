import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Home from "./pages/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AOS from "aos";
import 'aos/dist/aos.css';
import DetailsPage from './pages/Coursedetail/Coursedetail';
import CourseList from './pages/Course/Course';
import Course from './pages/Course/Course';

function App() {
		useEffect(() => {
		AOS.init({
			duration: 1500, 
			offset: 100,
		});
	}, []);
  return (
    <BrowserRouter>
			<Routes>
        <Route
					path="/*"
					element={
						<>
							<Header />
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/detail/:id" element={<DetailsPage/>} />
								<Route path="/courses" element={<Course />} />
								{/* <Route path="/agent" element={<Agent />} />
								<Route path="/contact" element={<Contact />} /> */ }
								
							</Routes>
							<Footer />
						</>
					}
				/>
        </Routes>
        </BrowserRouter>
  )
}

export default App