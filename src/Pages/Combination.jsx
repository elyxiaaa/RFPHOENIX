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
      title: 'T3 COUPON',
      content: (
        <div className="font-COP1">
        <h3 className="text-red-500 font-bold text-lg mb-2">T3 COUPON</h3>
        <p className="text-gray-200 mb-4">
          <strong>Material:</strong>
          <ul className="list-disc list-inside">
            <li>x1 / x50 / x99 T3 Gem Coupon</li>
          </ul>
          <br />
          <strong>Result:</strong>
          <ul className="list-disc list-inside">
            <li>x1 / x50 / x99 T3 Gems</li>
          </ul>
        </p>
        <img
          src="/src/assets/SnowSprayGuide.png"
          alt="T3 Crafting Guide"
          className="w-full h-auto rounded-lg border border-gray-600 shadow-lg"
        />
      </div>
      ),
    },
    {
      title: 'T4 COUPON',
      content: (
        <div className="font-COP1">
        <h3 className="text-red-500 font-bold text-lg mb-2">T4 COUPON</h3>
        <p className="text-gray-200 mb-4">
          <strong>Material:</strong>
          <ul className="list-disc list-inside">
            <li>x1 / x50 / x99 T4 Gem Coupon</li>
          </ul>
          <br />
          <strong>Result:</strong>
          <ul className="list-disc list-inside">
            <li>x1 / x50 / x99 T4 Gems</li>
          </ul>
        </p>
        <img
          src="/src/assets/SnowSprayGuide.png"
          alt="T4 Crafting Guide"
          className="w-full h-auto rounded-lg border border-gray-600 shadow-lg"
        />
      </div>
      ),
    },
    {
      title: 'T5 COUPON',
      content: (
        <div className="font-COP1">
        <h3 className="text-red-500 font-bold text-lg mb-2">T5 COUPON</h3>
        <p className="text-gray-200 mb-4">
          <strong>Material:</strong>
          <ul className="list-disc list-inside">
            <li>x1 / x50 / x99 T5 Gem Coupon</li>
          </ul>
          <br />
          <strong>Result:</strong>
          <ul className="list-disc list-inside">
            <li>x1 / x50 / x99 T5 Gems</li>
          </ul>
        </p>
        <img
          src={LGS}
          alt="T5 Crafting Guide"
          className="w-full h-auto rounded-lg border border-gray-600 shadow-lg"
        />
      </div>
      ),
    },
    {
      title: 'T6 COUPON',
      content: (
        <div className="font-COP1">
        <h3 className="text-red-500 font-bold text-lg mb-2">T6 COUPON</h3>
        <p className="text-gray-200 mb-4">
          <strong>Material:</strong>
          <ul className="list-disc list-inside">
            <li>x1 / x50 / x99 T6 Gem Coupon</li>
          </ul>
          <br />
          <strong>Result:</strong>
          <ul className="list-disc list-inside">
            <li>x1 / x50 / x99 T6 Gems</li>
          </ul>
        </p>
        <img
          src={SGS}
          alt="T5 Crafting Guide"
          className="w-full h-auto rounded-lg border border-gray-600 shadow-lg"
        />
      </div>
      ),
    },
    {
      title: 'GOLD POTION',
      content: (
        <div className="font-COP1">
          <h3 className="text-red-500 font-bold text-lg mb-2">GOLD POTION +12,375</h3>
          <p className="text-gray-200 mb-4">
            <strong>Material:</strong>
            <ul className="list-disc list-inside">
              <li>x99 Gold Potion +25</li>
              <li>x99 Gold Potion +25</li>
              <li>x99 Gold Potion +25</li>
              <li>x99 Gold Potion +25</li>
              <li>x99 Gold Potion +25</li>
            </ul>
            <br />
            <strong>Result:</strong>
            <ul className="list-disc list-inside">
              <li>x1 Gold Potion +12,375</li>
            </ul>
          </p>
          <img
            src={GP}
            alt="Gold Potion Crafting Guide"
            className="w-full h-auto rounded-lg border border-gray-600 shadow-lg"
          />
          
          {/* Separator Line */}
          <hr className="my-8 border-gray-600 border-2 " />

          <h3 className="text-red-500 font-bold text-lg mb-2">GOLD POTION + 1,225,125</h3>
          <p className="text-gray-200 mb-4">
            <strong>Material:</strong>
            <ul className="list-disc list-inside">
              <li>x99 Gold Potion +12 375</li>
            </ul>
            <br />
            <strong>Result:</strong>
            <ul className="list-disc list-inside">
              <li>x1 Gold Potion +1,225,125</li>
            </ul>
          </p>
          <img
            src={GP1m}
            alt="Gold Potion Crafting Guide"
            className="w-full h-auto rounded-lg border border-gray-600 shadow-lg"
          />
        </div>
      ),
    },
    {
      title: 'ENHANCERS UPGRADE',
      content: (
        <div className="font-COP1">
          <h3 className="text-red-500 font-bold text-lg mb-2">Brilliant - Epic Enhancer</h3>
          <p className="text-gray-200 mb-4">
            <strong>Material:</strong>
            <ul className="list-disc list-inside">
              <li>x25 Apex Brilliant Enhancer</li>
              <li>x25 T3 Gems</li>
              <li>x25 T3 Gems</li>
              <li>x25 T3 Gems</li>
              <li>x25 T3 Gems</li>
              <li className="text-red-500">Chance: 100%</li>
            </ul>
            <br />
            <strong>Result:</strong>
            <ul className="list-disc list-inside">
              <li>x1 Apex Epic Enhancer</li>
            </ul>
          </p>
          <hr className="my-8 border-gray-600 border-2 " />
          <h3 className="text-red-500 font-bold text-lg mb-2">Epic - Mythical Enhancer</h3>
          <p className="text-gray-200 mb-4">
            <strong>Material:</strong>
            <ul className="list-disc list-inside">
              <li>x1 Epic Material Enhancer</li>
              <li>x1 Epic Armor Enhancer</li>
              <li>x1 Epic Weapon Enhancer</li>
              <li className="text-red-500">Fee: 500m</li>
              <li className="text-red-500">Chance: 30%</li>
            </ul>
            <br />
            <strong>Result:</strong>
            <ul className="list-disc list-inside">
              <li>x1 Apex Mythical Enhancer</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      title: 'ENHANCER CONVERSION',
      content: (
        <div className="font-COP1">
          <h3 className="text-red-500 font-bold text-lg mb-2">Brilliant Enhancer</h3>
          <p className="text-gray-200 mb-4">
            <strong>Material:</strong>
            <ul className="list-disc list-inside">
              <li>x1 Brilliant Enhancer ( Weapon/Armor/Material )</li>
              <li className="text-red-500">Fee: 150m</li>
              <li className="text-red-500">Chance: 100%</li>
            </ul>
            <br />
            <strong>Result:</strong>
            <ul className="list-disc list-inside">
              <li>Choose 1: x1 Brilliant Enhancer ( Weapon/Armor/Material )</li>
            </ul>
          </p>
          <hr className="my-8 border-gray-600 border-2 " />
          <h3 className="text-red-500 font-bold text-lg mb-2">Epic Enhancer</h3>
          <p className="text-gray-200 mb-4">
            <strong>Material:</strong>
            <ul className="list-disc list-inside">
              <li>x1 Epic Enhancer ( Weapon/Armor/Material )</li>
              <li className="text-red-500">Fee: 150m</li>
              <li className="text-red-500">Chance: 100%</li>
            </ul>
            <br />
            <strong>Result:</strong>
            <ul className="list-disc list-inside">
              <li>Choose 1: x1 Epic Enhancer ( Weapon/Armor/Material )</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      title: 'BATTLEPASS LEVELUP',
      content: (
        <div className="font-COP1">
          <h3 className="text-red-500 font-bold text-lg">Level 1 to 200</h3>
          <p className="text-gray-200 mb-4">
            <strong>Material:</strong>
            <ul className="list-disc list-inside">
              <li>Apex Seasonal Battlepass Blade</li>
              <li>x10 Nemestice Stone </li>
              <li>x10 Azure Stone</li>
              <li>x15 +12,375 Gold Points</li>
              <li className="text-red-500">SAFE: WEAPON</li>
              <li className="text-red-500">Chance:</li>
              <li className="text-orange-500">Brilliant: 50%</li>
          <li className="text-blue-500">Epic: 75%</li>
          <li className="text-green-500">Mythical: 100%</li>
            </ul>
            <br />
            <strong>Result:</strong>
            <ul className="list-disc list-inside">
              <li>Next Level Battlepass</li>
            </ul>
          </p>
        </div>
      ),
    },
    
   
  ];

  const dropdownData2 = [
    {
      title: '+5/6 TYPE C WEAPON ➜ APEX PERMANENT',
      content: (
        <div className="font-COP1">
          <h3 className="text-red-500 font-bold text-lg">+5/6 TYPE C WEAPON TO APEX PERMANENT</h3>
          <p className="text-gray-200 mb-4">
            <strong>Material:</strong>
            <ul className="list-disc list-inside">
              <li>+5/6 Strong Intense Weapon [C]</li>
              <li>99pc Gold Potion +12,375 </li>
              <li>99pc Gold Potion +12,375 </li>
              <li>1pc Apex Brilliant/Epic/Mythical Weapon Enhancer</li>
              <li className="text-red-500">SAFE: WEAPON</li>
              <li className="text-red-500">Chance:</li>
              <li className="text-orange-500">Brilliant: 10%</li>
              <li className="text-blue-500">Epic: 50%</li>
              <li className="text-green-500">Mythical: 100%</li>
            </ul>
            <br />
            <strong>Result:</strong>
            <ul className="list-disc list-inside">
              <li>+5/6 STRONG APEX WEAPON [PERMANENT]</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      title: '+5/6 TYPE C ARMOR ➜ APEX PERMANENT',
      content: (
        <div className="font-COP1">
          <h3 className="text-red-500 font-bold text-lg">+5/6 TYPE C ARMOR TO APEX PERMANENT</h3>
          <p className="text-gray-200 mb-4">
            <strong>Material:</strong>
            <ul className="list-disc list-inside">
              <li>+5/6 Strong/Sharp/Strength Armor [C]</li>
              <li>99pc Gold Potion +12,375 </li>
              <li>99pc Gold Potion +12,375 </li>
              <li>1pc Apex Brilliant/Epic/Mythical Weapon Enhancer</li>
              <li className="text-red-500">SAFE: ARMOR</li>
              <li className="text-red-500">Chance:</li>
              <li className="text-orange-500">Brilliant: 10%</li>
              <li className="text-blue-500">Epic: 50%</li>
              <li className="text-green-500">Mythical: 100%</li>
            </ul>
            <br />
            <strong>Result:</strong>
            <ul className="list-disc list-inside">
              <li>+5/6 STRONG/SHARP/STRENGTH APEX ARMOR [PERMANENT]</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      title: '+5/6 INTENSE SHIELD [B] ➜ APEX SHIELD[C]',
      content: (
        <div className="font-COP1">
          <h3 className="text-red-500 font-bold text-lg mb-2">+5/6 INTENSE SHIELD [B] TO APEX SHIELD [C]</h3>
          <p className="text-gray-200 mb-4">
            <strong>Material:</strong>
            <ul className="list-disc list-inside">
              <li>+5/6 Lv45/55 Intense Shield</li>
              <li>99pc Red Excelsiar C</li>
              <li>99pc Anti-Sharp / Protection Ability Reaver</li>
              <li>30pc Talic Crystal</li>
              <li>30pc Red Stone</li>
              <li className="text-red-500">SAFE: SHIELD</li>
              <li className="text-red-500"><strong>Chance: 20%</strong></li>
            </ul>
            <br />
            <strong>Result:</strong>
            <ul className="list-disc list-inside">
              <li>+5/6 Anti-Sharp / Protection Apex Shield [C]</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      title: '+5/6 PROTOTYPE GLIDER ➜ RACIAL GLIDER',
      content: (
        <div className="font-COP1">
          <h3 className="text-red-500 font-bold text-lg mb-2">+5/6 PROTOTYPE GLIDER TO RACIAL GLIDER</h3>
          <p className="text-gray-200 mb-4">
            <strong>Material:</strong>
            <ul className="list-disc list-inside">
              <li>+5/6 Prototype Glider</li>
              <li>99pc Olive Excelsiar C</li>
              <li>30pc Talic Crystal</li>
              <li>30pc Red Stone</li>
              <li className="text-red-500">SAFE: GLIDER</li>
              <li className="text-red-500"><strong>Chance: 20%</strong></li>
            </ul>
            <br />
            <strong>Result:</strong>
            <ul className="list-disc list-inside">
              <li>+5/6 RACIAL GLIDER</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      title: '+5/6 RACIAL GLIDER ➜ ELITE RACIAL GLIDER',
      content: (
        <div className="font-COP1">
          <h3 className="text-red-500 font-bold text-lg">+5/6 Racial Glider to Elite Racial Glider</h3>
          <p className="text-gray-200 mb-4">
            <strong>Material:</strong>
            <ul className="list-disc list-inside">
              <li>+5/6 Racial Glider</li>
              <li>99pc Gold Potion +12,375 </li>
              <li>1pc Apex Brilliant/Epic/Mythical Material Enhancer</li>
              <li className="text-red-500">SAFE: WEAPON</li>
              <li className="text-red-500">Chance:</li>
              <li className="text-orange-500">Brilliant: 10%</li>
              <li className="text-blue-500">Epic: 50%</li>
              <li className="text-green-500">Mythical: 100%</li>
            </ul>
            <br />
            <strong>Result:</strong>
            <ul className="list-disc list-inside">
              <li>+5/6 Elite Racial Glider</li>
            </ul>
          </p>
  
        </div>
      ),
    },
];

const dropdownData3 =[
  {
    title: '+6/6 TYPE C WEAPON ➜ APEX PERMANENT',
    content: (
      <div className="font-COP1">
        <h3 className="text-red-500 font-bold text-lg">TYPE C WEAPON TO APEX PERMANENT</h3>
        <p className="text-gray-200 mb-4">
          <strong>Material:</strong>
          <ul className="list-disc list-inside">
            <li>+6 Strong Intense Weapon [C]</li>
            <li>99pc Gold Potion +12,375 </li>
            <li>1pc Apex Brilliant/Epic/Mythical Weapon Enhancer</li>
            <li className="text-red-500">SAFE: WEAPON</li>
            <li className="text-red-500">Chance:</li>
            <li className="text-orange-500">Brilliant: 10%</li>
        <li className="text-blue-500">Epic: 50%</li>
        <li className="text-green-500">Mythical: 100%</li>
          </ul>
          <br />
          <strong>Result:</strong>
          <ul className="list-disc list-inside">
            <li>+6 STRONG APEX WEAPON [PERMANENT]</li>
          </ul>
        </p>
      </div>
    ),
  },
{
    title: '+6/6 TYPE C ARMOR ➜ APEX PERMANENT',
    content: (
      <div className="font-COP1">
        <h3 className="text-red-500 font-bold text-lg">+6/6 TYPE C ARMOR TO APEX PERMANENT</h3>
        <p className="text-gray-200 mb-4">
          <strong>Material:</strong>
          <ul className="list-disc list-inside">
            <li>+6 Strong/Sharp/Strength Armor [C]</li>
            <li>99pc Gold Potion +12,375 </li>
            <li>1pc Apex Brilliant/Epic/Mythical Weapon Enhancer</li>
            <li className="text-red-500">SAFE: WEAPON</li>
            <li className="text-red-500">Chance:</li>
            <li className="text-orange-500">Brilliant: 10%</li>
            <li className="text-blue-500">Epic: 50%</li>
            <li className="text-green-500">Mythical: 100%</li>
          </ul>
          <br />
          <strong>Result:</strong>
          <ul className="list-disc list-inside">
            <li>+6 STRONG/SHARP/STRENGTH APEX ARMOR [PERMANENT]</li>
          </ul>
        </p>

      </div>
    ),
  },
{
    title: '+6/6 INTENSE SHIELD [B] ➜ APEX SHIELD[C] ',
    content: (
      <div className="font-COP1">
        <h3 className="text-red-500 font-bold text-lg mb-2">+6/6 INTENSE SHIELD [B] TO APEX SHIELD [C]</h3>
        <p className="text-gray-200 mb-4">
          <strong>Material:</strong>
          <ul className="list-disc list-inside">
            <li>+6/6 Lv45/55 Intense Shield</li>
            <li>99pc Red Excelsiar C</li>
            <li>99pc Anti-Sharp / Protection Ability Reaver</li>
            <li>30pc Talic Crystal</li>
            <li>30pc Red Stone</li>
            <li className="text-red-500">SAFE: SHIELD</li>
            <li className="text-red-500"><strong>Chance: 20%</strong></li>
          </ul>
          <br />
          <strong>Result:</strong>
          <ul className="list-disc list-inside">
            <li>+6/6 Anti-Sharp / Protection Apex Shield [C]</li>
          </ul>
        </p>
        <img
          src={Shield}
          alt="Apex Armor Crafting Guide"
          className="w-full h-auto rounded-lg border border-gray-600 shadow-lg"
        />
      </div>
    ),
  },
{
    title: '+6/6 PROTOTYPE GLIDER ➜ RACIAL GLIDER ',
    content: (
      <div className="font-COP1">
        <h3 className="text-red-500 font-bold text-lg mb-2">+6/6 PROTOTYPE GLIDER TO RACIAL GLIDER</h3>
        <p className="text-gray-200 mb-4">
          <strong>Material:</strong>
          <ul className="list-disc list-inside">
            <li>+6/6 Prototype Glider</li>
            <li>99pc Olive Excelsiar C</li>
            <li>30pc Talic Crystal</li>
            <li>30pc Red Stone</li>
            <li className="text-red-500">SAFE: GLIDER</li>
            <li className="text-red-500"><strong>Chance: 20%</strong></li>
          </ul>
          <br />
          <strong>Result:</strong>
          <ul className="list-disc list-inside">
            <li>+6/6 RACIAL GLIDER</li>
          </ul>
        </p>
        <img
          src="/src/assets/SnowSprayGuide.png"
          alt="Apex Armor Crafting Guide"
          className="w-full h-auto rounded-lg border border-gray-600 shadow-lg"
        />
      </div>
    ),
  },
{
    title: '+6/6 RACIAL GLIDER ➜ ELITE RACIAL GLIDER',
    content: (
      <div className="font-COP1">
        <h3 className="text-red-500 font-bold text-lg">+6/6 Racial Glider to Elite Racial Glider</h3>
        <p className="text-gray-200 mb-4">
          <strong>Material:</strong>
          <ul className="list-disc list-inside">
            <li>+6/6 Racial Glider</li>
            <li>99pc Gold Potion +12,375 </li>
            <li>1pc Apex Brilliant/Epic/Mythical Material Enhancer</li>
            <li className="text-red-500">SAFE: WEAPON</li>
            <li className="text-red-500">Chance:</li>
            <li className="text-orange-500">Brilliant: 10%</li>
            <li className="text-blue-500">Epic: 50%</li>
            <li className="text-green-500">Mythical: 100%</li>
          </ul>
          <br />
          <strong>Result:</strong>
          <ul className="list-disc list-inside">
            <li>+6/6 Elite Racial Glider</li>
          </ul>
        </p>

      </div>
    ),
  },
]
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
            +5/6 APEX SET
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

        <div
         ref={dropdownRef3}
          className="w-full max-w-4xl bg-gray-900 bg-opacity-90 rounded-lg p-6 shadow-xl space-y-4 mt-5">
          <h1 className="text-2xl md:text-3xl font-extrabold font-COP1 mb-10 text-white text-shadow-red-glow">
            +6/6 APEX SET
          </h1>
          {dropdownData3.map((item, index) => (
            <div
              key={index}
              className="border border-red-500 rounded-lg bg-gray-800 bg-opacity-80"
            >
              <div
                className="flex justify-between items-center p-4 bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer"
                onClick={() => toggleDropdown3(index)}
              >
                <h2 className="text-lg font-semibold text-red-400 font-COP1">
                  {item.title}
                </h2>
                <span className="text-red-400">
                  {openDropdown3 === index ? "▲" : "▼"}
                </span>
              </div>
              {/* Smooth transition for dropdown content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openDropdown3 === index ? "max-h-[2000px]" : "max-h-0"
                }`}
              >
                {openDropdown3 === index && (
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