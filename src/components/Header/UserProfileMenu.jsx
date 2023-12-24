import { Link } from "react-router-dom";

export default function UserProfileMenu({ toggleProfile }) {
  return (
    <>
      <div className="absolute top-[100%] right-0 w-full bg-white px-5 py-2 flex flex-col after:block after:absolute after:content-[''] after:right-8 after:p-2 after:bg-white after:rotate-[45deg] after:-top-2">
        <h3 className="text-[#000000] font-semibold text-lg m-2">
          <Link
            to="/register"
            onClick={() => {
              toggleProfile(false);
            }}
          >
            Sign In / Sign Up
          </Link>
        </h3>

        <Link
          to={"/FAQ"}
          className="text-[#000000] font-semibold text-lg m-2"
          onClick={() => {
            toggleProfile(false);
          }}
        >
          FAQ
        </Link>

        <Link
          to={"/aboutus"}
          className="text-[#000000] font-semibold text-lg m-2"
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
