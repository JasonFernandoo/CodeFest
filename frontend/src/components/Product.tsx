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
                className={`relative backdrop-blur-md border h-40 md:h-52 shadow-lg rounded-lg flex justify-center items-center transition-all duration-300 group cursor-pointer ${darkMode ? "bg-black text-white border-white" : "bg-white text-black border-black"}`}>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center">
                    <img 
                        src="./hs.png" 
                        alt=""
                        className="w-full h-full object-contain transition-all duration-300 group-hover:opacity-0" />
                </div>
                <div 
                    className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{
                        background: "linear-gradient(to right, rgba(255,0,255,0.3), rgba(8,100,120,0.3))"
                    }}
                >
                    <h2 className="text-xl md:text-2xl font-semibold">High Security</h2>
                    <p className="text-sm md:text-base ">
                        Unique, encrypted data that cannot be forged.
                    </p>
                </div>
            </motion.div>

            {/* Guaranteed Authenticity */}
            <motion.div 
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`relative backdrop-blur-md border h-40 md:h-52 shadow-lg rounded-lg flex justify-center items-center transition-all duration-300 group cursor-pointer ${darkMode ? "bg-black text-white border-white" : "bg-white text-black border-black"}`}>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center">
                    <img 
                        src="./auth.png" 
                        alt=""
                        className="w-full h-full object-contain transition-all duration-300 group-hover:opacity-0" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20"
                    style={{
                        background: "linear-gradient(to right, rgba(147,51,234,0.3), rgba(59,130,246,0.3))"
                    }}
                >
                    <h2 className="text-xl md:text-2xl font-semibold">Guaranteed Authenticity</h2>
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
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`relative backdrop-blur-md border h-40 md:h-52 shadow-lg rounded-lg flex justify-center items-center transition-all duration-300 group cursor-pointer ${darkMode ? "bg-black text-white border-white" : "bg-white text-black border-black"}`}>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center">
                    <img 
                        src="./record.png" 
                        alt=""
                        className="w-full h-full object-contain transition-all duration-300 group-hover:opacity-0" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20"
                    style={{
                         background: "linear-gradient(to right, rgba(236,72,153,0.3), rgba(34,211,238,0.3))"
                    }}
                >
                    <h2 className=" text-xl md:text-2xl font-semibold">Permanent Record</h2>
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
                className={`relative backdrop-blur-md border h-40 md:h-52 shadow-lg rounded-lg flex justify-center items-center transition-all duration-300 group cursor-pointer ${darkMode ? "bg-black text-white border-white" : "bg-white text-black border-black"}`}>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center">
                    <img 
                        src="./verif.png" 
                        alt=""
                        className="w-full h-full object-contain transition-all duration-300 group-hover:opacity-0" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20"
                    style={{
                        background: "linear-gradient(to right, rgba(249,115,22,0.3), rgba(139,92,246,0.3))"
                    }}
                >
                    <h2 className=" text-xl md:text-2xl font-semibold">Instant Verification</h2>
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
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`relative backdrop-blur-md border h-40 md:h-52 shadow-lg rounded-lg flex justify-center items-center transition-all duration-300 group cursor-pointer ${darkMode ? "bg-black text-white border-white" : "bg-white text-black border-black"}`}>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center">
                    <img 
                        src="./portability.png" 
                        alt=""
                        className="w-full h-full object-contain transition-all duration-300 group-hover:opacity-0" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20"
                    style={{
                        background: "linear-gradient(to right, rgba(16,185,129,0.3), rgba(99,102,241,0.3))"
                    }}
                >
                    <h2 className="text-xl md:text-2xl font-semibold">Portability</h2>
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
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`relative backdrop-blur-md border h-40 md:h-52 shadow-lg rounded-lg flex justify-center items-center transition-all duration-300 group cursor-pointer ${darkMode ? "bg-black text-white border-white" : "bg-white text-black border-black"}`}>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center">
                    <img 
                        src="./efficiency.png" 
                        alt=""
                        className="w-full h-full object-contain transition-all duration-300 group-hover:opacity-0" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20"
                    style={{
                         background: "linear-gradient(to right, rgba(244,63,94,0.3), rgba(168,85,247,0.3))"
                    }}
                >
                    <h2 className="text-xl md:text-2xl font-semibold">Efficiency</h2>
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