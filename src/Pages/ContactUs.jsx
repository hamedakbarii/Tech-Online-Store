import { Link, useLocation } from "react-router-dom";
import { Email, Location, Phone, Watch } from "../components/Icon";
import OurServices from "../components/OurServices";
import { useEffect } from "react";

export default function ContactUs() {
  const location = useLocation();
  const thisRoute = location.pathname.replace("/", "");

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-center md:items-start">
        <div>
          <div className="p-2">
            <div className="flex justify-start items-center gap-2 my-2">
              <Link to={"/"}>Home</Link>
              <span className="text-[#0156FF]">›</span>
              <span>{thisRoute}</span>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start p-2">
            <h2 className="font-bold text-2xl">Contact Us</h2>
            <span className="pt-2 text-lg">
              We love hearing from you, our Shop customers. Please contact us
              and we will make sure to get back to you as soon as we possibly
              can.
            </span>
          </div>

          <form className="flex flex-col justify-center gap-5 p-4 w-full">
            <div className="flex flex-col justify-center items-start">
              <label className="p-2 font-semibold flex items-center after:content-['*'] after:block after:text-red-500 after:ml-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="border border-[#A2A6B0] rounded-[.3rem] font-light w-full p-2 "
              />
            </div>

            <div className="flex flex-col justify-center items-start">
              <label className="p-2 font-semibold flex items-center after:content-['*'] after:block after:text-red-500 after:ml-1">
                Your Email
              </label>
              <input
                type="text"
                placeholder="Your Email"
                className="border border-[#A2A6B0] rounded-[.3rem] font-light w-full p-2"
              />
            </div>

            <div className="flex flex-col justify-center items-start">
              <label className="p-2 font-semibold">Your Phone Number</label>
              <input
                type="text"
                placeholder="Your Phone Number"
                className="border border-[#A2A6B0] rounded-[.3rem] font-light w-full p-2"
              />
            </div>

            <div className="flex flex-col justify-center items-start">
              <label className="p-2 font-semibold flex items-center after:content-['*'] after:block after:text-red-500 after:ml-1">
                What's on your mind?
              </label>
              <textarea
                name="textarea"
                id="textarea"
                cols="30"
                rows="7"
                placeholder="Type Here ..."
                className="p-2 w-full border border-[#A2A6B0] rounded-[.3rem]"
              ></textarea>
            </div>

            <input
              type="submit"
              value={"Submit"}
              className="text-white border-2 self-start border-[#0156FF] cursor-pointer bg-[#0156FF] px-10 py-2 font-semibold flex rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF]"
            />
          </form>
        </div>

        <div className="bg-[#F5F7FF] m-4 p-6 flex flex-col gap-4 rounded-lg md:mt-20">
          <div className="flex justify-start items-start gap-2">
            <Location />

            <div>
              <h3 className="font-semibold">Address:</h3>
              <h4>Tehran , Iran</h4>
            </div>
          </div>
          <div className="flex justify-start items-start gap-2">
            <Phone />

            <div>
              <h3 className="font-semibold">Phone:</h3>
              <h4>+98 9377550980</h4>
            </div>
          </div>
          <div className="flex justify-start items-start gap-2">
            <Watch />

            <div className="w-[80%]">
              <h3 className="font-semibold">We are open:</h3>
              <h4>
                Monday - Thursday: 9:00 AM - 5:30 PM Friday 9:00 AM - 6:00 PM
                Saturday: 11:00 AM - 5:00 PM
              </h4>
            </div>
          </div>
          <div className="flex justify-start items-start gap-2">
            <Email />
            <div>
              <h3 className="font-semibold">E-mail:</h3>
              <h4>hamedakbariwork@gmail.com</h4>
            </div>
          </div>
        </div>
      </div>

      <OurServices />
    </>
  );
}
