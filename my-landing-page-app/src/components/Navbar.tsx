import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC<{ darkMode: boolean; scrolled: boolean }> = ({ darkMode, scrolled }) => {
  const handleScroll = () => {
    // Logic to handle scroll event
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`h-[70px] w-[100vw] fixed transition duration-500 ease ${scrolled ? (darkMode ? 'bg-gray-800 text-white border-b-[1px]' : 'bg-white text-black border-white border-b-[1px]') : (darkMode ? 'bg-transparent text-white' : 'bg-transparent text-black')}`}>
      <div className="h-[70px] w-full flex justify-between">
        <div className="h-full w-[30%] flex items-center">
          <img className="h-[50px] w-[50px] ml-[50px] hover:cursor-pointer" alt="logo" />
          <p className="text-[24px] font-bold ml-[20px]">Aman</p>
          <div className="h-[40px] w-[2px] bg-gray-200 ml-[20px]"></div>
          <ul className="flex items-center gap-[20px] ml-[20px] font-bold hover:cursor-pointer">
            <li className="text-[16px] hover:text-[#898989]">
              <Link to="/">Home</Link>
            </li>
            <li className="text-[16px] hover:text-[#898989]">
              <Link to="/description">Description</Link>
            </li>
            <li className="text-[16px] hover:text-[#898989]">
              <Link to="/service">Service</Link>
            </li>
            <li className="text-[16px] hover:text-[#898989]">
              <Link to="/product">Product</Link>
            </li>
            <li className="text-[16px] hover:text-[#898989]">
              <Link to="/overview">Overview</Link>
            </li>
          </ul>
        </div>
        <div className="h-full w-[30%] flex justify-center items-center">
          {/* Additional content can be added here */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;