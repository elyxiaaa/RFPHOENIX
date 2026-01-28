import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useLocation } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Sette from '../assets/FARM/Sette.jpg'
import Ether from '../assets/FARM/Ether.jpg'
import Elan from '../assets/FARM/Elan.jpg'
import Cauldron from '../assets/FARM/Cauldron.jpg'

function Farmsite() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('guide-section'); // Default to 'home-section'
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
      title: 'SETTE DESERT',
      content: (
        <div className="font-COP1">
          <h3 className="text-red-500 font-bold text-xl mb-2">Mini Bellato / Cora / Accretia Warrior</h3>
          <p className="text-gray-200 mb-4">
            <ul className="list-disc list-inside">
              <li>Gold Capsule+25</li>
            </ul>
          </p>
          <img
            src={Sette}
            alt="Sette Guide"
            className="w-full h-auto rounded-lg border border-gray-600 shadow-lg"
          />
        </div>
      ),
    },
    {
      title: 'ETHER OF HEAVEN',
      content: (
        <div className="font-COP1">
          <h3 className="text-red-500 font-bold text-xl mb-2">Caliana Atrock / Caliana Crew / Assassin BuilderB / Calliana Archer</h3>
          <p className="text-gray-200 mb-4">
            <ul className="list-disc list-inside">
              <li>Beam</li>
            </ul>
          </p>
          <img
            src={Ether}
            alt="Ether Guide"
            className="w-full h-auto rounded-lg border border-gray-600 shadow-lg"
          />
        </div>
      ),
    },
    {
      title: 'ELAN PLATEU',
      content: (
        <div className="font-COP1">
          <h3 className="text-red-500 font-bold text-xl mb-2">TURNCOAT 1 / TURNCOAT 2 / TURNCOAT 3 </h3>
          <p className="text-gray-200 mb-4">
            <ul className="list-disc list-inside">
              <li>Strong Armor Ability</li>
              <li>Strength Armor Ability</li>
              <li>Sharp Armor Ability</li>
              <li>Strong Ability Reaver</li>
              <li>Protection Ability Reaver</li>
              <li>Anti-Sharp Ability Reaver</li>
            </ul>
          </p>
          <img
            src={Elan}
            alt="Elan Guide"
            className="w-full h-auto rounded-lg border border-gray-600 shadow-lg"
          />
        </div>
      ),
    },
    {
      title: 'VOLCANIC CAULDRON',
      content: (
        <div className="font-COP1">
          <h3 className="text-red-500 font-bold text-xl mb-2"> Hellar Wing Guard </h3>
          <p className="text-gray-200 mb-4">
            <ul className="list-disc list-inside">
              <li>Namestice Stone</li>
              <li>Azure Stone</li>
            </ul>
          </p>
          <img
            src={Cauldron}
            alt="Elan Guide"
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

        {/* Farmsite Guide Section */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold font-COP1 mb-10 text-white text-shadow-red-glow drop-shadow-md">
            FARMSITES
          </h1>

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
                  <span className="text-red-400">
                    {openDropdown === index ? "▲" : "▼"}
                  </span>
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

export default Farmsite;
