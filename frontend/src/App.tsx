import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Overview from "./pages/Overview";

function App() {

	return (
		<>
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/overview" element={<Overview />} />
			</Routes>
		</Router>
		</>
	);
}

export default App;
