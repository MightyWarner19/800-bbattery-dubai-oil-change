import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Farah Ahmed ",
      image: "../public/assets/people-3.png",
      city: "Dubai",
      country: "UAE",
      rating: "4.9",
      testimoni:
        "Absolutely hassle-free service offered by 800 Bbattery! First, I was looking for an oil change near me, but they are providing on-site service. The team arrived on time, used premium oil, and completed the service efficiently. It saved me so much time and effort. Five stars.",
    },
    {
      name: "Zaid Al Salem",
      image: "../public/assets/people-3.png",
      city: "Dubai",
      country: "UAE",
      rating: "4.7",
      testimoni:
        "Impressive oil change and service at affordable pricing! I was not sure about what oil to choose for my vehicle but they provided expert advice on the selection and handled everything professionally. Now my car runs smoother than ever. They also have offers when we avail their oil change services. Will definitely get back to them again.",
    },
    {
      name: "Sarah Williams",
      image: "../public/assets/people-3.png",
      city: "Dubai",
      country: "UAE",
      rating: "4.5",
      testimoni:
        "While looking for oil change services near me on Google, I came across 800 Bbattery and saw that they give their services at your location. I booked them immediately, and the skilled and friendly team arrived quickly and finished their work in no time at all! Highly recommended.",
    },
    {
      name: "Reem Al Zaabi",
      image: "../public/assets/people-3.png",
      city: "Dubai",
      country: "UAE",
      rating: "4.8",
      testimoni:
        "I was looking for a reliable car mobile inspection as I haven’t been using the car for a long time. I contacted the team and then got to know that an inspection service is free for customers availing their car engine oil change. The expert team also made me realize it was actually time for an oil and filter change. It was really a stress-free experience.",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni?.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-yellow-500 transition-all rounded-lg p-8 flex flex-col lg:h-80">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    src="https://imagedelivery.net/yg9mV_kJZn9RkpQKfOuKfA/8bf500d9-9600-4447-9627-521d7788cd00/public"
                    height={50}
                    width={50}
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left testimonial_content">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-yellow-500 border hover:bg-yellow-500 hover:text-white-500 transition-all text-yellow-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-yellow-500 border hover:bg-yellow-500 hover:text-white-500 transition-all text-yellow-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
      <style>
        {`
          
          .testimonial_content{
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            height: 170px;
            text-overflow: ellipsis;
          }
          .testimonial_content::-webkit-scrollbar {
              height: 5px;
              width: 4px;
              background: #f2871c;
              border-radius: 50px;
          }
          .testimonial_content::-webkit-scrollbar-thumb {
              background: #f2871c;
              border-radius: 10px;
          }
          .testimonial_content::-webkit-scrollbar-track {
              background: #ccc;
              height: 5px;
              border-radius: 10px;
          }
        `
        }
      </style>
    </>
  );
};

export default Testimoni;
