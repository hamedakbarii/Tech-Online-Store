import ProductsContainer from "./ProductsContainer";
import ProductSectionBanner from "./ProductSectionBanner";
import SwiperProduct from "./SwiperProduct";
import { gamingMonitorProducts } from "./../../utils";
import { useEffect, useState } from "react";

let GamingMonitor = () => {
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
        src={"./assets/GamingMonitor/GamingMonitorBanner.png"}
        title={"Gaming Monitor"}
      />

      <SwiperProduct
        ItemList={gamingMonitorProducts}
        slidesPerView={slidesPerView}
        spaceBetween={50}
      />
    </ProductsContainer>
  );
};
export default GamingMonitor;
