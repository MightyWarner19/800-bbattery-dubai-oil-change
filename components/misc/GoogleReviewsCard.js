import React from "react";

const GoogleReviewBadge = () => {
  return (
    <div className="fixed left-0 lg:bottom-8 bottom-20 bg-white shadow-md rounded-r-lg flex flex-col items-center w-14 lg:w-24 z-50 bg-white-500 border border-yellow-300/50">
      {/* Star Rating */}{/* Google Logo */}
      <div className="flex justify-center items-center mt-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/36px-Google_%22G%22_logo.svg.png"
          alt="Google"
          className="h-8 w-8"
        />
        {/* <span className="text-blue-500 font-semibold text-sm ml-1">Google</span> */}
      </div>
      <div className="flex items-center flex-row pt-1 px-2 mb-2">
        <span className="text-yellow-500 text-lg mr-1">★</span>
        <span className="text-black-900 font-bold text-sm mt-1">4.9</span>
      </div>

      {/* Reviews Count */}
      {/* <p className="text-gray-600 text-xs text-center px-2 mb-2">
        Based on<br/> <span className="font-bold">500+</span> reviews
      </p> */}

      
    </div>
  );
};

export default GoogleReviewBadge;
