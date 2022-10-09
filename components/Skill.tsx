import Image from "next/image";
import React from "react";
import { FaReact } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import atom from '../public/icons/atom.png';
function Skill() {
  return (
    <div>
      <div className="py-16 md:py-24 px-10 md:px-0  mx-auto  md:max-w-3xl ">
        <h1 className="text-center text-4xl font-semibold pb-12">Skill</h1>

        <div className=" bg-slate-600 mt-12 rounded-lg p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="p-10 rounded-lg flex justify-center items-center    bg-white">
            <div className="w-48 h-16 relative">
                <Image src={atom} layout='fill' alt='react' objectFit="contain" className=""/>
            </div>
          </div>
          <div className="p-10 rounded-lg flex justify-center items-center    bg-white">
            <div className="w-48 h-16 relative">
                <Image src='/icons/typescript.png' layout='fill' alt='react' objectFit="contain" className=""/>
            </div>
          </div>
          <div className="p-10 rounded-lg flex justify-center items-center    bg-white">
            <div className="w-48 h-16 relative">
                <Image src='/icons/javascript.png' layout='fill' alt='react' objectFit="contain" className=""/>
            </div>
          </div>
          <div className="p-10 rounded-lg flex justify-center items-center    bg-white">
            <div className="w-48 h-16 relative">
                <Image src='/icons/tailwind.png' layout='fill' alt='react' objectFit="contain" className=""/>
            </div>
          </div>
          <div className="p-10 rounded-lg flex justify-center items-center    bg-white">
            <div className="w-48 h-16 relative">
                <Image src='/redux.svg' layout='fill' alt='react' objectFit="contain" className=""/>
            </div>
          </div>
          <div className="p-10 rounded-lg flex justify-center items-center    bg-white">
            <div className="w-48 h-16 relative">
                <Image src='/icons/flutter.png' layout='fill' alt='react' objectFit="contain" className=""/>
            </div>
          </div>
          <div className="p-10 rounded-lg flex justify-center items-center    bg-white">
            <div className="w-48 h-16 relative">
                <Image src='/icons/firebase.png' layout='fill' alt='react' objectFit="contain" className=""/>
            </div>
          </div>
          <div className="p-10 rounded-lg flex justify-center items-center    bg-white">
            <div className="w-48 h-16 relative">
                <Image src='/icons/github.png' layout='fill' alt='react' objectFit="contain" className=""/>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Skill;
