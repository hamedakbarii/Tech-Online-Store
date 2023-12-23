import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Register from "./Pages/Register";
import Checkout from "./Pages/Checkout";
import AboutUs from "./Pages/AboutUs";
import ProductDetails from "./Pages/ProductDetails";
import ShoppingCartComp from "./components/ShoppingCart/ShoppingCartComp";
import ProductPage from "./components/Products/ProductPage";

let router = [
  { path: "/", element: <Home /> },
  { path: "/product", element: <ProductPage /> },
  { path: "/product/:category/:id", element: <ProductDetails /> },
  { path: "/contactus", element: <ContactUs /> },
  { path: "/register", element: <Register /> },
  { path: "/shoppingcart", element: <ShoppingCartComp /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/aboutus", element: <AboutUs /> },
];

export default router;
