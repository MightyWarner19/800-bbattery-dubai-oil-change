import React, { useMemo } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import CallButton from "./misc/CallButton";
import WhatsappButton from "./misc/WhatsappButton";

const ContactForm = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div
      className="bg-yellow-500 max-w-screen-xl h-80  lg:h-0 px-4 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center"
      id="contact"
    >
      <ScrollAnimationWrapper className="relative w-full mt-6">
        <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
          <div className="mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg border border-gray-400 bg-yellow-500 max-w-4xl">
            <form className="space-y-4">
              {/* Name, Email, Phone Inputs - Stacked on mobile, side by side on larger screens */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
                    placeholder="johndoe@example.com"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
                    placeholder="+1234567890"
                  />
                </div>
              </div>

              {/* Textarea */}
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Select Field */}

                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="w-full px-3 py-2  border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
                >
                  <option value="" disabled selected>
                    ---Select Service---
                  </option>
                  <option value="Onsite Mobile Car Inspection">
                    Onsite Mobile Car Inspection
                  </option>
                  <option value="Onsite Mobile Car Service">
                    Onsite Mobile Car Service
                  </option>
                </select>

                <textarea
                  id="about"
                  name="about"
                  rows={1}
                  className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
                  placeholder="Tell us more about your needs"
                />
                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    className={
                      "fixHeight w-full py-3 lg:py-3 px-4  lg:px-16 text-white-500 font-semibold rounded-lg bg-black-600 hover:shadow-yellow-md transition-all outline-none "
                    }
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default ContactForm;
