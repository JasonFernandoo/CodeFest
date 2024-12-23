import { useState, useEffect } from "react";
import { useDarkMode } from "../DarkModeContext";

const OverviewHome = () => {
  const { darkMode } = useDarkMode();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const scrollToContent = () => {
    const element = document.getElementById("overview-content");
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1300);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`h-[100vh] w-[100vw] flex ${isSmallScreen ? 'flex-col' : ''}`}>
      <div
        className={`h-[100%] w-[100%] flex justify-start items-center transition duration-500 bg-[url('/background2.png')] bg-cover bg-center ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className={`h-full w-full relative ${isSmallScreen ? 'hidden' : ''}`}>
          <div className="h-auto w-[25%] pt-[2%] pb-[2%] flex bg-[#ffffff40] rounded-[10px] border-[2px] border-[#ffffff80] absolute left-[2.5%] top-[20%] justify-center items-center">
            <div className="h-[85%] w-[85%] flex flex-col justify-between text-start">
              <h2 className="text-[#898989]">LEARN HUB</h2>
              <h1 className="text-[46px] font-bold">Learn About Aman</h1>
              <p className="py-[20px]">
                Your educational guide to the world of Aman. Learn how Aman works
                and how to connect to it. This page features technical and
                non-technical articles, guides, and resources on how Aman
                leverages blockchain technology to create digital identity cards.
              </p>
              <button
                className="h-[40px] w-[50%] bg-[#4d489e] rounded-[5px] text-white mt-[5%]"
                onClick={scrollToContent}
              >
                Let's get started
              </button>
            </div>
          </div>
        </div>
      </div>
      {isSmallScreen && (
          <div className="h-[50%] w-full">
            <div className="h-auto w-[100%] pt-[2%] pb-[2%] flex bg-[#ffffff40] rounded-[10px] border-[2px] border-[#ffffff80] justify-center items-center">
              <div className="h-[85%] w-[85%] flex flex-col justify-between items-center">
                <h2 className="text-[#898989]">LEARN HUB</h2>
                <h1 className="text-[46px] font-bold">Learn About Aman</h1>
                <p className="py-[20px]">
                  Your educational guide to the world of Aman. Learn how Aman works
                  and how to connect to it. This page features technical and
                  non-technical articles, guides, and resources on how Aman
                  leverages blockchain technology to create digital identity cards.
                </p>
                <button
                  className="h-[40px] w-[50%] bg-[#4d489e] rounded-[5px] text-white mt-[5%]"
                  onClick={scrollToContent}
                >
                  Let's get started
                </button>
              </div>
            </div>
          </div>
      )}
    </div>
  );
};

export default OverviewHome;