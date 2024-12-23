const OverviewNavbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-[30vh] md:min-h-[50vh] w-full 
      flex justify-center 
      sticky top-[70px]
      px-4 sm:px-6 md:px-8">
      <div className="w-full md:w-[85%] 
        flex flex-col 
        mt-4 md:mt-[5%] 
        items-start">
        <h1 className="font-bold 
          text-xl sm:text-2xl md:text-3xl">
          On This Page
        </h1>
        <ul className="flex flex-col items-start 
          text-base sm:text-lg md:text-xl lg:text-[22px] 
          mt-4 md:mt-[7%] 
          gap-2 md:gap-3 
          text-[#898989]">
          <li className="hover:cursor-pointer hover:text-[#4d489e] transition-colors duration-200" 
              onClick={() => scrollToSection('what-is-aman')}>
            Know better about Aman
          </li>
          <li className="hover:cursor-pointer hover:text-[#4d489e] transition-colors duration-200" 
              onClick={() => scrollToSection('how-to-use-aman')}>
            How do I use Aman?
          </li>
          <li className="hover:cursor-pointer hover:text-[#4d489e] transition-colors duration-200" 
              onClick={() => scrollToSection('what-is-aman-used-for')}>
            What is Aman used for?
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OverviewNavbar;
