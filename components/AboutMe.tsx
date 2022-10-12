import Image from "next/image";
import React from "react";
import { Slide } from "react-awesome-reveal";
import profile2 from "../public/profile2.jpg";
import {FaUserAlt} from 'react-icons/fa'
function AboutMe() {
  return (
    <div className="" id="about">
      <div className="py-16 md:py-24  mx-auto  max-w-3xl ">
        <div className="flex justify-center items-center mb-8"> 
          <FaUserAlt className="text-4xl"/>
          <h1 className="text-center text-4xl font-semibold ml-3">About Me</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center pt-12 md:pt-16 ">
          <Slide direction="left" duration={700}>
            <div className="relative rounded-xl w-[18em] h-[24em] shadow-xl grow">
              <Image
                priority
                src={profile2}
                quality={50}
                layout="fill"
                objectFit="cover"
                alt="profile2"
                className="rounded-xl"
              />
            </div>
          </Slide>
          <Slide direction="right" duration={700}>
            <div className="mt-12 w-[18em] md:w-[21em] lg:w-[24em] md:mt-0 md:ml-14">
              <h1 className="text-3xl text-center font-semibold">
                My name is Tanatorn
              </h1>
              <h3 className="text-xl mt-3 font-medium text-center">
                Front-end Developer
              </h3>
              <p className="text-lg mt-3">
                I like to clone websites and practice my coding skills and soft
                skills to make myself better.
              </p>
              <p className='text-lg'>In the future, I want to be a softwar engineer .</p>
              <div className="flex justify-between text-lg mt-3">
                <p>Age:20</p>
                <p>Email: bank250145.bb@gmail.com</p>
              </div>
              <p className="text-lg mt-3"> Place: KamphangPhet , Thailand</p>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
