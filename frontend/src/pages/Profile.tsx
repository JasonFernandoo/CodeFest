import React from 'react'
import { useDarkMode } from '../DarkModeContext'

const Profile = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className={`h-[100vh] w-[100vw] flex justify-center items-center ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <div className={`p-[10px] flex bg-[#ffffff50] border-[1px] rounded-[10px] ${darkMode ? 'border-white' : ''}`}>
            <div className='text-start flex flex-col gap-5'>
                <p className='flex h-[40px] w-[150px] items-center'>Name</p>
                <p className='flex h-[40px] w-[150px] items-center'>Principal</p>
                <p className='flex h-[40px] w-[150px] items-center'>Internet Identity</p>
            </div>
            <div className='flex flex-col gap-5'>
                <p className='flex justify-center items-center'>: <span className='h-[40px] w-[200px] bg-[#e8e8e860] rounded-[5px] ml-[20px] flex items-center pl-[15px]'>Lorem ipsum</span></p>
                <p className='flex justify-center items-center'>: <span className='h-[40px] w-[200px] bg-[#e8e8e860] rounded-[5px] ml-[20px] flex items-center pl-[15px]'>Lorem ipsum</span></p>
                <p className='flex justify-center items-center'>: <span className='h-[40px] w-[200px] bg-[#e8e8e860] rounded-[5px] ml-[20px] flex items-center pl-[15px]'>Lorem ipsum</span></p>
            </div>
        </div>
    </div>
  )
}

export default Profile