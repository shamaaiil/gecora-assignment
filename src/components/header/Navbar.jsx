import React from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  Star,
  Wrench,
  Tag,
} from "lucide-react";

function Navbar({ onMenuClick }) {
  return (
    <>
      <div className="bg-black text-white p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 px-4 py-2 gap-4 md:gap-0">
          {/* Left section */}
          <div className="flex items-center justify-center md:justify-start space-x-3 md:space-x-6 flex-wrap">
            <div className="flex items-center space-x-2 font-semibold cursor-pointer hover:text-gray-300 transition-colors">
              <Tag size={18} />
              <span className="text-sm md:text-base">Výpredaj</span>
            </div>
            <div className="flex items-center space-x-2 font-semibold cursor-pointer hover:text-gray-300 transition-colors">
              <Star size={18} />
              <span className="text-sm md:text-base">Novinky</span>
            </div>
            <div className="flex items-center space-x-2 font-semibold cursor-pointer hover:text-gray-300 transition-colors">
              <Wrench size={18} />
              <span className="text-sm md:text-base">MC Servis</span>
            </div>
          </div>

          {/* Center section - Logos */}
          <div className="flex items-center gap-x-4 justify-center order-first md:order-none">
            <img src="/public/img/logo.png" alt="" className="h-8 md:h-auto" />
            <img
              src="/public/img/US-UK_APP_Badge_horiz_blk_020923_1_400x 1.png"
              alt=""
              className="h-6 md:h-auto"
            />
          </div>

          {/* Right section - User icons */}
          <div className="flex items-center justify-center md:justify-end space-x-4">
            <User className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" />
            <Heart className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" />
            <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" />
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col lg:flex-row items-center justify-between px-4 py-3 gap-4 lg:gap-0">
          {/* Categories button */}
          <button
            onClick={onMenuClick}
            className="flex items-center space-x-2 bg-white text-black px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors w-full lg:w-auto justify-center lg:justify-start"
          >
            <span className="font-semibold text-sm md:text-base">Všetky kategórie</span>
            <Menu size={18} />
          </button>

          {/* Navigation links */}
          <div className="flex items-center space-x-4 md:space-x-8 flex-wrap justify-center lg:justify-start">
            <span className="cursor-pointer hover:text-gray-300 font-medium transition-colors text-sm md:text-base">
              iPhone
            </span>
            <span className="cursor-pointer hover:text-gray-300 font-medium transition-colors text-sm md:text-base">
              iPad
            </span>
            <span className="cursor-pointer hover:text-gray-300 font-medium transition-colors text-sm md:text-base">
              MacBook
            </span>
            <span className="cursor-pointer hover:text-gray-300 font-medium transition-colors text-sm md:text-base">
              Apple AirPods
            </span>
            <span className="cursor-pointer hover:text-gray-300 font-medium transition-colors text-sm md:text-base">
              Smarthome
            </span>
            <span className="cursor-pointer hover:text-gray-300 font-medium transition-colors text-sm md:text-base">
              Príslušenstvo
            </span>
          </div>

          {/* Search bar */}
          <div className="flex items-center bg-white px-3 py-3 w-full lg:min-w-68 lg:w-auto">
            <Search className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" />
            <input
              type="text"
              placeholder="Zadajte názov produktu"
              className="flex-1 outline-none text-black text-sm"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;