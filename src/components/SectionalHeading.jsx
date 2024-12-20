import PropTypes from "prop-types";

const SectionalHeading = ({ heading, description, id }) => {
  return (
    <div
      className="container flex flex-col items-center mx-auto mt-14 lg:mt-24 gap-y-7 px-6"
      id={id}
    >
      <h1 className="w-full text-center text-3xl font-bold lg:text-4xl">
        {heading}
      </h1>
      <p className="w-full text-center text-base text-slate-400 sm:w-2/3 lg:w-1/2 xl:w-2/5">
        {description}
      </p>
    </div>
  );
};

SectionalHeading.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default SectionalHeading;
