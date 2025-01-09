import React from "react";
import Image from "next/image";

import {
  RocketIcon,
  Wrench,
  Clock4Icon,
  Award,
  BadgeCheck,
  MoveRight,
} from "lucide-react";
import CallButton from "./misc/CallButton";
import WhatsappButton from "./misc/WhatsappButton";

const Services = () => {
  return (
    <>
      <div className="pb-12  bg-white-200 ">
        <div
          className="bg-gradient-to-b from-white-300 to-white-500 w-full lg:py-14 py-6"
          
        >
          <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
            <div className="flex flex-col w-full mt-16" id="testimoni">
              <div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center mb-4">
                    <span className="block w-10 h-1 bg-yellow-500 mr-2"></span>
                    <h2 className="text-yellow-500 font-semibold text-xl  uppercase">
                      Our Services
                    </h2>
                    <span className="block w-10 h-1 bg-yellow-500 ml-2"></span>
                  </div>
                  <h3 className="text-black-900 font-semibold text-3xl mb-4">
                    Expert Onsite Services for Your Car
                  </h3>
                  {/* <h3 className="text-black-900 font-semibold text-3xl mb-2">Stories That Reflect Trust And Satisfaction</h3> */}
                </div>
                <p className="leading-normal mx-auto mb-2 mt-2 w-10/12 sm:w-7/12 lg:w-6/12">
                  Experience Hassle-Free <strong>Premium</strong> Car Care
                  Services With <strong>Same Day Delivery</strong> At Your
                  Preferred Location.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16  grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
          <div className="bg-white rounded-sm shadow-lg">
            <Image
              src="https://imagedelivery.net/yg9mV_kJZn9RkpQKfOuKfA/a6e86aed-2cf8-4ab4-8c49-aa81d50e6900/1"
              alt="Onsite Mobile Car Inspection"
              layout="responsive"
              quality={100}
              height={60}
              width={108}
              className="h-auto w-full object-cover"
            />
            <div className="p-6">
              <h2 className="font-bold mb-2 text-2xl text-purple-800">
                Onsite Mobile Car Inspection
              </h2>
              <p className="text-purple-700 mb-2">
                Planning a road trip, buying a used car, or ensuring safety? Our
                Onsite Mobile Car Inspection by 800 Bbattery offers professional
                same day service of evaluations at your location, saving you
                time and effort.
              </p>
              <a
                href="https://www.800bbattery.com/service/onsite-mobile-car-service"
                className="text-purple-600 hover:text-yellow-500 flex flex-row underline underline-offset-4 "
              >
                Read More &nbsp;
                <MoveRight className="text-yellow-500" />
              </a>
            </div>
          </div>
          <div className="bg-white rounded-sm shadow-lg">
            <Image
              src="https://imagedelivery.net/yg9mV_kJZn9RkpQKfOuKfA/c81a20ae-c1df-4b97-d5a2-477aab4e2200/1"
              alt="Onsite Mobile Car Service"
              layout="responsive"
              quality={100}
              height={60}
              width={108}
              className="h-auto w-full object-cover"
            />
            <div className="p-6">
              <h2 className="font-bold mb-2 text-2xl text-purple-800">
                Onsite Mobile Car Service
              </h2>
              <p className="text-purple-700 mb-2">
                Avoid the hassle of waiting at shops or arranging rides with our
                same day services. With 800 B attery’s Onsite Mobile Car
                Services, including car oil changes, expert car care comes to
                you—at home, work, or anywhere convenient.{" "}
              </p>
              <a
                href="https://www.800bbattery.com/service/onsite-mobile-car-service"
                className="text-purple-600 hover:text-yellow-500 flex flex-row underline underline-offset-4 "
              >
                Read More &nbsp;
                <MoveRight className="text-yellow-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
