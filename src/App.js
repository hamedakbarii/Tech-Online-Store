import React, { Fragment, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import router from "./routes";
import { useRoutes } from "react-router-dom";
import { createContext} from "react";

export const ProductToBuy = createContext(null) ; 
export default function App() {
  let routes = useRoutes(router);
  const [ProductOnFocus , setProductOnFocus] = useState(null) ; 
  const storing = [ProductOnFocus , setProductOnFocus] ; 
  return (
    <ProductToBuy.Provider value={storing}>
      <Fragment>
        <Header />

        {routes}

        <Footer />
      </Fragment>
    </ProductToBuy.Provider>
  );
}
