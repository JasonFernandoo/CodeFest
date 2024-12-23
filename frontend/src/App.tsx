import "./App.css";
import { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Overview from "./pages/Overview";
import InputPage from "./pages/InputPage";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import NFTPage from "./pages/NFTPage";
import CollectionsPage from "./pages/CollectionsPage";
import Show from "./pages/Show";

function App() {
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Router>
        <Navbar footerRef={footerRef} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/input" element={<InputPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/find" element={<NFTPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/shows/:id" element={<Show />} />
        </Routes>
        <Footer ref={footerRef} />
      </Router>
    </>
  );
}

export default App;
