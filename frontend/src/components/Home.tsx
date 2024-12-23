import { useDarkMode } from "../DarkModeContext";

const Home = () => {
  const { darkMode } = useDarkMode();

  return (
    <div 
      className={`
        min-h-screen w-[100vw] 
        flex justify-start items-center 
        transition duration-500 
        bg-[url('/background3.png')] 
        bg-cover bg-center bg-no-repeat
        p-4 sm:p-6 md:p-8 lg:p-10
        overflow-x-hidden
        ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}
      `}
    > 
    </div>
  );
};

export default Home;
