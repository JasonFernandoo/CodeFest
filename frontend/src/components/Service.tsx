import React from 'react';
import { useDarkMode } from '../DarkModeContext';

const Service = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`h-[100vh] w-[100vw] flex justify-center items-center transition duration-500 ${darkMode ? 'bg-gray-400 text-white' : 'bg-gray-200 text-black'}`}>
      SERVICE
    </div>
  );
};

export default Service;