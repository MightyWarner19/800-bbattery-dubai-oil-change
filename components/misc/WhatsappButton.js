import React from 'react'
import WhatsApp from "../../public/assets/Icon/whatsapp.svg";

const WhatsappButton = ({name}) => {
  return (
    <div><button
    className={
      "py-3 lg:py-3 px-4  lg:px-16 text-white-500 font-semibold rounded-lg bg-green-600 hover:shadow-yellow-md transition-all outline-none "
    }
  >
    <a
     
      href="https://wa.me/+971549917109?text=Can I get more details about your service?"
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