import { NextPage } from "next";
import React, { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { BiChevronUp } from "react-icons/bi";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="">
      <div className="w-full h-16 bg-slate-500 shadow-xl p-5 flex justify-between items-center">
        <div className="text-xl font-bold uppercase text-white">
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
            <button className="p-3 rounded-xl hover:bg-white w-full hover:text-black text-white font-bold">
              HOME
            </button>
          </li>
          <li className="py-1 px-5">
            <button className="p-3 rounded-xl hover:bg-white w-full hover:text-black text-white font-bold">
              ABOUT
            </button>
          </li>
          <li className="py-1 px-5">
            <button className="p-3 rounded-xl hover:bg-white w-full hover:text-black text-white font-bold">
              SKILL
            </button>
          </li>
          <li className="py-1 px-5">
            <button className="p-3 rounded-xl hover:bg-white w-full hover:text-black text-white font-bold">
              PROJECT
            </button>
          </li>
        </ul>
      </div>

      <div
        className={` ${
          showNavbar ? `h-56  ` : `h-0`
        } overflow-hidden md:hidden grow bg-slate-600 flex flex-col items-center transition-all duration-200`}
      >
        <ul className="w-full text-center">
          <li className="py-1 px-5">
            <button className="py-3 rounded-xl hover:bg-white w-full text-white font-bold">
              HOME
            </button>
          </li>
          <li className="py-1 px-5">
            <button className="py-3 rounded-xl hover:bg-white w-full text-white font-bold">
              ABOUT
            </button>
          </li>
          <li className="py-1 px-5">
            <button className="py-3 rounded-xl hover:bg-white w-full text-white font-bold">
              SKILL
            </button>
          </li>
          <li className="py-1 px-5">
            <button className="py-3 rounded-xl hover:bg-white w-full text-white font-bold">
              PROJECT
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
