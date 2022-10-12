import Image from "next/image";
import React from "react";
import { JackInTheBox, Zoom } from "react-awesome-reveal";
import { FaReact } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import atom from "../public/icons/react.svg";
import firebase from "../public/icons/firebase.svg";
import flutter from "../public/icons/flutter.svg";
import github from "../public/icons/github.svg";
import javascript from "../public/icons/javascript.svg";
import redux from "../public/icons/redux.svg";
import tailwind from "../public/icons/tailwind.svg";
import typescript from "../public/icons/typescript.svg";
import { BiCodeBlock } from "react-icons/bi";
import * as Scroll from 'react-scroll'
function Skill() {

  const scrollToTop = () => {
      Scroll.animateScroll.scrollToTop()
      console.log('test')
  }

  return (
    <div id="skill" className="bg-skill bg-cover bg-center">
      <div className="py-16 md:py-24 px-10 md:px-0  mx-auto  md:max-w-3xl ">
        <div className="flex justify-center items-center pb-12 text-white">
          <BiCodeBlock className="text-5xl" />
          <h1 className="text-center text-4xl font-semibold ml-3" onClick={scrollToTop}>Skill</h1>
        </div>
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
                  alt="typescript"
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
                  alt="javascript"
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
                  alt="tailwind"
                  objectFit="contain"
                  className=""
                />
              </div>
            </div>
            <div className="p-10 rounded-lg flex justify-center items-center shadow-lg hover:scale-110 transition-all    bg-white">
              <div className="w-48 h-16 relative">
                <Image
                  quality={10}
                  src={redux}
                  layout="fill"
                  alt="redux"
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
                  alt="flutter"
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
                  alt="firebase"
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
                  alt="github"
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
