import { useDarkMode } from "../DarkModeContext";

const Home = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`h-[100vh] w-[100vw] flex justify-start items-center transition duration-500 bg-[url('/background3.png')] bg-cover bg-center ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}> 
    </div>
  );
};

export default Home;
