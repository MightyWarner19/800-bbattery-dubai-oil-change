import React, { useMemo, useState } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import CallButton from "./misc/CallButton";
import WhatsappButton from "./misc/WhatsappButton";
import { useRouter } from "next/router";
const apiUrl = "https://api.800bbattery.com";

const ContactForm = () => {
  const router = useRouter();
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [formData, setFormData] = useState({
    ffname: "",
    email: "",
    phone: "",
    services: "",
    form_message: "",
  });
  const [errorMessages, setErrorMessages] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrorMessages((prevMessages) => ({
      ...prevMessages,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.ffname) errors.ffname = "Name is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!formData.phone) errors.phone = "Phone number is required.";
    if (!formData.services) errors.services = "Service selection is required.";
    // if (!formData.form_message) errors.form_message = "Message is required.";

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrorMessages(validationErrors);
  
     
      Object.keys(validationErrors).forEach((key) => {
        console.log(`Error with ${key}: ${validationErrors[key]}`);
      });
  
      return;
 
    }
     
  

    const payload = {
      name: formData.ffname,
      email: formData.email,
      phone: formData.phone,
      service: formData.services,
      message: formData.form_message,
    };

    try {
      const res = await fetch(`${apiUrl}/api/oilForm/create/oil-form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (res.ok) {
       
        setSuccessMessage("Your message has been sent successfully!");
       
        setFormData({
          ffname: "",
          email: "",
          phone: "",
          services: "",
          form_message: "",
        });

        sessionStorage.setItem('formSubmitted', 'true');
 
        router.push('/thank-you');
   
       
        setTimeout(() => setSuccessMessage(""), 5000);
      } else {
      
        setErrorMessages({ form: "There was an error submitting your form." });
      }
    } catch (error) {
      console.error(error);
      setErrorMessages({ form: "An error occurred. Please try again later." });
    }
  };

  return (
    <div
      className="bg-yellow-500 max-w-screen-xl h-80  lg:h-0 px-4 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center"
      id=""
    >
      <ScrollAnimationWrapper className="relative w-full mt-6">
        <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
          <div className="mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg border border-gray-400 bg-yellow-500 max-w-4xl">
            <form className="space-y-4">
             
              {errorMessages.form && (
                <div className="text-red-800 text-sm text-start mt-1">
                  {errorMessages.form} 
                </div>
              )}

             
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <input
                    type="text"
                    value={formData.ffname}
                    onChange={handleChange}
                    id="name"
                    name="ffname"
                    className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
                    placeholder="John Doe"
                  />
                  {errorMessages.ffname && (
                    <div className="text-red-800 text-sm text-start mt-1">
                      {errorMessages.ffname}
                    </div>
                  )}
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
                  {errorMessages.email && (
                    <div className="text-red-800 text-sm text-start mt-1">
                      {errorMessages.email}
                    </div>
                  )}
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
                  {errorMessages.phone && (
                    <div className="text-red-800 text-sm text-start mt-1">
                      {errorMessages.phone}
                    </div>
                  )}
                </div>
              </div>

              {/* Service and Message Inputs */}
              <div className="grid lg:grid-cols-3 gap-6">
                <div>
                  <select
                    value={formData.services}
                    onChange={handleChange}
                    id="services"
                    name="services"
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
                  {errorMessages.services && (
                    <div className="text-red-800 text-sm text-start mt-1">
                      {errorMessages.services}
                    </div>
                  )}
                </div>

                <div>
                  <textarea
                    value={formData.form_message}
                    onChange={handleChange}
                    id="about"
                    name="form_message"
                    rows={1}
                    className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
                    placeholder="Tell us more about your needs"
                  />
                  {errorMessages.form_message && (
                    <div className="text-red-800 text-sm text-start mt-1">
                      {errorMessages.form_message}
                    </div>
                  )}
                </div>

                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    className="fixHeight w-full py-3 lg:py-3 px-4  lg:px-16 text-white-500 font-semibold rounded-lg bg-black-600 hover:shadow-yellow-md transition-all outline-none"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>

           
            {successMessage && (
              <div className="text-green-500 text-lg font-bold mt-4 p-2 bg-white-500">
                {successMessage}
              </div>
            )}
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default ContactForm;
