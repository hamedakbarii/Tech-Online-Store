import React from "react";
import { ZipIcon } from "./Icon";

const Banner = () => {
  return (
    <section className="bg-PrimaryBlue p-2 py-4 flex flex-col md:flex-row justify-center items-center gap-3 my-6 container mx-auto">
      <div className="iconSvg relative">
        <ZipIcon />
      </div>

      <p className="text-center flex flex-col md:flex-row items-center text-PrimaryPurple">
        <span className="block">
          <span className="font-semibold">own it now</span>, up to 6 months
          interest free
        </span>
        <span className="underline text-lg md:pl-2">learn more</span>
      </p>
    </section>
  );
};

export default Banner;
