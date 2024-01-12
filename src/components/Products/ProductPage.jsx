import { useState } from "react";
import { IntelIconSvg, LongArrow, PayPalIconSvg, ZipIcon } from "./../Icon";
import OurServices from "../OurServices";
import { Link, useLocation } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { useCart } from "../../context/cartContext";

let AboutProduct = () => {
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  return (
    <div className="flex flex-col px-4 pt-4 animate-Accardion origin-top overflow-hidden">
      <p className="font-[400] mt-2">
        MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM,
        512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years
        Warranty Gaming Desktop
      </p>

      <div className="flex items-center gap-4 px-4 mt-4">
        <div
          className={`p-[.05rem] border-2 cursor-pointer ${
            isActive1 ? "border-secondaryBlue" : ""
          } rounded-full flex items-center justify-center`}
          onClick={() => {
            setIsActive1(true);
            setIsActive2(false);
            setIsActive3(false);
          }}
        >
          <div className="w-10 h-10 bg-[#4B4D4F] rounded-full"></div>
        </div>

        <div
          className={`p-[.05rem] border-2 cursor-pointer ${
            isActive2 ? "border-secondaryBlue" : ""
          } rounded-full flex items-center justify-center`}
          onClick={() => {
            setIsActive1(false);
            setIsActive2(true);
            setIsActive3(false);
          }}
        >
          <div className="w-10 h-10 bg-[#EAE8EB] rounded-full"></div>
        </div>

        <div
          className={`p-[.05rem] border-2 cursor-pointer ${
            isActive3 ? "border-secondaryBlue" : ""
          } rounded-full flex items-center justify-center`}
          onClick={() => {
            setIsActive1(false);
            setIsActive2(false);
            setIsActive3(true);
          }}
        >
          <div className="w-10 h-10 bg-[#F2E9DC] rounded-full"></div>
        </div>
      </div>
      <div className="px-4 mt-2 flex items-center justify-between">
        <p className="text-lg font-semibold flex flex-col justify-center items-center tablet:flex-row">
          Have a Question?
          <Link
            to={"/contactus"}
            className="font-[500] text-secondaryBlue underline tablet:ml-2"
          >
            Contanct Us
          </Link>
        </p>
        <span>SKU D5515AI</span>
      </div>
    </div>
  );
};

let ProductDetails = () => {
  return (
    <div className="px-4 flex flex-col gap-2 mt-4 animate-Accardion origin-top overflow-hidden">
      <p>• Intel Core i7-10700F</p>
      <p>• Intel H410</p>
      <p>• NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6 </p>
      <p>• SO-DIMM 16GB (16GB x 1) DDR4 2666MHz </p>
      <p>• 2 total slots (64GB Max) </p>
      <p>• 512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM </p>
      <p>• Gaming Keyboard GK30 + Gaming Mouse GM11 </p>
      <p>• 3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0) </p>
      <p>• Intel WGI219Vethernet (10/100/1000M) </p>
      <p>• AX200 (WIFI 6)+BT5.1 </p>
      <p>• PSU 330W </p>
      <p>• Fan Cooler </p>
    </div>
  );
};

let ProductSpec = () => {
  return (
    <div className="px-4 mt-4 w-full animate-Accardion origin-top overflow-hidden">
      <table className="w-full">
        <tr>
          <td>CPU</td>
          <td>Intel I5</td>
        </tr>
        <tr>
          <td>Graphic</td>
          <td>Geforce</td>
        </tr>
      </table>
    </div>
  );
};

