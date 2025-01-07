import React from "react";
import Phone from "../../public/assets/Icon/phone.svg";
import WhatsApp from "../../public/assets/Icon/whatsapp.svg";

const FixedContactButton = () => {
  return (
    <div className="fixed lg:bottom-8 bottom-20 right-4 lg:flex flex-col gap-3 z-50 hidden">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+971549917109?text=Can I get more details about your service?"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center bg-green-600 text-white rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-110 p-4 border-white-500/50 border"
      >
        <div className="absolute inset-0 rounded-full bg-green-600 opacity-75 animate-ping"></div>
        <WhatsApp className="h-6 w-6 text-white relative z-10" />
      </a>

      {/* Call Now Button */}
      <a
        href="tel:8002272633"
        className="relative flex items-center justify-center bg-black-900 text-white rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-110 p-4 border-white-500/50 border"
      >
        <div className="absolute inset-0 rounded-full bg-black-600 opacity-75 animate-ping"></div>
        <Phone className="h-6 w-6 text-white relative z-10" />
      </a>
    </div>
  );
};

export default FixedContactButton;
