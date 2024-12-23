import { useDarkMode } from "../DarkModeContext";
import OverviewNavbar from "./OverviewNavbar";
import OverviewContent from "./OverviewContent";

const OverviewContainer = () => {
  const { darkMode } = useDarkMode();
  return (
    <div 
      id="overview-content" 
      className={`min-h-screen w-full 
        flex flex-col md:flex-row 
        transition duration-500 
        ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}
      `}
    >
      <div className='w-full md:w-[30%] 
        min-h-[50vh] md:min-h-screen 
        flex justify-center 
        pt-4 md:pt-[3%]'
      >
        <div className='w-full flex text-start'>
          <OverviewNavbar />
        </div>
      </div>
      <div className='w-full md:w-[70%] flex'>
        <OverviewContent />
      </div>
    </div>
  );
};

export default OverviewContainer;
