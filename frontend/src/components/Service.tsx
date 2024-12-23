import { useDarkMode } from "../DarkModeContext";
import { motion } from "framer-motion";

const Service = () => {
  const { darkMode } = useDarkMode();

  return (
    <>
      <div
        className={`w-full flex flex-col transition duration-500 ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-center items-center text-3xl sm:text-4xl md:text-5xl font-bold leading-tight my-8 md:mb-12 text-center px-4"
        >
          Services
        </motion.h1>

        <div className="relative flex flex-col px-4 sm:px-8 md:px-20 lg:px-40">
          <div className="flex flex-col justify-center items-center">
            <motion.div
              initial={{ height: "0%", opacity: 0 }}
              whileInView={{ height: "100%", opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                delay: 0.2,
              }}
              className="absolute w-1 top-0 origin-top hidden md:block"
              style={{
                background: "linear-gradient(to bottom, #FF00FF, #086478)",
              }}
            />
          </div>

          <div className="w-full flex flex-col md:flex-row md:justify-start items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`relative z-10 backdrop-blur-md w-full sm:w-[80%] md:w-96 h-40 md:h-60 shadow-lg rounded-lg flex flex-col justify-center items-center transition-all duration-300 mb-8 ${
                darkMode
                  ? "bg-gradient-to-br from-gray-800 via-green-900 to-black text-white"
                  : "bg-gradient-to-br from-gray-100 via-green-100 to-white text-black"
              }`}
            >
              <div className="text-purple-400 text-5xl md:text-7xl mb-2">
                <i className="far fa-id-card"></i>
              </div>
              <h2 className="text-base md:text-lg font-semibold text-center">ID Card</h2>
              <p className="text-xs md:text-sm text-center mt-1 text-gray-400 px-4">
                Lorem Ipsum Dolor Sit Amet
              </p>
            </motion.div>
          </div>

          <div className="w-full flex flex-col md:flex-row md:justify-end items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className={`relative z-10 backdrop-blur-md opacity-50 w-full sm:w-[80%] md:w-96 h-40 md:h-60 shadow-lg rounded-lg flex flex-col justify-center items-center transition-all duration-300 mb-8 ${
                darkMode
                  ? "bg-gradient-to-br from-gray-800 via-red-900 to-black text-white"
                  : "bg-gradient-to-br from-gray-100 via-red-100 to-white text-black"
              }`}
            >
              <div className="text-blue-400 text-5xl md:text-7xl mb-2">
                <i className="fas fa-certificate"></i>
              </div>
              <h2 className="text-base md:text-lg font-semibold text-center">Certificate</h2>
              <p className="text-xs md:text-sm text-center mt-1 text-gray-400 px-4">
                Lorem Ipsum Dolor Sit Amet
              </p>
            </motion.div>
          </div>

          <div className="w-full flex flex-col md:flex-row md:justify-start items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className={`relative z-10 backdrop-blur-md opacity-50 w-full sm:w-[80%] md:w-96 h-40 md:h-60 shadow-lg rounded-lg flex flex-col justify-center items-center transition-all duration-300 mb-8 ${
                darkMode
                  ? "bg-gradient-to-br from-gray-800 via-blue-900 to-black text-white"
                  : "bg-gradient-to-br from-gray-100 via-blue-100 to-white text-black"
              }`}
            >
              <div className="text-pink-400 text-5xl md:text-7xl mb-2">
                <i className="fas fa-layer-group"></i>
              </div>
              <h2 className="text-base md:text-lg font-semibold text-center">Materai</h2>
              <p className="text-xs md:text-sm text-center mt-1 text-gray-400 px-4">
                Lorem Ipsum Dolor Sit Amet
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
