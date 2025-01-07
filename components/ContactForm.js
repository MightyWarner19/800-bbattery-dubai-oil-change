import React, { useMemo } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import {
  ChevronDown
} from "lucide-react";
import CallButton from "./misc/CallButton";
import WhatsappButton from "./misc/WhatsappButton";

const ContactForm = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className="bg-white-500 max-w-screen-xl h-80 lg:h-0 px-4 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center" id="contact">
      <ScrollAnimationWrapper className="relative w-full">
        <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
        <div className=" mx-auto mt-10 p-6 bg-white rounded-lg shadow-md bg-white-500">
      <form className="space-y-4">
      <div className=" flex flex-row gap-8 aligh-item-center">
        <div>
          {/* <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 text-left">Name</label> */}
          <input
            type="text"
            id="name"
            name="name"
            className="fixHeight w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="John Doe"
          />
        </div>
        <div>
          {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 text-left">Email</label> */}
          <input
            type="email"
            id="email"
            name="email"
            className="fixHeight w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="johndoe@example.com"
          />
        </div>
        <div>
          {/* <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 text-left">Phone</label> */}
          <input
            type="tel"
            id="phone"
            name="phone"
            className="fixHeight w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="+1234567890"
          />
        </div>
        <div>
          <div className="mt-2 grid grid-cols-1">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="Onsite Mobile Car Inspection">Onsite Mobile Car Inspection</option>
                  <option value="Onsite Mobile Car Service" >Onsite Mobile Car Service</option>
                </select>
                <ChevronDown
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>
        <div>
        <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  defaultValue={''}
                />
        </div>

        <div className="flex justify-center items-center">
        <button
          type="submit"
          className={
            "fixHeight py-3 lg:py-3 px-4  lg:px-16 text-white-500 font-semibold rounded-lg bg-black-600 hover:shadow-yellow-md transition-all outline-none "
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
