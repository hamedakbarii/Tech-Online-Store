import React from "react";
import Banner from "../components/Banner";
import CustomBuildsSection from "../components/Products/CustomBuildsSection";
import Products from "../components/Products/newProducts";
import Hero from "../components/Hero";
import MsiProductSection from "../components/Products/MsiProductSection";
import Desktop from "../components/Products/Desktop";
import GamingMonitor from "../components/Products/GamingMonitor";
import ProductLogo from "../components/Products/ProductLogo";
import UserFeedBack from "../components/UserFeedBack";
import OurServices from "../components/OurServices";

const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
      <Banner />
      <CustomBuildsSection />
      <MsiProductSection />
      <Desktop />
      <GamingMonitor />
      <ProductLogo />
      <UserFeedBack />
      <OurServices />
    </div>
  );
};

export default Home;
