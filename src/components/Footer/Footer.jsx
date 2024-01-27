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
      <footer className="bg-[#020203] p-4 w-full">
        <div className=" w-11/12 mx-auto">
          <div className="flex flex-col xl:flex-row items-center w-full">
            <div className="flex justify-between items-center w-full">
              <div className="flex justify-center items-center xl:items-start flex-col">
                <p className="font-semibold text-white text-2xl xl:text-3xl">
                  Sign Up To Our Newsletter.
                </p>

                <p className="font-light text-white mt-4 xl:text-sm xl:mt-1 xl:text-gray-500">
                  Be the first to hear about the latest offers.
                </p>
              </div>
            </div>

            <div className="pt-4 px-2 flex justify-evenly items-center gap-2 w-full">
              <input
                type="email"
                placeholder="Your Email"
                className="pl-2 bg-transparent border-solid border-2 text-PrimaryGray placeholder:text-PrimaryGray rounded py-2 w-3/5 xl:"
              />

              <button className="text-white bg-[#0156FF] py-2 w-2/5 text-lg font-semibold rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF]">
                Subscribe
              </button>
            </div>
          </div>

          {/* xl device ul items */}
          <div className="hidden xl:flex justify-between items-start w-full py-10 border-b border-gray-500 mx-auto">
            <div>
              <span className="text-gray-500 font-semibold">
                {Information[0].title}
              </span>

              <ul className="pt-10">
                {Information[0].accardionContent.map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-300 transition-all duration-300 hover:opacity-70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-gray-500 font-semibold">
                {Accardion[0].title}
              </span>

              <ul className="pt-10">
                {Accardion[0].accardionContent.map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-300 transition-all duration-300 hover:opacity-70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-gray-500 font-semibold">
                {DesktopPCs[0].title}
              </span>

              <ul className="pt-10">
                {DesktopPCs[0].accardionContent.map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-300 transition-all duration-300 hover:opacity-70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-gray-500 font-semibold">
                {LaptopAccardion[0].title}
              </span>

              <ul className="pt-10">
                {LaptopAccardion[0].accardionContent.map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-300 transition-all duration-300 hover:opacity-70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-gray-500 font-semibold">
                {Address[0].title}
              </span>

              <ul className="pt-10">
                {Address[0].accardionContent.map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-300 transition-all duration-300 hover:opacity-70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* smaller device ul items ( with Accardion ) */}
        <div className="flex flex-col justify-center items-center p-2 px-6 gap-6 mt-4 xl:hidden">
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
