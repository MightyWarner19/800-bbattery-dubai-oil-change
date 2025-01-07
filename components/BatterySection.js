import React, { useMemo } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { ChevronRight , ChevronLeft } from 'lucide-react';


// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -right-10 transform -translate-y-1/2 z-10 cursor-pointer bg-white shadow-lg p-2 rounded-full"
    onClick={onClick}
  >
    <ChevronRight className="text-gray-700" />
  </div>
);

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -left-10 transform -translate-y-1/2 z-10 cursor-pointer bg-white shadow-lg p-2 rounded-full"
    onClick={onClick}
  >
    <ChevronLeft className="text-gray-700" />
  </div>
);

const BatterySection = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  // Slider settings
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-xl px-10 md:pb-20 pb-44 sm:px-8 lg:px-20 mx-auto flex flex-col w-full text-center justify-center items-center my-16" id="products">
         
        <ScrollAnimationWrapper>
           

            <div className="container mx-auto text-center px-4">
        {/* Section Title */}
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-4">
            <span className="block w-10 h-1 bg-yellow-500 mr-2"></span>
            <h2 className="text-yellow-500 font-semibold text-xl  uppercase">
            Our Premium Oil Brands

            </h2>
            <span className="block w-10 h-1 bg-yellow-500 ml-2"></span>
           
          </div>
          <h3 className="text-black-900 font-semibold text-3xl mb-4">Presenting Top Oil Brands for You


          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
        Trusted by Millions Worldwide – Choose from 40+ Premium Oil Brands 
        </p>
      </div>
          </ScrollAnimationWrapper> 
      <div className="flex flex-col w-full mt-10 lg:mb-48 mb-12">
        <ScrollAnimationWrapper>
          <motion.div className="w-full mt-4 relative" variants={scrollAnimation}>
            <Slider {...sliderSettings}>
              <div className="flex justify-center items-center">
                <img
                  src="https://imagedelivery.net/yg9mV_kJZn9RkpQKfOuKfA/b5e49e79-ad4c-49f6-18ac-fdd69883c100/1"
                  className="lg:h-14 h-10  w-auto"
                  alt="800 BBattery"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="https://imagedelivery.net/yg9mV_kJZn9RkpQKfOuKfA/5b8175c6-abbb-461b-92b8-f0e2348c0700/1"
                  className="lg:h-14 h-10  w-auto"
                  alt="800 BBattery"
                />
              </div>
             
             
              <div className="flex justify-center">
                <img
                  src="https://imagedelivery.net/yg9mV_kJZn9RkpQKfOuKfA/b9d9edb0-e680-4e15-00ea-73865a617300/1"
                  className="h-14 w-auto"
                  alt="800 BBattery"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="https://imagedelivery.net/yg9mV_kJZn9RkpQKfOuKfA/5168642b-171f-4bf8-e204-e66edbf28200/1"
                  className="h-14 w-auto"
                  alt="800 BBattery"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="https://imagedelivery.net/yg9mV_kJZn9RkpQKfOuKfA/806c9a47-2397-47fc-a614-32a3cb99c200/1"
                  className="lg:h-14 h-10  w-auto"
                  alt="800 BBattery"
                />
              </div>
              
              <div className="flex justify-center">
                <img
                  src="https://imagedelivery.net/yg9mV_kJZn9RkpQKfOuKfA/9c105945-7ad9-4eae-17b0-3f8ccf23c200/1"
                  className="h-14 w-auto"
                  alt="800 BBattery"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="https://imagedelivery.net/yg9mV_kJZn9RkpQKfOuKfA/d11bf004-0adf-45af-a783-4528d36ae800/1"
                  className="h-14 w-auto"
                  alt="800 BBattery"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="https://imagedelivery.net/yg9mV_kJZn9RkpQKfOuKfA/08ad8ea7-c3b9-4b00-e3aa-491be1cd7f00/1"
                  className="h-14 w-auto"
                  alt="800 BBattery"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="https://imagedelivery.net/yg9mV_kJZn9RkpQKfOuKfA/3c328a1e-c8ba-4b8e-1b88-027ffa3cdd00/1"
                  className="h-14 w-auto"
                  alt="800 BBattery"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="https://imagedelivery.net/yg9mV_kJZn9RkpQKfOuKfA/d52f8a0c-cd4f-454a-f97b-fb7d64d7b600/1"
                  className="h-14 w-auto"
                  alt="800 BBattery"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="https://imagedelivery.net/yg9mV_kJZn9RkpQKfOuKfA/52191cd6-15bd-457f-11d1-2fa0629de100/1"
                  className="h-14 w-auto"
                  alt="800 BBattery"
                />
              </div>
            </Slider>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default BatterySection;
