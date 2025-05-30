import { ChevronRight } from "lucide-react";
import { useState } from "react";

function SubcategorySidebar({ onClose }) {
  const [activeSection, setActiveSection] = useState(null);

  const subcategories = {
    all: ["Pro", "iMac 24″", "Mini", "Mac Pro", "Displeje", "Doplnky pre Mac"],
    air: ["Pro", "iMac 24″", "Mini"],
    studio: ["Mac Pro", "Displeje", "Doplnky pre Mac"],
  };

  return (
    <div className="w-[424px] min-h-screen text-black font-sans p-6 border-l bg-white">
      <h2 className="text-xl font-bold uppercase tracking-wide mb-6 text-[#6D4EFF]">
        MacBook
      </h2>

      {/* Main Category Section */}
      <div className="space-y-4">
        {/* Show All Section */}
        <div className="mb-4">
          <div
            className="flex items-center justify-between py-3 hover:bg-gray-50 transition-colors cursor-pointer font-semibold rounded"
            onClick={() =>
              setActiveSection(activeSection === "all" ? null : "all")
            }
          >
            <span>Zobraziť všetko</span>
            <ChevronRight
              size={22}
              color="black"
              className={`w-10 h-8 transition-colors rounded ${
                activeSection === "all"
                  ? "bg-[#6D4EFF] text-white"
                  : "text-gray-400"
              }`}
            />
          </div>
          <div className="pl-4 space-y-2 text-black">
            {subcategories.all.map((item, index) => (
              <div
                key={index}
                className="py-2 hover:bg-gray-50 transition-colors cursor-pointer rounded px-2"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Air Section */}
        <div className="mb-4">
          <div
            className="flex items-center justify-between py-3 hover:bg-gray-50 transition-colors cursor-pointer font-semibold rounded"
            onClick={() =>
              setActiveSection(activeSection === "air" ? null : "air")
            }
          >
            <span>Air</span>
            <ChevronRight
              size={22}
              color="black"
              className={`w-10 h-8 transition-colors rounded ${
                activeSection === "air"
                  ? "bg-[#6D4EFF] text-white"
                  : "text-gray-400"
              }`}
            />
          </div>
          <div className="pl-4 space-y-2">
            {subcategories.air.map((item, index) => (
              <div
                key={index}
                className="py-2 hover:bg-gray-50 transition-colors cursor-pointer rounded px-2"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Studio Section */}
        <div>
          <div
            className="flex items-center justify-between py-3 hover:bg-gray-50 transition-colors cursor-pointer font-semibold rounded"
            onClick={() =>
              setActiveSection(activeSection === "studio" ? null : "studio")
            }
          >
            <span>Studio</span>
            <ChevronRight
              size={22}
              color="black"
              className={`w-10 h-8 transition-colors rounded ${
                activeSection === "studio"
                  ? "bg-[#6D4EFF] text-white"
                  : "text-gray-400"
              }`}
            />
          </div>
          <div className="pl-4 space-y-2">
            {subcategories.studio.map((item, index) => (
              <div
                key={index}
                className="py-2 hover:bg-gray-50 transition-colors cursor-pointer rounded px-2"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default SubcategorySidebar