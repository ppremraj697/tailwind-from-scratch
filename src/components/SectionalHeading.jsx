import PropTypes from "prop-types";

const SectionalHeading = ({ heading, description }) => {
  return (
    <div className="conatiner flex flex-col items-center mt-14 gap-y-7 px-6">
      <h1 className="w-full text-center text-4xl font-bold">{heading}</h1>
      <p className="w-full text-center text-base text-slate-400 sm:w-2/3 lg:w-1/2 xl:w-2/5">
        {description}
      </p>
    </div>
  );
};

SectionalHeading.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SectionalHeading;
