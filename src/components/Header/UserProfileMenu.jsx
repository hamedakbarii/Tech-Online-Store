import { Link } from "react-router-dom";

export default function UserProfileMenu({ toggleProfile }) {
  return (
    <>
      <div className="absolute top-full right-0 w-full md:w-60 bg-white shadow-lg p-2 flex flex-col after:block after:absolute after:content-[''] after:right-[10%] md:after:right-[12%] after:p-2 after:bg-white after:rotate-[45deg] after:-top-2">
        <Link
          className="text-[#000000] font-semibold text-lg p-1 transition-all duration-300 hover:bg-slate-200"
          to="/register"
          onClick={() => {
            toggleProfile(false);
          }}
        >
          Sign In / Sign Up
        </Link>

        <Link
          to={"/FAQ"}
          className="text-[#000000] font-semibold text-lg p-1 transition-all duration-300 hover:bg-slate-200"
          onClick={() => {
            toggleProfile(false);
          }}
        >
          FAQ
        </Link>

        <Link
          to={"/aboutus"}
          className="text-[#000000] font-semibold text-lg p-1 transition-all duration-300 hover:bg-slate-200"
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
