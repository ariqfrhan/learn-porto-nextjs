import React from "react";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import profileImage from "./profil.png";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me"></SectionTitle>
      <div className="flex flex-col lgl:flex-row gap-16">
        <div
          className="w-full lgl:w-3/2 text-base text-textDark font-medium
            flex flex-col gap-5"
        >
          <p>
            Hello! My name is Muhammad Ariq Farhan and I enjoy creating things
            that live on the internet. My interest in web development started
            back in 2012 when I decided to try editing custom Tumblr themes —
            turns out hacking together a custom reblog button taught me a lot
            about HTML & CSS!
          </p>
          <p>
            {" "}
            Fast-forward to today, and I had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Odio rem accusantium fugiat veritatis, quidem
            repellat ab natus possimus? Sint, accusamus!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            ullam eligendi dolorum nostrum possimus quos iusto magnam ut esse
            recusandae.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-md font-titleFont grid grid-cols-2">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              JavaScript (ES6+)
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                src={profileImage}
                alt="profile"
                className="rounded-lg h-72 object-cover"
              ></Image>
              <div
                className="hidden lgl:inline-block absolute w-full h-full bg-textGreen/20
                            rounded-md top-0 left-0 group-hover:bg:transparent duration-300"
              ></div>
            </div>
            <div
              className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen
                        rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
