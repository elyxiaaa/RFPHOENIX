import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

function Combination() {
  const location = useLocation();

  const [activeTab, setActiveTab] = useState("guide-section");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openDropdown2, setOpenDropdown2] = useState(null);

  const dropdownRef = useRef(null);
  const dropdownRef2 = useRef(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
    if (dropdownRef.current && openDropdown !== index) {
      dropdownRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleDropdown2 = (index) => {
    setOpenDropdown2(openDropdown2 === index ? null : index);
    if (dropdownRef2.current && openDropdown2 !== index) {
      dropdownRef2.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const dropdownData = [
    {
      title: "RECYCLED GAMBLE BOX",
      content: (
        <div className="space-y-3 font-Bai text-gray-200">
          <p className="text-lg font-semibold text-orange-300">Material</p>
          <ul className="list-disc list-inside space-y-1">
            <li>x5 Empty Cash Point Gamble Box</li>
            <li className="text-green-400">Chance: 100%</li>
            <li className="text-red-400">Fee: 10m Race Currency</li>
          </ul>

          <p className="text-lg font-semibold text-orange-300 pt-2">Result</p>
          <ul className="list-disc list-inside">
            <li>Cash Point Gamble Box</li>
          </ul>
        </div>
      ),
    },
    {
      title: "SEAL OF PHOENIX",
      content: (
        <div className="space-y-3 font-Bai text-gray-200">
          <p className="text-lg font-semibold text-orange-300">Material</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Feathers of the Lost Phoenix</li>
            <li>Energizer</li>
            <li className="text-red-400">Chance: 20%</li>
            <li className="text-red-400">Fee: 100m Race Currency</li>
          </ul>

          <p className="text-lg font-semibold text-orange-300 pt-2">Result</p>
          <ul className="list-disc list-inside">
            <li>Seal of Phoenix</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'H11 TO H55 UPGRADING (ATTACK/DEFENSE)',
      content: (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#111] border border-red-500/40 rounded-xl p-6 shadow-[0_0_30px_rgba(253,224,71,0.15)]">
            <h3 className="text-red-500 font-bold text-lg mb-4 tracking-wide">
              Chances
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-red-500/10 pb-2">
                <span>H11 ➝ H22</span>
                <span className="text-green-400 font-semibold">25%</span>
              </li>
              <li className="flex justify-between border-b border-red-500/10 pb-2">
                <span>H22 ➝ H33</span>
                <span className="text-yellow-400 font-semibold">20%</span>
              </li>
              <li className="flex justify-between border-b border-red-500/10 pb-2">
                <span>H33 ➝ H44</span>
                <span className="text-orange-400 font-semibold">15%</span>
              </li>
              <li className="flex justify-between">
                <span>H44 ➝ H55</span>
                <span className="text-red-500 font-semibold">10%</span>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 bg-[#0f0f0f] border border-red-500/40 rounded-xl p-6 shadow-[0_0_40px_rgba(239,68,68,0.15)]">
            <h3 className="text-red-500 font-bold text-lg mb-2">
              H11 ⮞ H22 ⮞ H33 ⮞ H44 ⮞ H55
            </h3>
            <div className="text-gray-200 space-y-6">
              <div>
                <strong className="block text-white mb-2">Materials:</strong>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>H11 Elemental</li>
                  <li className="text-yellow-500">20pcs Keen Talic</li>
                   <li className="text-purple-400">20pcs Favor Talic</li>
                  <li>5pcs Lucky Set of Gem Exchanger</li>
                  <li>1 Shiny Luck Jewel Coupon</li>
                  <li className="text-green-400">SAFE: Elemental</li>
                  <li className="text-red-400">Fee: 100m Race Currency</li>
                </ul>
              </div>
              <div>
                <strong className="block text-white mb-2">Result:</strong>
                <ul className="list-disc list-inside text-sm">
                  <li>H11 up to H55</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
        {
      title: 'H11 TO H55 UPGRADING (ATTACK/AVOID)',
      content: (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#111] border border-red-500/40 rounded-xl p-6 shadow-[0_0_30px_rgba(253,224,71,0.15)]">
            <h3 className="text-red-500 font-bold text-lg mb-4 tracking-wide">
              Chances
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-red-500/10 pb-2">
                <span>H11 ➝ H22</span>
                <span className="text-green-400 font-semibold">25%</span>
              </li>

              <li className="flex justify-between border-b border-red-500/10 pb-2">
                <span>H22 ➝ H33</span>
                <span className="text-yellow-400 font-semibold">20%</span>
              </li>

              <li className="flex justify-between border-b border-red-500/10 pb-2">
                <span>H33 ➝ H44</span>
                <span className="text-orange-400 font-semibold">15%</span>
              </li>

              <li className="flex justify-between">
                <span>H44 ➝ H55</span>
                <span className="text-red-500 font-semibold">10%</span>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 bg-[#0f0f0f] border border-red-500/40 rounded-xl p-6 shadow-[0_0_40px_rgba(239,68,68,0.15)]">
            <h3 className="text-red-500 font-bold text-lg mb-2">
              H11 ⮞ H22 ⮞ H33 ⮞ H44 ⮞ H55
            </h3>
            <div className="text-gray-200 space-y-6">
              <div>
                <strong className="block text-white mb-2">Materials:</strong>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>H11 Elemental</li>
                   <li className="text-yellow-500">20pcs Keen Talic</li>
                   <li className="text-emerald-500">20pcs Mercy Talic</li>
                  <li>5pcs Lucky Set of Gem Exchanger</li>
                  <li>1 Shiny Luck Jewel Coupon</li>
                  <li className="text-green-400">SAFE: Elemental</li>
                  <li className="text-red-400">Fee: 100m Race Currency</li>
                </ul>
              </div>
              <div>
                <strong className="block text-white mb-2">Result:</strong>
                <ul className="list-disc list-inside text-sm">
                  <li>H11 up to H55</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
     {
      title: 'H11 TO H55 UPGRADING (DEFENSE/AVOID)',
      content: (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#111] border border-red-500/40 rounded-xl p-6 shadow-[0_0_30px_rgba(253,224,71,0.15)]">
            <h3 className="text-red-500 font-bold text-lg mb-4 tracking-wide">
              Chances
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-red-500/10 pb-2">
                <span>H11 ➝ H22</span>
                <span className="text-green-400 font-semibold">25%</span>
              </li>

              <li className="flex justify-between border-b border-red-500/10 pb-2">
                <span>H22 ➝ H33</span>
                <span className="text-yellow-400 font-semibold">20%</span>
              </li>

              <li className="flex justify-between border-b border-red-500/10 pb-2">
                <span>H33 ➝ H44</span>
                <span className="text-orange-400 font-semibold">15%</span>
              </li>

              <li className="flex justify-between">
                <span>H44 ➝ H55</span>
                <span className="text-red-500 font-semibold">10%</span>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 bg-[#0f0f0f] border border-red-500/40 rounded-xl p-6 shadow-[0_0_40px_rgba(239,68,68,0.15)]">
            <h3 className="text-red-500 font-bold text-lg mb-2">
              H11 ⮞ H22 ⮞ H33 ⮞ H44 ⮞ H55
            </h3>
            <div className="text-gray-200 space-y-6">
              <div>
                <strong className="block text-white mb-2">Materials:</strong>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>H11 Elemental</li>
                   <li className="text-purple-400">20pcs Favor Talic</li>
                   <li className="text-emerald-500">20pcs Mercy Talic</li>
                  <li>5pcs Lucky Set of Gem Exchanger</li>
                  <li>1 Shiny Luck Jewel Coupon</li>
                  <li className="text-green-400">SAFE: Elemental</li>
                  <li className="text-red-400">Fee: 100m Race Currency</li>
                </ul>
              </div>
              <div>
                <strong className="block text-white mb-2">Result:</strong>
                <ul className="list-disc list-inside text-sm">
                  <li>H11 up to H55</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'H1 TO H5 UPGRADING (ATTACK)',
      content: (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#111] border border-red-500/40 rounded-xl p-6 shadow-[0_0_30px_rgba(253,224,71,0.15)]">
            <h3 className="text-red-500 font-bold text-lg mb-4 tracking-wide">
              Chances
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-red-500/10 pb-2">
                <span>H1 ➝ H2</span>
                <span className="text-green-400 font-semibold">25%</span>
              </li>

              <li className="flex justify-between border-b border-red-500/10 pb-2">
                <span>H2 ➝ H3</span>
                <span className="text-yellow-400 font-semibold">20%</span>
              </li>

              <li className="flex justify-between border-b border-red-500/10 pb-2">
                <span>H3 ➝ H4</span>
                <span className="text-orange-400 font-semibold">15%</span>
              </li>

              <li className="flex justify-between">
                <span>H4 ➝ H5</span>
                <span className="text-red-500 font-semibold">10%</span>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 bg-[#0f0f0f] border border-red-500/40 rounded-xl p-6 shadow-[0_0_40px_rgba(239,68,68,0.15)]">
            <h3 className="text-red-500 font-bold text-lg mb-2">
              H1 ⮞ H2 ⮞ H3 ⮞ H4 ⮞ H5
            </h3>
            <div className="text-gray-200 space-y-6">
              <div>
                <strong className="block text-white mb-2">Materials:</strong>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>H1 Elemental</li>
                   <li className="text-yellow-500">20pcs Keen Talic</li>
                  <li>5pcs Lucky Set of Gem Exchanger</li>
                  <li>1 Shiny Luck Jewel Coupon</li>
                  <li className="text-green-400">SAFE: Elemental</li>
                  <li className="text-red-400">Fee: 100m Race Currency</li>
                </ul>
              </div>
              <div>
                <strong className="block text-white mb-2">Result:</strong>
                <ul className="list-disc list-inside text-sm">
                  <li>H1 up to H5</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'H1 TO H5 UPGRADING (DEFENSE)',
      content: (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#111] border border-red-500/40 rounded-xl p-6 shadow-[0_0_30px_rgba(253,224,71,0.15)]">
            <h3 className="text-red-500 font-bold text-lg mb-4 tracking-wide">
              Chances
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-red-500/10 pb-2">
                <span>H1 ➝ H2</span>
                <span className="text-green-400 font-semibold">25%</span>
              </li>

              <li className="flex justify-between border-b border-red-500/10 pb-2">
                <span>H2 ➝ H3</span>
                <span className="text-yellow-400 font-semibold">20%</span>
              </li>

              <li className="flex justify-between border-b border-red-500/10 pb-2">
                <span>H3 ➝ H4</span>
                <span className="text-orange-400 font-semibold">15%</span>
              </li>

              <li className="flex justify-between">
                <span>H4 ➝ H5</span>
                <span className="text-red-500 font-semibold">10%</span>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 bg-[#0f0f0f] border border-red-500/40 rounded-xl p-6 shadow-[0_0_40px_rgba(239,68,68,0.15)]">
            <h3 className="text-red-500 font-bold text-lg mb-2">
              H1 ⮞ H2 ⮞ H3 ⮞ H4 ⮞ H5
            </h3>
            <div className="text-gray-200 space-y-6">
              <div>
                <strong className="block text-white mb-2">Materials:</strong>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>H1 Elemental</li>
                   <li className="text-purple-400">20pcs Favor Talic</li>
                  <li>5pcs Lucky Set of Gem Exchanger</li>
                  <li>1 Shiny Luck Jewel Coupon</li>
                  <li className="text-green-400">SAFE: Elemental</li>
                  <li className="text-red-400">Fee: 100m Race Currency</li>
                </ul>
              </div>
              <div>
                <strong className="block text-white mb-2">Result:</strong>
                <ul className="list-disc list-inside text-sm">
                  <li>H1 up to H5</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'H1 TO H5 UPGRADING (AVOID)',
      content: (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#111] border border-red-500/40 rounded-xl p-6 shadow-[0_0_30px_rgba(253,224,71,0.15)]">
            <h3 className="text-red-500 font-bold text-lg mb-4 tracking-wide">
              Chances
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-red-500/10 pb-2">
                <span>H1 ➝ H2</span>
                <span className="text-green-400 font-semibold">25%</span>
              </li>

              <li className="flex justify-between border-b border-red-500/10 pb-2">
                <span>H2 ➝ H3</span>
                <span className="text-yellow-400 font-semibold">20%</span>
              </li>

              <li className="flex justify-between border-b border-red-500/10 pb-2">
                <span>H3 ➝ H4</span>
                <span className="text-orange-400 font-semibold">15%</span>
              </li>

              <li className="flex justify-between">
                <span>H4 ➝ H5</span>
                <span className="text-red-500 font-semibold">10%</span>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 bg-[#0f0f0f] border border-red-500/40 rounded-xl p-6 shadow-[0_0_40px_rgba(239,68,68,0.15)]">
            <h3 className="text-red-500 font-bold text-lg mb-2">
              H1 ⮞ H2 ⮞ H3 ⮞ H4 ⮞ H5
            </h3>
            <div className="text-gray-200 space-y-6">
              <div>
                <strong className="block text-white mb-2">Materials:</strong>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>H1 Elemental</li>
                   <li className="text-emerald-500">20pcs Mercy Talic</li>
                  <li>5pcs Lucky Set of Gem Exchanger</li>
                  <li>1 Shiny Luck Jewel Coupon</li>
                  <li className="text-green-400">SAFE: Elemental</li>
                  <li className="text-red-400">Fee: 100m Race Currency</li>
                </ul>
              </div>
              <div>
                <strong className="block text-white mb-2">Result:</strong>
                <ul className="list-disc list-inside text-sm">
                  <li>H1 up to H5</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const dropdownData2 = [
    {
      title: 'TYPE C ARMOR',
      content: (
        <div className="Bai">
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
        <div className="">
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
      title: 'TYPE C SHIELD',
      content: (
        <div className="">
          <h3 className="text-red-500 font-bold text-lg">+3/5 TYPE C SHIELD</h3>
          <p className="text-gray-200 mb-4">
            <strong>Material:</strong>
            <ul className="list-inside">
              <li>+5/5 Intense Lv50 or Lv45 Shield</li>
              <li>10pcs Shield Blueprint</li>
              <li>2pcs Protection / Anti-Sharp Ability Reaver</li>
              <li className="text-green-500">SAFE: Shield</li>
              <li className="text-red-500">Chance: 50%</li>
               <li className="text-red-500">Fee: 50m Race Currency</li>
            </ul>
            <strong>Result:</strong>
            <ul className="list-disc list-inside">
              <li>+3/5 Type C Lv50 or Lv45 Shield</li>
            </ul>
          </p>
        </div>
      ),
    },


    {
      title: 'PARAGON HELM',
      content: (
        <div className="">
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
        <div className="">
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
        <div className="">
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

  const Panel = ({ children, className = "" }) => (
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
                  isOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
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
          <h1 className="text-5xl font-COP1 md:text-6xl font-extrabold text-center
          bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400
          bg-clip-text text-transparent
          drop-shadow-[0_0_18px_rgba(255,80,0,0.9)]">
            COMBINATION GUIDE
          </h1>

          {/* Section 1 */}
          <Panel className="p-8">
            <Dropdown
              data={dropdownData}
              open={openDropdown}
              toggle={toggleDropdown}
         
            />
          </Panel>

          {/* Section 2 */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-orange-300 tracking-wide">
              PHOENIX GEARS
            </h2>

            <Panel className="p-8">
              <Dropdown
                data={dropdownData2}
                open={openDropdown2}
                toggle={toggleDropdown2}
             
              />
            </Panel>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Combination;
