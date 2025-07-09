import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Home from "./pages/Home/Home";

function App() {
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
								{/* <Route path="/about" element={<About_Page />} />
								<Route path="/properties" element={<Properties />} />
								<Route path="/agent" element={<Agent />} />
								<Route path="/contact" element={<Contact />} /> */}
								
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