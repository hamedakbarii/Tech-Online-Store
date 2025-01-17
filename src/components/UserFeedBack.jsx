import { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./UserFeedBackSwiperStyle.css";

let UserFeedBackData = [
  {
    message: `My first order arrived today in perfect condition.  
        From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.
        I look forward to shopping on your site in the future and would highly recommend it.`,
    user: "Hamed Akbari",
  },
  {
    message: `My first order arrived today in perfect condition.  
        From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.
        I look forward to shopping on your site in the future and would highly recommend it.`,
    user: "Majid Amini",
  },
  {
    message: `My first order arrived today in perfect condition.  
        From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.
        I look forward to shopping on your site in the future and would highly recommend it.`,
    user: "Amir Akbarzadeh",
  },
  {
    message: `My first order arrived today in perfect condition.  
        From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.
        I look forward to shopping on your site in the future and would highly recommend it.`,
    user: "Hadis Jahangiri",
  },
];

let UserFeedBack = () => {
  return (
    <div className="container md:max-w-[95%] xl:max-w-[70%] mx-auto px-4 md:px-0 my-4">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="relative"
      >
        <span className="w-full h-full top-0 left-0 absolute bg-[#eff5ff] rounded-lg"></span>

        {UserFeedBackData &&
          UserFeedBackData.map((item, index) => (
            <SwiperSlide className="relative p-4 px-6 rounded-lg" key={index}>
              <div className="flex flex-col">
                <p className='flex items-start text-md text-justify before:block before:content-["“"] before:leading-[.7] before:mr-4 before:text-6xl'>
                  {item.message}
                </p>

                <span className='flex items-center justify-end mt-4 before:block before:content-["-"] before:mr-2 text-lg font-semibold'>
                  {item.user}
                </span>

                <button className="text-secondaryBlue border-2 border-secondaryBlue w-max p-1 mt-6 text-lg font-semibold rounded-full transation-all duration-[.2s] hover:bg-secondaryBlue hover:text-white">
                  Leave Us A Review
                </button>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
export default UserFeedBack;
