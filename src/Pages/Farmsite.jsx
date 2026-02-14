import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Sette from '../assets/FARM/Sette.jpg';
import Ether from '../assets/FARM/Ether.jpg';
import Elan from '../assets/FARM/Elan.jpg';
import Cauldron from '../assets/FARM/Cauldron.jpg';

function Farmsite() {
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
      title: 'RACE HEADQUARTERS',
      content: (
        <div className="space-y-4 font-Bai text-gray-200">
          <h3 className="text-red-500 font-bold text-xl">Flymm</h3>
          <ul className="list-disc list-inside">
            <li>Wind Elven Blade</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'ETHER OF HEAVEN',
      content: (
        <div className="space-y-4 font-Bai text-gray-200">
          <h3 className="text-red-500 font-bold text-xl">Caliana Atrock / Caliana Crew / Assassin BuilderB / Calliana Archer</h3>
          <ul className="list-disc list-inside">
            <li>Beam [HIGH]</li>
            <li>Gli [HIGH]</li>
          </ul>

           <h3 className="text-red-500 font-bold text-xl">Hobo Rover / Hobo Blade / Passer Beta</h3>
          <ul className="list-disc list-inside">
            <li>Beam [LOW]</li>
          </ul>
          <img src={Ether} alt="Ether Guide" className="w-full rounded-xl border border-red-500/40 shadow-lg" />
        </div>
      ),
    },
    {
      title: 'SETTE DESERT',
      content: (
        <div className="space-y-4 font-Bai text-gray-200">
          <h3 className="text-red-500 font-bold text-xl">Bellato Guard / Accretia Guard / Cora Guard</h3>
          <ul className="list-disc list-inside">
            <li>T2 Gems</li>
          </ul>
          <img src={Sette} alt="Elan Guide" className="w-full rounded-xl border border-red-500/40 shadow-lg" />
        </div>
      ),
    },
    {
      title: 'CRAG MINE FIELD',
      content: (
        <div className="space-y-4 font-Bai text-gray-200">
          <h3 className="text-red-500 font-bold text-xl">RACE CONTROLLER DEVICE</h3>
          <ul className="list-disc list-inside">
            <li>Shiny Gold Box</li>
            <li>Gold Bar</li>
            <li>Mid Elems</li>
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
            FARMSITES
          </h1>

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

export default Farmsite;