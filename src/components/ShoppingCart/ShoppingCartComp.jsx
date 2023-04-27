import React from "react";
import ShoppingCartRouter from "./ShoppingCartRouter";
import ShoppingCartSummerySection from "./ShoppingCartSummerySection";
import CartShoppingCart from "./CartShoppingCart";
import Ourservices from '../OurServices' ;
import { Fragment } from "react";
const ShoppingCartComp = () => {
  return (
    <Fragment>
      <div className="container mx-auto px-2">
      <ShoppingCartRouter />
      <h1 className="mb-4 text-2xl font-semibold">Shopping Cart</h1>
      <ShoppingCartSummerySection />
      <CartShoppingCart src="./assets/ShoppingCart/1.png" />
      <CartShoppingCart src="./assets/ShoppingCart/2.png" />
      <span className="w-full block my-4 border-t-2 border-t-gray-200"></span>
      </div>
      <Ourservices />
    </Fragment>
  );
};

export default ShoppingCartComp;
