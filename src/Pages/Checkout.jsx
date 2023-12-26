import React from "react";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import OrderSummery from "../components/Checkout/OrderSummery";
import OurServices from "../components/OurServices";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div>
      <div className="flex justify-start items-center gap-2 p-4">
        <Link to={"/"}>Home</Link>
        <span className="text-secondaryBlue text-lg">›</span>
        <Link to={"/shoppingcart"}>Shopping Cart</Link>
        <span className="text-secondaryBlue text-lg">›</span>
        <span>Checkout Process</span>
      </div>

      <h1 className="mt-1 text-2xl font-semibold p-2">Checkout</h1>
      <h3 className="border-b my-2 font-semibold p-2">Shipping Address</h3>
      <CheckoutForm />
      <OrderSummery />
      <OurServices />
    </div>
  );
};

export default Checkout;
