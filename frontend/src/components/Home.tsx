import { useDarkMode } from "../DarkModeContext";

const Home = () => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`h-[100vh] w-[100vw] flex justify-start items-center transition duration-500 bg-[url('/background3.png')] bg-cover bg-center ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* <div className="text-start">
        <h1 className="text-4xl md:text-7xl ml-20 font-bold" >Welcome To <br /> AMAN</h1>
        <h1 className="text-lg md:text-xl ml-20 mt-10 font-thin">Your Identity, Your Control.</h1>
      </div> */}
    </div>
  );
};

export default Home;
