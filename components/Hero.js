import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

import CallButton from "./misc/CallButton";
import WhatsappButton from "./misc/WhatsappButton";

const features = [
  "Book Now and Save 20% on Tinting, Wrapping, or Cleaning!",
  "complimentary 14-point vehicle check",
];

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="bg-white-500 lg:bg-heroBanner lg:bg-cover lg:bg-center">

    
    <div
      className="max-w-screen-xl lg:pt-20 lg:pb-20 pb-20 mt-20 lg:px-8 px-4 xl:px-16 mx-auto "
      id="home"
    >
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4"
          variants={scrollAnimation}
        >
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1 mt-2 lg:mt-0">
            <h1 className="text-3xl lg:text-3xl xl:text-4xl font-medium text-black-600 ">
            Top-Quality Same-Day Car Oil Change Service at Your Doorstep
            </h1>
            <h2 className="text-yellow-500 font-semibold text-xl  uppercase mt-4">
            Get your car serviced at your location with a complimentary 14-point vehicle check.
            </h2>
            <div>
  <p className="text-blue-500 mt-4 mb-6 font-semibold bg-yellow-500/20 p-2 border-2 border-dashed border-yellow-500 animate-text animate-ping animate-text-new highlight-text-more">
  Starting at Only  AED 149
  </p>
 
</div>

<style>
  {`
    @keyframes slideUpFadeIn {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-text {
      animation: slideUpFadeIn 1s ease-out;
    }

    @keyframes slideUpFadeInNew {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-text-new {
      animation: slideUpFadeInNew 1.5s ease-out;
    }
      .highlight-text-more {
        color: white;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 3px;
        background: #f2871c;
        border-radius:5px;
        position: relative;
        animation: text 2s 1;
        animation-name: text;
        animation-duration: 2s;
        animation-iteration-count: infinite;
    }

    @keyframes text {
      0% {
        // margin-left:0px;

      }
      30% {
        // letter-spacing: 4px;
        // margin-left:10px;
        transform: scale(.8);
      }
      85% {
        // letter-spacing: 5px;
        // margin-left:10px;
      }
      100% {
        // margin-left:0px;
      }
    }

  `}
</style>



            <ul className="text-black-500 self-start list-inside ml-10 mb-4">
              {features.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list mb-2 mt-2"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
            <div className="flex justify-center items-center gap-2">
              
              <CallButton name="Call Now!"/>
              <WhatsappButton name="WhatsApp!"/>
            </div>
          </div>
          <div className="flex w-full lg:hidden ">
            <motion.div
              className="h-full w-full rounded"
              variants={scrollAnimation}
            >
              <Image
                src="https://imagedelivery.net/yg9mV_kJZn9RkpQKfOuKfA/f1194261-ba4b-4682-d4a9-c114364e8a00/1"
                alt="car battery replacement service"
                quality={100}
                width={612}
                height={483}
                layout="responsive"
                className="rounded-md"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex">
        
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
