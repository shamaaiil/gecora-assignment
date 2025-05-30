import { ChevronRight, Gamepad2, Headphones, Home, Laptop, Monitor, Smartphone, Tablet, Zap } from "lucide-react";
import { useState } from "react";

function CategorySidebar({ onClose, onShowSubcategory, subcategoryVisible }) {
  const [activeItem, setActiveItem] = useState(null);

  const categories = [
    { icon: Smartphone, name: 'iPhone', iconColor: 'text-blue-500' },
    { icon: Headphones, name: 'Apple AirPods', iconColor: 'text-pink-500' },
    { icon: Laptop, name: 'Macbook', iconColor: 'text-gray-800' },
    { icon: Tablet, name: 'iPad', iconColor: 'text-blue-600' },
    { icon: Smartphone, name: 'Smarthome', iconColor: 'text-green-500' },
    { icon: Home, name: 'Príslušenstvo', iconColor: 'text-yellow-600' },
    { icon: Gamepad2, name: 'Herná zóna', iconColor: 'text-purple-500' },
    { icon: Monitor, name: 'PC', iconColor: 'text-indigo-500' },
    { icon: Zap, name: 'Elektronika', iconColor: 'text-cyan-500' }
  ];

  return (
    <div className="w-[424px] min-h-screen mx-auto flex flex-col justify-between bg-white">
      <div>
        {/* Header */}
        <div className="p-4 pb-2">
          <h1 className="text-2xl font-semibold text-[#6D4EFF]">Všetky kategórie</h1>
        </div>

        {/* Categories List */}
        <div className="px-4 space-y-1">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className={`flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50 transition-colors ${
                  category.highlighted ? 'bg-gray-900 text-white' : ''
                }`}
                onClick={() => {
                  if (category.name === 'Macbook' && onShowSubcategory) {
                    onShowSubcategory(!subcategoryVisible);
                  }
                  setActiveItem(activeItem === category.name ? null : category.name);
                }}
              >
                <div className="flex items-center space-x-3">
                  <IconComponent
                    size={20}
                    className={category.highlighted ? 'text-white' : category.iconColor}
                  />
                  <span
                    className={`font-semibold ${
                      category.highlighted ? 'text-[#6D4EFF]' : 'text-gray-800'
                    }`}
                  >
                    {category.name}
                  </span>
                </div>
                <ChevronRight
                  size={16}
                  className={`w-8 h-8 transition-colors rounded ${
                    activeItem === category.name
                      ? 'bg-black text-white'
                      : category.highlighted
                      ? 'text-white'
                      : 'text-gray-400'
                  }`}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-10 px-4 pb-4">
          <img src="/public/img/Main menu animation banner.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default CategorySidebar