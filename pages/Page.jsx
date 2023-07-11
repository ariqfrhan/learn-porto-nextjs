import Navbar from "@/components/Navbar";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import RightSide from "@/components/RightSide";
import LeftSide from "@/components/LeftSide";
import Banner from "@/components/Banner";
import About from "@/components/About";

export default function Page() {
  return (
    <main
      className="w-full h-screen font-bodyFont bg-bodyColor text-textLight
    overflow-x-hidden overflow-y-scroll"
    >
      <Navbar></Navbar>
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
          <LeftSide></LeftSide>
        </div>
        <div className="h-[88vh] w-full mx-auto p-4">
          <Banner></Banner>
          {/* About */}
          <About></About>
          {/* Experience */}
          {/* Projects */}
          {/* Archive */}
          {/* Contact */}
          {/* Footer */}
        </div>
        <div className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
          <RightSide></RightSide>
        </div>
      </div>
    </main>
  );
}
