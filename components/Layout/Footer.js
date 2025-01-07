import React from "react";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-black-900 pt-44 footerWrapper pb-20">
      <div className="max-w-screen-xl mx-auto w-full px-6 sm:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className=" ">
          <Image
            src="https://imagedelivery.net/yg9mV_kJZn9RkpQKfOuKfA/a8df3196-6c39-4799-0072-92dbd37c6700/public"
            alt="auto battery replacement"
            width={120}
            height={42}
            className=""
          />
          <p className="my-4 text-white-500 lg:w-8/12">
            Your trusted superhero mechanic, providing 24/7 on-site car repair
            services across Dubai. Fast, reliable, and always ready to save the
            day!
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <a
              href="https://www.facebook.com/profile.php?id=61565118175123"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Footer icon"
              className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/800b.battery/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram icon"
              className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>

         
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 col-span-2">
          <div className=" ">
            <p className=" mb-4 font-bold text-lg text-yellow-500">
              Quick Link
            </p>
            <ul className="text-black-500 ">
              <li className="my-2 text-white-500 hover:text-yellow-500 cursor-pointer transition-all">
                <a href="#home">Home</a>
              </li>
              <li className="my-2 text-white-500 hover:text-yellow-500 cursor-pointer transition-all">
                <a href="#about">About</a>
              </li>
              <li className="my-2 text-white-500 hover:text-yellow-500 cursor-pointer transition-all">
                <a href="#benefits">Benefits</a>
              </li>
              <li className="my-2 text-white-500 hover:text-yellow-500 cursor-pointer transition-all">
                <a href="#testimonial">Testimonial</a>
              </li>
              <li className="my-2 text-white-500 hover:text-yellow-500 cursor-pointer transition-all">
                <a href="#products">Products</a>
              </li>
              <li className="my-2 text-white-500 hover:text-yellow-500 cursor-pointer transition-all">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          {/* <div className="">
            <p className=" mb-4 font-bold text-lg text-yellow-500">Our Sevices</p>
            <ul className="text-black-500">
              <li className="my-2 text-white-500 hover:text-yellow-500 cursor-pointer transition-all">
              <a href="https://www.800bbattery.com/service/home-battery-replacement" target="_blank">Home Battery Replacement{" "}</a>
              </li>
              <li className="my-2 text-white-500 hover:text-yellow-500 cursor-pointer transition-all">
              <a href="https://www.800bbattery.com/service/road-side-assistance" target="_blank">Road side assistance{" "}</a>
              </li>

              <li className="my-2 text-white-500 hover:text-yellow-500 cursor-pointer transition-all">
              <a href="https://www.800bbattery.com/service/in-store-battery-replacement" target="_blank">Road side assistance{" "}</a>
              In-store Battery Replacement{" "}
              </li>
              <li className="my-2 text-white-500 hover:text-yellow-500 cursor-pointer transition-all">
              <a href="https://www.800bbattery.com/service/onsite-battery-replacement" target="_blank">Road side assistance{" "}</a>
              Onsite Battery Replacement{" "}
              </li>
            </ul>
          </div> */}
        
          <div className="">
            <p className=" mb-4 font-bold text-lg text-yellow-500">
              Address
            </p>
            <ul className="text-black-500">
              <li className="my-2 text-white-500 hover:text-yellow-500 cursor-pointer transition-all">
               Al Asayel Street - 160St Warehouse no. 2 - 318th Rd - near Al Ahli Driving school - Al Quoz Industrial Area 3 - Dubai
              </li>
              
            </ul>
           
            
          </div>
          <div className="">  
            <p className=" mb-4 font-bold text-lg text-yellow-500">Contact Us</p>
            <ul className="text-black-500 mt-8 mb-6">
              <li className="my-2 text-white-500 hover:text-yellow-500 cursor-pointer transition-all">
                <a href="tel:+971549917109">+971 54 991 7109</a>
              </li>
              <li className="my-2 text-white-500 hover:text-yellow-500 cursor-pointer transition-all">
                <a href="mailto:support@800bbattery.com">
                  support@800bbattery.com
                </a>
              </li>
            </ul>
            <Image
            src="https://imagedelivery.net/yg9mV_kJZn9RkpQKfOuKfA/d1390355-dd79-479c-c934-79ed50111100/public"
            alt="automobile battery replacement"
            width={80}
            height={80}
            className="mt-6"
          />
          </div>
        </div>
       
      </div>
      <p className="text-gray-400 mt-4 max-w-screen-xl mx-auto w-full px-6 sm:px-8 lg:px-16">
          Copyright ©{new Date().getFullYear()} -by 800 BBattery. All rights reserved. Developed by <span className="text-yellow-500"><a
              href="https://www.mightywarner.ae/"
               rel="noopener noreferrer"
              target="_blank">Mighty Warners </a></span>
        </p>
    </div>
  );
};

export default Footer;
