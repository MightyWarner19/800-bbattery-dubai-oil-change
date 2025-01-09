"use client";

import { useState, useEffect } from "react";
import CountUp from "react-countup";
import Image from "next/image";

import {
  RocketIcon,
  Wrench,
  Clock4Icon,
  Award,
  BadgeCheck,
} from "lucide-react";
import CallButton from "./misc/CallButton";
import WhatsappButton from "./misc/WhatsappButton";

export default function StatsCounter() {
  // Set the launch date (1 month from now for this example)
  const launchDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

  // Initialize the timeLeft state based on the current date and the launch date
  const calculateTimeLeft = () => {
    const difference = +launchDate - +new Date();
    if (difference <= 0) return null;
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear the timer when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <>
      <div className=" py-12 bg-yellow-200 statsCounter ">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16  grid lg:grid-cols-1 grid-cols-1 gap-8 items-center">
          <div className="space-y-8">
            <div>
            <div className="flex flex-col items-center text-center">
                <div className="flex items-center mb-4">
                  <span className="block w-10 h-1 bg-yellow-500 mr-2"></span>
                  <h2 className="text-yellow-500 font-semibold text-xl  uppercase">
                    Unbeatable Deals with Every Oil Change
                  </h2>
                  <span className="block w-10 h-1 bg-yellow-500 ml-2"></span>
                </div>
              </div>
              <div class="text-center mb-12">
                <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
                  Limited-Time Offer
                </h1>
              </div>
              <div className="relative flex justify-center pb-10">
            <div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {timeUnits.map((unit) => (
                  <div
                    key={unit.label}
                    className="bg-gradient-to-b rounded-lg shadow-lg"
                  >
                    <div className="p-6 text-center timerbox">
                      <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                        <CountUp
                          end={unit.value}
                          duration={0.5}
                          separator=","
                          useEasing={false}
                          preserveValue={true}
                        />
                      </div>
                      <div className="text-sm md:text-base font-medium text-gray-400">
                        {unit.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
              <div className="flex flex-col items-start text-left">
              <h4 className="text-black-900 statsfont font-semibold text-2xl mb-4">
                1. Exclusive Discount: Enjoy 20% off on car tinting, wrapping, or cleaning when you avail of our oil change service.
                </h4>
              <h4 className="text-black-900 statsfont font-semibold text-2xl mb-4">
                2. Get Affordable Premium Oil Change Service at Your Doorstep
                Exclusive Free 14 Perks Await!
                </h4>
                
              </div>
            </div>

            <div className="grid lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 gap-6">
              {/* <div className="flex justify-start items-center gap-1">
              <div className="p-1 bg-blue-50 rounded-lg">
                <Award className="w-8 h-8 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold text-black-900 mb-1">
                  Licensed Technicians
                </h3>
              </div>
            </div> */}

              {[
                "Coolant Level Top-Up",
                "Brake Fluid Level Top-Up",
                "Steering Fluid Top-Up",
                "Windscreen Washer Fluid Top-Up",
                "Air Filter Cleaning",
                "AC Filter Cleaning",
                "Tyre Pressure Inspection & Top-Up",
                "Battery Inspection",
                "Wiper Blade Inspection",
                "Headlights & Other Lights Inspection",
                "Parking Brake Inspection",
                "General Check-Up",
                "Computer Diagnostic",
                "Service Reminder Reset",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-start items-center gap-1"
                >
                  <div className="p-1 bg-blue-50 rounded-lg">
                    <BadgeCheck className="w-8 h-8 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black-900 mb-1">
                      {item}
                    </h3>
                  </div>
                </div>
              ))}

              {/* <div className="flex justify-start items-center gap-1">
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
            </div> */}
            </div>

            {/* <div className="flex  gap-2">
            
          <CallButton name="Call Now!"/>
          <WhatsappButton name="Get An Expert!"/>
          </div> */}
          </div>
          
          <div className="flex justify-center items-center gap-2">
            <CallButton name="Limited Time Offer – Call Now" />
            <WhatsappButton name="Claim Your Offer!" />
          </div>
        </div>
      </div>
    </>
  );
}
