import { products } from "../../utils.js";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
const PaginationProducts = ({filter , FiltersShow , ActionFilterHandler}) => {
function FilterProduct(avaiblity){
  function LowerCaser(array){
    return array.map(item=>item.toLowerCase()) ; 
  }
  let c = [...ActionFilterHandler.price] ;
  c = c.sort((a,b)=>parseFloat(a[0])-parseFloat(b[0])) ; 
  let a = products.filter(item=>
    LowerCaser(item.tags).some(item=>
      LowerCaser(ActionFilterHandler.category).includes(item) || 
      LowerCaser(ActionFilterHandler.brands).includes(item) ||
      LowerCaser(ActionFilterHandler.filtername).includes(item) ||
      LowerCaser(ActionFilterHandler.color).includes(item)
      //c.sort((a , b)=>parseFloat(a[0]) - parseFloat(b[0]))
      ) && item.offprice >= (c[0] ? c[0][0] : 0) && item.offprice <= (c[0] ? c[c.length-1][1] : +Infinity) ) ; 
      console.log(a) ; 
      return a ; 
}
  return (
    <div className="p-2">
      <h4 className="text-[#94a3b8] p-2 mt-5 text-sm font-normal">
        Items 1-35 of 61
      </h4>
      <div className="w-full grid grid-cols-2 gap-2 p-2">
        {
          FiltersShow ? 
          <>
            {
              FilterProduct(true).map((product) => (
                <><Link key={product.id} to={`/product/${product.categoryTitle}/${product.id}`}>
                <ProductCard  {...product} />
                </Link></>
              ))
            }
          </> :
          <>
            {
                products.map((product)=>
                <><Link key={product.id} to={`/product/${product.categoryTitle}/${product.id}`}>
                <ProductCard  {...product} />
                </Link></>
                )
              }
          </>
        }
      </div>
    </div>
  );
};

export default PaginationProducts;
