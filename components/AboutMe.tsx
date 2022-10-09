import Image from "next/image";
import React from "react";
import profile2 from "../public/profile2.jpg";
function AboutMe() {
  return (
    <div className="" id='about'>
        <div className="py-16 md:py-24  mx-auto max-w-3xl ">
          <h1 className="text-center text-4xl font-semibold mb-8">About Me</h1>
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center pt-12 md:pt-16 ">
            <div className="relative rounded-xl w-[18em] h-[24em] shadow-xl grow">
              <Image
                src={profile2}
                layout="fill"
                objectFit="cover"
                alt="profile2"
                className="rounded-xl"
              />
            </div>
            <div className="mt-12 w-[22em] md:mt-0 md:ml-14">
              <h1 className="text-3xl text-center font-semibold">My name is Tanatorn</h1>
              <h3 className="text-xl mt-3 font-medium text-center" >Front-end Developer</h3>
              <p className="text-lg mt-3">
                I like to clone websites and practice my coding skills and soft
                skills to make myself better. In the future,
                I want to be a softwar engineer .
              </p>
              <div className="flex justify-between text-lg mt-3">
                <p>Age:20</p>
                <p>Email: bank250145.bb@gmail.com</p>
              </div>
              <p className="text-lg mt-3"> Place: KamphangPhet , Thailand</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default AboutMe;
