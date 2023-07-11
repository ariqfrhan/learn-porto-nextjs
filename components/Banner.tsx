import React from "react";
import Typewriter from "typewriter-effect";

export default function Banner() {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4
    lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <h3 className="text-lg font-titleFont tracking-wide  text-textGreen">
        Hi, my name is
      </h3>
      <h1 className="text-4xl lgl:text-6xl font-titleFont font-bold flex- flex-col">
        Muhammad Ariq Farhan.
      </h1>
      <h2 className="text-2xl lgl:text-5xl text-textDark font-semibold flex gap-2">
        I'm a{" "}
        <Typewriter
          options={{
            strings: ["Front-End Developer.", "Data Analyst.", "Colorist."],
            autoStart: true,
            loop: true,
          }}
        ></Typewriter>
      </h2>
      <p className="text-base md:max-w-[650px] text-textDark font-medium">
        I am a web developer with 4+ years of experience in React. I have a
        strong foundation in front-end, data analyst & colorist and am skilled
        in creating user-friendly and responsive web application using React and
        its ecosystem.
        <a href="">
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Learn More
            <span
              className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%]
                    group-hover:translate-x-0 transition-transform duration-500
                    "
            ></span>
          </span>
        </a>
      </p>
      <button className="w-52 h-12 text-sm text-textGreen border font-semibold border-textGreen rounded-md hover:bg-hoverColor transition-all duration-300">
        Check out my Project!
      </button>
    </section>
  );
}
