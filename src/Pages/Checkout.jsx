import React from "react";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import OrderSummery from "../components/Checkout/OrderSummery";
import OurServices from "../components/OurServices";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div>
      <div className="md:w-[95%] md:mx-auto">
        <div className="flex justify-start items-center gap-2 p-4">
          <Link to={"/"}>Home</Link>
          <span className="text-secondaryBlue text-lg">›</span>
          <Link to={"/shoppingcart"}>Shopping Cart</Link>
          <span className="text-secondaryBlue text-lg">›</span>
          <span>Checkout Process</span>
        </div>

        <h1 className="my-1 text-2xl font-semibold p-2">Checkout</h1>

        <Link to={"/register"}>
          <button className="hidden md:block bg-[#0156FF] text-white font-semibold transition-all duration-300 hover:bg-white hover:text-[#0156FF] border-2 border-[#0156FF] py-2 px-12 ml-2 rounded-3xl">
            Sign In
          </button>
        </Link>

        <h3 className="border-b my-2 font-semibold p-2">Shipping Address</h3>

        <div className="flex flex-col md:flex-row md:justify-center md:items-start">
          <CheckoutForm />
          <OrderSummery />
        </div>
      </div>

      <OurServices />
    </div>
  );
};

export default Checkout;
