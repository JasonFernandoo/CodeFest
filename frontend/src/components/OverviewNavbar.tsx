import React from 'react';
import { useDarkMode } from '../DarkModeContext';

const OverviewNavbar = () => {
  const { darkMode } = useDarkMode(); 
  return (
    <div className={`h-[50vh] w-[100%] flex justify-center sticky top-[70px]`}>
      <div className='w-[85%] flex flex-col mt-[7%] items-start'>
        <h1 className='font-bold text-[30px]'>On This Page</h1>
        <ul className={`flex flex-col items-start text-[22px] mt-[7%] gap-3 text-[#898989]`}>
          <li className='hover:cursor-pointer hover:text-[#4d489e]'>What is Aman?</li>
          <li className='hover:cursor-pointer hover:text-[#4d489e]'>How do I use Aman?</li>
          <li className='hover:cursor-pointer hover:text-[#4d489e]'>What is Aman used for?</li>
        </ul>
      </div>
    </div>
  );
};

export default OverviewNavbar;