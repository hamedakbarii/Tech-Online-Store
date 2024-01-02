import React from "react";
import { Link } from "react-router-dom";

const ProductSectionBanner = (props) => {
  return (
    <div className="text-white relative zoom-out-container">
      <img
        className="tablet:h-full h-24 object-cover object-center w-full zoom-out-image "
        src={props.src}
        alt="imageProduct"
      />

      <div className="p-2 md:p-0 absolute flex flex-col md:justify-center items-center inset-0">
        <h4 className="text-white text-center text-3xl md:max-w-[7rem] font-bold">
          {props.title}
        </h4>

        <span className="absolute bottom-3 flex flex-col after:w-full after:content-[''] after:block after:absolute after:border-t after:border-t-white after:bottom-0">
          <Link to="/allproducts"> See All Products</Link>
        </span>
      </div>
    </div>
  );
};

export default ProductSectionBanner;
