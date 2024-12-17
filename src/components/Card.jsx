import PropTypes from "prop-types";

const Card = ({ src, name, version }) => {
  return (
    <div className="py-6 rounded-lg flex flex-col items-center gap-5 shadow-lg">
      <div className="w-full flex justify-center items-center">
        <img src={src} alt="" className="" />
      </div>
      <h4 className="font-bold text-xl w-full text-center">Add to {name}</h4>
      <p className="text-slate-500 w-full text-center">
        Minimum Version {version}
      </p>
      <div className="pt-6 px-6 w-full border-t-[6px] border-dotted border-slate-300">
        <button className="w-full py-3 bg-indigo-500 text-white font-semibold rounded border-solid border-transparent hover:bg-white hover:text-indigo-500 hover:border-indigo-500 border-2">
          Add & Install Extension
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
};

export default Card;
