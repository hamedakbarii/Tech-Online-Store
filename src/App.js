import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import router from "./routes";
import { useRoutes } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";

export default function App() {
  let routes = useRoutes(router);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <Header />

      {routes}

      <Footer />

      {showScrollButton && (
        <div
          className="fixed w-10 h-10 rounded-full right-7 bottom-7 bg-[#0156FF] z-10 flex justify-center items-center cursor-pointer transition-all duration-300 hover:opacity-70"
          onClick={scrollToTop}
        >
          <IoIosArrowUp className="text-white text-2xl" />
        </div>
      )}
    </div>
  );
}
