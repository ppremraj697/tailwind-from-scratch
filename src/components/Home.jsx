import dashboard from "../../public/illustration-hero.svg";
const Home = () => {
  return (
    <div className="container flex flex-col p-6 lg:flex-row-reverse">
      <div className="flex justify-center lg:w-1/2">
        <img src={dashboard} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col items-center lg:justify-end lg:w-1/2 lg:items-start">
        <h1 className="text-3xl font-bold text-center lg:text-6xl lg:text-left">
          A Simple Bookmark Manager
        </h1>
        <p className="text-center text-lg font-normal text-slate-400 px-2 lg:text-2xl lg:text-left lg:mt-10 lg:w-2/3">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex justify-center gap-x-3 w-full lg:justify-start lg:my-10">
          <button className="p-4 bg-indigo-500 text-white font-bold rounded">
            Get It On Chrome
          </button>
          <button className="p-4 bg-slate-300 text-black font-bold rounded">
            Get It On Firefox
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
