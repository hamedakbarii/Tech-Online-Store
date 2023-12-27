import { useEffect, useState } from "react";
import { LeftSideIcon, RightSideIcon } from "./Icon";

let Hero = () => {
  const [bg, setBg] = useState(1);

  const nextBg = () => {
    if (bg < 3) {
      setBg((prev) => prev + 1);
    } else {
      setBg(1);
    }
  };

  const prevBg = () => {
    if (bg > 1) {
      setBg((prev) => prev - 1);
    } else {
      setBg(3);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextBg();
    }, 2000);

    return () => clearInterval(interval);
  }, [nextBg]);

  return (
    <div className="container mx-auto mt-4 h-40">
      <div
        className="relative overflow-hidden h-full w-full"
        style={{ background: `url(assets/hero/hero-banner${bg}.png)` }}
      >
        <div className="absolute w-full h-full top-0 left-0 text-2xl">
          <div
            className="absolute left-0 top-[50%] translate-y-[-50%] px-3 py-4 bg-gray-800 opacity-[.6] hover:opacity-[1] transation-all duration-[0.2s] cursor-pointer  rounded-r-full flex items-center justify-center"
            onClick={prevBg}
          >
            <LeftSideIcon color="white" />
          </div>
          <div
            className="absolute right-0 top-[50%] translate-y-[-50%] px-3 py-4 bg-gray-800 opacity-[.6] hover:opacity-[1] transation-all duration-[0.2s] cursor-pointer  rounded-l-full flex items-center justify-center"
            onClick={nextBg}
          >
            <RightSideIcon color="white" />
          </div>

          <span className="absolute -top-1 right-0 text-black text-sm p-2">
            {bg} / 3
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
