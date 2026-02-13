import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaD, FaRankingStar } from "react-icons/fa6";
import { FaDonate } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom"; 
import { Link as ScrollLink } from 'react-scroll'; 
import { FaList } from "react-icons/fa";
import Icon from '../assets/logo1.png'
import { GiEggEye } from "react-icons/gi";


function Navbar({ activeTab }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation


  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };
  const handleDonationClick = () => {
    navigate('/donation');
    window.scrollTo(0, 0);
  };
  const handleCombinationClick = () => {
    navigate('/combination');
    window.scrollTo(0, 0);
  };
  const handleFarmSiteClick = () => {
    navigate('/farmsite');
    window.scrollTo(0, 0);
  };
  const handleDropListClick = () => {
    navigate('/droplist');
    window.scrollTo(0, 0);
  };
  const handleRulesClick = () => {
    navigate('/rules');
    window.scrollTo(0, 0);
  };
  const handleEggClick = () => {
    navigate('/phoenixEgg');
    window.scrollTo(0, 0);
  };
  const handleBattlepassClick = () => {
    navigate('/battlepass');
    window.scrollTo(0, 0);
  };
  
  const handleDailyQuestClick = () => {
    navigate('/dailyquest');
    window.scrollTo(0, 0);
  };

  const handleLeaderboardsClick = () => {

    navigate('/');


    setTimeout(() => {
      // Use react-scroll to scroll to the "leaderboards-section"
      const leaderboardsLink = document.getElementById('leaderboards-section');
      if (leaderboardsLink) {
        leaderboardsLink.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  const handleCashShopClick = () => {
    navigate('/');
  
    setTimeout(() => {
      const cashShopLink = document.getElementById('cash-section');
      if (cashShopLink) {
        cashShopLink.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500); 
  };

  const handlePackageClick = () => {
    navigate('/donation');
  
    setTimeout(() => {
      const packageLink = document.getElementById('package-section');
      if (packageLink) {
        packageLink.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500); // Delay to ensure the new page is fully loaded
  };
  

  const getUnderlineClass = (tabName) =>
    activeTab === tabName
      ? "absolute left-0 top-8 inline-block w-full h-[2px] bg-red-500 shadow-[0px_0px_10px_2px_rgba(255,0,0,0.8)] transition-all duration-300"
      : "absolute left-0 top-8 inline-block w-0 h-[1px] bg-transparent group-hover:w-full group-hover:bg-red-500 group-hover:shadow-[0px_0px_10px_2px_rgba(255,0,0,0.8)] transition-all duration-300";

      const getTextClass = (tabName) =>
        activeTab === tabName ? "text-red-500" : "text-white";

  return (
<nav className="bg-black text-white sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 flex items-center justify-between">

    {/* LEFT — Logo */}
    <Link to="/" className="flex items-center gap-2">
      <img src={Icon} alt="Logo" className="h-12 lg:h-14 w-auto" />
    </Link>

    {/* CENTER — Desktop Navigation */}
    <ul className="hidden xl:flex items-center gap-6 text-lg font-medium">

     <li className="relative group">
      <button
        onClick={handleHomeClick}
        className={`flex items-center gap-2 hover:text-red-500 ${getTextClass("home-section")}`}
      >
        <FaHome />
        HOME
      </button>

      <span
        className={`absolute left-0 top-8 inline-block transition-all duration-300 ${
          activeTab === "home-section"
            ? "w-full h-[2px] bg-red-500 shadow-[0px_0px_10px_2px_rgba(255,0,0,0.8)]"
            : "w-0 h-[2px] bg-red-500 group-hover:w-full"
        }`}
      />
    </li>

      <li className="relative group">
      <button
        onClick={handleEggClick}
        className={`flex items-center gap-2 hover:text-red-500 ${getTextClass("egg-section")}`}
      >
        <GiEggEye />
        PHOENIX EGG
      </button>

      <span
        className={`absolute left-0 top-8 inline-block transition-all duration-300 ${
          activeTab === "egg-section"
            ? "w-full h-[2px] bg-red-500 shadow-[0px_0px_10px_2px_rgba(255,0,0,0.8)]"
            : "w-0 h-[2px] bg-red-500 group-hover:w-full"
        }`}
      />
    </li>

{/* GAME GUIDES */}
<li className="relative group cursor-pointer">
  <div
    className={`flex items-center gap-1 hover:text-red-500 ${getTextClass("guide-section")}`}
  >
    GAME GUIDES <IoMdArrowDropdown />
  </div>

  {/* UNDERLINE */}
  <span
    className={`absolute left-0 top-8 inline-block transition-all duration-300 ${
      activeTab === "guide-section"
        ? "w-full h-[2px] bg-red-500 shadow-[0px_0px_10px_2px_rgba(255,0,0,0.8)]"
        : "w-0 h-[2px] bg-red-500 group-hover:w-full"
    }`}
  />

  {/* DROPDOWN */}
  <ul className="absolute left-0 hidden group-hover:block bg-black border border-red-500 rounded shadow-lg w-52 p-2 z-20">
    <li>
      <button onClick={handleCombinationClick} className="p-2 hover:text-red-500 w-full text-left">
        COMBINATION
      </button>
    </li>
    <li>
      <button className="p-2 hover:text-red-500 w-full text-left">
        LOOT BOARD
      </button>
    </li>
    <li>
      <button className="p-2 hover:text-red-500 w-full text-left">
        FARM SITES
      </button>
    </li>
    <li>
      <button onClick={handleDailyQuestClick} className="p-2 hover:text-red-500 w-full text-left">
        QUESTS
      </button>
    </li>
  </ul>
</li>

     <li className="relative group">
      <button
        onClick={handleRulesClick}
        className={`flex items-center gap-2 hover:text-red-500 ${getTextClass("rule-section")}`}
      >
        <FaList />
        SERVER RULES
      </button>

      <span
        className={`absolute left-0 top-8 inline-block transition-all duration-300 ${
          activeTab === "rule-section"
            ? "w-full h-[2px] bg-red-500 shadow-[0px_0px_10px_2px_rgba(255,0,0,0.8)]"
            : "w-0 h-[2px] bg-red-500 group-hover:w-full"
        }`}
      />
    </li>

      <li className="relative group">
      <button
        onClick={handleDonationClick}
        className={`flex items-center gap-2 hover:text-red-500 ${getTextClass("donation-section")}`}
      >
        <FaDonate />
        DONATION
      </button>

      <span
        className={`absolute left-0 top-8 inline-block transition-all duration-300 ${
          activeTab === "donation-section"
            ? "w-full h-[2px] bg-red-500 shadow-[0px_0px_10px_2px_rgba(255,0,0,0.8)]"
            : "w-0 h-[2px] bg-red-500 group-hover:w-full"
        }`}
      />
    </li>
    </ul>

    {/* RIGHT — Desktop Dropdowns */}
    <div className="hidden xl:flex items-center gap-3">

      {/* GAMECP */}
      <div className="dropdown dropdown-hover">
        <button className="px-4 py-2 border border-red-500 rounded hover:bg-red-500 hover:text-black transition">
          GAMECP
        </button>
        <ul className="dropdown-content menu p-2 bg-black border border-red-500 rounded shadow-lg">
          <li>
            <a href="https://phoenix.gamecp.net/register.php" target="_blank" rel="noopener noreferrer" className="px-4 py-2 hover:bg-red-500">
              REGISTRATION
            </a>
          </li>
          <li>
            <a href="https://phoenix.gamecp.net/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 hover:bg-red-500">
              LOGIN
            </a>
          </li>
        </ul>
      </div>

      {/* COMMUNITY */}
      <div className="dropdown dropdown-hover">
        <button className="px-4 py-2 border border-red-500 rounded hover:bg-red-500 hover:text-black transition">
          COMMUNITY
        </button>
        <ul className="dropdown-content menu p-2 bg-black border border-red-500 rounded shadow-lg w-44">
          <li>
            <a href="https://discord.gg/qtFNVqFQb4" target="_blank" rel="noopener noreferrer" className="px-4 py-2 hover:bg-red-500">
              DISCORD
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/rfonlinephoenix" target="_blank" rel="noopener noreferrer" className="px-4 py-2 hover:bg-red-500">
              FACEBOOK
            </a>
          </li>
        </ul>
      </div>

    </div>

    {/* MOBILE MENU BUTTON */}
    <button
      className="xl:hidden text-white"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      ☰
    </button>
  </div>

  {/* MOBILE DROPDOWN */}
  {isMobileMenuOpen && (
    <div className="xl:hidden bg-black border-t border-red-500 px-4 py-4 space-y-3">

      <button onClick={handleHomeClick} className="block w-full text-left hover:text-red-500">HOME</button>
      <button onClick={handleEggClick} className="block w-full text-left hover:text-red-500">PHOENIX EGG</button>
      <button onClick={handleRulesClick} className="block w-full text-left hover:text-red-500">SERVER RULES</button>
      <button onClick={handleDonationClick} className="block w-full text-left hover:text-red-500">DONATION</button>


    <button onClick={handleCombinationClick} className="block w-full text-left hover:text-red-500">COMBINATION</button>
      <button onClick={handleCombinationClick} className="block w-full text-left hover:text-red-500">LOOT BOARD</button>
      <button onClick={handleCombinationClick} className="block w-full text-left hover:text-red-500">FARM SITES</button>
      <button onClick={handleDailyQuestClick} className="block w-full text-left hover:text-red-500">QUESTS</button>


      {/* COMMUNITY */}
      <div className="pt-2 border-t border-red-500/30">
        <p className="text-red-400 mb-2">COMMUNITY</p>
        <a href="https://discord.gg/qtFNVqFQb4" target="_blank" rel="noopener noreferrer" className="block py-1 hover:text-red-500">Discord</a>
        <a href="https://www.facebook.com/rfonlinephoenix" target="_blank" rel="noopener noreferrer" className="block py-1 hover:text-red-500">Facebook</a>
      </div>

      {/* GAMECP */}
      <div className="pt-2 border-t border-red-500/30">
        <p className="text-red-400 mb-2">GAMECP</p>
        <a href="https://phoenix.gamecp.net/register.php" target="_blank" rel="noopener noreferrer" className="block py-1 hover:text-red-500">Register</a>
        <a href="https://phoenix.gamecp.net/" target="_blank" rel="noopener noreferrer" className="block py-1 hover:text-red-500">Login</a>
      </div>
    </div>
  )}
</nav>

  );
}

export default Navbar;


                 {/**
                <li className=" hover:text-red-500 p-2">
                <button onClick={handleDropListClick} >DROPLIST</button>
                </li>
                <li className=" hover:text-red-500 p-2">
                <button onClick={handleFarmSiteClick} >FARM SITES</button>
                </li>
                <li className=" hover:text-red-500 p-2">
                <button onClick={handleDailyQuestClick} >DAILYQUEST</button>
                </li>
                 */}
                 
{/* Apex Set 
<li className="relative flex items-center gap-2 cursor-pointer hover:text-red-500 group">
  <button
    onClick={handleDonationClick} 
    className="flex gap-2 items-center"
  >
    <FaDonate className={`${getTextClass("apex-set-section")} group-hover:text-red-500`} />
    <span className={`${getTextClass("apex-set-section")} group-hover:text-red-500`}>
      APEX SET
    </span>
  </button>
</li>

<li className="relative flex items-center gap-2 cursor-pointer hover:text-red-500 group">
  <ScrollLink
    to="package-section" // Scroll target ID
    smooth={true} // Enable smooth scrolling
    duration={500} // Scroll duration
    offset={-200} // Adjust scroll offset
    className="flex gap-2 items-center"
  >
    <FaDonate className={`${getTextClass("package-shop-section")} group-hover:text-red-500`} />
    <span className={`${getTextClass("package-shop-section")} group-hover:text-red-500`}>
      PACKAGE
    </span>
  </ScrollLink>
</li>*/}