import { NextPage } from "next";
import React, { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { BiChevronUp } from "react-icons/bi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="">
      <div className="w-full h-16 bg-black shadow-xl p-5 px-12 lg:px-24 flex justify-between items-center fixed z-10">
        <div className="text-xl font-semibold uppercase text-white">
          <h1>Tanatorn</h1>
        </div>
        <div
          className="text-xl transition-all md:hidden"
          onClick={handleShowNavbar}
        >
          {showNavbar ? (
            <div className="text-xl text-white transition-all">
              <BiChevronUp />
            </div>
          ) : (
            <div className="text-xl text-white transition-all">
              <CgMenuLeftAlt />
            </div>
          )}
        </div>

        <ul className="w-full text-center hidden md:flex justify-end">
          <li className="py-1 px-5">
            {/* <Link
              spy={true}
              to={"home"}
              activeClass=""
                
              smooth={true}
              duration={500}
              offset={-50}
            > */}
            <a href="#home">
              <button className="p-3 rounded-xl hover:bg-white w-full hover:text-black transition-all text-white font-bold">
                HOME
              </button>
            </a>
            {/* </Link> */}
          </li>
          <li className="py-1 px-5">
            <a href="#about">
              <button className="p-3 rounded-xl hover:bg-white w-full hover:text-black text-white font-bold">
                ABOUT
              </button>
            </a>
          </li>
          <li className="py-1 px-5">
            <a href="#skill">
              <button className="p-3 rounded-xl hover:bg-white w-full hover:text-black text-white font-bold">
                SKILL
              </button>
            </a>
          </li>
          <li className="py-1 px-5">
            <a href="#project">
              <button className="p-3 rounded-xl hover:bg-white w-full hover:text-black text-white font-bold">
                PROJECT
              </button>
            </a>
          </li>
        </ul>
      </div>

      <div
        className={` ${
          showNavbar ? `h-64  ` : `h-0`
        } absolute z-20 w-full mt-16 overflow-hidden md:hidden grow bg-black flex flex-col items-center transition-all duration-200`}
      >
        <ul className="w-full text-center">
          <li className="py-1 px-5">
            <a href="#home">
              <button className="py-3 rounded-xl hover:bg-white w-full  hover:text-black text-white font-bold">
                HOME
              </button>
            </a>
          </li>
          <li className="py-1 px-5">
            <a href="#about">
              <button className="py-3 rounded-xl hover:bg-white w-full hover:text-black text-white font-bold">
                ABOUT
              </button>
            </a>
          </li>
          <li className="py-1 px-5">
            <a href="#skill">
              <button className="py-3 rounded-xl hover:bg-white w-full hover:text-black text-white font-bold">
                SKILL
              </button>
            </a>
          </li>
          <li className="py-1 px-5">
            <a href="#project">
              <button className="py-3 rounded-xl hover:bg-white w-full hover:text-black text-white font-bold">
                PROJECT
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
