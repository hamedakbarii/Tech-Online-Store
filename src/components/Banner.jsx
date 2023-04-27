import React from "react";
import { ZipIcon } from "./Icon";

const Banner = () => {
  return (
    <section className="bg-PrimaryBlue p-2 py-4 flex flex-col justify-center items-center gap-3 my-6 container mx-auto">
      <div className="iconSvg relative">
        <ZipIcon />
      </div>

      <p className="text-center flex flex-col items-center text-PrimaryPurple"><span className="block"><span className="font-semibold">own it now</span>, up to 6 months interest free</span> <span className="underline text-lg">learn more</span></p>
    </section>
  );
};

export default Banner;
