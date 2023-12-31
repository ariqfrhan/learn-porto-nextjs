import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import {
  SlSocialYoutube,
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";

export default function LeftSide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/ariqfrhan" target="_blank">
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
                items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
          >
            <TbBrandGithub></TbBrandGithub>
          </span>
        </a>
        <a href="https://github.com/ariqfrhan" target="_blank">
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
                items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
          >
            <SlSocialInstagram></SlSocialInstagram>
          </span>
        </a>
        <a href="https://github.com/ariqfrhan" target="_blank">
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
                items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
          >
            <SlSocialLinkedin></SlSocialLinkedin>
          </span>
        </a>
        <a href="https://github.com/ariqfrhan" target="_blank">
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
                items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
          >
            <SlSocialFacebook></SlSocialFacebook>
          </span>
        </a>
        <a href="https://github.com/ariqfrhan" target="_blank">
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
                items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
          >
            <SlSocialYoutube></SlSocialYoutube>
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
}
