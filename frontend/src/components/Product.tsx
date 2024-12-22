import React from 'react';
import { useDarkMode } from '../DarkModeContext';
import { motion } from "framer-motion";

const Product = () => {
  const { darkMode } = useDarkMode();

  return (
    <>
      <div className={`max-w-full w-full flex flex-col justify-start items-center py-10 px-4 ${darkMode ? 'bg-black text-white text-3xl' : 'bg-white text-black text-3xl'}`}>
        <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold leading-tight mt-9 text-center">
              Benefits
        </motion.h1>

        {/* Service Boxes */}
        <div className="w-full max-w-7xl grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20 px-4">
            {/* High Security */}
            <motion.div 
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`relative backdrop-blur-md  border h-40 md:h-52 shadow-lg rounded-lg flex justify-center items-center transition-all duration-300 group cursor-pointer ${darkMode ? "bg-black text-white border-white hover:bg-gray-700" : "bg-white text-black border-black hover:bg-gray-300"}`}>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                    <h2 className="text-xl md:text-2xl font-semibold">High Security</h2>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-sm md:text-base">
                        Unique, encrypted data that cannot be forged.
                    </p>
                </div>
            </motion.div>

            {/* Guaranteed Authenticity */}
            <motion.div 
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className={`relative backdrop-blur-md border h-40 md:h-52 shadow-lg rounded-lg flex justify-center items-center transition-all duration-300 group cursor-pointer ${darkMode ? "bg-black text-white border-white hover:bg-gray-700" : "bg-white text-black border-black hover:bg-gray-300"}`}>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                    <h2 className="text-xl md:text-2xl font-semibold">Guaranteed Authenticity</h2>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-sm md:text-base">
                        Ensures that identity, certificates, and stamps are authentic and digitally valid.
                    </p>
                </div>
            </motion.div>

            {/* Permanent Record */}
            <motion.div 
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}  
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                className={`relative backdrop-blur-md border h-40 md:h-52 shadow-lg rounded-lg flex justify-center items-center transition-all duration-300 group cursor-pointer ${darkMode ? "bg-black text-white border-white hover:bg-gray-700" : "bg-white text-black border-black hover:bg-gray-300"}`}>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                    <h2 className=" text-xl md:text-2xl font-semibold">Permanent Record</h2>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-sm md:text-base">
                        All data is securely stored on the blockchain and cannot be altered.
                    </p>
                </div>
            </motion.div>
      
            {/* Instant Verification */}
            <motion.div 
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`relative backdrop-blur-md border h-40 md:h-52 shadow-lg rounded-lg flex justify-center items-center transition-all duration-300 group cursor-pointer ${darkMode ? "bg-black text-white border-white hover:bg-gray-700" : "bg-white text-black border-black hover:bg-gray-300"}`}>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                    <h2 className="text-xl md:text-2xl font-semibold">Instant Verification</h2>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-sm md:text-base">
                      Simplifies the authentication process for documents or identity anytime, anywhere.
                    </p>
                </div>
            </motion.div>

            {/* Portability */}
            <motion.div 
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className={`relative backdrop-blur-md border h-40 md:h-52 shadow-lg rounded-lg flex justify-center items-center transition-all duration-300 group cursor-pointer ${darkMode ? "bg-black text-white border-white hover:bg-gray-700" : "bg-white text-black border-black hover:bg-gray-300"}`}>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                    <h2 className="text-xl md:text-2xl font-semibold">Portability</h2>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-sm md:text-base">
                      Easily accessible across digital platforms without geographical limitations.
                    </p>
                </div>
            </motion.div>

            {/* Efficiency */}
            <motion.div 
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}  
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                className={`relative backdrop-blur-md border h-40 md:h-52 shadow-lg rounded-lg flex justify-center items-center transition-all duration-300 group cursor-pointer ${darkMode ? "bg-black text-white border-white hover:bg-gray-700" : "bg-white text-black border-black hover:bg-gray-300"}`}>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                    <h2 className="text-xl md:text-2xl font-semibold">Efficiency</h2>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-sm md:text-base">
                      Saves costs, time, and eliminates the need for physical documents.
                    </p>
                </div>
            </motion.div>
        </div>
      </div>
    </>
  );
};

export default Product;