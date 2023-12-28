import ProductsContainer from "./ProductsContainer";
import ProductSectionBanner from "./ProductSectionBanner";
import SwiperProduct from "./SwiperProduct";
import { MsiProductsInfo } from "../../utils";
import { useEffect, useState } from "react";

const ProductItem = () => {
  const [slidesPerView, setSlidesPerView] = useState(1.5);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;

      if (viewportWidth >= 768) {
        setSlidesPerView(4);
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
        src={"assets/MsiLaptops/MsiLaptopBanner.png"}
        title={"Msi Laptops"}
      />

      <SwiperProduct
        ItemList={MsiProductsInfo}
        slidesPerView={slidesPerView}
        spaceBetween={30}
      />
    </ProductsContainer>
  );
};

export default ProductItem;
