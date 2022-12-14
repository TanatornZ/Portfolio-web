import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AboutMe from "../components/AboutMe";
import HomeProfile from "../components/HomeProfile";
import Navbar from "../components/Navbar";
import Project from "../components/project";
import Skill from "../components/Skill";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen overflow-auto">
      <Head>
        <title>Portfolio | Tanatorn</title>
      </Head>
      <Navbar />
      <HomeProfile />
      <AboutMe />
      <Skill />
      <Project />
    </div>
  );
};

export default Home;
