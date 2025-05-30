import React from 'react';
import { Heart, Trash2, ChevronDown } from 'lucide-react';

// Reusable Product Card Component
const Product = ({ product }) => {
  return (
    <div className="bg-white p-2 sm:p-4 shadow-sm border-b border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
      {/* Product Image and Info */}
      <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 w-full sm:w-auto">
        <div className="w-12 h-16 sm:w-16 sm:h-20 bg-gray-50 flex items-center justify-center overflow-hidden flex-shrink-0">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="flex flex-col flex-1 sm:flex-initial">
          <h3 className="font-semibold text-gray-900 text-base sm:text-lg">{product.name}</h3>
          <p className="text-gray-500 text-xs sm:text-sm">{product.specs}</p>
          
          {/* Add to Favorites Button */}
          <button className="flex items-center space-x-2 mt-2 px-2 sm:px-3 py-1 border border-black font-semibold text-xs sm:text-sm hover:bg-gray-50 w-fit">
            <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Odložiť na neskôr</span>
            <span className="sm:hidden">Odložiť</span>
          </button>
        </div>
      </div>

      {/* Price and Controls */}
      <div className="flex flex-row sm:flex-col items-end justify-between sm:justify-start space-y-0 sm:space-y-4 space-x-4 sm:space-x-0 w-full sm:w-auto">
        {/* Price Section */}
        <div className="text-left sm:text-right">
          <div className="flex items-center space-x-2">
            {product.discount &&
              <span className="text-lg sm:text-2xl font-bold text-pinkclr">{product.price}</span>
            }
            {product.originalPrice && (
              <span className="text-gray-400 line-through text-sm sm:text-base">{product.originalPrice}</span>
            )}
            <Trash2 color='black' className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 cursor-pointer hover:text-red-500" />
          </div>
          {product.discount && (
            <p className="text-pinkclr mt-1 text-sm sm:text-base">{product.discount}</p>
          )}
        </div>

        {/* Quantity Controls */}
        <div className="flex flex-col items-end space-y-2">
          <span className="text-xs sm:text-sm text-gray-600 hidden sm:block">Zadajte množstvo tu</span>
          <span className="text-xs sm:text-sm text-gray-600 sm:hidden">Množstvo</span>
          <div className="relative">
            <select className="appearance-none bg-white font-semibold border border-gray-300 px-8 sm:px-16 py-2 pr-6 sm:pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <ChevronDown color='black' className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product