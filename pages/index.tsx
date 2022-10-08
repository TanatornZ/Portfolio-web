import type { NextPage } from "next";
import Image from "next/image";
import HomeProfile from "../components/HomeProfile";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen ">
      <Navbar />
      <HomeProfile />
    </div>
  );
};

export default Home;
