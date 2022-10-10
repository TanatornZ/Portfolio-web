import React from "react";
import profile from "../public/profile1.jpg";
import { HiDownload } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

function HomeProfile() {
  return (
    <div className="pt-16 bg-home bg-center bg-cover  " id='home'>
      <div className="flex  flex-col md:flex-row justify-center items-center py-24 md:py-32  ">
        
          <div className="">
            <div className="w-[18em] h-[18em] rounded-full shadow-2xl  relative">
              <Image
                priority
                src={profile}
                quality={50}
                layout="fill"
                alt="Profile"
                objectFit="cover"
                className="rounded-full "
              />
            </div>
          </div>
          <div className="mt-12 md:mt-0 md:ml-24">
            <h1 className="text-5xl font-semibold">Hello </h1>
            <h2 className="text-3xl mt-3 font-medium">
              I&apos;m Tanatorn Intaphong
            </h2>
            <div className="w-full  border mt-3"></div>
            <h3 className="text-xl mt-3 text-slate-500">Front-end Developer</h3>
            <div className="flex justify-between items-center mt-5">
              <a
                href="/Tanatorn.pdf"
          
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center p-2  text-white bg-black hover:text-black hover:bg-white hover:cursor-pointer transition-all w-min rounded-xl">
                  <p className="text-lg">Resume</p>
                  <HiDownload className="ml-2" />
                </div>
              </a>
              <a
                href="https://github.com/TanatornZ"
                target={"_blank"}
                rel="noreferrer"
              >
                <div className="bg-black flex justify-center items-center hover:cursor-pointer text-white hover:bg-white hover:text-black transition-all w-12 h-12 rounded-full">
                  <AiFillGithub size={20} />
                </div>
              </a>
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default HomeProfile;
