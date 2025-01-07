import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import CallButton from "./misc/CallButton";
import WhatsappButton from "./misc/WhatsappButton";

const features = [
  "Same Day Delivery",
  "Onsite services for all types of cars",
  "40+ Premium Oil Brands Available",
  "Flexible & Customer-Preferred Oil Selection",
  "Affordable pricing structure: (Service charges starting from AED 149/-* (Engine oil & filter additional).",
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto "
      id="benefits"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-4 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="https://imagedelivery.net/yg9mV_kJZn9RkpQKfOuKfA/872c2627-9ab6-4c31-d8e2-66a87d6f0700/1"
              alt="automotive battery servicing"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
              className="rounded"
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col lg:mt-10  justify-center ml-auto w-full "
            variants={scrollAnimation}
          >
            <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <span className="block w-10 h-1 bg-yellow-500 mr-2"></span>
            <h2 className="text-yellow-500 font-semibold text-xl  uppercase">
            Why Choose 800 Bbattery
            </h2>
            <span className="block w-10 h-1 bg-yellow-500 ml-2"></span>
           
          </div>
          <h3 className="text-black-900 font-semibold text-3xl mb-4">Premium Car Oil Changes! Book Now To Get Your Oil Changed Today.
          </h3>
        </div>
            
            
            <ul className="text-black-500 self-start list-inside ml-8 mb-4 mt-4">
              {features.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list mb-2 ml-3"
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
            <div className="flex justify-start items-center gap-2">
              
            <CallButton name="Call Now!"/>
            <WhatsappButton name="Talk to Expert!"/>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
