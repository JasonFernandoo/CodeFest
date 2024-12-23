import { useDarkMode } from "../DarkModeContext";
import Char1 from '../../public/char1-left.png'
import Char2 from '../../public/char1-right.png'

const Home = () => {
  const { darkMode } = useDarkMode();

  return (
    <div 
      className={`
        min-h-screen w-[100vw] relative
        flex justify-start items-center 
        transition duration-500 
        bg-[url('/background3.png')] 
        bg-cover bg-center bg-no-repeat
        p-4 sm:p-6 md:p-8 lg:p-10
        overflow-x-hidden
        ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}
      `}
    > 
      <div className="flex absolute top-[29%] left-[16%]">
        <img className="h-auto w-[375px] animate-scaleUp" src={Char1}></img>
      </div>
      <div className="flex absolute top-[32%] right-[19%]">
        <img className="h-auto w-[325px] animate-scaleUp2" src={Char2}></img>
      </div>
    </div>
  );
};

export default Home;
