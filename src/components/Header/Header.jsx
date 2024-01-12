import React, { useContext, useState } from "react";
// import Logo from "../Logo";
import NavbarTop from "./NavbarTop";
import {
  ArrowDown,
  CloseIcon,
  Magnfier,
  UserIcon,
  ShopingCart,
  Icon,
} from "../Icon";

import HamburgerMenue from "./HamburgerMenu";
import UserProfileMenu from "./UserProfileMenu";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

export default function Header() {
  // let navUl = [
  //   "Laptops",
  //   "Desktop PCs",
  //   "Networking devices",
  //   "Printers & Scanners",
  //   "Pc parts",
  //   "All Other Products",
  //   "Repairs",
  // ];

  const [ActiveHamburger, setActiveHamburger] = useState(false);
  const [ActiveUserProfileMenu, setActiveUserProfileMenu] = useState(false);

  const { cartItems } = useContext(CartContext);

  return (
    <>
      <NavbarTop />

      <nav className="w-full block mx-auto px-4 py-2 md:py-6 bg-[#0156FF] sticky top-0 z-20">
        <div className="flex items-center justify-between container md:max-w-full mx-auto px-2 gap-4 w-full">
          <div className="flex items-center gap-2">
            <HamburgerMenue HandleHamburgerActivation={setActiveHamburger} />

            {ActiveHamburger ? (
              <div className="animate-OpenModal absolute top-0 left-0 w-full bg-white px-5 py-2 ">
                <div className="flex flex-col ">
                  <div className="flex items-center justify-between ">
                    <span>
                      <Icon color={"#0156FF"} />
                    </span>
                    <span
                      onClick={() => {
                        setActiveHamburger(false);
                      }}
                    >
                      <CloseIcon />
                    </span>
                  </div>

                  <span className="border-b-2 border-gray-400 mt-4"></span>

                  <div className="flex flex-col mt-4 gap-6">
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-base">Laptops</p>
                      <span className="-rotate-[90deg]">
                        <ArrowDown color={"black"} />
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-lg font-base">Desktop PCs</p>
                      <span className="-rotate-[90deg]">
                        <ArrowDown color={"black"} />
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-base">Networking Devices</p>
                      <span className="-rotate-[90deg]">
                        <ArrowDown color={"black"} />
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-base">Printers & Scanners</p>
                      <span className="-rotate-[90deg]">
                        <ArrowDown color={"black"} />
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-base">PC Parts</p>
                      <span className="-rotate-[90deg]">
                        <ArrowDown color={"black"} />
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-base">All Other Products</p>
                      <span className="-rotate-[90deg]">
                        <ArrowDown color={"black"} />
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-base">Repairs</p>
                      <span className="-rotate-[90deg]">
                        <ArrowDown color={"black"} />
                      </span>
                    </div>
                  </div>

                  <button className="text-secondaryBlue border-2 border-secondaryBlue w-max py-1 px-4 mt-6 mb-4 text-lg font-semibold rounded-full transation-all duration-[.2s] bg-white hover:bg-secondaryBlue hover:text-white">
                    Our Deals
                  </button>
                </div>
              </div>
            ) : null}
          </div>

          <div className="flex items-center w-full bg-white p-2 py-1 rounded-full">
            <Magnfier />

            <input
              className="w-full p-2 focus:outline-0 focus:border-0 bg-transparent"
              type="search"
              placeholder="Search Here"
            />
          </div>

          <div className="flex items-center gap-2">
            <Link to="/shoppingcart" className="relative">
              <ShopingCart />
              {cartItems.length > 0 && (
                <span className="absolute -top-4 -right-2 w-5 h-5 bg-white text-[#0156FF] flex justify-center items-center rounded-full text-xs">
                  {cartItems.length}
                </span>
              )}
            </Link>

            <UserIcon
              HandleUserDataShow={setActiveUserProfileMenu}
              UserDataShow={ActiveUserProfileMenu}
            />

            {ActiveUserProfileMenu ? (
              <UserProfileMenu
                toggleProfile={setActiveUserProfileMenu}
                ActiveUserProfileMenu={ActiveUserProfileMenu}
              />
            ) : null}
          </div>
        </div>
      </nav>
    </>
  );
}
