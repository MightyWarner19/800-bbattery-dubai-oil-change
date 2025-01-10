import React from 'react'
import WhatsApp from "../../public/assets/Icon/whatsapp.svg";

const WhatsappButton = ({name}) => {
  return (
    <div><button                                    
    className={
      "callbtn text-white-500 font-semibold rounded-lg bg-green-600 hover:shadow-yellow-md transition-all outline-none "
    }
  >
    <a
     
      href="https://wa.me/+971549917109?text=*Need onsite car mobile service at home or work? Sameday service available!!*%0A%0A1) Car Oil Change%0A2) Onsite Mobile Car Inspection%0A3) Others (please mention)%0A%0A*Chat with Us on WhatsApp Today!*"
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center items-center text-xs lg:text-sm py-1"
    >
      <WhatsApp className="lg:h-6 lg:w-6 h-4 w-4 mr-2 text-white-500 " />
      <span className="">{name|| "WhatsApp!"}</span>
    </a>
  </button></div>
  )
}

export default WhatsappButton