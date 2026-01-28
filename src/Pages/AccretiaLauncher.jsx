import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import CharacterImage from '../assets/CHAR/ACCRETIA/BGF.jpg'; // Replace with actual character image path
import Helm from '../assets/CHAR/ACCRETIA/ITEM/FR/Helm.png'; // Replace with actual gear image path
import Upper from '../assets/CHAR/ACCRETIA/ITEM/FR/Upper.png'
import Lower from '../assets/CHAR/ACCRETIA/ITEM/FR/Lower.png'
import Shoes from '../assets/CHAR/ACCRETIA/ITEM/FR/Shoes.png'
import Gloves from '../assets/CHAR/ACCRETIA/ITEM/FR/Gloves.png'
import Spear from '../assets/CHAR/ACCRETIA/ITEM/FR/FT.png'
import Glider from '../assets/CHAR/ACCRETIA/ITEM/FR/Glider.png'
import { Link } from 'react-router-dom';


function AccretiaLauncher() {
    const [activeTab, setActiveTab] = useState('donation-section'); 
  return (
    <>
    <Navbar activeTab={activeTab}/>
    <div className="h-full w-full bg-cover bg-BG4 bg-center bg-no-repeat relative">
      {/* Dark Overlay */}
      {/* Title Section */}
      <div className="absolute top-20 left-0 w-full text-center z-10">
        <h1 className="text-5xl text-amber-50 font-bold bg-clip-text bg-gradient-to-r from-black to-white">
          ACCRETIA LAUNCHER
        </h1>
      </div>

        <div className="breadcrumbs text-sm">
          <ul className="text-xl font-bold text-amber-50 ml-10 mt-10">
          <li><Link to="/donation">Return</Link></li>
            <li>Accretia Launcher</li>
          </ul>
       
        </div>

     
      <div className="relative flex justify-center items-center z-10">
        
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 w-full mt-20">
          
          {/* Left Grid: Images */}
          <div className="flex flex-col items-center space-y-8">
            {/* Character Image */}
            
            <div className="relative border-4 border-yellow-400 rounded-xl shadow-lg">
  {/* Character Image inside the box */}
  <img src={CharacterImage} alt="Character" className="w-128 h-auto z-10 rounded-lg" />
</div>

            <div className="relative flex justify-center items-center space-x-4 ">
              {/* Gear 1 */}
              <div className="w-24 h-24 bg-GearBG bg-center bg-cover rounded-full flex justify-center items-center">
                <img
                  src={Helm}
                  alt="Gear"
                  className="w-20 h-20"
                />
              </div>

              {/* Gear 2 */}
              <div className="w-24 h-24 bg-GearBG bg-center bg-cover rounded-full flex justify-center items-center">
                <img
                  src={Upper}
                  alt="Gear"
                  className="w-20 h-20"
                />
              </div>

              {/* Gear 3 */}
              <div className="w-24 h-24 bg-GearBG bg-center bg-cover rounded-full flex justify-center items-center">
                <img
                  src={Lower}
                  alt="Gear"
                  className="w-20 h-20"
                />
              </div>

              {/* Gear 4 */}
              <div className="w-24 h-24 bg-GearBG bg-center bg-cover rounded-full flex justify-center items-center">
                <img
                  src={Shoes}
                  alt="Gear"
                  className="w-20 h-20"
                />
              </div>

              {/* Gear 5 */}
              <div className="w-24 h-24 bg-GearBG bg-center bg-cover rounded-full flex justify-center items-center">
                <img
                  src={Gloves}
                  alt="Gear"
                  className="w-20 h-20"
                />
              </div>

              {/* Gear 6 */}
              <div className="w-24 h-24 bg-GearBG bg-center bg-cover rounded-full flex justify-center items-center">
                <img
                  src={Spear}
                  alt="Gear"
                  className="w-20 h-20"
                />
              </div>
              {/* Gear 6 */}
              <div className="w-24 h-24 bg-GearBG bg-center bg-cover rounded-full flex justify-center items-center">
                <img
                  src={Glider}
                  alt="Gear"
                  className="w-20 h-20"
                />
              </div>
            </div>
          </div>

          {/* Right Grid: Text Content */}
<div className="flex flex-col font-ITC2 space-y-6 mt-56">
<div className="text-black  p-6 rounded-lg">
  <h2 className="text-3xl text-center font-bold mb-4">Accretia Apex Armor</h2>
  <div className="flex justify-between space-x-4">
    <div className="text-center">
      <p className="text-lg">Class</p>
      <p className="text-lg font-bold">LAUNCHER</p>
    </div>
    <div className="text-center">
        <p className="text-lg">Price (+5/6)</p>
        <p className="text-lg font-bold">PHP 375 (1pc)</p>
        <p className="text-lg font-bold">PHP 2500 (8pcs)</p>
      </div>
      <div className="text-center">
        <p className="text-lg">Price (+6/6)</p>
        <p className="text-lg font-bold">PHP 1250 (1pc)</p>
        <p className="text-lg font-bold">PHP 6000 (8pcs)</p>
      </div>
  </div>

  <div className="flex justify-between space-x-4">
  <div className="text-center">
                      <p className="text-lg font-semibold mt-4">5 Parts Set Effects:</p>
                      <p className="text-lg"><strong>Attack</strong>: 15% Increase</p>
                      <p className="text-lg"><strong>Defense</strong>: 15% Increase</p>
                      <p className="text-lg"><strong>HP</strong>: 10% Increase</p>
                      <p className="text-lg"><strong>Critical</strong>: 15% Increase</p>
                      <p className="text-lg"><strong>Accuracy</strong>: 15 Increase</p>
                      <p className="text-lg"><strong>Attack Delay of Launcher 0.05 Decrease(Sec)</strong></p>
                  </div>
      <div className="text-center">
          <p className="text-lg font-semibold mt-4">3 Parts Set Effects:</p>
                      <p className="text-lg"><strong>Attack</strong>: 5% Increase</p>
                      <p className="text-lg"><strong>Defense</strong>: 5% Increase</p>
      </div>
  </div>
  <hr className="my-1 border-black border-1 " />
</div>

<div className="text-black p-6 rounded-lg">
  <h2 className="text-3xl text-center font-bold mb-4">Accretia Apex Weapon</h2>
  <div className="flex justify-between space-x-4">
    <div className="text-center">
      <p className="text-lg">Class</p>
      <p className="text-lg font-bold">LAUNCHER</p>
    </div>
    <div className="text-center">
        <p className="text-lg">Price (+5/6)</p>
        <p className="text-lg font-bold">PHP 2000</p>
      </div>
      <div className="text-center">
        <p className="text-lg">Price (+6/6)</p>
        <p className="text-lg font-bold">PHP 5000</p>
      </div>
  </div>
  <p className="text-lg font-semibold mt-4">Weapon Attributes:</p>
  <p className="text-lg"><strong>Attack</strong>: 20% Higher than Type C Weapon</p>
  <hr className="my-1 border-black border-1 " />
</div>

<div className="text-black p-6 rounded-lg">
  <h2 className="text-3xl text-center font-bold mb-4">Elite Racial Glider</h2>
  <div className="flex justify-between space-x-4">
    <div className="text-center">
      <p className="text-lg">Class</p>
      <p className="text-lg font-bold">LAUNCHER</p>
    </div>
    <div className="text-center">
        <p className="text-lg">Price (+5/6)</p>
        <p className="text-lg font-bold">PHP 2500</p>
      </div>
      <div className="text-center">
        <p className="text-lg">Price (+6/6)</p>
        <p className="text-lg font-bold">PHP 3500</p>
      </div>
  </div>
  <p className="text-lg font-semibold mt-4">Special Effects:</p>
  <p className="text-lg"><strong>Attack</strong>: 25% Increase</p>
  <p className="text-lg"><strong>Defense</strong>: 25% Increase</p>
  <p className="text-lg"><strong>HP</strong>: 20% Increase</p>
  <p className="text-lg">Decrease of receiving critical attack by 20%</p>
  <hr className="my-1 border-black border-1 " />
</div>
</div>

          
        </div>
        
      </div>
    </div>
    <Footer />
  </>
  )
}

export default AccretiaLauncher
