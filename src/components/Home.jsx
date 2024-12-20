import dashboard from "../public/illustration-hero.svg";
const Home = () => {
  return (
    <div className="relative container flex flex-col p-6 mx-auto lg:flex-row-reverse">
      <div className="hidden lg:block bg-softBlue w-full h-72 top-72 left-2/3 absolute rounded-tl-full rounded-bl-full" />
      <div className="flex justify-center z-10 lg:w-1/2">
        <img src={dashboard} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col items-center z-10 gap-10 lg:justify-start lg:w-1/2 lg:items-start">
        <h1 className="text-4xl font-bold text-center lg:text-6xl lg:text-left lg:mt-16">
          A Simple Bookmark Manager
        </h1>
        <p className="text-center text-lg font-normal text-slate-400 md:w-3/5 lg:text-2xl lg:text-left lg:w-2/3">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex justify-center gap-x-3 w-full lg:justify-start">
          <button className="p-4 bg-softBlue text-white font-bold rounded hover:bg-white hover:text-softBlue hover:border-softBlue border-transparent border-solid border-2">
            Get It On Chrome
          </button>
          <button className="p-4 bg-slate-300 text-black font-bold rounded hover:bg-white hover:text-slate-600 hover:border-slate-300 border-transparent border-solid border-2">
            Get It On Firefox
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
