import React, { useContext } from "react";
import ShoppingCartSummerySection from "./ShoppingCartSummerySection";
import CartShoppingCart from "./CartShoppingCart";
import Ourservices from "../OurServices";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

const ShoppingCartComp = () => {
  const location = useLocation();
  const thisRoute = location.pathname.replace("/", "");

  const { clearCart } = useContext(CartContext);

  const clearCartHandler = () => {
    clearCart();
  };

  return (
    <>
      <div className="container mx-auto md:max-w-full px-2">
        <div className="flex justify-start items-center gap-2 my-2">
          <Link to={"/"}>Home</Link>
          <span className="text-secondaryBlue text-lg">›</span>
          <Link to={"/shoppingcart"}>{thisRoute}</Link>
        </div>

        <h1 className="mb-4 text-2xl font-semibold">Shopping Cart</h1>

        <div className="flex flex-col md:flex-row md:w-full md:gap-10">
          <div className="flex flex-col md:justify-start md:items-center gap-6 md:w-2/3 md:ml-4">
            <CartShoppingCart src="./assets/ShoppingCart/1.png" />
            <span className="w-full my-4 border-t-2 border-t-gray-200 hidden md:block"></span>
            <CartShoppingCart src="./assets/ShoppingCart/2.png" />
            <span className="w-full my-4 border-t-2 border-t-gray-200 hidden md:block"></span>

            <button className="hidden md:block bg-black text-white transition-all duration-300 hover:bg-white hover:text-black border-2 border-gray-500 rounded-2xl p-2 font-semibold w-4/5">
              Continue Shopping
            </button>
            <button
              className="hidden md:block bg-black text-white transition-all duration-300 hover:bg-white hover:text-black border-2 border-gray-500 rounded-2xl p-2 font-semibold w-4/5"
              onClick={clearCartHandler}
            >
              Clear Shopping Cart
            </button>
            <button className="hidden md:block bg-black text-white transition-all duration-300 hover:bg-white hover:text-black border-2 border-gray-500 rounded-2xl p-2 font-semibold w-4/5">
              Update Shopping Cart
            </button>
          </div>

          <div className="md:w-full md:mr-4">
            <ShoppingCartSummerySection />
          </div>
        </div>

        <span className="w-full block my-4 border-t-2 border-t-gray-200 md:hidden"></span>
      </div>

      <Ourservices />
    </>
  );
};

export default ShoppingCartComp;
