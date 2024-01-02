import React from "react";
import { ArrowUp } from "../Icon";
import OrderSummeryProduct from "./OrderSummeryProduct";

const OrderSummery = () => {
  return (
    <div className="container mx-auto bg-[#F5F9FF] p-2 w-11/12 md:w-2/4 md:mx-10">
      <h3 className="font-semibold border-b border-gray-300 py-4">
        Order Summary
      </h3>

      <div className="flex justify-between items-center">
        <span>
          <span className="text-blue-300">2</span> items in cart
        </span>
        <ArrowUp />
      </div>

      <OrderSummeryProduct src="./assets/ShoppingCart/1.png" />
      <OrderSummeryProduct src="./assets/ShoppingCart/2.png" />
    </div>
  );
};

export default OrderSummery;
