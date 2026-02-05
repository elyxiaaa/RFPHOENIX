import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import LGS from "../assets/COMBI/LGS.jpg";
import GP from "../assets/COMBI/GP.jpg";
import GP1m from "../assets/COMBI/GP1M.jpg";
import CArmor from '../assets/COMBI/typecarmor.jpg'
import CWeapon from '../assets/COMBI/typecwep.jpg'
import Shield from '../assets/COMBI/typecshield.jpg'
import SGS from '../assets/COMBI/SGS.jpg'
import H1 from '../assets/COMBI/H1.jpg'
import H11 from '../assets/COMBI/h11.jpg'

function Combination() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("guide-section"); // Default to 'home-section'
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openDropdown2, setOpenDropdown2] = useState(null);
  const [openDropdown3, setOpenDropdown3] = useState(null);

  const dropdownRef = useRef(null);
  const dropdownRef2 = useRef(null);
  const dropdownRef3 = useRef(null);

  // Function to toggle dropdown and scroll to it
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
    if (dropdownRef.current && openDropdown !== index) {
      dropdownRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const toggleDropdown2 = (index) => {
    setOpenDropdown2(openDropdown2 === index ? null : index);
    if (dropdownRef2.current && openDropdown2 !== index) {
      dropdownRef2.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const toggleDropdown3 = (index) => {
    setOpenDropdown3(openDropdown3 === index ? null : index);
    if (dropdownRef3.current && openDropdown3 !== index) {
      dropdownRef3.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const dropdownData = [
    {
      title: 'RECYCLED GAMBLE BOX',
      content: (
        <div className="font-COP1">
        <h3 className="text-red-500 font-bold text-lg mb-2">RECYCLED GAMBLE BOX</h3>
        <p className="text-gray-200 mb-4">
          <strong>Material:</strong>
          <ul className="list-disc list-inside">
            <li>x1 Empty Cash Point Gamble Box</li>
             <li className="text-green-500">Chance: 100%</li>
               <li className="text-red-500">Fee: 10m Race Currency</li>
          </ul>
          <br />
          <strong>Result:</strong>
          <ul className="list-disc list-inside">
            <li>Cash Point Gamble Box</li>
          </ul>
        </p>
      </div>
      ),
    },
  ];

  const dropdownData2 = [
    {
      title: 'TYPE C ARMOR',
      content: (
        <div className="font-COP1">
          <h3 className="text-red-500 font-bold text-lg">+3/5 TYPE C ARMOR</h3>
          <p className="text-gray-200 mb-4">
            <strong>Material:</strong>
            <ul className="list-inside">
              <li>+5/5 Intense Lv50 Armor</li>
              <li>10pcs Armor Blueprint </li>
              <li>20pcs Ability Reaver </li>
              <li className="text-green-500">SAFE: Armor</li>
              <li className="text-red-500">Chance: 50%</li>
               <li className="text-red-500">Fee: 50m Race Currency</li>
            </ul>
            <strong>Result:</strong>
            <ul className="list-disc list-inside">
              <li>+3/5 Type C Lv50 Armor</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      title: 'TYPE C WEAPON',
      content: (
        <div className="font-COP1">
          <h3 className="text-red-500 font-bold text-lg">+3/5 TYPE C WEAPON</h3>
          <p className="text-gray-200 mb-4">
            <strong>Material:</strong>
            <ul className="list-inside">
              <li>+5/5 Intense Lv50 Weapon</li>
              <li>10pcs Weapon Blueprint </li>
              <li>20pcs Strong Ability Reaver </li>
              <li className="text-green-500">SAFE: Weapon</li>
              <li className="text-red-500">Chance: 50%</li>
               <li className="text-red-500">Fee: 50m Race Currency</li>
            </ul>
            <strong>Result:</strong>
            <ul className="list-disc list-inside">
              <li>+3/5 Type C Lv50 Weapon</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      title: 'PARAGON HELM',
      content: (
        <div className="font-COP1">
          <h3 className="text-red-500 font-bold text-lg">+5/5 Sharp / Strength / Strong Paragon Helm</h3>
          <p className="text-gray-200 mb-4">
            <strong>Material:</strong>
            <ul className="list-inside">
              <li>+5/5 Sharp / Strength / Strong Type C Helm</li>
              <li>1pc Feathers of the Lost Phoenix </li>
              <li>10pcs Energizer</li>
              <li>10pcs Sharp / Strength / Strong Ability Reaver</li>
               <li>5pcs Red Stone</li>
              <li className="text-green-500">SAFE: Helm</li>
              <li className="text-red-500">Chance: 50%</li>
               <li className="text-red-500">Fee: 100m Race Currency</li>
            </ul>
            <strong>Result:</strong>
            <ul className="list-disc list-inside">
              <li>+5/5 Sharp / Strength / Strong Paragon Helm</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      title: 'PARAGON CAPE',
      content: (
        <div className="font-COP1">
          <h3 className="text-red-500 font-bold text-lg">+5/5 Paragon Cape</h3>
          <p className="text-gray-200 mb-4">
            <strong>Material:</strong>
            <ul className="list-inside">
              <li>+5/5 Advanced Booster/Panzer Jets</li>
              <li>1pc Feathers of the Lost Phoenix </li>
              <li>10pcs Energizer</li>
              <li>10pcs Phoenix Cape Redeemer Coupon</li>
               <li>5pcs Red Stone</li>
              <li className="text-green-500">SAFE: Booster</li>
              <li className="text-red-500">Chance: 50%</li>
               <li className="text-red-500">Fee: 100m Race Currency</li>
            </ul>
            <strong>Result:</strong>
            <ul className="list-disc list-inside">
              <li>+5/5 Paragon Cape</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      title: 'PHOENIX GOLDEN WIND WEAPON',
      content: (
        <div className="font-COP1">
          <h3 className="text-red-500 font-bold text-lg">PHOENIX GOLDEN WIND WEAPON</h3>
          <p className="text-gray-200 mb-4">
            <strong>Material:</strong>
            <ul className="list-inside">
              <li>Legacy Blade</li>
              <li>Golden Wind Weapon </li>
              <li>5pcs Seal of Phoenix</li>
              <li>99pcs Weapon Blueprint</li>
               <li>5pcs Red Stone</li>
              <li className="text-green-500">Chance: 100%</li>
               <li className="text-red-500">Fee: 1.5b Race Currency</li>
            </ul>
            <strong>Result:</strong>
            <ul className="list-disc list-inside">
              <li>Phoenix Golden Weapon</li>
            </ul>
          </p>
        </div>
      ),
    },
];

return (
  <>
    <Navbar activeTab={activeTab} />
    <div
       id="guide-section"
       className="w-full min-h-screen bg-BG1 bg-cover bg-center relative"
       style={{ position: 'relative', backgroundAttachment: 'fixed' }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90"></div>

      {/* Combination Guide Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold font-COP1 mb-10 text-white text-shadow-red-glow">
          COMBINATION GUIDE
        </h1>
        
        <div 
          ref={dropdownRef}
          className="w-full max-w-4xl bg-gray-900 bg-opacity-90 rounded-lg p-6 shadow-xl space-y-4">
          {dropdownData.map((item, index) => (
            <div
              key={index}
              className="border border-red-500 rounded-lg bg-gray-800 bg-opacity-80"
            >
              <div
                className="flex justify-between items-center p-4 bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer"
                onClick={() => toggleDropdown(index)}
              >
                <h2 className="text-lg font-semibold text-red-400 font-COP1">
                  {item.title}
                </h2>
                <span className="text-red-400">
                  {openDropdown === index ? "▲" : "▼"}
                </span>
              </div>
              {/* Smooth transition for dropdown content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openDropdown === index ? "max-h-[2000px]" : "max-h-0"
                }`}
              >
                {openDropdown === index && (
                  <div className="p-4 bg-gray-800 rounded-b-lg shadow-inner font-COP1">
                    {item.content}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Second dropdown section */}
        <div
         ref={dropdownRef2}
          className="w-full max-w-4xl bg-gray-900 bg-opacity-90 rounded-lg p-6 shadow-xl space-y-4 mt-5">
          <h1 className="text-2xl md:text-3xl font-extrabold font-COP1 mb-10 text-white text-shadow-red-glow">
            PHOENIX GEARS
          </h1>
          {dropdownData2.map((item, index) => (
            <div
              key={index}
              className="border border-red-500 rounded-lg bg-gray-800 bg-opacity-80"
            >
              <div
                className="flex justify-between items-center p-4 bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer"
                onClick={() => toggleDropdown2(index)}
              >
                <h2 className="text-lg font-semibold text-red-400 font-COP1">
                  {item.title}
                </h2>
                <span className="text-red-400">
                  {openDropdown2 === index ? "▲" : "▼"}
                </span>
              </div>
              {/* Smooth transition for dropdown content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openDropdown2 === index ? "max-h-[2000px]" : "max-h-0"
                }`}
              >
                {openDropdown2 === index && (
                  <div className="p-4 bg-gray-800 rounded-b-lg shadow-inner font-COP1">
                    {item.content}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>



      </div>
    </div>
    <Footer />
  </>
);
}

export default Combination;