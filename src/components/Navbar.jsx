import bookmarkLogo from "../public/logo-bookmark.svg";
import "remixicon/fonts/remixicon.css";

export default function Navbar() {
  return (
    <nav className="container p-6 mx-auto">
      <div className="flex justify-between items-center my-6">
        <img src={bookmarkLogo} alt="app-logo" className="" />
        <div className="flex items-center gap-x-10 font-semibold text-slate-400">
          <i className="ri-menu-3-fill font-semibold text-2xl md:hidden" />
          <a href="#" className="hidden md:block hover:text-softRed">
            FEATURES
          </a>
          <a href="#" className="hidden md:block hover:text-softRed">
            DOWNLOAD
          </a>
          <a href="#" className="hidden md:block hover:text-softRed">
            FAQ
          </a>
          <a
            href="#"
            className="hidden md:block hover:text-softRed hover:bg-white hover:border-softRed border-transparent border-solid border-2 text-white bg-softRed py-2 px-8 rounded-md"
          >
            LOGIN
          </a>
        </div>
      </div>
    </nav>
  );
}
