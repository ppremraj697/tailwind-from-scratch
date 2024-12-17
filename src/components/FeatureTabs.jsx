import { useState } from "react";
import tab1 from "../public/illustration-features-tab-1.svg";
import tab2 from "../public/illustration-features-tab-2.svg";
import tab3 from "../public/illustration-features-tab-3.svg";

const FeatureTabs = () => {
  const [activeTabName, setActiveTabName] = useState("simple-bookmarking");

  const handleOnClick = (tabName) => {
    setActiveTabName(tabName);
  };

  return (
    <div className="relative container mx-auto flex flex-col px-6 mt-14 gap-8">
      <div className="flex justify-center gap-8">
        <p
          onClick={() => handleOnClick("simple-bookmarking")}
          className={`py-5 cursor-pointer hover:text-softRed ${
            activeTabName === "simple-bookmarking"
              ? "border-softRed border-b-4"
              : "border-transparent"
          }`}
        >
          Simple Bookmarking
        </p>
        <p
          onClick={() => handleOnClick("speedy-searching")}
          className={`py-5 cursor-pointer hover:text-softRed ${
            activeTabName === "speedy-searching"
              ? "border-softRed border-b-4"
              : "border-transparent"
          }`}
        >
          Speedy Searching
        </p>
        <p
          onClick={() => handleOnClick("easy-sharing")}
          className={`py-5 cursor-pointer hover:text-softRed ${
            activeTabName === "easy-sharing"
              ? "border-softRed border-b-4"
              : "border-transparent"
          }`}
        >
          Easy Sharing
        </p>
      </div>
      <div className="z-10">
        <div
          className={`flex flex-col gap-8 md:flex-row ${
            activeTabName === "simple-bookmarking" ? "block" : "hidden"
          }`}
        >
          <div className="md:w-1/2">
            <img className="" src={tab1} alt="" />
          </div>
          <div className="flex flex-col gap-8 items-center md:w-1/2 md:items-start">
            <h2 className="w-full text-center text-3xl font-bold md:text-left">
              Bookmark in one click
            </h2>
            <p className="w-full text-center text-base text-slate-400 lg:w-3/5 md:text-left">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
            <button className="px-8 py-3 bg-indigo-500 text-white font-bold rounded border-solid border-transparent hover:bg-white hover:text-indigo-500 hover:border-indigo-500 border-2">
              More Info
            </button>
          </div>
        </div>
        <div
          className={`flex flex-col gap-8 md:flex-row ${
            activeTabName === "speedy-searching" ? "block" : "hidden"
          }`}
        >
          <div className="md:w-1/2">
            <img className="" src={tab2} alt="" />
          </div>
          <div className="flex flex-col gap-8 items-center md:w-1/2 md:items-start">
            <h2 className="w-full text-center text-3xl font-bold md:text-left">
              Intelligent search
            </h2>
            <p className="w-full text-center text-base text-slate-400 lg:w-3/5 md:text-left">
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
            </p>
            <button className="px-8 py-3 bg-indigo-500 text-white font-bold rounded border-solid border-transparent hover:bg-white hover:text-indigo-500 hover:border-indigo-500 border-2">
              More Info
            </button>
          </div>
        </div>
        <div
          className={`flex flex-col gap-8 md:flex-row ${
            activeTabName === "easy-sharing" ? "block" : "hidden"
          }`}
        >
          <div className="md:w-1/2">
            <img className="" src={tab3} alt="" />
          </div>
          <div className="flex flex-col gap-8 items-center md:w-1/2 md:items-start">
            <h2 className="w-full text-center text-3xl font-bold md:text-left">
              Share your bookmarks
            </h2>
            <p className="w-full text-center text-base text-slate-400 lg:w-3/5 md:text-left">
              Easily share your bookmarks and collections with others. Create a
              shareable a link that you can send at the click of a button.
            </p>
            <button className="px-8 py-3 bg-indigo-500 text-white font-bold rounded border-solid border-transparent hover:bg-white hover:text-indigo-500 hover:border-indigo-500 border-2">
              More Info
            </button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block bg-indigo-500 w-full h-72 top-64 right-2/3 absolute rounded-tr-full rounded-br-full" />
    </div>
  );
};

export default FeatureTabs;
