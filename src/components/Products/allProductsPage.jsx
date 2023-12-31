import React, { useState } from "react";
import { useImmer } from "use-immer";
import FilterItems from "../FilterItems";
import PaginationProducts from "./PaginationProducts";
import { Link, useLocation } from "react-router-dom";
import ProductLogo from "./ProductLogo";

const ProductsPage = () => {
  const [filter, setFilter] = useImmer({
    category: [],
    price: [],
    color: [],
    filtername: [],
    brands: [],
    filterprice: [0, 0],
  });

  const [FiltersShow, setFilterShow] = useState(false);
  const [ActionFilterHandler, setActionFilterHandler] = useState();

  const location = useLocation();
  const thisRoute = location.pathname.replace("/allproducts", "All Products");

  return (
    <>
      <img
        src="/assets/allproductsBanner.svg"
        alt="allproductsBanner"
        className="hidden md:block w-full"
      />
      <div className="flex justify-start items-center gap-2 p-4">
        <Link to={"/"}>Home</Link>
        <span className="text-secondaryBlue text-lg">›</span>
        <Link to={"/allproducts"}>{thisRoute}</Link>
      </div>

      <span className="text-xl font-semibold ml-3">MSI PS Series (20)</span>

      <div className="flex flex-col md:flex-row">
        <FilterItems
          filter={filter}
          setFilter={setFilter}
          setFilterShow={setFilterShow}
          FiltersShow={FiltersShow}
          ActionFilterHandler={ActionFilterHandler}
          setActionFilterHandler={setActionFilterHandler}
        />

        <PaginationProducts
          filter={filter}
          FiltersShow={FiltersShow}
          ActionFilterHandler={ActionFilterHandler}
        />
      </div>
    </>
  );
};

export default ProductsPage;
