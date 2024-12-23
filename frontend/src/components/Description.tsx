import { useEffect } from "react";
import { useDarkMode } from "../DarkModeContext";

const Description = () => {
  const { darkMode } = useDarkMode();
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElement = document.querySelector('.parallax');
      if (parallaxElement) {
        const scrollPosition = window.scrollY;
        parallaxElement.style.transform = `translateX(${scrollPosition * 0.7}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`h-[50vh] w-[100vw] flex items-center transition duration-500 px-20 ${darkMode ? 'bg-black text-white text-3xl' : 'bg-white text-black text-3xl'}`}>
          <div className='w-[100vw] flex justify-start items-center'>
            <h1 className="text-4xl md:text-7xl font-bold text-start">Welcome To <br /> AMAN</h1>
          </div>
          <div className='w-[100vw] flex justify-end items-center px-30'>
            <img className='w-32 animate-bounce-slow' src="./char1-left.png" alt="" />
            <img className='w-50 animate-rotate-right-left' src="./char2-right.png" alt="" />
          </div>
      </div>
      <div className={`h-[40vh] w-[100vw] flex justify-end items-start transition duration-500 px-20 ${darkMode ? 'bg-black text-white text-3xl' : 'bg-white text-black text-3xl'}`}>
        <div className='w-[100vw] flex justify-start items-center pl-20'>
          <img className='w-32 parallax ml-[-30vw]' src="./char1-right.png" alt="" />
        </div>
        <div className='w-[100vw] flex justify-end items-center px-30'>
          <h1 className="md:text-2xl text-end py-10">
            AMAN is a trusted solution to transform your digital identity <br />
            into a unique, secure, and easily accessible asset <br />
            through blockchain technology.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Description;
