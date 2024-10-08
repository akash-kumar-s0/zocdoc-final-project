import React, { useState } from "react";
import LogoImg from "../../assets/logo.svg";
import down from "../../assets/svg/down.svg";
import hamburger from "../../assets/svg/Hamburger.svg";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal/LoginModal";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <header className="bg-yellow-50 shadow-sm">
      <div className="flex max-w-[1440px] justify-between items-center px-16 py-5 mx-auto ">
        <div className="flex space-x-6">
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <img className="w-6 h-6" src={hamburger} alt="" />
          </button>
          <img className="h-11 w-28" src={LogoImg} alt="hello" />
        </div>

        <nav className="flex items-center">
          <div className="hidden lg:flex items-center gap-[16px]">
            <a
              href="#"
              className="text-gray-700 flex items-center hover:bg-[#3a2f1f0d] rounded-[4px] px-5 h-12"
            >
              Browse
              <span className="ml-3">
                <img src={down} alt="down" />
              </span>
            </a>
            <a
              href="#"
              className="text-gray-700 flex items-center hover:bg-[#3a2f1f0d] rounded-[4px] px-5 h-12"
            >
              Help
            </a>
            <a
              href="#"
              className="text-gray-700 flex items-center hover:bg-[#3a2f1f0d] rounded-[4px] px-5 h-12"
            >
              List your practice on Zocdoc
            </a>
            <div className="h-6 border-solid border-l opacity-[0.1] border-l-[#3a2f1f]" />

            <div className="relative">
              <button
                className="text-gray-700 px-5 h-12 flex items-center hover:bg-[#3a2f1f0d] rounded-[4px]"
                onClick={() => setIsLoginDropdownOpen(!isLoginDropdownOpen)}
              >
                Log in
                <span className="ml-3">
                  <img src={down} alt="down" />
                </span>
              </button>

              {isLoginDropdownOpen && (
                <div className="absolute max-w-[320px] px-8 right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <div className="py-2">
                    <div className="px-4 font-semibold py-2 text-gray-700">
                      Patients
                    </div>
                    <a
                      href="#"
                      className="block rounded-sm px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setIsLoginModalOpen(true);
                        setIsLoginDropdownOpen(false);
                      }}
                    >
                      Log in
                    </a>
                  </div>
                  <hr className="border-t border-gray-200" />
                  <div className="py-2">
                    <div className="px-4 font-semibold py-2 text-gray-700">
                      Doctors
                    </div>
                    <a
                      href="#"
                      className="block rounded-sm  px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              )}
            </div>

            <Link to="/signup">
              <button className="bg-[#FFF04B] text-black rounded-[4px] px-5 h-12">
                Sign up
              </button>
            </Link>
          </div>

          {isMobileMenuOpen && (
            <div className="absolute top-0 left-0 w-full h-[50vh] bg-yellow-50 shadow-md lg:hidden flex flex-col items-center justify-center p-4 z-50">
              <img
                className="absolute top-4 left-4 h-11 w-28"
                src={LogoImg}
                alt="hello"
              />

              <button
                className="absolute top-4 right-4 text-gray-700 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <h2 className="text-2xl font-semibold mb-6">Welcome to Zocdoc</h2>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-full mb-4 hover:bg-yellow-600">
                Sign up
              </button>
              <button className="border border-gray-700 text-gray-700 px-4 py-2 rounded-full mb-4 hover:bg-gray-100">
                Log in
              </button>
              <a href="#" className="text-gray-700 hover:text-black mt-4">
                Interested in{" "}
                <span className="underline">listing your practice</span>?
              </a>
            </div>
          )}
        </nav>
      </div>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </header>
  );
};

export default Header;
