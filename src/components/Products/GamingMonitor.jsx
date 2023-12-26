import ProductsContainer from "./ProductsContainer";
import ProductSectionBanner from "./ProductSectionBanner";
import SwiperProduct from "./SwiperProduct";
import { gamingMonitorProducts } from "./../../utils";

let GamingMonitor = () => {
  return (
    <ProductsContainer>
      <ProductSectionBanner
        src={"./assets/GamingMonitor/GamingMonitorBanner.png"}
        title={"Gaming Monitor"}
      />

      <div>
        {
          <SwiperProduct
            ItemList={gamingMonitorProducts}
            slidesPerView={1.5}
            spaceBetween={50}
          />
        }
      </div>
    </ProductsContainer>
  );
};
export default GamingMonitor;
