import Image from "next/image";
import React from "react";
import { JackInTheBox, Zoom } from "react-awesome-reveal";
import { FaReact } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import atom from "../public/icons/atom.png";
import firebase from "../public/icons/firebase.png";
import flutter from "../public/icons/flutter.png";
import github from "../public/icons/github.png";
import javascript from "../public/icons/javascript.png";
import redux from "../public/icons/redux.png";
import tailwind from "../public/icons/tailwind.png";
import typescript from "../public/icons/typescript.png";

function Skill() {
  return (
    <div id="skill" className="bg-skill bg-cover bg-center">
      <div className="py-16 md:py-24 px-10 md:px-0  mx-auto  md:max-w-3xl ">
        <h1 className="text-center text-4xl font-semibold pb-12 text-white">
          Skill
        </h1>
        <JackInTheBox>
          <div className=" bg-slate-600 shadow-xl mt-12 rounded-lg p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="p-10 rounded-lg flex justify-center items-center shadow-lg hover:scale-110 transition-all     bg-white">
              <div className="w-48 h-16 relative ">
                <Image
                  src={atom}
                  quality={10}
                  layout="fill"
                  alt="react"
                  objectFit="contain"
                  className=""
                />
              </div>
            </div>
            <div className="p-10 rounded-lg flex justify-center items-center shadow-lg hover:scale-110 transition-all    bg-white">
              <div className="w-48 h-16 relative">
                <Image
                  quality={10}
                  src={typescript}
                  layout="fill"
                  alt="react"
                  objectFit="contain"
                  className=""
                />
              </div>
            </div>
            <div className="p-10 rounded-lg flex justify-center items-center shadow-lg hover:scale-110 transition-all    bg-white">
              <div className="w-48 h-16 relative">
                <Image
                  quality={10}
                  src={javascript}
                  layout="fill"
                  alt="react"
                  objectFit="contain"
                  className=""
                />
              </div>
            </div>
            <div className="p-10 rounded-lg flex justify-center items-center shadow-lg hover:scale-110 transition-all    bg-white">
              <div className="w-48 h-16 relative">
                <Image
                  quality={10}
                  src={tailwind}
                  layout="fill"
                  alt="react"
                  objectFit="contain"
                  className=""
                />
              </div>
            </div>
            <div className="p-10 rounded-lg flex justify-center items-center shadow-lg hover:scale-110 transition-all    bg-white">
              <div className="w-48 h-16 relative">
                <Image
                  quality={10}
                  src='/redux.svg'
                  layout="fill"
                  alt="react"
                  objectFit="contain"
                  className=""
                />
              </div>
            </div>
            <div className="p-10 rounded-lg flex justify-center items-center shadow-lg hover:scale-110 transition-all    bg-white">
              <div className="w-48 h-16 relative">
                <Image
                  quality={10}
                  src={flutter}
                  layout="fill"
                  alt="react"
                  objectFit="contain"
                  className=""
                />
              </div>
            </div>
            <div className="p-10 rounded-lg flex justify-center items-center shadow-lg hover:scale-110 transition-all    bg-white">
              <div className="w-48 h-16 relative">
                <Image
                  quality={10}
                  src={firebase}
                  layout="fill"
                  alt="react"
                  objectFit="contain"
                  className=""
                />
              </div>
            </div>
            <div className="p-10 rounded-lg flex justify-center items-center shadow-lg hover:scale-110 transition-all    bg-white">
              <div className="w-48 h-16 relative">
                <Image
                  quality={10}
                  src={github}
                  layout="fill"
                  alt="react"
                  objectFit="contain"
                  className=""
                />
              </div>
            </div>
          </div>
        </JackInTheBox>
      </div>
    </div>
  );
}

export default Skill;
