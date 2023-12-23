import React, { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import ProductRouter from "./ProductRouter";
import FilterItems from "./../FilterItems";
import PaginationProducts from "./PaginationProducts";

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
  useEffect(() => {
    console.log([...filter.price].sort((a, b) => a[0] - b[0]));
  }, [filter]);

  return (
    <>
      <ProductRouter />
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
