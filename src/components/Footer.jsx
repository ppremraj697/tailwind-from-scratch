import bookmarkLogo from "../public/logo-bookmark-footer.svg";
const Footer = () => {
  return (
    <footer className="">
      <div className="bg-indigo-500">
        <p>35,000+ ALREADY JOINED</p>
        <h2>Stay up-to-date with what we&apos;re doing </h2>
        <div>
          <input type="text" placeholder="Enter your email address" />
          <button>Contact Us</button>
        </div>
      </div>
      <div className="bg-footer">
        <div className="container p-6 mx-auto">
          <div className="flex justify-start items-center my-6 gap-x-10 font-semibold text-slate-400">
            <img src={bookmarkLogo} alt="app-logo" className="" />
            <a href="#" className="hover:text-softRed">
              FEATURES
            </a>
            <a href="#" className="hover:text-softRed">
              DOWNLOAD
            </a>
            <a href="#" className="hover:text-softRed">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
