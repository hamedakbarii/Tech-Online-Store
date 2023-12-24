import React, { useState } from "react";
import { useImmer } from "use-immer";
import FilterItems from "./../FilterItems";
import PaginationProducts from "./PaginationProducts";
import { Link, useLocation } from "react-router-dom";

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
      <div className="flex justify-start items-center gap-2 p-4">
        <Link to={"/"}>Home</Link>
        <span className="text-secondaryBlue text-lg">›</span>
        <span>{thisRoute}</span>
      </div>

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
    </>
  );
};

export default ProductsPage;
