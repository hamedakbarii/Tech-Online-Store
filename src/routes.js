import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Register from "./Pages/Register";
import Checkout from "./Pages/Checkout";
import ProductDetails from "./Pages/ProductDetails";
import ShoppingCartComp from "./components/ShoppingCart/ShoppingCartComp";
import ProductsPage from "./components/Products/allProductsPage";
import FAQ from "./components/FAQ";
import AboutUs from "./components/AboutUs/AboutUs";

let router = [
  { path: "/", element: <Home /> },
  { path: "/allproducts", element: <ProductsPage /> },
  { path: "/allproducts/:category/:id", element: <ProductDetails /> },
  { path: "/contactus", element: <ContactUs /> },
  { path: "/register", element: <Register /> },
  { path: "/shoppingcart", element: <ShoppingCartComp /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/FAQ", element: <FAQ /> },
];

export default router;
