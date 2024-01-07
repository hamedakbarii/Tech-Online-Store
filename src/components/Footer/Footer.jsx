import { Instagram } from "../Icon";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTelegram, FaGithub } from "react-icons/fa";
import { PiCursorClickFill } from "react-icons/pi";
import AccardionSection from "./Accardion";
import { Link } from "react-router-dom";

let Accardion = [
  {
    title: "Pc Parts",
    accardionContent: [
      "CPUS",
      "Add On Cards",
      "Hard Drives (Internal)",
      "Graphic Cards",
      "Keyboards / Mice",
      "Cases / Power Supplies / Cooling",
      "RAM (Memory)",
      "Software",
      "Speakers / Headsets",
      "Motherboards",
    ],
    isAccardionOpen: false,
    accardionContentHeight: `0`,
  },
];

let LaptopAccardion = [
  {
    title: "Laptops",
    accardionContent: ["Asus", "Lenovo", "Dell", "Hp", "Apple"],
    isAccardionOpen: false,
    accardionContentHeight: `0`,
  },
];

let Information = [
  {
    title: "Information",
    accardionContent: ["Phone", "Sponsor", "Details", "Softwar", "Hardwar"],
    isAccardionOpen: false,
    accardionContentHeight: `0`,
  },
];

let DesktopPCs = [
  {
    title: "DesktopPCs",
    accardionContent: ["Mac", "Linux", "Windows", "Apple-Mac", "Hardwar"],
    isAccardionOpen: false,
    accardionContentHeight: `0`,
  },
];

let Address = [
  {
    title: "Address",
    accardionContent: [
      "Tehran , Iran",
      "(+98) 9377550980",
      "hamedakbariwork@gmail.com",
    ],
    isAccardionOpen: false,
    accardionContentHeight: `0`,
  },
];

export default function Footer() {
  return (
    <>
      <footer className="bg-[#020203] p-4">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center flex-col">
            <p className="font-semibold text-white text-2xl">
              Sign Up To Our Newsletter.
            </p>

            <p className="font-light text-white mt-4">
              Be the first to hear about the latest offers.
            </p>
          </div>
        </div>

        <div className="pt-4 px-2 flex justify-evenly items-center gap-2">
          <input
            type="email"
            placeholder="Your Email"
            className="pl-2 bg-transparent border-solid border-2 text-PrimaryGray placeholder:text-PrimaryGray rounded py-2 w-3/5"
          />

          <button className="text-white bg-[#0156FF] py-2 w-2/5 text-lg font-semibold rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF]">
            Subscribe
          </button>
        </div>

        <div className="flex flex-col justify-center items-center p-2 px-6 gap-6 mt-4">
          <div className="flex flex-col border-b-[#A2A6B0] border-b-[1px] cursor-pointer w-full">
            <AccardionSection Data={Information} key="accardion information" />
          </div>

          <div className="flex flex-col border-b-[#A2A6B0] border-b-[1px] cursor-pointer w-full">
            <AccardionSection Data={Accardion} key="accardion" />
          </div>

          <div className="flex flex-col border-b-[#A2A6B0] border-b-[1px] cursor-pointer w-full">
            <AccardionSection Data={DesktopPCs} key="accardion desktop pcs" />
          </div>

          <div className="flex flex-col border-b-[#A2A6B0] border-b-[1px] cursor-pointer w-full">
            <AccardionSection Data={LaptopAccardion} key="Accardion Laptop" />
          </div>

          <div className="flex flex-col border-b-[#A2A6B0] border-b-[1px] cursor-pointer w-full">
            <AccardionSection Data={Address} key="Accardion address" />
          </div>
        </div>

        <div className="flex flex-col gap-6 justify-between items-center p-2 pt-4">
          <div className="flex justify-center items-center gap-2">
            <a href="https://www.instagram.com/hamedakbrii/?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D">
              <Instagram color={"gray"} size={20} />
            </a>

            <a href="https://x.com/Hamedakbrii">
              <FaSquareXTwitter className="text-white text-xl" />
            </a>

            <a href="https://t.me/hamedakbrii">
              <FaTelegram className="text-white text-xl" />
            </a>

            <a href="https://github.com/hamedakbarii">
              <FaGithub className="text-white text-xl" />
            </a>

            <a href="https://hamedakbari.vercel.app">
              <PiCursorClickFill className="text-white text-xl" />
            </a>
          </div>

          <Link
            to={"https://hamedakbari.vercel.app"}
            className="text-[#A2A6B0] text-sm"
          >
            Made with ❤️ ( Hamed Akbari )
          </Link>
        </div>
      </footer>
    </>
  );
}
