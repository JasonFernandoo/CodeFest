import React, { useEffect, useState } from 'react';
import { useDarkMode } from '../DarkModeContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`h-[70px] w-[100vw] fixed transition z-50 duration-500 ease ${scrolled ? (darkMode ? 'bg-black text-white border-b-[1px]' : 'bg-white text-black border-b-[1px]') : (darkMode ? 'bg-transparent text-white' : 'bg-transparent text-black')}`}>
      <div className="h-[70px] w-full flex justify-between">
        <div className="h-full w-[30%] flex items-center">
          <Link to="/"><img src="/logo.png" className="h-[50px] w-[50px] ml-[50px] hover:cursor-pointer" alt="logo" /></Link>
          {/* <p className="text-[24px] font-bold ml-[20px]">
            <Link to="/" className="no-underline text-inherit hover:text-[#898989]">Aman</Link>
          </p> */}
          <div className="h-[40px] w-[2px] bg-gray-200 ml-[20px]"></div>
          <ul className="flex items-center gap-[20px] ml-[20px] font-bold hover:cursor-pointer">
            <li className="text-[16px]">
              <Link to="/overview" className="no-underline text-inherit hover:text-[#898989]">Overview</Link>
            </li>
            <li className="text-[16px] hover:text-[#898989]">About</li>
            <li className="text-[16px] hover:text-[#898989]">Contact</li>
          </ul>
        </div>
        <div className="h-full w-[30%] flex justify-center items-center">
          <div className="h-[45px] w-[400px] pl-[20px] bg-[#d9d9d940] rounded-[10px] border-[0px] flex items-center hover:bg-[#89898930]">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input 
              className="h-full w-[80%] ml-[20px] text-[18px] bg-transparent focus:outline-none" 
              placeholder="Search" 
            />
          </div>
        </div>
        <div className="h-full w-[20%] flex justify-end items-center mr-[40px] gap-[10px]">
          <i 
            className="fas fa-moon h-[45px] w-[45px] rounded-[10px] bg-[#d9d9d940] flex justify-center items-center hover:bg-[#89898930] cursor-pointer"
            onClick={toggleDarkMode}
          ></i>
          <i className="fa-solid fa-shopping-cart h-[45px] w-[45px] rounded-[10px] bg-[#d9d9d940] flex justify-center items-center hover:bg-[#89898930]"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;