import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

function Droplist() {
  const location = useLocation();

  const [activeTab, setActiveTab] = useState('guide-section');
  const [openDropdown, setOpenDropdown] = useState(null);

  const dropdownRef = useRef(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
    if (dropdownRef.current && openDropdown !== index) {
      dropdownRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const dropdownData = [
    {
      title: 'HQ & SETTLEMENT PITBOSS',
      content: (
        <div className="space-y-4 font-Bai text-gray-200">
          <ul className="list-disc list-inside">
            <li>T3 Gems</li>
            <li>Low Elems</li>
            <li>Mid Elems <span className="text-blue-500">[RARE]</span></li>
            <li>Perfect Elems <span className="text-blue-500">[RARE]</span></li>
            <li>H11 Elems  <span className="text-blue-500">[RARE]</span></li>
          </ul>
        </div>
      ),
    },
    {
      title: 'BELPHEGOR',
      content: (
        <div className="space-y-4 font-Bai text-gray-200">
          <ul className="list-disc list-inside">
            <li>T5 Coupon</li>
            <li>Red Stone Box</li>
            <li>Cash Point Gamble Box</li>
            <li>Mid Elems </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'CALLIANA PRINCESS',
      content: (
         <div className="space-y-4 font-Bai text-gray-200">
          <ul className="list-disc list-inside">
            <li>T5 Coupon</li>
            <li>Red Stone Box</li>
            <li>Cash Point Gamble Box</li>
            <li>Mid Elems </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'EARTH QUAKER',
      content: (
         <div className="space-y-4 font-Bai text-gray-200">
          <ul className="list-disc list-inside">
            <li>Ore +4</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'ELAN & 3 D BROTHERS',
      content: (
        <div className="space-y-4 font-Bai text-gray-200">
          <ul className="list-disc list-inside">
            <li>Perfect Elems</li>
            <li>Mid Elems</li>
            <li>T5 Coupon</li>
            <li>T6 Coupon</li>
            <li>Cash Point Gamble Box</li>
            <li>Cash Point +50</li>
            <li>Legacy Blade</li>
            <li>Gold Bar</li>
            <li>Shiny Gold Box</li>
            <li>D Elems from 3 Brothers</li>
          </ul>
        </div>
      ),
    },
  ];

  const Panel = ({ children, className = '' }) => (
    <div
      className={`rounded-2xl bg-black/60 backdrop-blur-xl border border-red-500/30
      shadow-[0_0_45px_rgba(255,60,0,0.25)] hover:shadow-[0_0_70px_rgba(255,120,0,0.45)]
      transition-all duration-500 ${className}`}
    >
      {children}
    </div>
  );

  const Dropdown = ({ data, open, toggle, refProp }) => (
    <div ref={refProp} className="space-y-4">
      {data.map((item, index) => {
        const isOpen = open === index;
        return (
          <Panel key={index}>
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-4
              text-left hover:bg-red-950/40 transition-all duration-300"
            >
              <span className="font-semibold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                {item.title}
              </span>

              <span
                className={`text-orange-300 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              >
                ▼
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                isOpen ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-6">{item.content}</div>
            </div>
          </Panel>
        );
      })}
    </div>
  );

  return (
    <>
      <Navbar activeTab={activeTab} />

      <div
        id="guide-section"
        className="relative w-full min-h-screen bg-BG1 bg-cover bg-center overflow-hidden"
      >
        {/* Cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/90 to-black" />

        {/* Radial fire glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,80,0,0.25),transparent_60%)]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 space-y-16 text-white">
          {/* Title */}
          <h1
            className="text-5xl font-COP1 md:text-6xl font-extrabold text-center
          bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400
          bg-clip-text text-transparent
          drop-shadow-[0_0_18px_rgba(255,80,0,0.9)]"
          >
            PITBOSS DROPLIST
          </h1>

          {/* Rarity Panel */}
          <Panel className="p-6">
            <div className="flex justify-between text-sm">
              <div>
                <p className="font-semibold text-orange-300">Rarity</p>
                <p>Common</p>
                <p className="text-green-500">Uncommon</p>
                <p className="text-blue-500">Rare</p>
                <p className="text-purple-500">Epic</p>
                <p className="text-orange-500">Mythic</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-orange-300">Chance</p>
                <p>100%</p>
                <p>80%</p>
                <p>50%</p>
                <p>20%</p>
                <p>2%</p>
              </div>
            </div>
          </Panel>

          {/* Dropdown Section */}
          <Panel className="p-8">
            <Dropdown
              data={dropdownData}
              open={openDropdown}
              toggle={toggleDropdown}
              refProp={dropdownRef}
            />
          </Panel>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Droplist;