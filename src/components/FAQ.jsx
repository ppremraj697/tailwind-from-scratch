import PropTypes from "prop-types";
import { useState } from "react";

const FAQ = ({ question, answer }) => {
  const [isHidden, setIsHidden] = useState(true);

  function handleClick() {
    setIsHidden(!isHidden);
  }

  return (
    <div>
      <div
        className="flex justify-between items-center py-3 cursor-pointer hover:text-softRed text-slate-400"
        onClick={handleClick}
      >
        <p>{question}</p>
        <div>
          <i
            className={`ri-arrow-down-s-line text-2xl ${
              isHidden ? "block" : "hidden"
            }`}
          ></i>
          <i
            className={`ri-arrow-up-s-line text-2xl ${
              isHidden ? "hidden" : "block text-softRed"
            }`}
          ></i>
        </div>
      </div>
      <p className={`text-slate-400 ${!isHidden ? "block" : "hidden"}`}>
        {answer}
      </p>
    </div>
  );
};

FAQ.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FAQ;
