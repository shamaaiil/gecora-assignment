import React from "react";
import { Heart, MoreHorizontal } from "lucide-react";

// Reusable Product Card Component
const ProductCard = ({ product }) => {
  return (
    <div className="w-[90%] bg-white p-4 relative group hover:shadow-md transition-shadow">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-2 left-2 bg-greenclr text-black px-2 py-1 rounded text-xs font-bold z-10">
          {product.badge}
        </div>
      )}

      {/* Heart Icon */}
      <div className="absolute top-4 right-4 z-10">
        <Heart className="w-5 h-5 hover:text-red-500 cursor-pointer" />
      </div>

      {/* Product Image */}
      <div className="aspect-square mb-4 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="font-semibold text-gray-900 text-sm leading-tight">
          {product.name}
        </h3>
        <p className="text-gray-500 text-xs">{product.description}</p>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="font-bold text-gray-900">{product.price}</span>
          <MoreHorizontal className="w-4 h-4 text-gray-400" />
        </div>

        {/* Color Options */}
        <div className="flex items-center space-x-2 pt-2">
          {product.colors.map((color, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full border-2 cursor-pointer
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
