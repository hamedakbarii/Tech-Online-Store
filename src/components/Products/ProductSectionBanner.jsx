import React from "react";
import { Link } from "react-router-dom";

const ProductSectionBanner = (props) => {
  return (
    <div className="text-white relative">
      <img
        className="tablet:h-full h-[6rem] object-cover object-center w-full"
        src={props.src}
        alt="imageProduct"
      />
      <div className="p-2 absolute flex flex-col tablet:justify-center items-center top-0 left-0 right-0 bottom-0 z-10">
        <h4 className="text-white text-center text-3xl tablet:max-w-[7rem] w-full font-bold">
          {props.title}
        </h4>
        <span className="absolute bottom-3 flex flex-col after:w-full after:content-[''] after:block after:absolute after:border-t after:border-t-white after:bottom-0">
          <Link to="/product"> See All Products</Link>
        </span>
      </div>
    </div>
  );
};

export default ProductSectionBanner;
