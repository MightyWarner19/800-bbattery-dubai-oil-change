import React, { useMemo, useState } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";
const apiUrl = "https://api.800bbattery.com";

const Emergency = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const [formData, setFormData] = useState({
    ffname: "",
    email: "",
    phone: "",
    services: "",
    form_message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: formData.ffname,
      email: formData.email,
      phone: formData.phone,
      service: formData.services,
      message: formData.form_message,
    };
    console.log(payload);
    try {
      const res = await fetch(`${apiUrl}/api/oilForm/create/oil-form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      console.log("Here is response data", data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="max-w-screen-xl h-80 lg:h-0 px-4 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center"
      id="contact"
    >
      <ScrollAnimationWrapper className="relative w-full custom-margin">
        <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
          <div className="absolute rounded-xl border-yellow-300 grid md:grid-cols-2 gap-10 bg-yellow-300 py-8 sm:py-10 px-2 sm:px-12 lg:px-16 w-full   z-10">
            <div className="mx-auto mt-4 p-6 bg-white rounded-lg shadow-lg border border-gray-400 bg-white-500 max-w-4xl">
              <div className="flex flex-col text-left  mb-6 sm:mb-0">
                <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-semibold">
                  Reach Out To Us For Quick & Reliable Oil Change Services Near
                  You
                </h5>
                <p className="mt-3">
                  Get In Touch With Us Today To Avail Of Our Service And Learn
                  More About Exclusive Deals Available.
                </p>
                <div className="flex  gap-2 mt-6  "></div>
              </div>
              <form className="space-y-4">
                {/* Name, Email, Phone Inputs - Stacked on mobile, side by side on larger screens */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2">
                  <div>
                    <input
                      value={formData.ffname}
                      onChange={handleChange}
                      type="text"
                      id="name"
                      name="ffname"
                      className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <input
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                  <div>
                    <input
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
                      placeholder="+1234567890"
                    />
                  </div>
                  <div>
                    <select
                      value={formData.services} // Controlled component binding
                      onChange={handleChange}
                      id="services" // Updated `id` to match the form element purpose
                      name="services"
                      autoComplete="off" // `autoComplete` is not relevant for select inputs
                      className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
                    >
                      <option value="" disabled>
                        --- Select Service ---
                      </option>
                      <option value="Onsite Mobile Car Inspection">
                        Onsite Mobile Car Inspection
                      </option>
                      <option value="Onsite Mobile Car Service">
                        Onsite Mobile Car Service
                      </option>
                    </select>
                  </div>
                </div>

                {/* Textarea */}
                <div className="grid lg:grid-cols-1 gap-6">
                  {/* Select Field */}

                  <textarea
                    value={formData.form_message}
                    onChange={handleChange}
                    id="about"
                    name="form_message"
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
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="border-2 border-white-500 rounded-2xl mt-4 mx-10 lg:max-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7356.614853498938!2d55.22415!3d25.120291!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f692dd65e4465%3A0xc7b4c46be55cd897!2s800%20BBattery!5e1!3m2!1sen!2sae!4v1734010420602!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="md:h-full h-44  w-full  rounded-2xl "
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
