import React from 'react'

const AboutUS = () => {
  return (
    <div className="bg-yellow-200 text-white py-16 " id='about'>
      <div className="container mx-auto text-center px-4">
        {/* Section Title */}
        <div className="flex flex-col items-center aboutTitle mt-6">
          <div className="flex items-center mb-4 pt-6">
            <span className="block w-10 h-1 bg-yellow-500 mr-2"></span>
            <h2 className="text-yellow-500 font-semibold text-xl  uppercase ">
              About Us
            </h2>
            <span className="block w-10 h-1 bg-yellow-500 ml-2"></span>
           
          </div>
          <h3 className="text-black-900 font-semibold text-3xl mb-4">Fast and Easy Same-Day Car Oil Change Service at Your Doorstep
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
        At 800 Bbattery, we specialize in delivering efficient oil change services at home, ensuring a hassle-free experience for our valuable customers. Using trusted oil brands, we guarantee smooth performance for your vehicle, always. Additionally, we offer car mobile inspections and exclusive deals on various services, prioritizing convenience and quality for our customers. Experience seamless car care with our reliable and professional services, at the auto oil shop near you. 
        </p>
      </div>
      
      <style>
        {`
          .aboutTitle{
            padding-top:30px;
          }

        `}
      </style>
    </div>
  )
}

export default AboutUS