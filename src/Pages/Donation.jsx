import {  useState } from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer'

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import { TbHexagonLetterGFilled } from "react-icons/tb";
import { FaPaypal } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";


function Donation() {
  const [activeTab, setActiveTab] = useState('donation-section'); // Default to 'home-section' 

  return (
    <>
      <Navbar activeTab={activeTab}/>
{/* Blizzard-Level Cash Shop Section — BRIGHTER */}
<div
  id="cash-section"
  className="relative w-full min-h-fit bg-BG6 bg-cover bg-center py-24 px-6 text-white overflow-hidden"
>
  {/* 🔥 Cinematic Fire Gradient Overlay (MATCH LEADERBOARDS) */}
  <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/90 to-black"></div>

  {/* 🔥 Ambient Glow */}
  <div className="absolute inset-0 pointer-events-none
    bg-[radial-gradient(circle_at_top,rgba(255,80,0,0.25),transparent_60%)]" />

  <div className="relative max-w-7xl mx-auto">

    {/* HEADER */}
    <h2 className="text-6xl font-COP1 font-semibold text-center mb-16
      bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400
      bg-clip-text text-transparent
      drop-shadow-[0_0_18px_rgba(255,80,0,0.9)]">
      DONATE
    </h2>

{/* MAIN 2-COLUMN LAYOUT */}
<div className="grid lg:grid-cols-2 gap-12">

  {/* LEFT COLUMN */}
  <div className="space-y-8">

    {/* CASH CONVERSION */}
    <div className="p-8 rounded-2xl
      bg-black/60 backdrop-blur-xl
      border border-red-500/30
      shadow-[0_0_35px_rgba(255,60,0,0.25)] text-center"
    >
      <h3 className="text-lg text-orange-300 font-semibold tracking-widest">
        CASH CONVERSION
      </h3>

      <p className="text-4xl font-bold mt-3 tracking-wide text-white">
        1 PHP = 100 Cash Coins
      </p>
    </div>

    {/* PAYMENT METHODS */}
    <div className="p-7 rounded-2xl
      bg-black/60 backdrop-blur-xl
      border border-red-500/30
      shadow-[0_0_30px_rgba(255,80,0,0.25)]
      hover:shadow-[0_0_45px_rgba(255,120,0,0.45)]
      transition-all duration-300"
    >
      <h3 className="text-xl font-semibold text-orange-300 text-center tracking-wide">
        PAYMENT METHODS
      </h3>

      <ul className="mt-6 space-y-3 text-sm text-gray-100">
        <li className="flex items-center gap-2">
          <TbHexagonLetterGFilled className="text-blue-400" />
          <strong>GCash:</strong> 09173201162
        </li>

        <li className="flex items-center gap-2">
          <FaPaypal className="text-blue-400" />
          <strong>PayPal:</strong> vishnuancheta29@gmail.com
        </li>

        <li className="flex items-center gap-2">
          <BsBank2 className="text-green-400" />
          <strong>BDO:</strong> 012930022805
        </li>

        <li className="flex items-center gap-2">
          <BsBank2 className="text-green-400" />
          <strong>BPI:</strong> 8129101904
        </li>
      </ul>
    </div>
  </div>


  {/* RIGHT COLUMN — FEES */}
  <div className="p-8 rounded-2xl
    bg-black/60 backdrop-blur-xl
    border border-red-500/30
    shadow-[0_0_45px_rgba(255,60,0,0.25)]
    space-y-8"
  >
    {[
      { title: "PROCESSING FEES", items: [["Character Job","200"],["Character Gender","200"]] },
      { title: "CONVERSION FEES", items: [["Intense Weapon/Armor","100/pc"],["Type C Weapon/Armor","150/pc"]] },
      { title: "TRANSFER FEES", items: [["Intense Weapon/Armor","100/pc"],["Type C Weapon/Armor","150/pc"]] },
      { title: "PACKAGE FEES", items: [["Package Conversion","1500"],["Package Race Transfer","1500"],["Additional Bags","300"]] },
    ].map(section => (
      <div key={section.title}>
        <h4 className="text-orange-300 font-semibold text-center mb-3">
          {section.title}
        </h4>

        <ul className="space-y-1 text-sm text-gray-200">
          {section.items.map(([name, price]) => (
            <li key={name} className="flex justify-between">
              <span>{name}</span>
              <span className="text-orange-200">{price}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}

    {/* PROCESSING RULES */}
    <div>
      <h4 className="text-orange-300 font-semibold text-center mb-3">
        PROCESSING RULES
      </h4>

      <ul className="space-y-1 text-sm text-gray-200 text-center">
        <li>No part conversion</li>
        <li>No talic conversion</li>
        <li>Extra fees apply for class / ability / race / weapon changes</li>
      </ul>
    </div>
  </div>

</div>

  </div>
</div>




      <Footer />
    </>
  )
}

export default Donation
