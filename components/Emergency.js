import React, { useMemo } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import CallButton from "./misc/CallButton";
import WhatsappButton from "./misc/WhatsappButton";
import { ChevronDown } from "lucide-react";
const Emergency = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div
      className="max-w-screen-xl h-80 lg:h-0 px-4 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center"
      id="contact"
    >
      <ScrollAnimationWrapper className="relative w-full lg:-mt-80 -mt-96">
        <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
          <div className="absolute rounded-xl border-yellow-300 grid grid-cols-2 bg-yellow-300 py-8 sm:py-10 px-2 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10">
            <div className="flex flex-col text-left">
              <form>
                <div className=" flex flex-wrap gap-8 aligh-item-center">
                  <div className=" flex flex-wrap gap-8 aligh-item-center">
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
                  </div>
                  <div className=" flex flex-wrap gap-8 aligh-item-center">
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
                      <div className="fixHeight grid grid-cols-1">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        >
                          <option value="Onsite Mobile Car Inspection">
                            Onsite Mobile Car Inspection
                          </option>
                          <option value="Onsite Mobile Car Service">
                            Onsite Mobile Car Service
                          </option>
                        </select>
                        <ChevronDown
                          aria-hidden="true"
                          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-wrap gap-8 aligh-item-center ">
                    <div className="w-full">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className={
                      "fixHeight py-3 lg:py-3 px-4  lg:px-16 text-white-500 font-semibold rounded-lg bg-black-600 hover:shadow-yellow-md transition-all outline-none "
                    }
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="border-2 border-white-500 rounded-2xl mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7356.614853498938!2d55.22415!3d25.120291!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f692dd65e4465%3A0xc7b4c46be55cd897!2s800%20BBattery!5e1!3m2!1sen!2sae!4v1734010420602!5m2!1sen!2sae"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="lg:h-48 h-44 lg:w-96 w-auto rounded-2xl "
                title="Map Location"
              ></iframe>
            </div>
          </div>
          <div
            className="absolute bg-black-600 opacity-5 w-11/12 rounded-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
            style={{ filter: "blur(114px)" }}
          ></div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Emergency;