const ProductPage = ({ data }) => {
  const [productCount, setProductCount] = useState(1);
  const [productSec, setProductSec] = useState("About Product");
  const [ProductInformationChanger, setProductInformationChanger] = useState([
    {
      title: "About Product",
      active: true,
      index: 0,
    },
    {
      title: "Details",
      active: false,
      index: 1,
    },
    {
      title: "Specs",
      active: false,
      index: 2,
    },
  ]);
  const [notification, setNotification] = useState(null);

  const { addToCart } = useCart();

  let ProductInformationFunctionHandler = (index, item) => {
    let temp = [
      {
        title: "About Product",
        active: false,
        index: 0,
      },
      {
        title: "Details",
        active: false,
        index: 1,
      },
      {
        title: "Specs",
        active: false,
        index: 2,
      },
    ];
    temp[index].active = true;
    setProductInformationChanger([...temp]);
    setProductSec(item);
  };

  const location = useLocation();
  const thisRoute = location.pathname;
  const brandWithProductNumber = thisRoute.replace("/allproducts/", "");
  const routeParts = brandWithProductNumber.split("/");

  const addToCartHandler = () => {
    const updatedProduct = {
      ...data[0],
      quantity: productCount,
    };

    setNotification("product successfully added to the shopping cart");

    setTimeout(() => {
      setNotification(null);
    }, 3000);

    addToCart(updatedProduct);
    console.log("Updated product sent to cart:", updatedProduct);
  };

  return (
    <div className="relative w-full h-full">
      <div className="flex flex-col w-full mx-auto mt-4">
        <div className="flex justify-start items-center gap-2 p-4">
          <Link to={"/"}>Home</Link>
          <span className="text-[#0156FF]">›</span>
          <Link to={"/allproducts"}>All Products</Link>
          <span className="text-[#0156FF]">›</span>
          <span>{routeParts[0]}</span>
          <span className="text-[#0156FF]">›</span>
          <span>{routeParts[1]}</span>
        </div>

        <div className="relative flex flex-col items-center justify-center">
          <img
            src={`/${data[0].img}`}
            className="object-cover object-center "
          />

          <div className="absolute top-2 left-4 flex flex-col items-center gap-2">
            <div className="cursor-pointer border-2 w-9 h-9 rounded-full flex justify-center items-center border-red-500 transition-all duration-300 hover:opacity-70">
              <FaHeart className={`text-3xl p-1 text-red-500`} />
            </div>

            <div className="cursor-pointer border-2 w-9 h-9 rounded-full flex justify-center items-center border-green-500 transition-all duration-300 hover:opacity-70">
              <IoStatsChart className={`text-3xl text-green-500 p-1`} />
            </div>

            <div
              className="cursor-pointer border-2 w-9 h-9 rounded-full flex justify-center items-center  border-orange-900 transition-all duration-300 hover:opacity-70"
              onClick={() =>
                (window.location.href = "mailto:hamedakbariwork@gmail.com")
              }
            >
              <GoMail className={`text-3xl p-1 text-orange-900`} />
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <ZipIcon />
            <a className="max-w-[12rem] text-sm leading-5 flex items-center before:h-7 before:mr-2 before:block before:content-[''] before:border before:rounded-full before:border-secondaryBlue ">
              <span>
                own it now, up to 6 months interest free <span>learn more</span>
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <div className="flex items-center">
            {ProductInformationChanger.map((item, index) => (
              <div key={index}>
                {item.active ? (
                  <div key={index} className="block cursor-pointer">
                    <span
                      activate--data={item.active ? "active" : "deactive"}
                      onClick={() => {
                        ProductInformationFunctionHandler(index, item.title);
                      }}
                      className="pb-2 px-2 translate-y-0 text-black font-[550] flex flex-col after:border-b-2 after:border-b-black after:block after:content-[''] transation-all duration-[.5s]"
                    >
                      {item.title}
                    </span>
                  </div>
                ) : (
                  <div key={index} className="block cursor-pointer">
                    <span
                      activate--data={item.active ? "active" : "deactive"}
                      onClick={() => {
                        ProductInformationFunctionHandler(index, item.title);
                      }}
                      className="pb-2 px-2 translate-y-2 text-gray-500 font-[550] flex flex-col after:border-b-2 after:border-b-transparent after:block after:content-[''] transation-all duration-[.5s]"
                    >
                      {item.title}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="block px-4 mt-2">
            <h3 className="text-3xl font-bold mt-2">MSI MPG Trident 3</h3>
            <p className="text-secondaryBlue font-normal mt-2">
              Be the first to review this product
            </p>
          </div>

          {productSec === "About Product" ? (
            <AboutProduct />
          ) : productSec === "Details" ? (
            <ProductDetails />
          ) : productSec === "Specs" ? (
            <ProductSpec />
          ) : null}

          <div className="px-4 flex flex-col gap-2">
            <div className="flex items-center justify-between gap-4 mt-4">
              <div className="flex tablet:flex-row flex-col w-full gap-2">
                <button
                  className="h-12 px-6 w-full flex items-center justify-center bg-secondaryBlue text-white border-2 border-transparent transation-all duration-[.2s] hover:text-secondaryBlue hover:bg-transparent hover:border-secondaryBlue rounded-full text-lg font-semibold"
                  onClick={addToCartHandler}
                >
                  Add to Cart
                </button>

                <button className="h-12 px-6 w-full flex items-center justify-center bg-[#FFB800] text-white border-2 border-transparent transation-all duration-[.2s] hover:text-secondaryBlue hover:bg-transparent hover:border-[#FFB800] rounded-full text-lg font-semibold">
                  <PayPalIconSvg />
                </button>
              </div>
            </div>

            <div className="w-full flex justify-center text-lg font-semibold py-2">
              On Sale from <span className="font-semibold">$6,000.43</span>
            </div>
          </div>
        </div>

        <div className="relative grid grid-cols-1 grid-rows-[1.5fr_1fr] pb-6">
          <span className="gradientBlack w-full h-full top-0 left-0 absolute z-10"></span>

          <div className="clip-path-inset0 relative">
            <img
              className="w-full h-full fixed top-0 left-0 object-cover"
              src="/assets/Cpu/intelCpu.png"
            />
          </div>

          <div className="px-4 z-[10]">
            <h3 className="max-w-[14rem] text-white font-semibold text-4xl">
              Outplay the Competittion
            </h3>

            <div className="block text-white">
              <p className="mt-4">
                Experience a 40% boost in computing from last generation. MSI
                Desktop equips the 10th Gen. Intel® Core™ i7 processor with the
                upmost computing power to bring you an unparalleled gaming
                experience.
              </p>

              <p className="mt-4">
                *Performance compared to i7-9700. Specs varies by model.
              </p>
            </div>
          </div>
        </div>

        {/* product support */}
        <div
          className="h-72 md:h-80 bg-[#F5F7FF] bg-cover md:bg-contain"
          style={{
            background: 'url("/assets/womanBehindLaptop.svg")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
          }}
        >
          <div className="flex flex-col justify-center items-start gap-4 h-full pl-5 md:pl-20">
            <div className="flex items-center justify-between w-[80%] max-w-[15rem] border border-gray-300 rounded p-2 transition-all duration-300 hover:opacity-50">
              <span className="font-semibold text-sm">Product Support</span>
              <LongArrow />
            </div>

            <Link
              to={"/faq"}
              className="flex items-center justify-between w-[80%] max-w-[15rem] border border-gray-300 rounded p-2 transition-all duration-300 hover:opacity-50"
            >
              <span className="font-semibold text-sm">FAQ</span>
              <LongArrow />
            </Link>

            <div className="flex items-center justify-between w-[80%] max-w-[15rem] border border-gray-300 rounded p-2 transition-all duration-300 hover:opacity-50">
              <span className="font-semibold text-sm">Our Buyer Guide</span>
              <LongArrow />
            </div>
          </div>
        </div>

        {/* features */}
        <div className="flex flex-col items-center justify-center gap-8 p-6 lineargradiant text-white md:grid md:grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-4 md:col-span-2 md:row-start-1 text-center">
            <h2 className="text-3xl font-semibold">Features</h2>
            <p className="md:w-1/3 md:text-center">
              The MPG series brings out the best in gamers by allowing full
              expression in color with advanced RGB lighting control and
              synchronization.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <div className="w-20 h-20 flex items-center justify-center bg-black rounded-full">
              <IntelIconSvg />
            </div>

            <p className="md:w-1/3 text-center">
              <span className="font-semibold">Intel® Core™ i7</span> processor
              with the upmost computing power to bring you an unparalleled
              gaming experience.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <div className="w-20 h-20 flex items-center justify-center bg-black rounded-full">
              <img
                src="/assets/Features/featuresIcon1.svg"
                alt="featuresIcon1"
              />
            </div>

            <p className="md:w-1/3 text-center">
              The new <span className="font-semibold">GeForce® RTX SUPER™</span>{" "}
              Series has more cores and higher clocks for superfast performance
              compared to previous-gen GPUs.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <div className="w-20 h-20 flex items-center justify-center bg-black rounded-full">
              <img
                src="/assets/Features/featuresIcon2.svg"
                alt="featuresIcon2"
              />
            </div>

            <p className="md:w-1/3 text-center">
              <span className="font-semibold">Intel® Core™ i7</span> processor
              with the upmost computing power to bring you an unparalleled
              gaming experience.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <div className="w-20 h-20 flex items-center justify-center bg-black rounded-full">
              <img
                src="/assets/Features/featuresIcon3.svg"
                alt="featuresIcon3"
              />
            </div>

            <p className="md:w-1/3 text-center">
              The new <span className="font-semibold">GeForce® RTX SUPER™</span>{" "}
              Series has more cores and higher clocks for superfast performance
              compared to previous-gen GPUs.
            </p>
          </div>
        </div>

        <OurServices />
      </div>

      {notification !== null && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-500 text-white rounded-lg p-2 z-10">
          {notification}
        </div>
      )}
    </div>
  );
};
export default ProductPage;
