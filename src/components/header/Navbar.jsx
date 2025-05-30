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
import Header from "./Header";

function Navbar({ onMenuClick }) {
  return (
    <>
      <Header/>
      <div className="bg-black text-white p-6">
        <div className="grid grid-cols-3 px-4 py-2">
          {/* Left section */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 font-semibold cursor-pointer hover:text-gray-300 transition-colors">
              <Tag size={18} />
              <span>Výpredaj</span>
            </div>
            <div className="flex items-center space-x-2 font-semibold cursor-pointer hover:text-gray-300 transition-colors">
              <Star size={18} />
              <span>Novinky</span>
            </div>
            <div className="flex items-center space-x-2 font-semibold cursor-pointer hover:text-gray-300 transition-colors">
              <Wrench size={18} />
              <span>MC Servis</span>
            </div>
          </div>

          <div className="flex items-center gap-x-4 justify-center">
            <img src="/public/img/logo.png" alt="" />
            <img
              src="/public/img/US-UK_APP_Badge_horiz_blk_020923_1_400x 1.png"
              alt=""
            />
          </div>

          <div className="flex items-center justify-end space-x-4">
            <User className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" />
            <Heart className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" />
            <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" />
          </div>
        </div>

        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={onMenuClick}
            className="flex items-center space-x-2 bg-white text-black px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <span className="font-semibold">Všetky kategórie</span>
            <Menu size={18} />
          </button>

          <div className="flex items-center space-x-8">
            <span className="cursor-pointer hover:text-gray-300 font-medium transition-colors">
              iPhone
            </span>
            <span className="cursor-pointer hover:text-gray-300 font-medium transition-colors">
              iPad
            </span>
            <span className="cursor-pointer hover:text-gray-300 font-medium transition-colors">
              MacBook
            </span>
            <span className="cursor-pointer hover:text-gray-300 font-medium transition-colors">
              Apple AirPods
            </span>
            <span className="cursor-pointer hover:text-gray-300 font-medium transition-colors">
              Smarthome
            </span>
            <span className="cursor-pointer hover:text-gray-300 font-medium transition-colors">
              Príslušenstvo
            </span>
          </div>

          <div className="flex items-center bg-white px-3 py-3 min-w-68">
            <Search className="w-4 h-4 text-gray-500 mr-2" />
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
