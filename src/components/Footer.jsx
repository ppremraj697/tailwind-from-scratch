import bookmarkLogo from "../public/logo-bookmark-footer.svg";
const Footer = () => {
  return (
    <footer className="mt-24">
      <div className="bg-softBlue sm:h-[50vh] flex justify-center items-center p-6">
        <div className="max-w-lg space-y-7 h-full flex flex-col justify-center">
          <p className="text-xl text-white text-center">
            35,000+ ALREADY JOINED
          </p>
          <h2 className="w-full text-center text-3xl text-white font-bold lg:text-4xl">
            Stay up-to-date with what we&apos;re doing{" "}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="text"
              placeholder="Enter your email address"
              className="rounded-lg w-full sm:w-1/2 px-6 py-3"
            />
            <button className="bg-softRed py-3 px-6 rounded-lg font-semibold text-white">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="bg-footer py-4 px-6">
        <div className="flex flex-col justify-between md:flex-row p-6">
          <div className="flex flex-col gap-6 md:flex-row justify-start items-center my-6 gap-x-10 font-semibold text-slate-400">
            <img src={bookmarkLogo} alt="app-logo" className="" />
            <a href="#features" className="hover:text-softRed">
              FEATURES
            </a>
            <a href="#downloads" className="hover:text-softRed">
              DOWNLOAD
            </a>
            <a href="#faq" className="hover:text-softRed">
              FAQ
            </a>
          </div>
          <div className="flex justify-center gap-x-10 text-white text-3xl items-center ">
            <i className="ri-facebook-box-fill hover:text-softRed"></i>
            <i className="ri-twitter-x-line hover:text-softRed"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
