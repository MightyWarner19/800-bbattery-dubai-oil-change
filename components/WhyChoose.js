import Image from "next/image";

import {
  RocketIcon,
  Wrench ,
  Clock4Icon,
  Award,
  BadgeCheck,
} from "lucide-react";
import CallButton from "./misc/CallButton";
import WhatsappButton from "./misc/WhatsappButton";

export default function SecurityLanding() {
  return (
    <div className=" py-12 bg-yellow-200 ">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16  grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
        

        <div className="space-y-8">
          <div>
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-4">
                <span className="block w-10 h-1 bg-yellow-500 mr-2"></span>
                <h2 className="text-yellow-500 font-semibold text-xl  uppercase">
                  Why Choose Us
                </h2>
                <span className="block w-10 h-1 bg-yellow-500 ml-2"></span>
              </div>
              <h3 className="text-black-900 font-semibold text-3xl mb-4">
              Why Choose 800 Bbattery for Your Car Oil Change

              </h3>
            </div>

            <p className="text-gray-600">
            <strong>Same-Day Service Available For</strong> Premium Car Oil Changes! <strong>Book Now To Get Your Oil Changed Today</strong>

            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex justify-start items-center gap-1">
              <div className="p-1 bg-blue-50 rounded-lg">
                <Award className="w-8 h-8 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold text-black-900 mb-1">
                  Licensed Technicians
                </h3>
              </div>
            </div>

            <div className="flex justify-start items-center gap-1">
              <div className="p-1 bg-blue-50 rounded-lg">
                <BadgeCheck className="w-8 h-8 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold text-black-900 mb-1">
                  100% Genuine Products
                </h3>
              </div>
            </div>

            <div className="flex justify-start items-center gap-1">
              <div className="p-1 bg-blue-50 rounded-lg">
                <Wrench  className="w-8 h-8 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold text-black-900 mb-1">
                Round The Clock Service

                </h3>
              </div>
            </div>

            <div className="flex justify-start items-center gap-1">
              <div className="p-1 bg-blue-50 rounded-lg">
                <Clock4Icon className="w-8 h-8 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold text-black-900 mb-1">
                  Serving UAE for 5+ Years
                </h3>
              </div>
            </div>
          </div>

          <div className="flex  gap-2">
            
          <CallButton name="Call Now!"/>
          <WhatsappButton name="Get An Expert!"/>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="https://imagedelivery.net/yg9mV_kJZn9RkpQKfOuKfA/08b4edca-954d-4bbc-65dc-ce2368eab700/public"
              alt="car battery replacement"
              layout="responsive"
              quality={100}
              height={100}
              width={108}
              className="h-44"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-yellow-800 p-6 ">
            <div className="flex items-center gap-2 text-white">
              <RocketIcon className="w-6 h-6" />

              <p className="lg:text-sm text-xs font-semibold text-black-900 typewriter">
                We have completed more than 10,000+ Battery Replacements.
              </p>

              <style>
                {`
    @keyframes typewriter {
      0% {
        width: 0;
      }
      70% {
        width: 100%;
      }
      85% {
        border-right-color: black;
      }
      100% {
        width: 100%;
        border-right-color: transparent;
      }
    }

    .typewriter {
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      border-right: 2px solid black;
      animation: typewriter 5s steps(50) infinite;
    }
  `}
              </style>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
