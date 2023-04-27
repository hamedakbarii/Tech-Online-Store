import {Facebook, Instagram } from "../Icon";
import AccardionSection from "./Accardion";
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
      "1234 Street Adress, City Address, 1234",
      "(00)1234 5678",
      "shop@email.com",
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

        <div className="flex justify-between items-center p-2 pt-4">
          <div className="flex justify-center items-center gap-2">
            <Facebook color={'gray'} size={20} />
            <Instagram color={'gray'} size={20} />
          </div>
          <span className="text-[#A2A6B0] text-sm">
            Copyright © 2020 Shop Pty. Ltd.
          </span>
        </div>

        <div className="grid grid-cols-[repeat(5,3rem)] justify-items-center place-content-center py-4">
          <img
            src="./assets/FooterImg/paypal.png"
            alt="paypal"
            className="justify-self-center cursor-pointer"
          />
          <img
            src="./assets/FooterImg/visa.png"
            alt="visa"
            className="justify-self-center cursor-pointer"
          />
          <img
            src="./assets/FooterImg/maestro.png"
            alt="maestro"
            className="justify-self-center cursor-pointer"
          />
          <img
            src="./assets/FooterImg/discover.png"
            alt="discover"
            className="justify-self-center cursor-pointer"
          />
          <img
            src="./assets/FooterImg/american-express.png"
            alt="american-express"
            className="justify-self-center cursor-pointer"
          />
        </div>
      </footer>
    </>
  );
}
