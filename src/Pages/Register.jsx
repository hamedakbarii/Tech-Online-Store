import React, { useState } from "react";
import OurServices from "../components/OurServices";
import { Link } from "react-router-dom";

const Register = () => {
  const [isNameRequired, setIsNameRequired] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleNameChange = (event) => {
    setIsNameRequired(event.target.value === "");
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setIsEmailValid(
      emailValue === "" ? false : /^\S+@\S+\.\S+$/.test(emailValue)
    );
  };

  return (
    <div>
      <div className="flex justify-start items-center gap-2 p-4">
        <Link to={"/"}>Home</Link>
        <span className="text-[#0156FF]">›</span>
        <span>Customer Login</span>
      </div>

      <h3 className="p-4 font-semibold text-2xl">Customer Login</h3>

      <div className="flex flex-col md:flex-row justify-start items-start w-full h-full gap-8 p-4">
        <section className="p-6 bg-[#F5F7FF] w-full">
          <h4 className="font-bold">Registered Customers</h4>
          <h6 className="mt-1 font-normal">
            If you have an account, sign in with your email address.
          </h6>

          <form className="flex flex-col w-full mt-4 gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="Name">
                Your Name{" "}
                {isNameRequired ? <span className="text-red-500">*</span> : ""}
              </label>
              <input
                className="border-2 p-2 m-auto w-full rounded-lg"
                type="text"
                name="Name"
                id="Name"
                placeholder="Your Name"
                required={isNameRequired}
                onChange={handleNameChange}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email">
                Your Email{" "}
                {isEmailValid ? "" : <span className="text-red-500">*</span>}
              </label>
              <input
                className="border-2 p-2 m-auto w-full rounded-lg"
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
                pattern="^\S+@\S+\.\S+$"
                onChange={handleEmailChange}
              />
            </div>
            <div className="flex justify-between md:justify-center items-center py-4 md:gap-10">
              <input
                type="submit"
                value={"Submit"}
                className="text-white border-2 self-start border-[#0156FF] cursor-pointer bg-[#0156FF] px-10 py-2 font-semibold flex rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF]"
              />
              <a href="forget password" className="text-blue-500">
                Forgot Your Password?
              </a>
            </div>
          </form>
        </section>

        <section className="p-6 bg-[#F5F7FF] w-full">
          <h4 className="font-bold py-2">New Customer?</h4>
          <h6 className="mt-1 font-[400]">
            Creating an account has many benefits:
          </h6>
          <ul className="mt-3 flex flex-col gap-2">
            <li>• Check out faster </li>
            <li>• Keep more than one address</li>
            <li>• Track orders and more</li>
          </ul>
          <button className="mt-4 text-white border-2 self-start border-[#0156FF] cursor-pointer bg-[#0156FF] px-10 py-2 font-semibold flex rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF]">
            Create An Account
          </button>
        </section>
      </div>

      <OurServices />
    </div>
  );
};

export default Register;
