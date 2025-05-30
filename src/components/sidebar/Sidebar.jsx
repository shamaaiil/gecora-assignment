import { ChevronRight, Heart, Star, Tag, X } from "lucide-react";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";

function Sidebar({ onToggleCategory, onClose }) {
  const [activeItem, setActiveItem] = useState();

  return (
    <div className="w-[100%] min-h-screen bg-[#6D4EFF] text-white font-sans">
      {/* Header */}
      <div className="w-[95%] mx-auto py-4">
        <div className="flex items-center justify-between p-4 pb-6">
          <img src="/public/img/logo.png" alt="" />
          <button 
            onClick={onClose}
            className="w-10 h-10 border border-2 border-black flex items-center justify-center transition-colors hover:bg-black/10"
          >
            <X size={25} color="black" />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="px-4 space-y-1 text-textclr">
          {/* Product Categories */}
          <div>
            <div
              className="flex items-center justify-between py-3 hover:bg-white/10 transition-colors cursor-pointer font-semibold"
              onClick={onToggleCategory}
            >
              <span>Všetky kategórie</span>
              <ChevronRight
                size={22}
                className={`w-10 h-8 transition-colors ${
                  activeItem === "Všetky kategórie"
                    ? "bg-white text-[#6D4EFF]"
                    : "text-white/70"
                }`}
              />
            </div>
            {/* Child Categories */}
            {activeItem === "Všetky kategórie" && (
              <div className="pl-6 space-y-1">
                {[
                  "iPhone",
                  "Apple AirPods",
                  "Macbook",
                  "iPad",
                  "Apple Watch",
                  "Príslušenstvo",
                ].map((subItem, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-3 hover:bg-white/10 transition-colors cursor-pointer font-semibold"
                  >
                    <span>{subItem}</span>
                    <ChevronRight
                      size={22}
                      className={`w-10 h-8 transition-colors ${
                        activeItem === subItem ? "bg-white text-[#6D4EFF]" : "text-white/70"
                      }`}
                      onClick={() =>
                        setActiveItem(activeItem === subItem ? null : subItem)
                      }
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <hr className="border-t-2 border-[#8A73F5]" />

          {/* Najpredávanejšie */}
          <div className="flex items-center justify-between py-3 hover:bg-white/10 transition-colors cursor-pointer font-semibold">
            <span>Najpredávanejšie</span>
            <ChevronRight
              size={18}
              className={`w-8 h-6 transition-colors rounded ${
                activeItem === "Najpredávanejšie"
                  ? "bg-white text-[#6D4EFF]"
                  : "text-white/70"
              }`}
              onClick={() =>
                setActiveItem(
                  activeItem === "Najpredávanejšie" ? null : "Najpredávanejšie"
                )
              }
            />
          </div>

          {/* Najnovšie with badge */}
          <div className="flex items-center justify-between py-3 hover:bg-white/10 transition-colors cursor-pointer font-semibold">
            <div className="flex items-center gap-2">
              <Star size={16} className="text-white" />
              <span>Najnovšie</span>
              <span className="bg-green-400 text-black text-xs px-2 py-1 font-semibold">
                Novinka!
              </span>
            </div>
            <ChevronRight
              size={18}
              className={`w-8 h-6 transition-colors rounded ${
                activeItem === "Najnovšie"
                  ? "bg-white text-[#6D4EFF]"
                  : "text-white/70"
              }`}
              onClick={() =>
                setActiveItem(activeItem === "Najnovšie" ? null : "Najnovšie")
              }
            />
          </div>

          {/* Zľavy with badge */}
          <div className="flex items-center justify-between py-3 hover:bg-white/10 transition-colors cursor-pointer font-semibold">
            <div className="flex items-center gap-2">
              <Tag size={16} className="text-white" />
              <span>Zľavy</span>
              <span className="bg-[#F54E80] text-white text-xs px-2 py-1 font-semibold">
                Výpredaj
              </span>
            </div>
            <ChevronRight
              size={18}
              className={`w-8 h-6 transition-colors rounded ${
                activeItem === "Zľavy" ? "bg-white text-[#6D4EFF]" : "text-white/70"
              }`}
              onClick={() => setActiveItem(activeItem === "Zľavy" ? null : "Zľavy")}
            />
          </div>

          <hr className="border-t-2 border-[#8A73F5]" />

          {/* Bottom section */}
          <div className="pt-4 space-y-1">
            {["Kontakt", "Často kladené otázky", "Blog"].map((item, index) => (
              <div
                key={index}
                className="py-3 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Obľúbené produkty */}
          <div className="flex items-center gap-2 py-3 hover:bg-white/10 transition-colors cursor-pointer border-t border-b py-4 border-[#8A73F5]">
            <Heart size={16} className="text-white" />
            <span>Obľúbené produkty</span>
          </div>

          {/* Sledujte nás */}
          <div className="pt-6 pb-10">
            <div className="mb-4">
              <span className="text-white font-semibold">Sledujte nás</span>
            </div>
            <div className="flex gap-6">
              <button>
                <FaFacebook color="white" size={22} />
              </button>
              <button>
                <FaInstagram color="white" size={22} />
              </button>
              <button>
                <FaYoutube color="white" size={22} />
              </button>
              <button>
                <FaWhatsapp color="white" size={22} />
              </button>
              <button>
                <FaTiktok color="white" size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar