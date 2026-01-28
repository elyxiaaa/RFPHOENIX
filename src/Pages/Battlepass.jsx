import React from 'react';
import ArmorCoupon from '../assets/BATTLEPASS/BPsetCoupon.png';
import WeaponCoupon from '../assets/BATTLEPASS/BPweaponCoupon.png';
import Azure from '../assets/BATTLEPASS/AzureStone.png';
import Nomads from '../assets/BATTLEPASS/NomadsCache.png';
import SilverPig from '../assets/BATTLEPASS/SilverPig.png'
import GoldPig from '../assets/BATTLEPASS/GoldPig.png'
import CC from '../assets/BATTLEPASS/PVP.png'
import GP from '../assets/BATTLEPASS/GP.png'
import None from '../assets/logo1.png'
import ApexGameWep from '../assets/BATTLEPASS/ApexGameWep.png'
import ApexGambleACC from '../assets/BATTLEPASS/ApexGambleACC.png'
import Attack from '../assets/BATTLEPASS/Attack.jpg'
import LGS from '../assets/BATTLEPASS/LGS.jpg'
import SGS from '../assets/BATTLEPASS/SGS.jpg'
import Magnet from '../assets/BATTLEPASS/Magnet.jpg'
import Slot from '../assets/BATTLEPASS/Slot.jpg'
import EpicWeap from '../assets/BATTLEPASS/EpicWeap.jpg'
import EpicArmor from '../assets/BATTLEPASS/EpicArmor.jpg'
import EpicMatt from '../assets/BATTLEPASS/EpicMatt.jpg'
import Mythical from '../assets/BATTLEPASS/Mythical.jpg'
import Combi from '../assets/BATTLEPASS/Combi.jpg'
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { useRef, useState, useEffect } from "react";

