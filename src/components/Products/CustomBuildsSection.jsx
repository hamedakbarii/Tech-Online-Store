import React, { useEffect, useState } from "react";
import SwiperProduct from "./SwiperProduct";
import ProductsContainer from "./ProductsContainer";
import ProductSectionBanner from "./ProductSectionBanner";
import { customBuildsProducts } from "./../../utils";

const ProductSection = () => {
  const [slidesPerView, setSlidesPerView] = useState(1.5);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;

      if (viewportWidth >= 768) {
        setSlidesPerView(4.5);
      } else {
        setSlidesPerView(1.5);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ProductsContainer>
      <ProductSectionBanner
        src={"assets/CustomBuilds/image30.png"}
        title={"Custom Builds"}
      />

      <SwiperProduct
        ItemList={customBuildsProducts}
        slidesPerView={slidesPerView}
        spaceBetween={30}
      />
    </ProductsContainer>
  );
};

export default ProductSection;
