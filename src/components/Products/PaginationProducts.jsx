import { products } from "../../utils.js";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useState } from "react";

const PaginationProducts = ({ FiltersShow, ActionFilterHandler }) => {
  function FilterProduct() {
    function LowerCaser(array) {
      return array.map((item) => item.toLowerCase());
    }
    let c = [...ActionFilterHandler.price];
    c = c.sort((a, b) => parseFloat(a[0]) - parseFloat(b[0]));
    let a = products.filter(
      (item) =>
        LowerCaser(item.tags).some(
          (item) =>
            LowerCaser(ActionFilterHandler.category).includes(item) ||
            LowerCaser(ActionFilterHandler.brands).includes(item) ||
            LowerCaser(ActionFilterHandler.filtername).includes(item) ||
            LowerCaser(ActionFilterHandler.color).includes(item)
        ) &&
        item.offprice >= (c[0] ? c[0][0] : 0) &&
        item.offprice <= (c[0] ? c[c.length - 1][1] : +Infinity)
    );
    console.log(a);
    return a;
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  // Calculate indexes for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = FiltersShow
    ? FilterProduct().slice(indexOfFirstItem, indexOfLastItem)
    : products.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-2">
      <h4 className="text-[#94a3b8] p-2 mt-5 text-sm font-normal">
        {`Items ${indexOfFirstItem + 1}-${Math.min(
          indexOfLastItem,
          FiltersShow ? FilterProduct().length : products.length
        )} of ${FiltersShow ? FilterProduct().length : products.length}`}
      </h4>

      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 p-2 md:p-0">
        {currentItems.map((product) => (
          <Link
            key={product.id}
            to={`/allproducts/${product.categoryTitle}/${product.id}`}
            className="transition-all duration-300 hover:bg-gray-200"
          >
            <ProductCard {...product} />
          </Link>
        ))}
      </div>

      {FiltersShow ? (
        <div className="flex justify-center items-center my-6">
          {Array.from({
            length: Math.ceil(FilterProduct().length / itemsPerPage),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === index + 1 ? "bg-gray-300" : "bg-white"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center my-6">
          {Array.from({
            length: Math.ceil(products.length / itemsPerPage),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === index + 1 ? "bg-gray-500" : "bg-gray-100"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PaginationProducts;
