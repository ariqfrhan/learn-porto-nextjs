import React from "react";

type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="font-titleFont text-2xl font-semibold text-white flex items-center">
      {title}
      <span className="hidden md:inline-flex md:w-60 lgl:w-96 h-[.5px] bg-gray-700 ml-6"></span>
    </h2>
  );
}
