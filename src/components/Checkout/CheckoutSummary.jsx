import React, { useState } from "react";
import { Truck } from "lucide-react";

function CheckoutSummary() {
  const [showPriceWithoutTax, setShowPriceWithoutTax] = useState(false);
  const [voucherCode, setVoucherCode] = useState("");

  return (
    <div className="w-[95%] sm:w-[90%] mx-auto bg-white p-3 sm:p-6 space-y-4 sm:space-y-6">
      {/* Delivery Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 bg-gray-50 gap-2 sm:gap-0">
        <div className="flex items-center space-x-3">
          <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="font-semibold text-gray-900 text-sm sm:text-base">Doručíme</span>
        </div>
        <span className="text-gray-600 text-sm sm:text-base">Pon, 19. 8 - Ut, 20. 8</span>
      </div>

      {/* Payment Methods Section */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
        <h3 className="font-semibold text-gray-900 mb-2 sm:mb-4 text-sm sm:text-base">Akceptujeme platby</h3>
        <div className="flex items-center space-x-2 sm:space-x-3 flex-wrap">
          <img src="/public/img/visa-logo.png" alt="" className="h-6 sm:h-auto" />
          <img src="/public/img/Payment Icons (1).png" alt="" className="h-6 sm:h-auto" />
          <img src="/public/img/Payment Icons.png" alt="" className="h-6 sm:h-auto" />
          <img src="/public/img/Payment Icons (2).png" alt="" className="h-6 sm:h-auto" />
          <img src="/public/img/Payment Icons (3).png" alt="" className="h-6 sm:h-auto" />
          <img src="/public/img/Payment Icons (4).png" alt="" className="h-6 sm:h-auto" />
          <img src="/public/img/Payment Icons (5).png" alt="" className="h-6 sm:h-auto" />
        </div>
      </div>

      {/* Voucher Section */}
      <div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 sm:space-x-4">
          <span className="font-semibold text-gray-900 text-sm sm:text-base">Voucher</span>
          <input
            type="text"
            placeholder="Zľavový kód"
            value={voucherCode}
            onChange={(e) => setVoucherCode(e.target.value)}
            className="w-full sm:w-auto px-4 sm:px-6 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Order Summary */}
      <div className="space-y-3 sm:space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-900 text-sm sm:text-base">Spolu položky</span>
          <span className="font-semibold text-gray-900 text-sm sm:text-base">3778 €</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-semibold text-sm sm:text-base">Doprava:</span>
          <span className="font-semibold text-sm sm:text-base">0 €</span>
        </div>

        <hr className="border-gray-200" />

        <div className="flex justify-between items-center">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
            <span className="font-semibold text-gray-900 text-sm sm:text-base">Spolu:</span>
            <span className="text-gray-500 text-xs sm:text-base">(vrátane DPH)</span>
          </div>
          <span className="text-2xl sm:text-3xl font-bold text-gray-900">3778 €</span>
        </div>

        {/* Tax Checkbox */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="showWithoutTax"
            checked={showPriceWithoutTax}
            onChange={(e) => setShowPriceWithoutTax(e.target.checked)}
            className="w-4 h-4 focus:ring-blue-500"
          />
          <label htmlFor="showWithoutTax" className="text-gray-600 text-xs sm:text-sm">
            zobraziť cenu bez DPH
          </label>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
        <button className="flex-1 px-4 sm:px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-50 transition-colors text-sm sm:text-base">
          Pokračovať v nákupe
        </button>
        <button className="flex-1 px-4 sm:px-6 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition-colors text-sm sm:text-base">
          Do pokladne
        </button>
      </div>
    </div>
  );
}

export default CheckoutSummary;