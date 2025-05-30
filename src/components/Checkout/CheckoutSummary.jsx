import React, { useState } from "react";
import { Truck } from "lucide-react";

function CheckoutSummary() {
  const [showPriceWithoutTax, setShowPriceWithoutTax] = useState(false);
  const [voucherCode, setVoucherCode] = useState("");

  return (
    <div className="w-[90%] mx-auto bg-white p-6 space-y-6">
      {/* Delivery Section */}
      <div className="flex items-center justify-between p-4 bg-gray-50 ">
        <div className="flex items-center space-x-3">
          <Truck className="w-6 h-6" />
          <span className="font-semibold text-gray-900">Doručíme</span>
        </div>
        <span className="text-gray-600">Pon, 19. 8 - Ut, 20. 8</span>
      </div>

      {/* Payment Methods Section */}
      <div className="flex justify-between">
        <h3 className="font-semibold text-gray-900 mb-4">Akceptujeme platby</h3>
        <div className="flex items-center space-x-3">
          <img src="/public/img/visa-logo.png" alt="" />

          <img src="/public/img/Payment Icons (1).png" alt="" />

          <img src="/public/img/Payment Icons.png" alt="" />

          <img src="/public/img/Payment Icons (2).png" alt="" />

          <img src="/public/img/Payment Icons (3).png" alt="" />

          <img src="/public/img/Payment Icons (4).png" alt="" />

          <img src="/public/img/Payment Icons (5).png" alt="" />
        </div>
      </div>

      {/* Voucher Section */}
      <div>
        <div className="flex items-center justify-between space-x-4">
          <span className="font-semibold text-gray-900">Voucher</span>
          <input
            type="text"
            placeholder="Zľavový kód"
            value={voucherCode}
            onChange={(e) => setVoucherCode(e.target.value)}
            className="px-6  py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          />
        </div>
      </div>



      {/* Order Summary */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-900">Spolu položky</span>
          <span className="font-semibold text-gray-900">3778 €</span>
        </div>

        <div className="flex justify-between items-center">
          <span className=" font-semibold">Doprava:</span>
          <span className=" font-semibold">0 €</span>
        </div>

        <hr className="border-gray-200" />

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-900">Spolu:</span>
            <span className="text-gray-500">(vrátane DPH)</span>
          </div>
          <span className="text-3xl font-bold text-gray-900">3778 €</span>
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
          <label htmlFor="showWithoutTax" className="text-gray-600 text-sm">
            zobraziť cenu bez DPH
          </label>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4 pt-4">
        <button className="flex-1 px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold  hover:bg-gray-50 transition-colors">
          Pokračovať v nákupe
        </button>
        <button className="flex-1 px-6 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition-colors">
          Do pokladne
        </button>
      </div>
    </div>
  );
}

export default CheckoutSummary;
