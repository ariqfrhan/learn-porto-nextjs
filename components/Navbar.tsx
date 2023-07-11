import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 bg-bodyColor lgl:px-16 sm:px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <h1 className="w-14 font-bold text-textGreen text-3xl hover:cursor-pointer">
          MAF
        </h1>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text[13px] gap-7 font-bold">
            <Link
              href="/"
              className="flex items-center gap-2 text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <li>Home</li>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <li>About</li>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <li>Experience</li>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <li>Project</li>
            </Link>
            <Link
              href="/"
              className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
            >
              <li>Resume</li>
            </Link>
          </ul>
        </div>
        {/* Responsive Burger*/}
        <div className="w-6 h-5 flex flex-col justify-between items-center lg:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
      </div>
    </div>
  );
}
