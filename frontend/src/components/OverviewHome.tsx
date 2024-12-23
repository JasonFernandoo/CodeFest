import { useDarkMode } from "../DarkModeContext";

const OverviewHome = () => {
  const { darkMode } = useDarkMode();

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

  return (
    <div
      className={`h-[100vh] w-[100vw] flex justify-center items-center transition duration-500 bg-[url('/background2.png')] bg-cover bg-center ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="h-full w-full relative flex justify-center md:justify-start items-center px-4 md:px-10">
        <div
          className="h-auto w-[90%] md:w-[60%] lg:w-[40%] pt-4 pb-4 px-6 bg-[#ffffff40] rounded-[10px] border-[2px] border-[#ffffff80] flex flex-col justify-center items-start text-start"
        >
          <h2 className="text-[#898989] text-sm md:text-base">LEARN HUB</h2>
          <h1 className="text-[26px] md:text-[36px] lg:text-[46px] font-bold">
            Learn About Aman
          </h1>
          <p className="py-4 text-sm md:text-base">
            Your educational guide to the world of Aman. Learn how Aman works
            and how to connect to it. This page features technical and
            non-technical articles, guides, and resources on how Aman leverages
            blockchain technology to create digital identity cards.
          </p>
          <button
            className="h-[40px] w-[70%] md:w-[50%] bg-[#4d489e] rounded-[5px] text-white mt-4"
            onClick={scrollToContent}
          >
            Let's get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverviewHome;
