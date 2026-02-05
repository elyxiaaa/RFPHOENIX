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
    navigate('/donation');
  
    setTimeout(() => {
      const cashShopLink = document.getElementById('cash-section');
      if (cashShopLink) {
        cashShopLink.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500); // Delay to ensure the new page is fully loaded
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
    <nav className="bg-black text-white px-6 py-8 sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center relative">
      {/* Logo (Visible on large screens only) */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <Link to="/">
          <img
            src={Icon}
            alt="Logo"
            className="h-16 w-auto mt-3" // Adjust size as needed
          />
        </Link>
      </div>

      {/* Navigation Links - Desktop Only */}
      <div className="hidden lg:flex justify-center flex-1">
        <ul className="flex gap-6 items-center text-lg font-medium">
          {/* Home Button with React Scroll */}
          <li className="relative flex items-center gap-2 cursor-pointer hover:text-red-500 group">
            <button onClick={handleHomeClick} className="flex items-center">
            <FaHome className={`mr-2 group-hover:text-red-500 ${getTextClass("home-section")}`} />
              <span className={`group-hover:text-red-500 ${getTextClass("home-section")}`}>HOME</span>
              <span className={getUnderlineClass("home-section")} />
            </button>
          </li>
           {/* Leaderboards Button */}
           <li className="relative flex items-center gap-2 cursor-pointer hover:text-red-500 group">
              <ScrollLink
                to="leaderboards-section" // This ID should match the section in your Home page
                smooth={true} // Smooth scroll
                duration={500} // Scroll duration in ms
                offset={-200} // Adjust scroll offset
                onClick={handleLeaderboardsClick} // Combine with handle click logic
                className="flex items-center"
              >
                <FaRankingStar className={`mr-2 ${getTextClass("leaderboards-section")} group-hover:text-red-500`} />
                <span className={`${getTextClass("leaderboards-section")} group-hover:text-red-500`}>LEADERBOARDS</span>
                <span className={getUnderlineClass("leaderboards-section")} />
              </ScrollLink>
            </li>

             <li className="relative flex items-center gap-2 cursor-pointer hover:text-red-500 group">
            <button onClick={handleCashShopClick} className="flex gap-2 items-center">
            <FaDonate className={`${getTextClass("donation-section")} group-hover:text-red-500`} /> 
              <span className={`${getTextClass("donation-section")} group-hover:text-red-500`}>CASH SHOP</span>
                <span className={getUnderlineClass("donation-section")} />
              </button>
            </li>


            {/* Game Guides Dropdown */}
            <li className="relative cursor-pointer hover:text-red-500  group">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center gap-2 text-white hover:text-red-500 cursor-pointer"
              >
                <span className={`${getTextClass("guide-section")} group-hover:text-red-500`}>GAME GUIDES</span>
                                 <IoMdArrowDropdown className={`${getTextClass("guide-section")}`} /> 
                <span className={getUnderlineClass("guide-section")} />
              </div>
              <ul
                className="absolute left-0 hidden group-hover:block bg-black text-white rounded shadow-lg w-44 p-2 z-10"
              >
                <li className=" hover:text-red-500 p-2">
                <button onClick={handleCombinationClick} >COMBINATION</button>
                </li>
                
                <li className=" hover:text-red-500 p-2">
                <button onClick={handleFarmSiteClick} >FARM SITES</button>
                </li>
                <li className=" hover:text-red-500 p-2">
                <button onClick={handleDropListClick} >DROPLIST</button>
                </li>
                <li className=" hover:text-red-500 p-2">
                <button onClick={handleDailyQuestClick} >DAILYQUEST</button>
                </li>
              </ul>
            </li>
            <li className="relative flex items-center gap-2 cursor-pointer hover:text-red-500 group">
            <button onClick={handleRulesClick} className="flex gap-2 items-center">
            <FaList className={`${getTextClass("rule-section")} group-hover:text-red-500`} /> 
              <span className={`${getTextClass("rule-section")} group-hover:text-red-500`}>SERVER RULES</span>
                <span className={getUnderlineClass("rule-section")} />
              </button>
            </li>
    
            
          </ul>
        </div>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
  {/* DaisyUI Dropdown */}
  <div className="dropdown dropdown-hover font-medium">
    <button
      className="px-4 py-2 bg-black text-white border border-red-500 rounded-md transition-all duration-300 hover:bg-red-500 hover:text-black shadow-lg"
    >
      GAMECP
    </button>
    <ul className="dropdown-content menu p-2 bg-black text-white border border-red-500 rounded-md shadow-lg">
    <Link to="https://rfapex.gamecp.net/register.php">
      <li>
      <button className="block px-4 py-2 text-left hover:bg-red-500 transition duration-200">
          REGISTRATION
        </button>
      </li>
      </Link>
      <Link to="https://rfapex.gamecp.net/index.php">
      <li>
        <button className="block px-4 py-2 text-left hover:bg-red-500 transition duration-200">
          LOGIN
        </button>
      </li>
      </Link>
    </ul>
  </div>
</div>

        {/* Mobile and Tablet Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile and Tablet Menu Dropdown */}
      {isMobileMenuOpen && (
        <ul className="lg:hidden bg-black text-white font-COP1 mt-2 p-4 space-y-3 shadow-lg rounded">
          {/* Home Button with React Scroll */}
          <li className="flex items-center gap-2 cursor-pointer hover:text-red-500">
          <button onClick={handleHomeClick} className="flex items-center">
            <FaHome className={`mr-2 group-hover:text-red-500 ${getTextClass("home-section")}`} />
              <span className={`group-hover:text-red-500 ${getTextClass("home-section")}`}>HOME</span>
              
            </button>
          </li>

           {/* Leaderboards Button */}
           <li className="relative flex items-center gap-2 cursor-pointer hover:text-red-500 group">
              <ScrollLink
                to="leaderboards-section" // This ID should match the section in your Home page
                smooth={true} // Smooth scroll
                duration={500} // Scroll duration in ms
                offset={-200} // Adjust scroll offset
                onClick={handleLeaderboardsClick} // Combine with handle click logic
                className="flex items-center"
              >
                <FaRankingStar className={`mr-2 ${getTextClass("leaderboards-section")} group-hover:text-red-500`} />
                <span className={`${getTextClass("leaderboards-section")} group-hover:text-red-500`}>LEADERBOARDS</span>
              </ScrollLink>
            </li>

{/* Apex Set */}
<li className="relative flex items-center gap-2 cursor-pointer hover:text-red-500 group">
  <button
    onClick={handleDonationClick} // Use the existing function for Apex Set
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
</li>


   {/* Cash Shop */}
<li className="relative flex items-center gap-2 cursor-pointer hover:text-red-500 group">
  <ScrollLink
    to="cash-section" // Scroll target ID
    smooth={true} // Enable smooth scrolling
    duration={500} // Scroll duration
    offset={-200} // Adjust scroll offset
    className="flex gap-2 items-center"
  >
    <FaDonate className={`${getTextClass("cash-shop-section")} group-hover:text-red-500`} />
    <span className={`${getTextClass("cash-shop-section")} group-hover:text-red-500`}>
      CASH SHOP
    </span>
  </ScrollLink>
</li>

<li className="flex items-center gap-2 cursor-pointer hover:text-red-500">
          <button onClick={handleBattlepassClick} className="flex items-center">
            <FaDonate className={`mr-2 group-hover:text-red-500 ${getTextClass("battlepass-section")}`} />
              <span className={`group-hover:text-red-500 ${getTextClass("battlepass-section")}`}>BATTLEPASS</span>
              
            </button>
          </li>

        
            <li className="relative cursor-pointer hover:text-red-500  group">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center gap-2 text-white hover:text-red-500 cursor-pointer"
              >
                <span className={`${getTextClass("guide-section")} group-hover:text-red-500`}>GAME GUIDES</span>
                                 <IoMdArrowDropdown className={`${getTextClass("guide-section")}`} /> 
              </div>
              <ul className="bg-black ml-6 mt-1 space-y-1">
                <li className=" hover:text-red-500 p-2">
                <button onClick={handleCombinationClick} >COMBINATION</button>
                </li>
                
                <li className=" hover:text-red-500 p-2">
                <button onClick={handleFarmSiteClick} >FARM SITES</button>
                </li>
                <li className=" hover:text-red-500 p-2">
                <button onClick={handleDropListClick} >DROPLIST</button>
                </li>
                <li className=" hover:text-red-500 p-2">
                <button onClick={handleDailyQuestClick} >DAILYQUEST</button>
                </li>
              </ul>
            </li>
            <li className="relative flex items-center gap-2 cursor-pointer hover:text-red-500 group">
              <button onClick={handleRulesClick} className="flex gap-2 items-center">
              <FaList className={`${getTextClass("rule-section")} group-hover:text-red-500`} /> 
                <span className={`${getTextClass("rule-section")} group-hover:text-red-500`}>SERVER RULES</span>
                  <span className={getUnderlineClass("rule-section")} />
                </button>
            </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
