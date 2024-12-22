import React from 'react'
import { useDarkMode } from '../DarkModeContext';

const OverviewHome = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className={`h-[100vh] w-[100vw] flex justify-start items-center transition duration-500 bg-[url('/background2.png')] bg-cover bg-center ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        
    </div>
  )
}

export default OverviewHome