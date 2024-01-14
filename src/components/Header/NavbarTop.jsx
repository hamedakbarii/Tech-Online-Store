import { ArrowDown, Instagram } from "../Icon";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavbarTop = () => {
  const [ShowContactDetail, setShowContactDetail] = useState(false);

  return (
    <section className="bg-black z-[+31] relative">
      <div className="flex justify-between items-center text-white px-4 py-2 container mx-auto relative">
        <div className="flex items-center justify-between w-full">
          <div
            className="relative flex items-center text-sm border-2 border-white rounded-full p-1 px-4 bg-black"
            onClick={() => {
              setShowContactDetail(!ShowContactDetail);
            }}
          >
            <p className="text-PrimaryGray font-semibold">
              Mon-Thu : <span className="text-white"> 9:00 AM - 5:30 PM</span>
            </p>

            {ShowContactDetail ? (
              <>
                <span
                  key="arrowDropopen"
                  className="ml-3 openAccardion transition-all"
                >
                  <ArrowDown size={10} />
                </span>
              </>
            ) : (
              <>
                <span
                  key="arrowDropclose"
                  className="ml-3 closeAccardion transition-all"
                >
                  <ArrowDown size={10} />
                </span>
              </>
            )}
            {ShowContactDetail ? (
              <>
                <div className="absolute w-full top-full left-0 bg-black p-4 pt-2 pb-6 rounded-[0_0_1rem_1rem] animating">
                  <span className="text-sm font-semibold text-white">
                    Visit our showroom in 1234 Street Adress City Address, 1234
                  </span>
                </div>
              </>
            ) : null}
          </div>

          <span
            className="text-sm text-white font-bold cursor-pointer 
          flex flex-col relative after:w-full after:block after:border-t-2 after:border-t-white 
          after:content-[''] after:absolute after:-bottom-1 hover:after:scale-x-0	 after:transition-all after:origin-left after:scale-x-100"
          >
            <Link to="/contactus">Contact Us</Link>
          </span>

          <div className="xl:flex justify-center items-center gap-2 hidden">
            <span>Call Us: (+98 ) 9377550980</span>
            <div className="flex gap-2">
              <Link
                to={
                  "https://www.instagram.com/hamedakbrii/?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
                }
              >
                <Instagram />
              </Link>

              <Link to={"https://www.linkedin.com/in/hamedakbarii"}>
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavbarTop;