const rewards = [ 
    { level: 2, image: GP, name: 'Gold Points +500,000' },
    { level: 3, image: None, name: 'None' },
    { level: 4, image: None, name: 'None' },
    { level: 5, image: GoldPig, name: 'Gold Pig ×5' },
    { level: 6, image: None, name: 'None' },
    { level: 7, image: CC, name: 'Cash Points +500' },
    { level: 8, image: None, name: 'None' },
    { level: 9, image: None, name: 'None' },
    { level: 10, image: SilverPig, name: 'Silver Pig ×5' },
    { level: 11, image: None, name: 'None' },
    { level: 12, image: None, name: 'None' },
    { level: 13, image: None, name: 'None' },
    { level: 14, image: None, name: 'None' },
    { level: 15, image: GoldPig, name: 'Gold Pig ×5' },
    { level: 16, image: None, name: 'Loot Magnet 5D' },
    { level: 17, image: None, name: 'None' },
    { level: 18, image: None, name: 'None' },
    { level: 19, image: None, name: 'None' },
    { level: 20, image: None, name: 'None' },
    { level: 21, image: None, name: 'None' },
    { level: 22, image: None, name: 'None' },
    { level: 23, image: GP, name: 'Gold Points +500,000' },
    { level: 24, image: None, name: 'None' },
    { level: 25, image: CC, name: 'Cash Points +500 x2' },
    { level: 26, image: None, name: '30D ATK/DEF JADE' },
    { level: 27, image: None, name: 'None' },
    { level: 28, image: GP, name: 'Gold Points +500,000' },
    { level: 29, image: None, name: 'None' },
    { level: 30, image: None, name: 'None' },
    { level: 31, image: None, name: 'None' },
    { level: 32, image: CC, name: 'Cash Points +100 x5' },
    { level: 33, image: None, name: 'None' },
    { level: 34, image: None, name: 'None' },
    { level: 35, image: None, name: 'None' },
    { level: 36, image: None, name: 'Epic Enhancer Armor ×2' },
    { level: 37, image: None, name: 'None' },
    { level: 38, image: GP, name: 'Gold Points +2,000,000' },
    { level: 39, image: None, name: 'None' },
    { level: 40, image: None, name: 'None' },
    { level: 41, image: None, name: 'None' },
    { level: 42, image: None, name: 'None' },
    { level: 43, image: CC, name: 'Cash Points +500 x3' },
    { level: 44, image: None, name: 'None' },
    { level: 45, image: None, name: 'None' },
    { level: 46, image: None, name: 'None' },
    { level: 47, image: None, name: 'None' },
    { level: 48, image: GP, name: 'Gold Points +1,000,000' },
    { level: 49, image: None, name: 'None' },
    { level: 50, image: GoldPig, name: 'Gold Pig ×5' },
    { level: 51, image: None, name: 'None' }, 
    { level: 52, image: None, name: 'None' },
    { level: 53, image: None, name: 'None' },
    { level: 54, image: GP, name: 'Gold Points +1,000,000' },
    { level: 55, image: None, name: 'None' },
    { level: 56, image: Magnet, name: 'Loot Magnet 5D' },
    { level: 57, image: CC, name: 'Cash Points +100 x7' },
    { level: 58, image: None, name: 'None' },
    { level: 59, image: GP, name: 'Gold Points +1,000,000' },
    { level: 60, image: SilverPig, name: 'Silver Pig x5' },
    { level: 61, image: None, name: 'None' },
    { level: 62, image: GoldPig, name: 'Gold Pig x5' },
    { level: 63, image: None, name: 'None' },
    { level: 64, image: None, name: 'None' },
    { level: 65, image: Nomads, name: 'Nomad`s Cache' },
    { level: 66, image: None, name: 'None' },
    { level: 67, image: CC, name: 'Cash Points +500 x4' },
    { level: 68, image: None, name: 'None' },
    { level: 69, image: GP, name: 'Gold Points +1,500,000' },
    { level: 70, image: None, name: 'None' },
    { level: 71, image: ApexGambleACC, name: 'Armor Gamble Box x5' },
    { level: 72, image: Slot, name: 'Apex Slot Extender x2' },
    { level: 73, image: None, name: 'None' },
    { level: 74, image: GoldPig, name: 'Gold Pig x5' },
    { level: 75, image: None, name: 'None' },
    { level: 76, image: Attack, name: 'Attack/Def Jade 30D' },
    { level: 77, image: CC, name: 'Cash Points +100 x9' },
    { level: 78, image: None, name: 'None' },
    { level: 79, image: None, name: 'None' },
    { level: 80, image: SilverPig, name: 'Silver Pig x5' },
    { level: 81, image: ApexGameWep, name: 'Apex Weapon Gamble Box x5' },
    { level: 82, image: Slot, name: 'Apex Slot Extender x2' },
    { level: 83, image: None, name: 'None' },
    { level: 84, image: None, name: 'None' },
    { level: 85, image: Nomads, name: 'Nomad`s Cache' },
    { level: 86, image: None, name: 'None' },
    { level: 87, image: GP, name: 'Gold Points +1,500,000' },
    { level: 88, image: None, name: 'None' },
    { level: 89, image: GoldPig, name: 'Gold Pig x5' },
    { level: 90, image: None, name: 'None' },
    { level: 91, image: None, name: 'None' },
    { level: 92, image: CC, name: 'Cash Points +500 x5' },
    { level: 93, image: None, name: 'None' },
    { level: 94, image: None, name: 'None' },
    { level: 95, image: None, name: 'None' },
    { level: 96, image: Magnet, name: 'Loot Magnet 5D' },
    { level: 97, image: None, name: 'None' },
    { level: 98, image: None, name: 'None' },
    { level: 99, image: None, name: 'None' },
    { level: 100, image: EpicMatt, name: 'Epic Material Enhancer x1' },
    { level: 101, image: Mythical, name: 'Mythical Enhancer x5' },
    { level: 102, image: None, name: 'None' },
    { level: 103, image: LGS, name: 'LGS x99' },
    { level: 104, image: None, name: 'None' },
    { level: 105, image: CC, name: 'Cashpoints +100 x11' },
    { level: 106, image: None, name: 'None' },
    { level: 107, image: None, name: 'None' },
    { level: 108, image: None, name: 'None' },
    { level: 109, image: None, name: 'None' },
    { level: 110, image: SilverPig, name: 'Silver Pig x5' },
    { level: 111, image: None, name: 'None' },
    { level: 112, image: GP, name: 'Gold Points +1,500,00' },
    { level: 113, image: None, name: 'None' },
    { level: 114, image: None, name: 'None' },
    { level: 115, image: None, name: 'None' },
    { level: 116, image: GP, name: 'Gold Points +350,000' },
    { level: 117, image: None, name: 'None' },
    { level: 118, image: None, name: 'None' },
    { level: 119, image: Nomads, name: 'Nomad`s Cache' },
    { level: 120, image: None, name: 'None' },
    { level: 121, image: None, name: 'None' },
    { level: 122, image: None, name: 'None' },
    { level: 123, image: GoldPig, name: 'Gold Pig x5' },
    { level: 124, image: None, name: 'None' },
    { level: 125, image: None, name: 'None' },
    { level: 126, image: CC, name: 'Cash Points +500 x10' },
    { level: 127, image: Attack, name: 'Attack/Def Jade 30D' },
    { level: 128, image: None, name: 'None' },
    { level: 129, image: None, name: 'None' },
    { level: 130, image: SilverPig, name: 'Silver Pig x5' },
    { level: 131, image: None, name: 'None' },
    { level: 132, image: GP, name: 'Gold Points +1,500,000' },
    { level: 133, image: None, name: 'None' },
    { level: 134, image: EpicWeap, name: 'Epic Weapon Enhancer x1' },
    { level: 135, image: None, name: 'None' },
    { level: 136, image: CC, name: 'Cashpoints +500 x10' },
    { level: 137, image: None, name: 'None' },
    { level: 138, image: None, name: 'None' },
    { level: 139, image: Nomads, name: 'Nomad`s Cache' },
    { level: 140, image: None, name: 'None' },
    { level: 141, image: None, name: 'None' },
    { level: 142, image: GP, name: 'Gold Points +400,000' },
    { level: 143, image: None, name: 'None' },
    { level: 144, image: None, name: 'None' },
    { level: 145, image: None, name: 'None' },
    { level: 146, image: ApexGameWep, name: 'Apex Weapon Gamble Box x5' },
    { level: 147, image: Slot, name: 'Apex Slot Extender x3' },
    { level: 148, image: None, name: 'None' },
    { level: 149, image: None, name: 'None' },
    { level: 150, image: None, name: 'None' },
    { level: 151, image: ArmorCoupon, name: 'Prismatic Rift Armor Coupon' },
    { level: 152, image: None, name: 'None' },
    { level: 153, image: None, name: 'None' },
    { level: 154, image: None, name: 'None' },
    { level: 155, image: None, name: 'None' },
    { level: 156, image: CC, name: 'Cash Points +500 x10' },
    { level: 157, image: None, name: 'None' },
    { level: 158, image: None, name: 'None' },
    { level: 159, image: None, name: 'None' },
    { level: 160, image: None, name: 'None' },
    { level: 161, image: ApexGambleACC, name: 'Apex Armor Gamble Box x5' },
    { level: 162, image: Slot, name: 'Apex Slot Extender x3' },
    { level: 163, image: SGS, name: 'SGS x99' },
    { level: 164, image: None, name: 'None' },
    { level: 165, image: None, name: 'None' },
    { level: 166, image: None, name: 'None' },
    { level: 167, image: None, name: 'None' },
    { level: 168, image: None, name: 'None' },
    { level: 169, image: None, name: 'None' },
    { level: 170, image: None, name: 'None' },
    { level: 171, image: ApexGameWep, name: 'Apex Weapon Gamble Box x5' },
    { level: 172, image: Slot, name: 'Apex Slot Extender x5' },
    { level: 173, image: GoldPig, name: 'Gold Pig x5' },
    { level: 174, image: None, name: 'None' },
    { level: 175, image: None, name: 'None' },
    { level: 176, image: Attack, name: 'Attack/Def Jade 30D' },
    { level: 177, image: None, name: 'None' },
    { level: 178, image: None, name: 'None' },
    { level: 179, image: Nomads, name: 'Nomad`s Cache x5' },
    { level: 180, image: None, name: 'None' },
    { level: 181, image: CC, name: 'Cash Points +500 x10' },
    { level: 182, image: None, name: 'None' },
    { level: 183, image: None, name: 'None' },
    { level: 184, image: None, name: 'None' },
    { level: 185, image: None, name: 'None' },
    { level: 186, image: LGS, name: 'LGS x99' },
    { level: 187, image: Mythical, name: 'Mythical Enhancer x5' },
    { level: 188, image: None, name: 'None' },
    { level: 189, image: None, name: 'None' },
    { level: 190, image: None, name: 'None' },
    { level: 191, image: None, name: 'None' },
    { level: 192, image: SGS, name: 'SGS x99' },
    { level: 193, image: None, name: 'None' },
    { level: 194, image: None, name: 'None' },
    { level: 195, image: None, name: 'None' },
    { level: 196, image: ApexGambleACC, name: 'Apex Armor Gamble Box x5' },
    { level: 197, image: Slot, name: 'Apex Slot Extender x5' },
    { level: 198, image: None, name: 'None' },
    { level: 199, image: Nomads, name: 'Nomad`s Cache x10' },
    { level: 200, image: WeaponCoupon, name: 'Prismatic Rift Weapon Coupon' },
    
];

