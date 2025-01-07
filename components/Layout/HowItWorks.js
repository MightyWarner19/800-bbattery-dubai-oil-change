import { Phone, Wrench, Repeat1, CreditCard } from "lucide-react";
import CallButton from "../misc/CallButton";
import WhatsappButton from "../misc/WhatsappButton";

export default function HowItWorks() {
  return (
    <div className="bg-yellow-200">
      <div className="w-full mx-auto px-4 py-12 max-w-7xl">
        <div className="container mx-auto text-center px-4 pt-10">
        {/* Section Title */}
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-4">
            <span className="block w-10 h-1 bg-yellow-500 mr-2"></span>
            <h2 className="text-yellow-500 font-semibold text-xl  uppercase">
            Our Fast and Easy Process
            </h2>
            <span className="block w-10 h-1 bg-yellow-500 ml-2"></span>
           
          </div>
          <h3 className="text-black-900 font-semibold text-3xl mb-4">Quick and Effortless Same Day Services Delivered at Your Doorstep


          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
        Schedule Your Oil Change With Us And Enjoy Same-Day Service


        </p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center space-y-4 border-0  shadow-yellow-md- border-gray-500 hover:border-yellow-500 rounded-lg p-8 transition-all relative">
            {/* Animated Flow Line */}
            <div className="absolute lg:-top-10 -top-8  right-0 left-0 bottom-0  w-full h-full pointer-events-none">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,50 L100,50"
                  stroke="#F4B03E"
                  strokeWidth="5"
                  strokeDasharray="5,5"
                  strokeDashoffset="0"
                  fill="none"
                  className="animate-flow"
                />
              </svg>
              </div>

            {/* Icon and Content */}
            <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center z-10">
              <Phone className="w-8 h-8 text-white-500" />
            </div>
            <h3 className="text-xl font-semibold">Book Your Appointment</h3>
            <p className="text-gray-600 text-sm">Easily book your same-day oil change service online</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center space-y-4 border-0  shadow-yellow-md- border-gray-500 hover:border-yellow-500 rounded-lg p-8 transition-all relative">
            {/* Animated Flow Line */}
            <div className="absolute lg:-top-10 -top-8  right-0 left-0 bottom-0  w-full h-full pointer-events-none">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,50 L100,50"
                  stroke="#F4B03E"
                  strokeWidth="5"
                  strokeDasharray="5,5"
                  strokeDashoffset="0"
                  fill="none"
                  className="animate-flow"
                />
              </svg>
              </div>

            {/* Icon and Content */}
            <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center z-10">
              <Repeat1 className="w-8 h-8 text-white-500" />
            </div>
            <h3 className="text-xl font-semibold">Choose Your Brand & Location </h3>
            <p className="text-gray-600 text-sm">
            Choose your preferred oil brand from our range and your service location
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center space-y-4  rounded-lg p-8 transition-all relative">
           {/* Animated Flow Line */}
           <div className="absolute lg:-top-10 -top-8  right-0 left-0 bottom-0  w-full h-full pointer-events-none">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,50 L100,50"
                  stroke="#F4B03E"
                  strokeWidth="5"
                  strokeDasharray="5,5"
                  strokeDashoffset="0"
                  fill="none"
                  className="animate-flow"
                />
              </svg>
              </div>
            {/* Icon and Content */}
            <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center z-10">
              <Wrench className="w-8 h-8 text-white-500" />
            </div>
            <h3 className="text-xl font-semibold">Expert Onsite<br></br> Service</h3>
            <p className="text-gray-600 text-sm">
            Expert technicians will arrive & perform services on-site
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center space-y-4  rounded-lg p-8 transition-all relative">
            {/* Animated Flow Line */}
            <div className="absolute lg:-top-10 -top-8  right-0 left-0 bottom-0  w-full h-full pointer-events-none">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,50 L100,50"
                  stroke="#F4B03E"
                  strokeWidth="5"
                  strokeDasharray="5,5"
                  strokeDashoffset="0"
                  fill="none"
                  className="animate-flow"
                />
              </svg>

              <style>
                {`
                  @keyframes flow {
                    0% {
                      stroke-dashoffset: 0;
                    }
                    100% {
                      stroke-dashoffset: -20;
                    }
                  }
                  .animate-flow {
                    animation: flow 2s linear infinite;
                  }
                `}
              </style>
            </div>

            {/* Icon and Content */}
            <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center z-10">
              <CreditCard className="w-8 h-8 text-white-500" />
            </div>
            <h3 className="text-xl font-semibold">Pay<br></br> Conveniently</h3>
            <p className="text-gray-600 text-sm">Make your payment conveniently, online or after service completion

            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
              
        <CallButton name="Call Now!"/>
        <WhatsappButton name="WhatsApp!"/>
            </div>
        
      </div>
    </div>
  );
}
