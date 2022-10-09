import Image from "next/image";
import React from "react";

function Project() {
  return (
    <div id="project">
      <div className="py-16 md:py-24 px-10 md:px-0  mx-auto  md:max-w-3xl ">
        <h1 className="text-center text-4xl font-semibold pb-12">Project</h1>

        <div className=" bg-slate-600 mt-12 rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-2 bg-white rounded-lg">
            <div className="relative w-full h-48 rounded-lg">
              <Image
                src={"/projects/calculator.png"}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
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
              <button className="w-full p-3 bg-red-500 rounded-lg shadow-lg">
                Visit Website
              </button>
            </a>
          </div>
          <div className="p-2 bg-white rounded-lg">
            <div className="relative w-full h-48 rounded-lg">
              <Image
                src={"/projects/nft.png"}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                alt="NFT"
              />
            </div>
            <p className="py-3 text-center text-xl font-medium">NFT Clone UI</p>
            <a
              href="https://jocular-puffpuff-27b244.netlify.app/"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <button className="w-full p-3 bg-red-500 rounded-lg shadow-lg">
                Visit Website
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
