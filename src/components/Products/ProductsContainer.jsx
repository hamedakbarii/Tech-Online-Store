import React from "react";

const ProductsContainer = ({ children }) => {
  return (
    <div className="container md:max-w-[95%] mx-auto flex tablet:flex-row flex-col mt-4 gap-3">
      {children}
    </div>
  );
};

export default ProductsContainer;
