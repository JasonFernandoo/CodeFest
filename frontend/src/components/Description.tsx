import { useEffect } from "react";
import { useDarkMode } from "../DarkModeContext";

const Description = () => {
  const { darkMode } = useDarkMode();
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElement = document.querySelector(
        ".parallax"
      ) as HTMLElement;
      if (parallaxElement) {
        const scrollPosition = window.scrollY;
        parallaxElement.style.transform = `translateX(${
          scrollPosition * 0.7
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`min-h-[50vh] w-full flex flex-col md:flex-row items-center 
        transition duration-500 px-4 sm:px-8 md:px-20 py-8 md:py-0 gap-8 md:gap-0
        ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
      >
        <div className="w-full md:w-1/2 flex justify-start items-center">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-start">
            Welcome To <br /> AMAN
          </h1>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center 
        space-x-4 md:space-x-8">
          <img
            className="w-20 sm:w-24 md:w-32 animate-bounce-slow"
            src="./char1-left.png"
            alt="Character 1"
          />
          <img
            className="w-32 sm:w-40 md:w-50 animate-rotate-right-left"
            src="./char2-right.png"
            alt="Character 2"
          />
        </div>
      </div>
      <div
        className={`min-h-[40vh] w-full flex flex-col md:flex-row justify-end 
        items-center transition duration-500 px-4 sm:px-8 md:px-20 py-8 md:py-0
        ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
      >
        <div className="w-full md:w-1/2 flex justify-center md:justify-start 
        items-center md:pl-20">
          <img
            className="w-24 sm:w-28 md:w-32 parallax ml-0 md:ml-[-30vw]"
            src="./char1-right.png"
            alt="Character 3"
          />
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end 
        items-center text-center md:text-end mt-8 md:mt-0">
          <h1 className="text-xl sm:text-2xl md:text-2xl leading-relaxed px-4 md:px-0">
            AMAN is a trusted solution to transform your digital identity <br className="hidden md:block" />
            into a unique, secure, and easily accessible asset <br className="hidden md:block" />
            through blockchain technology.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Description;
