import ProductsContainer from "./ProductsContainer";
import ProductSectionBanner from "./ProductSectionBanner";
import SwiperProduct from "./SwiperProduct";
import { MsiProductsInfo } from "../../utils";

const ProductItem = () => {
  return (
    <ProductsContainer>
      <ProductSectionBanner
        src={"assets/MsiLaptops/MsiLaptopBanner.png"}
        title={"Msi Laptops"}
      />

      <div>
        {
          <SwiperProduct
            ItemList={MsiProductsInfo}
            slidesPerView={1.5}
            spaceBetween={30}
          />
        }
      </div>
    </ProductsContainer>
  );
};

export default ProductItem;