function Battlepass() {
  const eventStartDate = new Date("2025-03-07"); // Event start date
  const eventEndDate = new Date("2025-06-05"); // Event end date

  const [daysRemaining, setDaysRemaining] = useState(0);

  useEffect(() => {
    const updateDaysRemaining = () => {
      const today = new Date();  
      today.setHours(0, 0, 0, 0); 
      
      const endDate = new Date(eventEndDate);
      endDate.setHours(0, 0, 0, 0); 

      const timeDiff = endDate.getTime() - today.getTime();
      const daysLeft = Math.max(Math.floor(timeDiff / (1000 * 60 * 60 * 24)), 0); 

      setDaysRemaining(daysLeft);
    };

    updateDaysRemaining();
    const interval = setInterval(updateDaysRemaining, 86400000); 

    return () => clearInterval(interval);
  }, []);

  const levelRefs = {}; // Store refs dynamically for each level
   const [activeTab, setActiveTab] = useState("battlepass-section");
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [search, setSearch] = useState("");

  const filteredRewards = rewards.filter(
    (reward) =>
      reward.name.toLowerCase().includes(search.toLowerCase()) ||
      reward.level.toString().includes(search)
  );


  const startDragging = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const stopDragging = () => setIsDragging(false);


  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };
  const scrollToLevel = (level) => {
    if (levelRefs[level]) {
      levelRefs[level].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  return (
    <> 
      <Navbar activeTab={activeTab} />
      <div className='relative min-h-screen w-full bg-BG6 bg-cover bg-no-repeat p-10 shadow-lg flex flex-col items-center'>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900 to-black opacity-90 pointer-events-none"></div>
        <div className="relative w-10/12 mt-10 flex flex-col items-center">
          <h2 className="font-ITC text-shadow-red-glow text-white text-4xl md:text-6xl text-center mb-8">
            Seasonal Battlepass
          </h2>
          <div className="relative w-full">
          <div className="w-full bg-black rounded-t-lg flex justify-between p-2">
  {/* Days Remaining on the Left */}
  <p className=" ml-2 mt-3 border border-red-500 bg-black text-white text-shadow-red-glow font-bold px-2 py-1 md:px-4 md:py-2 rounded-lg shadow-md text-sm md:text-lg max-w-[80%]">
    {daysRemaining} Days Remaining
  </p>

  {/* Search Bar on the Right */}
  <input
    type="text"
    placeholder="Search by name or level..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className=" mr-2 mt-3 px-3 py-2 w-52 text-white bg-black border border-red-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
  />
</div>

{/* Battle Pass Layout */}
<div
  ref={sliderRef}
  className="w-full font-COP1 bg-black  overflow-x-auto scrollbar-thin scrollbar-thumb-red-700 scrollbar-track-gray-900 select-none cursor-grab active:cursor-grabbing"
  onMouseDown={startDragging}
  onMouseLeave={stopDragging}
  onMouseUp={stopDragging}
  onMouseMove={handleMouseMove}
>
  <div className="flex space-x-4 p-4">
    {filteredRewards.map((reward) => (
      <div
        key={reward.level}
        ref={(el) => (levelRefs[reward.level] = el)}
        className={`relative flex flex-col items-center p-4 rounded-lg shadow-md 
        min-w-[140px] sm:min-w-[180px] w-[140px] sm:w-[180px] border 
        ${[65, 85, 119, 139, 163, 179, 192, 199].includes(reward.level) ? "border-orange-500 animate-glowPulseOrange bg-BGTexture2" : ""} 
        ${[151, 200].includes(reward.level) ? "animate-glowPulse bg-BGTexture" : ""} 
        ${[146, 161, 101, 187, 196, 171, 81, 71].includes(reward.level) ? "border-yellow-500 animate-glowPulseYellow bg-BGTexture3" : ""} 
        ${[151, 200].includes(reward.level) ? "border-2 border-red-500 mr-10" : ""} 
        ${!([65, 85, 119, 139, 163, 179, 192, 199, 151, 200, 146, 161, 101, 187, 196, 171, 81, 71].includes(reward.level)) ? "bg-BGTexture4 border-red-600" : ""}`}
      >
        {/* Dark Overlay (Only for BGTexture4) */}
        {!([65, 85, 119, 139, 163, 179, 192, 199, 151, 200, 146, 161, 101, 187, 196, 171, 81, 71].includes(reward.level)) && (
          <div className="absolute inset-0 bg-black/50 rounded-lg pointer-events-none"></div>
        )}

        {/* Background Overlay */}
        {[151, 200].includes(reward.level) && (
          <div className="absolute inset-0 bg-black/20 rounded-lg z-0"></div>
        )}

        {[65, 85, 119, 139, 163, 179, 192, 199].includes(reward.level) && (
          <div className="absolute inset-0 bg-black/50 rounded-lg z-0"></div>
        )}

        {[146, 161, 101, 187, 196, 171, 81, 71].includes(reward.level) && (
          <div className="absolute inset-0 bg-black/50 rounded-lg z-0"></div>
        )}

        <img
          src={reward.image}
          alt={reward.name}
          className={`w-16 h-16 sm:w-20 sm:h-20 object-contain relative z-10
          ${[65, 85, 119, 139, 163, 179, 192, 199].includes(reward.level) ? "drop-shadow-[0_0_8px_rgba(255,165,0,0.8)]" : ""} 
          ${[151, 200].includes(reward.level) ? "drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]" : ""}
          ${[146, 161, 101, 187, 196, 171, 81, 71].includes(reward.level) ? "drop-shadow-[0_0_8px_rgba(255,223,0,0.8)]" : ""}`}
        />
        <p
          className={`text-xs sm:text-sm mt-2 font-bold text-center relative z-10
          ${[151, 200].includes(reward.level) ? "text-yellow-500" : "text-white"}`}
        >
          {reward.name}
        </p>
        <p className="text-gray-300 text-xs relative z-10">Level {reward.level}</p>
      </div>
    ))}
  </div>
</div>
</div>
{/* Level Navigation Buttons */}
<div className=" w-full p-4 bg-black flex flex-wrap justify-center  ">
  {rewards
    .filter(reward => [2, 32,50, 67,83, 101, 119, 136, 146, 151, 163, 171, 179, 200].includes(reward.level))
    .map(reward => (
      <button
        key={`btn-${reward.level}`}
        onClick={() => scrollToLevel(reward.level)}
        className={`relative mb-4 px-4 py text-white font-bold 
        hover:brightness-125 transition border border-red-500 shadow-lg bg-BGTextureRed  
        ${[151, 200, 67, 119, 139].includes(reward.level) ? "animate-fireGlowWave text-yellow-500" : ""}`}
        
      >
          {/* Dark Overlay */}
          <span className="absolute inset-0 bg-black opacity-30 rounded-lg"></span>
          <span className="relative">Level {reward.level}</span>
          </button>
    ))}
</div>


          <div className="w-full flex flex-wrap justify-center bg-black gap-4 p-4 rounded-b-lg">
  {rewards
    .filter((reward) => [151, 200, 146, 161, 101, 192, 199].includes(reward.level))
    .map((reward) => (
      <div
        key={`preview-${reward.level}`}
        className={`relative flex flex-col items-center bg-black p-4 rounded-lg shadow-md 
        min-w-[120px] sm:min-w-[160px] md:min-w-[180px] w-[120px] sm:w-[160px] md:w-[180px] border
          ${
    [192, 199].includes(reward.level)
      ? "border-orange-500 animate-glowPulseOrange bg-BGTexture2"
      : [151, 200].includes(reward.level)
      ? " border-2 border-red-600 animate-glowPulse bg-BGTexture"
      : [146, 161, 101, 187].includes(reward.level)
      ? "border-yellow-500 animate-glowPulseYellow bg-BGTexture3"
      : ""
  }`}
      >
        {/* Background Overlays */}
        {([151, 200].includes(reward.level) || [146, 161, 101, 187].includes(reward.level)) && (
          <div className="absolute inset-0 bg-black/30 rounded-lg z-0"></div>
        )}
        {[65, 85, 119, 139, 163, 179, 192, 199].includes(reward.level) && (
          <div className="absolute inset-0 bg-black/50 rounded-lg z-0"></div>
        )}

        {/* Reward Image */}
        <img 
          src={reward.image} 
          alt={reward.name} 
          className={`w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 object-contain relative z-10
          ${[192, 199].includes(reward.level) ? "drop-shadow-[0_0_8px_rgba(255,165,0,0.8)]" : ""} 
          ${[151, 200].includes(reward.level) ? " drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]" : ""} 
          ${[146, 161,101, 187].includes(reward.level) ? "drop-shadow-[0_0_8px_rgba(255,223,0,0.8)]" : ""}`}
        />

        {/* Reward Name */}
        <p className="text-xs sm:text-sm mt-2 font-bold text-center text-yellow-500 relative z-10">
          {reward.name}
        </p>

        {/* Level Text */}
        {[151, 200].includes(reward.level) && (
          <p className="text-gray-300 text-xs font-bold relative z-10">Level {reward.level}</p>
        )}
      </div>
    ))}
</div>

{/* Battlepass Pricing & Combination Section */}
<div className='w-full mt-10 flex flex-col md:flex-row gap-6'>

  {/* Battlepass Price Box */}
  <div className='relative md:w-1/3 p-6 rounded-lg shadow-lg border border-red-700 text-white overflow-hidden'>
    {/* Background */}
    <div className="absolute inset-0 bg-BG5 w-full h-full"></div>
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900 to-black opacity-80 pointer-events-none"></div>
    
    <div className="relative ">
      <h3 className='text-2xl font-bold font-ITC text-shadow-red-glow text-white'>Battlepass Price</h3>
      <p className='mt-2'>Price: PHP 500</p>
      <p className='mt-2'>Battle Pass Blade Bundle:</p>
      <ul className='list-disc list-inside'>
        <li>10 pcs – PHP 300 each</li>
        <li>20 pcs – PHP 250 each</li>
      </ul>
      <p className='mt-2'>Level Up Pricing: PHP 100/Level</p>
      <p className='mt-2'>Max Level Purchase: PHP 20,000 – Get ALL Rewards!</p>
    </div>
  </div>

  {/* Battlepass Combination Box */}
  <div className='relative md:w-2/3 p-6 rounded-lg shadow-lg border border-red-700 text-white flex flex-col md:flex-row items-center overflow-hidden'>
    {/* Background */}
    <div className="absolute inset-0 bg-BG5 w-full h-full"></div>
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900 to-black opacity-80 pointer-events-none"></div>
    
    <div className='relative flex-1'>
      <h3 className='text-2xl font-bold font-ITC text-shadow-red-glow text-white'>Battlepass Combination</h3>
      <p className='mt-2'>Item 1: x1 Apex Seasonal Battlepass Blade</p>
      <p className='mt-2'>Item 2: x10 Nemestice Stone</p>
      <p className='mt-2'>Item 3: x10 Azure Stone</p>
      <p className='mt-2'>Item 4: x15 +12,375 Gold Points</p>
      <p className='mt-2'><span className="text-yellow-500 font-bold ">*Optional*</span> Item 5: x1 Brilliant/Epic/Mythical Enhancer</p>
      <p className='mt-2'>Fee: 150m race currency</p>
      <p className='mt-2'>Success rate: 25%</p>
      <p className='mt-2'>Result: Next Level Battlepass Blade</p>
      <ul className='list-disc list-inside mt-2'>
        <li>Brilliant: 50%</li>
        <li>Epic: 75%</li>
        <li>Mythical: 100%</li>
      </ul>
    </div>
    <div className='relative md:w-1/2 mt-4 md:mt-0'>
  <img src={Combi} alt='Battlepass Combination' className='w-full h-auto rounded-lg border-2 border-red-500 cursor-zoom-in'
  onClick={()=>document.getElementById('combi_modal').showModal()}
   />
</div>
  </div>

</div>

        </div>
      </div>
                 <dialog id="combi_modal" className="modal">
                    <div className="modal-box w-full h-full max-w-[1600px] bg-transparent ">
                      <img src={Combi} className="w-full h-full object-cover  rounded-lg" />
                        </div>
                      <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
      <Footer />
    </>
  );
}

export default Battlepass;
