import Image from "next/image";
import React from "react";
import { JackInTheBox, Zoom } from "react-awesome-reveal";
import { FaReact } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import atom from "../public/icons/atom.png";
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
                  quality={30}
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
                  quality={30}
                  src="/icons/typescript.png"
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
                  quality={30}
                  src="/icons/javascript.png"
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
                  quality={30}
                  src="/icons/tailwind.png"
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
                  quality={30}
                  src="/redux.svg"
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
                  quality={30}
                  src="/icons/flutter.png"
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
                  quality={30}
                  src="/icons/firebase.png"
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
                  quality={30}
                  src="/icons/github.png"
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
