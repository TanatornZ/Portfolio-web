import type { NextPage } from "next";
import Image from "next/image";
import AboutMe from "../components/AboutMe";
import HomeProfile from "../components/HomeProfile";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen overflow-auto">
      <Navbar />
      <HomeProfile />
      <AboutMe />
    </div>
  );
};

export default Home;
