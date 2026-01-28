import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useLocation } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Sette from '../assets/FARM/Sette.jpg'
import VCQuest from '../assets/FARM/VCQuest.jpg'
import MagnetQuest from '../assets/FARM/MagnetQuest.jpg'
import WeeklyQuest from '../assets/FARM/WeeklyQuest.jpg'
import BaalQuest from '../assets/FARM/BaalQuest.jpg'

function DailyQuest() {
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
        title: "LOOT MAGNET QUEST",
        content: (
          <div className="font-COP1 flex flex-col md:flex-row items-start md:items-start">
            {/* Text Content - Left Aligned */}
            <div className="md:w-1/2 w-full text-white text-left">
              <p className="text-gray-200 mb-4">
                <strong>Claim at <span className="text-red-500">Server Quest NPC</span></strong>
              </p>
              <ul className="text-gray-300 mb-4">
                <li>Quest Type: <span className="text-yellow-500">Solo</span></li>
                <li>Quest Cooldown: <span className="text-yellow-500">24 Hrs</span></li>
              </ul>
      
              <h3 className="text-green-500 font-bold text-lg mt-4">Progress:</h3>
              <ul className="text-gray-300 mb-4">
                <li>Hunt 100 Caliana Atrock</li>
                <li>Hunt 100 Caliana Crew</li>
              </ul>
      
              <h3 className="text-blue-400 font-bold text-lg mt-4">Rewards:</h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>PvP Point 3,000</li>
                <li>Loot Magnet [12h]</li>
              </ul>
            </div>
            <img
              src={MagnetQuest}
              alt="Sette Guide"
              className="md:w-1/2 w-full h-auto rounded-lg border border-gray-600 shadow-lg ml-0 md:ml-8 mt-4 md:mt-0 cursor-pointer"
              onClick={()=>document.getElementById('magnet_modal').showModal()}
            />
          </div>
        ),
      }, 
      {
        title: "CAPTURING THE BAAL INVASION",
        content: (
          <div className="font-COP1 flex flex-col md:flex-row items-start md:items-start">
            {/* Text Content - Left Aligned */}
            <div className="md:w-1/2 w-full text-white text-left">
              <p className="text-gray-200 mb-4">
                <strong>Claim at <span className="text-red-500">Server Quest NPC</span></strong>
              </p>
              <ul className="text-gray-300 mb-4">
                <li>Quest Type: <span className="text-yellow-500">Party</span></li>
                <li>Quest Cooldown: <span className="text-yellow-500">24 Hrs</span></li>
              </ul>
      
              <h3 className="text-green-500 font-bold text-lg mt-4">Progress:</h3>
              <ul className="text-gray-300 mb-4">
                <li>Hunt 350 Baal Hamon</li>
                <li>Hunt 1 Baal Hamon[D Boss]</li>
              </ul>
      
              <h3 className="text-blue-400 font-bold text-lg mt-4">Rewards:</h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>PvP Point 5,000</li>
                <li>Apex Weapon / Armor Gamble Box</li>
                <li>Guild Honor Points +100</li>
              </ul>
            </div>
            <img
              src={BaalQuest}
              alt="Sette Guide"
              className="md:w-1/2 w-full h-auto rounded-lg border border-gray-600 shadow-lg ml-0 md:ml-8 mt-4 md:mt-0 cursor-pointer"
              onClick={()=>document.getElementById('baal_modal').showModal()}
            />
          </div>
        ),
      }, 
      {
        title: "CLEARING THE LAND OF CAULDRON",
        content: (
          <div className="font-COP1 flex flex-col md:flex-row items-start md:items-start">
            {/* Text Content - Left Aligned */}
            <div className="md:w-1/2 w-full text-white text-left">
              <p className="text-gray-200 mb-4">
                <strong>Claim at <span className="text-red-500">Server Quest NPC</span></strong>
              </p>
              <ul className="text-gray-300 mb-4">
                <li>Quest Type: <span className="text-yellow-500">Solo</span></li>
                <li>Quest Cooldown: <span className="text-yellow-500">24 Hrs</span></li>
              </ul>
      
              <h3 className="text-green-500 font-bold text-lg mt-4">Progress:</h3>
              <ul className="text-gray-300 mb-4">
                <li>Hunt 75 Hum Baba</li>
                <li>Hunt 75 Giant Baba</li>
                <li>Hunt 100 Hellar Wing Guard</li>
              </ul>
      
              <h3 className="text-blue-400 font-bold text-lg mt-4">Rewards:</h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>Guild Honor Points +100</li>
              </ul>
            </div>
            <img
              src={VCQuest}
              alt="Sette Guide"
              className="md:w-1/2 w-full h-auto rounded-lg border border-gray-600 shadow-lg ml-0 md:ml-8 mt-4 md:mt-0 cursor-pointer"
              onClick={()=>document.getElementById('vc_modal').showModal()}
            />
          </div>
        ),
      }, 
      {
        title: "APEX WEEKLY QUEST",
        content: (
          <div className="font-COP1 flex flex-col md:flex-row items-start md:items-start">
            {/* Text Content - Left Aligned */}
            <div className="md:w-1/2 w-full text-white text-left">
              <p className="text-gray-200 mb-4">
                <strong>Buy Quest ticket at <span className="text-red-500">Ether Weekly Quest NPC</span></strong>
              </p>
              <ul className="text-gray-300 mb-4">
                <li>Quest Type: <span className="text-yellow-500">Party</span></li>
                <li>Quest Cooldown: <span className="text-yellow-500">Weekly</span></li>
              </ul>
      
              <h3 className="text-green-500 font-bold text-lg mt-4">Progress:</h3>
              <ul className="text-gray-300 mb-4">
                <li>Hunt 500 Passer Beta</li>
                <li>Hunt 500 Hobo Blade</li>
                <li>Hunt 500 Hobo Rover</li>
              </ul>
      
              <h3 className="text-blue-400 font-bold text-lg mt-4">Rewards:</h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>Epic Weapon/Armor/Material Enhancer</li>
                <li>Guild Honor Points +150</li>
              </ul>
            </div>
            <img
              src={WeeklyQuest}
              alt="Sette Guide"
              className="md:w-1/2 w-full h-auto rounded-lg border border-gray-600 shadow-lg ml-0 md:ml-8 mt-4 md:mt-0 cursor-pointer"
              onClick={()=>document.getElementById('weekly_modal').showModal()}
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
          DAILY QUESTS
        </h1>

        <div 
          id={dropdownRef}
          className="w-full max-w-4xl bg-gray-900 bg-opacity-90 rounded-lg p-6 shadow-xl space-y-4"
        >
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

                     <dialog id="magnet_modal" className="modal">
                          <div className="modal-box w-full h-full max-w-[1600px] bg-transparent">
                            <img src={MagnetQuest} className="w-full h-full object-cover  rounded-lg" />
                              </div>
                            <form method="dialog" className="modal-backdrop">
                          <button>close</button>
                        </form>
                      </dialog>

                      <dialog id="baal_modal" className="modal">
                          <div className="modal-box w-full h-full max-w-[1600px] bg-transparent">
                            <img src={BaalQuest} className="w-full h-full object-cover  rounded-lg" />
                              </div>
                            <form method="dialog" className="modal-backdrop">
                          <button>close</button>
                        </form>
                      </dialog>

                      <dialog id="weekly_modal" className="modal">
                          <div className="modal-box w-full h-full max-w-[1600px] bg-transparent">
                            <img src={WeeklyQuest} className="w-full h-full object-cover  rounded-lg" />
                              </div>
                            <form method="dialog" className="modal-backdrop">
                          <button>close</button>
                        </form>
                      </dialog>

                      <dialog id="vc_modal" className="modal">
                          <div className="modal-box w-full h-full max-w-[1600px] bg-transparent">
                            <img src={VCQuest} className="w-full h-full object-cover rounded-lg"/>
                              </div>
                            <form method="dialog" className="modal-backdrop">
                          <button>close</button>
                        </form>
                      </dialog>
    </>
  );
}

export default DailyQuest;
