import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./App.css";

export default function App() {
  return (
    <div id="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

function Navbar() {
  return (
      <nav className="font-lora text-lg flex justify-between p-4 bg-grayColor">
        <div className="navbar__logo">
          <a href="./index.html" className="text-yellowColor">Aaron dev</a>
        </div>
        <div className="flex gap-x-4">
          <ul className="hidden">
            <li>
              <Link to="/">ACCUEIL</Link>
            </li>
            <li>
              <Link to="https://aaron-bukasa.github.io/Aaron_bukasa-Curriculum_vitae" target="_blank">ABOUT</Link>
            </li>
            <li>
              <Link to="/services">SERVICES</Link>
            </li>
            <li>
              <Link to="/portfolio">PORTFOLIO</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
          <div className="navbar__btns">
            <div className="hidden">
              <div className="btn__theme-light hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={24}
                  viewBox="0 -960 960 960"
                  width={24}
                >
                  <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
                </svg>
              </div>
              <div className="btn__theme-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={24}
                  viewBox="0 -960 960 960"
                  width={24}
                >
                  <path d="M380-160q133 0 226.5-93.5T700-480q0-133-93.5-226.5T380-800h-21q-10 0-19 2 57 66 88.5 147.5T460-480q0 89-31.5 170.5T340-162q9 2 19 2h21Zm0 80q-53 0-103.5-13.5T180-134q93-54 146.5-146T380-480q0-108-53.5-200T180-826q46-27 96.5-40.5T380-880q83 0 156 31.5T663-763q54 54 85.5 127T780-480q0 83-31.5 156T663-197q-54 54-127 85.5T380-80Zm80-400Z" />
                </svg>
              </div>
            </div>
            <div className="btn-menu">
              <div className="btn__menu-open">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={24}
                  viewBox="0 -960 960 960"
                  width={24}
                  className="fill-white"
                >
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
              </div>
              <div className="btn__menu-close hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={24}
                  viewBox="0 -960 960 960"
                  width={24}
                  className="fill-white"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
  );
}

function Footer() {
  return (
    <footer className="footer-principal">
      <div className="text-center text-white bg-grayColor p-6">Copyright 2023 Aaron bukasa</div>
    </footer>
  );
}
