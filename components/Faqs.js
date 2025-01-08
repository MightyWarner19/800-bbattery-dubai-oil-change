import React from "react";

const Faqs = () => {
  return (
    <div className=" py-12 bg-white-200 ">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16  grid  gap-8 items-center">
        <div className="space-y-8">
          <div>
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-4">
                <span className="block w-10 h-1 bg-yellow-500 mr-2"></span>
                <h2 className="text-yellow-500 font-semibold text-xl  uppercase">
                  Frequently Asked Questions
                </h2>
                <span className="block w-10 h-1 bg-yellow-500 ml-2"></span>
              </div>
              <h3 className="text-black-900 font-semibold text-3xl mb-4">
                Experience Unmatched Battery Services, Always
              </h3>
            </div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-center">
              Planning A Car Oil Change Service And Have Questions? We've Got
              You Covered.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <details className="border border-gray-400 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300 text-sm md:text-base leading-relaxed">
            <summary className="list-none font-semibold relative text-md cursor-pointer pr-7  md:text-base leading-relaxed">
              1. What is included in the AED 149/- service charge?
              <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible text-sm md:text-base leading-relaxed">
                <svg
                  className="h-5 w-4 text-pink-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                 
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </summary>
            <p className="text-sm md:text-base leading-relaxed pt-3">
              <p className="text-sm md:text-base leading-relaxed">
                <span>The service charge of AED 149/- covers a </span>
                <strong>car</strong>
                <span> </span>
                <strong>oil change</strong>
                <span>, </span>
                <strong>professional on-site service</strong>
                <span>, and a </span>
                <strong>complimentary 14-point vehicle check-up</strong>
                <span>
                  , including fluid top-ups, tire pressure, and
                  more&mdash;everything without any hidden fees.
                </span>
              </p>
            </p>
          </details>
          <details className="border border-gray-400 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300">
            <summary className="list-none font-semibold relative text-md cursor-pointer pr-7">
              2. How do I know which oil brand to choose?
              <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                <svg
                  className="h-5 w-4 text-pink-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                 
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </summary>
            <p className="text-sm md:text-base leading-relaxed pt-3">
              <p>
                <strong>Our experts will guide</strong>
                <span>
                  {" "}
                  you based on your car's make and model. We will help you
                  choose from
                </span>
                <strong> over 40 premium brands</strong>
                <span> for </span>
                <strong>optimal performance and compatibility.</strong>
              </p>
            </p>
          </details>

          <details className="border border-gray-400 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300">
            <summary className="list-none font-semibold relative text-lg cursor-pointer pr-7">
              3. At what km should I change my oil?
              <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                <svg
                  className="h-5 w-4 text-pink-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                 
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </summary>
             <p className="text-sm md:text-base leading-relaxed pt-3">
              Most vehicles require a car oil change every 5,000 to 7,500
              kilometers. However, this can vary based on oil quality, car
              model, and usage. Timely oil change services prevent engine wear
              and maintain smooth functioning. Contact our experts at 800 Bbattery if you think it is almost time to get your oil changed.
            </p>
          </details>

           <details className="border border-gray-400 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300">
            <summary className="list-none font-semibold relative text-md cursor-pointer pr-7">
              4. Is changing my car oil an expensive process?
              <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                <svg
                  className="h-5 w-4 text-pink-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                 
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </summary>
             <p className="text-sm md:text-base leading-relaxed pt-3">
              Timely car oil change and service is essential to protect your
              engine. That is why we provide affordable car oil changes using
              40+ premium brands, promising quality service without breaking the
              bank. To make it even more reasonable, we offer exclusive deals
              and perks with each oil change.
            </p>
          </details>

           <details className="border border-gray-400 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300">
            <summary className="list-none font-semibold relative text-md cursor-pointer pr-7">
              5. How long does oil last in a car usually?
              <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                <svg
                  className="h-5 w-4 text-pink-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                 
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </summary>
             <p className="text-sm md:text-base leading-relaxed pt-3">
              Car oil typically lasts 5,000 to 10,000 kilometers, depending on
              the oil type, car model, and your driving habits. Our oil change
              services at regular intervals ensure optimal engine performance
              and longevity. 800 Bbattery’s professional team provides guidance
              according to your vehicle's needs.
            </p>
          </details>
           <details className="border border-gray-400 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300">
            <summary className="list-none font-semibold relative text-md cursor-pointer pr-7">
              6. Is it bad to switch oil brands between oil changes?
              <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                <svg
                  className=" text-pink-700 w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                 
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </summary>
             <p className="text-sm md:text-base leading-relaxed pt-3">
              <p>
                <span>
                  Switching oil brands is not a problem as long as the oil is of
                  good quality and meets the specifications your vehicle
                  demands. At 800 Bbattery, we have{" "}
                </span>
                <strong>over 40 premium oil brands </strong>
                <span>
                  and our expert team ensure during oil change service that you
                  are using only compatible oil.&nbsp;
                </span>
              </p>
            </p>
          </details>
           <details className="border border-gray-400 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300">
            <summary className="list-none font-semibold relative text-md cursor-pointer pr-7">
              7. Is there any available service for car oil change near me?
              <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                <svg
                  className="h-5 w-4 text-pink-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                 
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </summary>
             <p className="text-sm md:text-base leading-relaxed pt-3">
              Yes, 800 Bbattery provides on-site car oil change services across
              Dubai. Whether you're at home, work, or another location, our
              expert team ensures convenient and professional service wherever
              you are.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
