import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  return (
    <div id="container">
      <Router>
        <Navbar />
        <div className="max-w-[1600px] mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

function Navbar() {
  const [isClose, setIsClose] = useState(false);
  const [isLight, setIsLight] = useState(true);

  const handleClick = () => {
    isClose ? setIsClose(false) : setIsClose(true);
  };

  const handleClickTheme = () => {
    isLight ? setIsLight(false) : setIsLight(true);
  };

  return (
    <div className={isClose ? "grid grid-cols-2 grid-rows-[75px auto 75px] bg-grayColor w-screen h-screen p-6" : "font-lora font-semibold text-lg tracking-wider flex justify-between items-center h-max p-5 bg-grayColor relative z-50 sticky top-0 md:px-12 xl:px-24"}
    >
      <div className={`${isClose && 'col-start-1 col-end-2 row-start-1 row-end-2'} navbar__logo text-xl`}>
        <Link
              to="/"
              className="text-yellowColor lg:after:content-[''] lg:after:inline-block after:w-[1%] lg:after:h-1 lg:after:bg-transparent lg:after:mt-2 lg:after:transition-all lg:after:duration-400"
            >
              Aaron dev
            </Link>
      </div>
      {/* <div
        className={`${isClose
          && "flex flex-col absolute top-0 right-0 bg-grayColor w-[75%] h-screen p-6 z-90 gap-y-20"} lg:flex lg:w-[80%] lg:justify-between`}
        style={{ transition: "background-color .6s" }}
      > */}
        <ul
          className={`${isClose
            ? "col-start-1 col-end-2 row-start-2 row-end-3 flex flex-col gap-y-4 pl-12"
            : "transition-all duration-600 delay-200 hidden"} lg:flex lg:justify-between lg:gap-x-6 lg:w-[80%] lg:max-w-[910px]`}
        >
          <li>
            <Link
              to="/"
              className="flex flex-col text-white w-max after:content-[''] after:inline-block after:w-[1%] after:h-1 after:bg-transparent after:mt-2 after:transition-all after:duration-400 focus:after:w-full focus:after:bg-white"
            >
              ACCUEIL
            </Link>
          </li>
          <li>
            <Link
              to="https://aaron-bukasa.github.io/Aaron_bukasa-Curriculum_vitae"
              target="_blank"
              className="flex flex-col text-white w-max after:content-[''] after:inline-block after:w-[1%] after:h-1 after:bg-transparent after:mt-2 after:transition-all after:duration-400 focus:after:w-full focus:after:bg-white"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="flex flex-col text-white w-max after:content-[''] after:inline-block after:w-[1%] after:h-1 after:bg-transparent after:mt-2 after:transition-all after:duration-400 focus:after:w-full focus:after:bg-white"
            >
              SERVICES
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="flex flex-col text-white w-max after:content-[''] after:inline-block after:w-[1%] after:h-1 after:bg-transparent after:mt-2 after:transition-all after:duration-400 focus:after:w-full focus:after:bg-white"
            >
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex flex-col text-white w-max after:content-[''] after:inline-block after:w-[1%] after:h-1 after:bg-transparent after:mt-2 after:transition-all after:duration-400 focus:after:w-full focus:after:bg-white"
            >
              CONTACT
            </Link>
          </li>
        </ul>
        <div
            onClick={handleClickTheme}
            className={`${isClose ? 'col-start-1 col-end-2 row-start-3 row-end-4 h-max flex justify-between rounded-full w-max h-max gap-x-4 border-2 p-1 ml-12' : 'hidden'} lg:flex justify-between rounded-full w-max h-max gap-x-4 border-2 p-1`}
          >
            <div
              className={
                isLight
                  ? "btn__theme-light border-2 rounded-full p-1 bg-graySecond"
                  : "invisible"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={20}
                viewBox="0 -960 960 960"
                width={20}
                className="fill-redColor align-middle h-3 w-3"
              >
                <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
              </svg>
            </div>
            <div
              className={
                isLight
                  ? "invisible"
                  : "btn__theme-dark border-2 rounded-full p-1 bg-yellowColor"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={20}
                viewBox="0 -960 960 960"
                width={20}
                className="fill-white align-middle h-3 w-3"
              >
                <path d="M380-160q133 0 226.5-93.5T700-480q0-133-93.5-226.5T380-800h-21q-10 0-19 2 57 66 88.5 147.5T460-480q0 89-31.5 170.5T340-162q9 2 19 2h21Zm0 80q-53 0-103.5-13.5T180-134q93-54 146.5-146T380-480q0-108-53.5-200T180-826q46-27 96.5-40.5T380-880q83 0 156 31.5T663-763q54 54 85.5 127T780-480q0 83-31.5 156T663-197q-54 54-127 85.5T380-80Zm80-400Z" />
              </svg>
            </div>
          </div>
        <div onClick={handleClick} className={` ${ isClose && "col-start-2 col-end-3 row-start-1 row-end-2 flex justify-end"} lg:order-last lg:hidden`}>
          <div className={isClose ? "hidden" : "block"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={24}
              viewBox="0 -960 960 960"
              width={24}
              className="fill-white align-middle"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </div>
          <div className={isClose ? "block" : "hidden"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={24}
              viewBox="0 -960 960 960"
              width={24}
              className="fill-white align-middle"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer-principal">
      <div className="text-center text-white bg-grayColor p-6">
        Copyright 2023 Aaron bukasa
      </div>
    </div>
  );
}
