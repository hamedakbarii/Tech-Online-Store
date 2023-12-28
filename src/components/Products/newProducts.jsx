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
      <div className="relative container flex flex-col mx-auto px-2 tablet:px-0">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-semibold">New Products</h2>
          <Link to="/allproducts">
            <h4 className="underline text-[#0156FF]">See All Products</h4>
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
