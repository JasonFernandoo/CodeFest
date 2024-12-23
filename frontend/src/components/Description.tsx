import { useDarkMode } from "../DarkModeContext";

const Description = () => {
  const { darkMode } = useDarkMode();

  return (
    <>
      <div
        className={`h-[50vh] w-[100vw] flex justify-start items-center transition duration-500 px-20 ${
          darkMode
            ? "bg-black text-white text-3xl"
            : "bg-white text-black text-3xl"
        }`}
      >
        <h1 className="text-4xl md:text-7xl font-bold text-start">
          Welcome To <br /> AMAN
        </h1>
      </div>
      <div
        className={`h-[50vh] w-[100vw] flex justify-end items-center transition duration-500 px-20 ${
          darkMode
            ? "bg-black text-white text-3xl"
            : "bg-white text-black text-3xl"
        }`}
      >
        <h1 className="md:text-3xl ml-20 text-end">
          AMAN is a trusted solution to transform your digital identity <br />
          into a unique, secure, and easily accessible asset <br />
          through blockchain technology.
        </h1>
      </div>
    </>
  );
};

export default Description;
