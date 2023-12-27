import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function UserProfileMenu({
  toggleProfile,
  ActiveUserProfileMenu,
}) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      console.log(e.target);

      if (!e.target) {
        toggleProfile(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        ref={modalRef}
        className="absolute top-full right-0 w-full md:w-60  bg-white p-2 flex flex-col after:block after:absolute after:content-[''] after:right-[10%] md:after:right-[50%] after:p-2 after:bg-white after:rotate-[45deg] after:-top-2 hamed"
      >
        <Link
          className="text-[#000000] font-semibold text-lg p-1 hover:bg-slate-200"
          to="/register"
          onClick={() => {
            toggleProfile(false);
          }}
        >
          Sign In / Sign Up
        </Link>

        <Link
          to={"/FAQ"}
          className="text-[#000000] font-semibold text-lg p-1 hover:bg-slate-200"
          onClick={() => {
            toggleProfile(false);
          }}
        >
          FAQ
        </Link>

        <Link
          to={"/aboutus"}
          className="text-[#000000] font-semibold text-lg p-1 hover:bg-slate-200"
          onClick={() => {
            toggleProfile(false);
          }}
        >
          About Us
        </Link>
      </div>
    </>
  );
}
