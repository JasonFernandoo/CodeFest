import { useEffect, useState } from "react";
import { useDarkMode } from "../DarkModeContext";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { LoginButton } from "./LoginButton";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`h-[70px] w-[100vw] fixed transition z-50 duration-500 ease ${
        scrolled
          ? darkMode
            ? "bg-black text-white border-b-[1px]"
            : "bg-white text-black border-b-[1px]"
          : darkMode
          ? "bg-transparent text-white"
          : "bg-transparent text-black"
      }`}
    >
      <div className="h-[70px] w-full flex justify-between items-center px-4 md:px-8">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              className="h-[50px] w-[50px] hover:cursor-pointer transform transition-transform duration-500 hover:rotate-180"
              alt="logo"
            />
          </Link>
          <div className="hidden md:flex items-center ml-4">
            <div className="h-[40px] w-[2px] bg-gray-200"></div>
            <ul className="flex items-center gap-[20px] ml-[20px] font-bold hover:cursor-pointer">
              <li className="text-[16px]">
                <Link
                  to="/overview"
                  className="no-underline text-inherit hover:text-[#898989]"
                >
                  Overview
                </Link>
              </li>
              <li className="text-[16px]">
                <Link
                  to="/input"
                  className="no-underline text-inherit hover:text-[#898989]"
                >
                  NFT
                </Link>
              </li>
              <li className="text-[16px] hover:text-[#898989]">Contact</li>
            </ul>
          </div>
        </div>
        <div className="hidden md:flex items-center">
          <div className="h-[45px] w-[400px] pl-[20px] bg-[#d9d9d940] rounded-[10px] border-[0px] flex items-center hover:bg-[#89898930]">
            <i className="fa-solid fa-magnifying-glass transform transition-transform duration-500 hover:rotate-12"></i>
            <input
              className="h-full w-[80%] ml-[20px] text-[18px] bg-transparent focus:outline-none"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <LoginButton />
          <i
            className={`h-[45px] w-[45px] rounded-[10px] bg-[#d9d9d940] flex justify-center items-center hover:bg-[#89898930] cursor-pointer transform transition-transform duration-500 hover:rotate-12 ${
              darkMode ? "fas fa-sun" : "fas fa-moon"
            }`}
            onClick={toggleDarkMode}
          ></i>
          <i className="fa-solid fa-shopping-cart h-[45px] w-[45px] rounded-[10px] bg-[#d9d9d940] flex justify-center items-center hover:bg-[#89898930] transform transition-transform duration-500 hover:rotate-12"></i>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white dark:bg-black text-black dark:text-white">
          <ul className="flex flex-col items-center gap-[20px] font-bold hover:cursor-pointer">
            <li className="text-[16px]">
              <Link
                to="/overview"
                className="no-underline text-inherit hover:text-[#898989]"
                onClick={toggleMenu}
              >
                Overview
              </Link>
            </li>
            <li
              className="text-[16px] hover:text-[#898989]"
              onClick={toggleMenu}
            >
              About
            </li>
            <li
              className="text-[16px] hover:text-[#898989]"
              onClick={toggleMenu}
            >
              Contact
            </li>
          </ul>
          <div className="h-[45px] w-[90%] pl-[20px] bg-[#d9d9d940] rounded-[10px] border-[0px] flex items-center hover:bg-[#89898930] mt-4">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              className="h-full w-[80%] ml-[20px] text-[18px] bg-transparent focus:outline-none"
              placeholder="Search"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
