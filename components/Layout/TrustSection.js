import {  Star, Truck,  ShieldCheck,  Clock, Wrench    } from 'lucide-react'
import React from "react";

export default function TrustSection() {
  return (
    <div className="bg-black-900 text-white px-6 py-12 md:py-16" id='about'>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main stat */}
          <div className="text-center md:text-left flex justify-center items-center flex-col">
            <div className="text-5xl md:text-6xl font-bold text-yellow-500">10,000</div>
            <div className="text-xl md:text-2xl mt-2 text-yellow-500">HAPPY CUSTOMERS</div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-yellow-500/10">
                <Truck className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <div className="text-2xl text-start font-bold text-yellow-500">Quick Service</div>
                <div className="text-sm text-white-500">On-location Services</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-yellow-500/10">
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <div className="text-2xl font-bold text-start text-yellow-500">5+</div>
                <div className="text-sm text-white-500">Wide oil brand choices</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-yellow-500/10">
                <Clock className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <div className="text-2xl font-bold text-start text-yellow-500">Offers</div>
                <div className="text-sm text-white-500">Exclusive Discount Offers</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-yellow-500/10">
                <Wrench   className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <div className="text-2xl font-bold text-start text-yellow-500">14</div>
                <div className="text-sm text-white-500">Value-added 14-point checks</div>
              </div>
            </div>


            <div className="flex items-center gap-3 sm:col-span-1">
              <div className="p-2 rounded-full bg-yellow-500/10">
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <div className="text-2xl font-bold text-start text-yellow-500">500+</div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-white-500">Google Review</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500 font-bold">4.9</span>
                    <Star className="w-4 h-4 text-yellow-500 ml-1 fill-yellow-500" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:col-span-1">
              <div className="p-2 rounded-full bg-yellow-500/10">
                <ShieldCheck  className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <div className="text-2xl font-bold text-start text-yellow-500">100%</div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-white-500">All Cars Oil Available</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500 font-bold"></span>
                   
                  </div>
                </div>
              </div>
            </div>
           
          </div>
         
        </div>
      </div>
    </div>
  )
}

