import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

function Footer() {

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-[95%] lg:w-[90%] mx-auto pt-6 lg:pt-8 gap-6 lg:gap-0">
        <div className="p-4 lg:p-8">
          <img src="/public/img/logo.png" alt="" className="w-60 lg:w-80 mx-auto lg:mx-0" />
          <div className="py-6 lg:py-8 text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight p-2">
              Postaráme sa o vás
            </h2>
            <p className="text-[#999999] p-2 text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae aperiam similique sint ad blanditi
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:block">
          <img src="/public/img/content.png" alt="" className="max-w-full h-auto" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] lg:w-[85%] mx-auto mt-8 lg:mt-10 gap-8 lg:gap-0">
        <div className="text-center lg:text-left">
          <h4 className="font-semibold mb-4">Kontaktné údaje</h4>
          <div className="space-y-2 text-sm text-gray-400">
            <p>+421 919 215 491</p>
            <p>Rastislavova 66, Košice</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between gap-6 lg:gap-0">
          <div className="text-center lg:text-left">
            <h4 className="font-semibold mb-4">Customer service</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Kontaktujte nás</p>
              <p>FAQs</p>
              <p>Vrátenie zásielky</p>
              <p>Doručenie</p>
              <p>Sledovanie zásielky</p>
              <p>Platby a cenovvorba</p>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h4 className="font-semibold mb-4">Ine</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Lorem, ipsum dolor sit amet </p>
              <p>Lorem, ipsum dolor sit amet</p>
              <p>Lorem, ipsum dolor sit </p>
              <p>Lorem, ipsum dolor sit </p>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h4 className="font-semibold mb-4">Mobilecare</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>O nás</p>
              <p>Blog</p>
              <p>Kariéra</p>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h4 className="font-semibold mb-4">Členstvo, zľavy a akcie</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Odporučte nás a dostať zľavu 10%</p>
              <p>Věrnostný program</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto mt-8 lg:mt-0 text-center lg:text-left">
        <h4 className="font-semibold mb-4">Sledujte nás</h4>
        <div className="flex space-x-4 justify-center lg:justify-start">
          <FaFacebook size={20} className="cursor-pointer " />
          <FaInstagram size={20} className="cursor-pointer " />
          <FaYoutube size={20} className="cursor-pointer " />
          <FaWhatsapp size={20} className="cursor-pointer " />
          <FaTiktok size={20} className="cursor-pointer" />
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 lg:mt-24 px-4 lg:px-12 pb-8">
        <div className="w-[95%] lg:w-[90%] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 lg:mb-12 text-gray-900 text-center lg:text-left">
            <div>
              <h4 className="font-semibold mb-2 text-2xl lg:text-4xl text-gray-900">
                Slovensko
              </h4>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-2xl lg:text-4xl">Česká republika</h4>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-2xl lg:text-4xl">România</h4>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-2xl lg:text-4xl">Polska</h4>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-4 lg:gap-0">
            <div className="text-xs text-gray-500 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-center lg:text-left">
              <span>Podmienky používania</span>
              <span>GDPR</span>
              <span>Ochrana osobných údajov</span>
            </div>
            <div className="flex space-x-2 flex-wrap justify-center lg:justify-end">
              <img
                src="/public/img/visa-logo.png"
                alt=""
                className="bg-white h-6 lg:h-auto"
              />

              <img src="/public/img/Payment Icons (1).png" alt="" className="h-6 lg:h-auto" />

              <img src="/public/img/Payment Icons.png" alt="" className="h-6 lg:h-auto" />

              <img src="/public/img/Payment Icons (2).png" alt="" className="h-6 lg:h-auto" />

              <img src="/public/img/Payment Icons (3).png" alt="" className="h-6 lg:h-auto" />

              <img src="/public/img/Payment Icons (4).png" alt="" className="h-6 lg:h-auto" />

              <img src="/public/img/Payment Icons (5).png" alt="" className="h-6 lg:h-auto" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer