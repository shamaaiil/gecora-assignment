import React from 'react';
import { Heart, Trash2, ChevronDown } from 'lucide-react';

// Reusable Product Card Component
const Product = ({ product }) => {
  return (
    <div className="bg-white p-4 shadow-sm border-b border-gray-200 flex items-center justify-between">
      {/* Product Image and Info */}
      <div className="flex items-center space-x-4">
        <div className="w-16 h-20 bg-gray-50  flex items-center justify-center overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="flex flex-col">
          <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
          <p className="text-gray-500 text-sm">{product.specs}</p>
          
          {/* Add to Favorites Button */}
          <button className="flex items-center space-x-2 mt-2 px-3 py-1 border border-black font-semibold text-sm hover:bg-gray-50 w-fit">
            <Heart className="w-4 h-4" />
            <span>Odložiť na neskôr</span>
          </button>
        </div>
      </div>

      {/* Price and Controls */}
      <div className="flex flex-col items-end space-y-4">
        {/* Price Section */}
        <div className="text-right">
          <div className="flex items-center space-x-2">
            {product.discount &&
              <span className="text-2xl font-bold text-pinkclr">{product.price}</span>
            }
            {product.originalPrice && (
              <span className="text-gray-400 line-through">{product.originalPrice}</span>
            )}
            <Trash2 color='black' className="w-5 h-5 text-gray-400 cursor-pointer hover:text-red-500" />
          </div>
          {product.discount && (
            <p className="text-pinkclr mt-1">{product.discount}</p>
          )}
        </div>

        {/* Quantity Controls */}
        <div className="flex flex-col items-end space-y-2">
          <span className="text-sm text-gray-600">Zadajte množstvo tu</span>
          <div className="relative">
            <select className="appearance-none bg-white font-semibold border border-gray-300  px-16 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500">
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
