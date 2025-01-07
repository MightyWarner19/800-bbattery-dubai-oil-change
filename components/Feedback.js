import React, { useMemo } from "react";

import Testimoni from "./Testimoni";

import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";



const Feedback = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full lg:py-14 py-6"
      id="testimonial"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        {/* <TrustSection /> */}     
        <div className="flex flex-col w-full mt-16" id="testimoni">
          <ScrollAnimationWrapper>
          <div className="flex flex-col items-center">
              <div className="flex items-center mb-4">
                <span className="block w-10 h-1 bg-yellow-500 mr-2"></span>
                <h2 className="text-yellow-500 font-semibold text-xl  uppercase">
                Testimonials
                </h2>
                <span className="block w-10 h-1 bg-yellow-500 ml-2"></span>
              </div>
              <h3 className="text-black-900 font-semibold text-3xl mb-2">
              Trusted by Drivers Everywhere

              </h3>
            </div>
            
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-2 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              Real Reviews From Satisfied Customers Who Experienced Our Premium Services

            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
         
        </div>
      </div>
    </div>
  );
};

export default Feedback;
