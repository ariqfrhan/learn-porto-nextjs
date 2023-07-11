import React, { useEffect } from "react";

export default function RightSide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      <a href="mailto:muhammadariq3@gmail.com">
        <p className="text-sm rotate-90 w-72 tracking-wide text-textGreen">
          @ariqfrhan
        </p>
      </a>
      <div className="w-[2px] h-32 bg-textDark inline-flex"></div>
    </div>
  );
}
