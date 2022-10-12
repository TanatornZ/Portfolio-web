import Image from "next/image";
import React from "react";
import { Flip, JackInTheBox, Zoom } from "react-awesome-reveal";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

function Project() {
  return (
    <div id="project" className="bg-gradient-to-r from-slate-400 to-zinc-400">
      <div className="py-16 md:py-24 px-10 md:px-0  mx-auto  md:max-w-3xl ">
        <div className="flex justify-center items-center pb-12">
          <AiOutlineFundProjectionScreen className="text-5xl" />
          <h1 className="text-center text-4xl font-semibold ml-3">Project</h1>
        </div>

        <Zoom>
          <div className=" bg-slate-600 shadow-xl mt-12 rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-2 bg-white rounded-lg shadow-lg">
              <div className="relative w-full h-48 rounded-lg">
                <Image
                  priority
                  quality={20}
                  src={"/projects/calculator.png"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg hover:scale-110 transition-all"
                  alt="calculator"
                />
              </div>
              <p className="py-3 text-center text-xl font-medium">
                Calcutalor (PWA)
              </p>
              <a
                href="https://inquisitive-sprite-d838e5.netlify.app/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <button className="w-full p-3 bg-zinc-600 text-white hover:bg-zinc-800 rounded-lg shadow-lg">
                  Visit Website
                </button>
              </a>
            </div>
            <div className="p-2 bg-white rounded-lg shadow-lg">
              <div className="relative w-full h-48 rounded-lg ">
                <Image
                  priority
                  quality={30}
                  src={"/projects/nft.png"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg hover:scale-110 transition-all"
                  alt="NFT"
                />
              </div>
              <p className="py-3 text-center text-xl font-medium">
                NFT Clone UI
              </p>
              <a
                href="https://jocular-puffpuff-27b244.netlify.app/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <button className="w-full p-3 bg-zinc-600 text-white hover:bg-zinc-800 rounded-lg shadow-lg">
                  Visit Website
                </button>
              </a>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default Project;
