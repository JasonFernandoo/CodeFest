import React from 'react';
import { useDarkMode } from '../DarkModeContext';
import OverviewNavbar from './OverviewNavbar';
import OverviewContent from './OverviewContent';

const OverviewContainer = () => {
  const { darkMode } = useDarkMode(); 
  return (
    <div id="overview-content" className={`h-auto w-[100vw] flex transition duration-500 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className='h-[250vh] w-[30%] flex justify-center'>
        <div className='w-[100%] flex text-start'>
          <OverviewNavbar />
        </div>
      </div>
      <div className='h-auto w-[70%] flex'>
        <OverviewContent />
      </div>
    </div>
  );
};

export default OverviewContainer;