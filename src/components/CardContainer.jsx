import Card from "./Card";
import chrome from "../public/logo-chrome.svg";
import firefox from "../public/logo-firefox.svg";
import opera from "../public/logo-opera.svg";

const CardContainer = () => {
  return (
    <div className="container flex flex-col gap-5 mx-auto px-6 mt-14 md:flex-row max-w-5xl">
      <div className="md:w-1/3">
        <Card src={chrome} name="Chrome" version="62" />
      </div>
      <div className="md:pt-4 md:w-1/3">
        <Card src={firefox} name="Firefox" version="55" />
      </div>
      <div className="md:pt-8 md:w-1/3">
        <Card src={opera} name="Opera" version="46" />
      </div>
    </div>
  );
};

export default CardContainer;
