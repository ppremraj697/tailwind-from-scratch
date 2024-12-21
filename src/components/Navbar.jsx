import { useState } from "react";
import bookmarkLogo from "../public/logo-bookmark.svg";
import bookmarkLogoFooter from "../public/logo-bookmark-footer.svg";
import "remixicon/fonts/remixicon.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOverlay() {
    console.log("onclick triggered");
    setIsOpen(!isOpen);
  }

  return (
    <nav className="relative container p-6 mx-auto">
      <div className="flex justify-between items-center my-6">
        <img src={bookmarkLogo} alt="app-logo" className="" />
        <div className="flex items-center gap-x-10 font-semibold text-slate-400">
          <i
            className={`ri-menu-3-fill font-semibold text-2xl md:hidden cursor-pointer ${
              isOpen ? "hidden" : "block"
            }`}
            onClick={handleOverlay}
          />
          <div
            className={`text-white p-6 fixed top-0 left-0 w-full h-screen min-h-screen bg-veryDarkBlue z-20 opacity-90 md:hidden ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="my-6 flex justify-between mx-auto">
              <img src={bookmarkLogoFooter} alt="app-logo" />
              <i
                className={`ri-close-large-fill cursor-pointer ${
                  isOpen ? "block" : "hidden"
                }`}
                onClick={handleOverlay}
              ></i>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-center cursor-pointer">
                FEATURES
              </a>
              <a href="#downloads" className="text-center cursor-pointer">
                DOWNLOAD
              </a>
              <a href="#faq" className="text-center cursor-pointer">
                FAQ
              </a>
              <a href="#" className="text-center cursor-pointer">
                LOGIN
              </a>
            </div>
          </div>
          <a href="#features" className="hidden md:block hover:text-softRed">
            FEATURES
          </a>
          <a href="#downloads" className="hidden md:block hover:text-softRed">
            DOWNLOAD
          </a>
          <a href="#faq" className="hidden md:block hover:text-softRed">
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
