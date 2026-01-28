import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useLocation } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

function Droplist() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("guide-section"); // Default to 'home-section'
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openDropdown2, setOpenDropdown2] = useState(null);

  const dropdownRef = useRef(null);
  const dropdownRef2 = useRef(null);

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
  const dropdownData = [
    {
      title: 'HQ & SETTLEMENT PITBOSS',
      content: (
        <div className="font-COP1">
          <p className="text-gray-200 mb-4">
            <ul className="list-disc list-inside">
              <li>T1 Gems</li>
              <li>T2 Gems</li>
              <li>T3 Gems</li>
              <li>Random Elementals</li>
              <li>Silver Pig Statue</li>
            </ul>
          </p>
          <img
            src="/src/assets/SnowSprayGuide.png"
            alt="HQ/Settlement Guide"
            className="w-full h-auto rounded-lg border border-gray-600 shadow-lg"
          />
        </div>
      ),
    },
    {
      title: 'HUGE BEACON',
      content: (
        <div className="font-COP1">
          <p className="text-gray-200 mb-4">
            <ul className="list-disc list-inside">
              <li>Gold Capsule +5000</li>
              <li>Gold Capsule +10000</li>
              <li>Brilliant Enhancers</li>
              <li>Silver Pig</li>
              <li>Gold Pig</li>
              <li>T4 Gems</li>
              <li>T5 Gems</li>
              <li>T6 Gems <span className="text-green-500"> [UNCOMMON]</span></li>
            </ul>
          </p>
          <img
            src="/src/assets/SnowSprayGuide.png"
            alt="HQ/Settlement Guide"
            className="w-full h-auto rounded-lg border border-gray-600 shadow-lg"
          />
        </div>
      ),
    },
    {
      title: 'BELPHEGOR',
      content: (
        <div className="font-COP1">
          <p className="text-gray-200 mb-4">
            <ul className="list-disc list-inside">
              <li>T4 Gems</li>
              <li>T5 Gems</li>
              <li>Gold Capsule +5000</li>
              <li>Brilliant Enhancer</li>
              <li>Red Stone Box<span className="text-green-500"> [UNCOMMON]</span></li>
              <li>Talic Crystal<span className="text-green-500"> [UNCOMMON]</span></li>
              <li>Ability Gliders<span className="text-green-500"> [UNCOMMON]</span></li>
              <li>Silver Pig Statue<span className="text-green-500"> [UNCOMMON]</span></li>
            </ul>
          </p>
          <img
            src="/src/assets/SnowSprayGuide.png"
            alt="Belphegor Guide"
            className="w-full h-auto rounded-lg border border-gray-600 shadow-lg"
          />
        </div>
      ),
    },
    {
      title: 'CALLIANA PRINCESS',
      content: (
        <div className="font-COP1">
          <p className="text-gray-200 mb-4">
            <ul className="list-disc list-inside">
            <li>T4 Gems</li>
              <li>T5 Gems</li>
              <li>Gold Capsule +5000</li>
              <li>Brilliant Enhancer</li>
              <li>Red Stone Box<span className="text-green-500"> [UNCOMMON]</span></li>
              <li>Talic Crystal<span className="text-green-500"> [UNCOMMON]</span></li>
              <li>Ability Gliders<span className="text-green-500"> [UNCOMMON]</span></li>
              <li>Ability Gliders<span className="text-green-500"> [UNCOMMON]</span></li>
            </ul>
          </p>
          <img
            src="/src/assets/SnowSprayGuide.png"
            alt="Calliana Princess Guide"
            className="w-full h-auto rounded-lg border border-gray-600 shadow-lg"
          />
        </div>
      ),
    },
    {
      title: 'ELAN PITBOSS',
      content: (
        <div className="font-COP1">
          <p className="text-gray-200 mb-4">
            <ul className="list-disc list-inside">
              <li>T4 Gems</li>
              <li>Gold Capsule +1000</li>
              <li>Red Stone Box<span className="text-green-500"> [UNCOMMON]</span></li>
              <li>Lucky Set of Gem Exchanger<span className="text-green-500"> [UNCOMMON]</span></li>
              <li>Gold Pig Statue<span className="text-blue-500"> [RARE]</span></li>
              <li>Apex Permanent Armors (Random Slot)<span className="text-blue-500"> [RARE]</span></li>
              <li>Apex Epic Armor Enhancer<span className="text-purple-500"> [EPIC]</span></li>
              <li>Apex Epic Weapon Enhancer<span className="text-purple-500"> [EPIC]</span></li>
              <li>Apex Mythical Enhancer<span className="text-orange-500"> [MYTHIC]</span></li>
            </ul>
          </p>
          <img
            src="/src/assets/SnowSprayGuide.png"
            alt="Elan Pitboss Guide"
            className="w-full h-auto rounded-lg border border-gray-600 shadow-lg"
          />
        </div>
      ),
    },
    {
      title: '3D BROTHERS',
      content: (
        <div className="font-COP1">
          <p className="text-gray-200 mb-4">
            <ul className="list-disc list-inside">
            <li>T4 Gems</li>
              <li>Gold Capsule +1000</li>
              <li>Red Stone Box<span className="text-green-500"> [UNCOMMON]</span></li>
              <li>Lucky Set of Gem Exchanger<span className="text-green-500"> [UNCOMMON]</span></li>
              <li>Gold Pig Statue<span className="text-blue-500"> [RARE]</span></li>
              <li>Apex Permanent Armors (Random Slot)<span className="text-blue-500"> [RARE]</span></li>
              <li>Apex Epic Armor Enhancer<span className="text-purple-500"> [EPIC]</span></li>
              <li>Apex Epic Weapon Enhancer<span className="text-purple-500"> [EPIC]</span></li>
              <li>Apex Mythical Enhancer<span className="text-orange-500"> [MYTHIC]</span></li>
              <li>Dagon's Leash<span className="text-red-700"> [RELIC]</span></li>
              <li>Dagan's Ring<span className="text-red-700"> [RELIC]</span></li>
              <li>Dagnu's Ring<span className="text-red-700"> [RELIC]</span></li>
            </ul>
          </p>
          <img
            src="/src/assets/SnowSprayGuide.png"
            alt="3D Brothers Guide"
            className="w-full h-auto rounded-lg border border-gray-600 shadow-lg"
          />
        </div>
      ),
    },
    {
      title: 'CONTROLLER DEVICE',
      content: (
        <div className="font-COP1">
          <p className="text-gray-200 mb-4">
            <ul className="list-disc list-inside">
              <li>T4 Gems</li>
              <li>Gold Capsule +1000</li>
              <li>Red Stone Box<span className="text-green-500"> [UNCOMMON]</span></li>
              <li>Talic Crystal<span className="text-green-500"> [UNCOMMON]</span></li>
              <li>Lucky Set of Gem Exchanger<span className="text-blue-500"> [RARE]</span></li>
              <li>Type C Weapon (Random Slot)<span className="text-purple-500"> [EPIC]</span></li>
              <li>Type C Armor (Random Slot)<span className="text-purple-500"> [EPIC]</span></li>
              <li>Apex Epic Armor Enhancer<span className="text-orange-500"> [MYTHIC]</span></li>
              <li>Apex Epic Weapon Enhancer<span className="text-orange-500"> [MYTHIC]</span></li>
            </ul>
          </p>
          <img
            src="/src/assets/SnowSprayGuide.png"
            alt="CONTROLLER DEVICE Guide"
            className="w-full h-auto rounded-lg border border-gray-600 shadow-lg"
          />
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
        style={{ position: 'relative', backgroundAttachment: 'fixed' }} // Fixed background to prevent scrolling
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90"></div>

        {/* Droplist Guide Section */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold font-COP1 mb-10 text-white text-shadow-red-glow drop-shadow-md">
            PITBOSS DROPLIST
          </h1>
           {/* New Line with Rarity and Chance */}
      <div
        ref={dropdownRef}
         className="w-full max-w-4xl bg-gray-900 bg-opacity-90 rounded-lg p-4 mb-6">
        <div className="flex justify-between">
          <div className="text-left text-white">
            <p className="text-white text-shadow-red-glow drop-shadow-md font-semibold">Rarity</p>
            <p>Common</p>
            <p className="text-green-500">Uncommon</p>
            <p className="text-blue-500">Rare</p>
            <p className="text-purple-500">Epic</p>
            <p className="text-orange-500">Mythic</p>
            <p className="text-red-700">Relic</p>
          </div>
          <div className="text-right text-white">
            <p className="text-white text-shadow-red-glow drop-shadow-md font-semibold">Chance</p>
            <p>100%</p>
            <p>80%</p>
            <p>50%</p>
            <p>20%</p>
            <p>2%</p>
            <p>0.5%</p>
          </div>
        </div>
      </div>
          <div
          id={dropdownRef}
          className="w-full max-w-4xl bg-gray-900 bg-opacity-90 rounded-lg p-6 shadow-xl space-y-4">
            {dropdownData.map((item, index) => (
              <div key={index} className="border border-red-500 rounded-lg bg-gray-800 bg-opacity-80">
                <div
                  className="flex justify-between items-center p-4 bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer"
                  onClick={() => toggleDropdown(index)}
                >
                  <h2 className="text-lg font-semibold text-red-400 font-COP1">{item.title}</h2>
                  <span className="text-red-400">{openDropdown === index ? "▲" : "▼"}</span>
                </div>

                {/* Smooth transition for dropdown content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openDropdown === index ? "max-h-[1000px]" : "max-h-0"
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
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Droplist;
