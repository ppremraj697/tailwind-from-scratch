import { useState } from "react";

const FeatureTabs = () => {
  const [activeTabName, setActiveTabName] = useState("simple-bookmarking");

  const handleOnClick = (tabName) => {
    setActiveTabName(tabName);
    console.log(tabName);
  };

  return (
    <div className="container flex flex-col justify-center items-start p-6 mt-14">
      <div className="flex gap-2">
        <p
          onClick={() => handleOnClick("simple-bookmarking")}
          className={`py-5 ${
            activeTabName === "simple-bookmarking"
              ? "border-softRed border-b-4"
              : "border-transparent"
          }`}
        >
          Simple Bookmarking
        </p>
        <p
          onClick={() => handleOnClick("speedy-searching")}
          className={`py-5 ${
            activeTabName === "speedy-searching"
              ? "border-softRed border-b-4"
              : "border-transparent"
          }`}
        >
          Speedy Searching
        </p>
        <p
          onClick={() => handleOnClick("easy-sharing")}
          className={`py-5 ${
            activeTabName === "easy-sharing"
              ? "border-softRed border-b-4"
              : "border-transparent"
          }`}
        >
          Easy Sharing
        </p>
      </div>
      <div
        className={`${
          activeTabName === "simple-bookmarking" ? "block" : "hidden"
        }`}
      >
        First Div
      </div>
      <div
        className={`${
          activeTabName === "speedy-searching" ? "block" : "hidden"
        }`}
      >
        Second Div
      </div>
      <div
        className={`${activeTabName === "easy-sharing" ? "block" : "hidden"}`}
      >
        Third Div
      </div>
    </div>
  );
};

export default FeatureTabs;
