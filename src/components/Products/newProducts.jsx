import { Link } from "react-router-dom";
import SwiperProduct from "./SwiperProduct";
import { newProducts } from "../../utils";
import { useEffect, useState } from "react";

let Products = () => {
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
    <>
      <div className="relative container md:max-w-[95%] flex flex-col mx-auto px-2 md:p-0">
        <div className="flex justify-between items-center p-4">
          <span className="text-xl font-bold">New Products</span>
          <Link
            to="/allproducts"
            className="underline border-b-[#0156FF] text-[#0156FF] transition-all duration-300 hover:opacity-70"
          >
            See All Products
          </Link>
        </div>

        <SwiperProduct
          ItemList={newProducts}
          slidesPerView={slidesPerView}
          spaceBetween={10}
        />
      </div>
    </>
  );
};
export default Products;
