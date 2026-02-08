import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer'
import Card from '../Component/Card'
import { FaUsers } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom"; // Updated to use react-router-dom
import Logo from '../assets/logo1.png'
import Guild1 from '../assets/GALLERY/Poster1.jpg'
import OreIcon from '../assets/OreIcon.png'
import AccretiaIcon from '../assets/AccretiaIcon.png'
import BellatoIcon from '../assets/BellatoIcon.png'
import CoraIcon from '../assets/CoraIcon.png'
import AccretiaIconRed from '../assets/AccretiaIconRedBG.png'
import BellatoIconOrange from '../assets/BellatoIconOrangeBG.png'
import CoraIconPurple from '../assets/CoraIconPurpleBG.png'
import { FaChevronCircleRight } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";
import { FaGhost } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import { SiExcalidraw } from "react-icons/si";
import { useLocation } from 'react-router-dom';
import { GiDwarfKing } from "react-icons/gi";
import { GiCrownedSkull } from "react-icons/gi";
import { GiDwarfHelmet } from "react-icons/gi";
import { FaRegChessKing } from "react-icons/fa6";
import { FaChessKing } from "react-icons/fa";
import { LuSwords } from "react-icons/lu";
import { GiMissileSwarm } from "react-icons/gi";
import Slider from "react-slick";
//PICTURES
import Fenris from '../assets/GUILDS/Fenris.jpg'
import Predators from '../assets/GUILDS/Predators.jpg'
import Shadow from '../assets/GUILDS/Shadow.jpg'
import Cruelty from '../assets/GUILDS/Cruelty.jpg'
import Upheaval from '../assets/GUILDS/Upheaval.jpg'
import Dominance from '../assets/GUILDS/Dominance.jpg'
import ExileRonins from '../assets/GUILDS/ExileRonins.jpg'
import Hurricane from '../assets/GUILDS/Hurricane.jpg'
import Sentinels from '../assets/GUILDS/Sentinels.jpg'
import Habitus from '../assets/GUILDS/Habitus.jpg'
import MeetYourMasters from '../assets/GUILDS/MeetYourMasters.jpg'
import Savage from '../assets/GUILDS/Savage.jpg'
import Hellraios from '../assets/GUILDS/Hellraios.jpg'
import Patriots from '../assets/GUILDS/Patriots.jpg'
import Prodigy from '../assets/GUILDS/PRODIGY.jpg'
import Resbak from '../assets/GUILDS/Resbak.jpg'
import Assassins from '../assets/GUILDS/Assassins.jpg'
import Gotspell from '../assets/GUILDS/Gotspell.jpg'
import Imperium from '../assets/GUILDS/Imperium.jpg'
import BelowJob from '../assets/GUILDS/BelowJob.jpg'
import Manhunters from '../assets/GUILDS/Manhunters.jpg'
import WeDontCare from '../assets/GUILDS/WeDontCare.jpg'
import Azunites from '../assets/GUILDS/Azunites.jpg'
import Akatsuki from '../assets/GUILDS/Akatsuki.jpg'
import BrgyTagay from '../assets/GUILDS/BrgyTagay.jpg'
import Cerberus from '../assets/GUILDS/Cerberus.jpg'
import Invictus from '../assets/GUILDS/Invictus.jpg'
import Nemesis from '../assets/GUILDS/Nemesis.jpg'
import Retribution from '../assets/GUILDS/Retribution.jpg'
import Kuyraisass from '../assets/GUILDS/Kuyraisass.jpg'
import Supremacy from '../assets/GUILDS/Supremacy.jpg'
import SDM from '../assets/GUILDS/SDM.jpg'

import Trophy1 from '../assets/HONOR/Trophy1.png'
import Trophy2 from '../assets/HONOR/trophy2.png'
import Trophy3 from '../assets/HONOR/Trophy3.png'
import Trophy4 from '../assets/HONOR/Trophy4.png'
import Trophy5 from '../assets/HONOR/Trophy5.png'
import BGBurn from '../assets/BGBurn.gif'

//VIDEOS
import FenrisVid from '../assets/VIDEOS/Fenris.gif'
import PredatorsVid from '../assets/VIDEOS/Predators.gif'
import ShadowVid from '../assets/VIDEOS/Shadow.gif'
import UpheavalVid from '../assets/VIDEOS/Upheaval.gif'
import DominanceVid from '../assets/VIDEOS/Dominance.gif'
import ExileRoninsVid from '../assets/VIDEOS/ExileRonins.gif'
import MeetYourMastersVid from '../assets/VIDEOS/MeetYourMasters.gif'
import SentinelsVid from '../assets/VIDEOS/Sentinels.gif'
import PatriotsVid from '../assets/VIDEOS/Patriots.gif'
import CrueltyVid from '../assets/VIDEOS/Cruelty.gif'
import GotspellVid from '../assets/VIDEOS/Gotspell.gif'
import ImperiumVid from '../assets/VIDEOS/Imperium.gif'
import Poster1 from '../assets/Poster.jpg'

//ACC
import ARF1 from '../assets/CLASS/ACC/ARF1.png'
import ARF2 from '../assets/CLASS/ACC/ARF2.png'
import ARS1 from '../assets/CLASS/ACC/ARS1.png'
import ARS2 from '../assets/CLASS/ACC/ARS2.png'
import ARS3 from '../assets/CLASS/ACC/ARS3.png'
import ASF1 from '../assets/CLASS/ACC/ASF1.png'
import ASS1 from '../assets/CLASS/ACC/ASS1.png'
import ASS2 from '../assets/CLASS/ACC/ASS2.png'
import AWF1 from '../assets/CLASS/ACC/AWF1.png'
import AWF2 from '../assets/CLASS/ACC/AWF2.png'
import AWS1 from '../assets/CLASS/ACC/AWS1.png'
import AWS2 from '../assets/CLASS/ACC/AWS2.png'
import AWS3 from '../assets/CLASS/ACC/AWS3.png'
//BCC
import BFF1 from '../assets/CLASS/BCC/BFF1.png'
import BFF2 from '../assets/CLASS/BCC/BFF2.png'
import BFS1 from '../assets/CLASS/BCC/BFS1.png'
import BFS2 from '../assets/CLASS/BCC/BFS2.png'
import BFS3 from '../assets/CLASS/BCC/BFS3.png'
import BRF1 from '../assets/CLASS/BCC/BRF1.png'
import BRF2 from '../assets/CLASS/BCC/BRF2.png'
import BRS1 from '../assets/CLASS/BCC/BRS1.png'
import BRS2 from '../assets/CLASS/BCC/BRS2.png'
import BRS3 from '../assets/CLASS/BCC/BRS3.png'
import BSF1 from '../assets/CLASS/BCC/BSF1.png'
import BSS1 from '../assets/CLASS/BCC/BSS1.png'
import BSS2 from '../assets/CLASS/BCC/BSS2.png'
import BWF1 from '../assets/CLASS/BCC/BWF1.png'
import BWF2 from '../assets/CLASS/BCC/BWF2.png'
import BWS1 from '../assets/CLASS/BCC/BWS1.png'
import BWS2 from '../assets/CLASS/BCC/BWS2.png'
import BWS3 from '../assets/CLASS/BCC/BWS3.png'
//CCC
import CFF1 from '../assets/CLASS/CCC/CFF1.png'
import CFS1 from '../assets/CLASS/CCC/CFS1.png'
import CFS2 from '../assets/CLASS/CCC/CFS2.png'
import CFS3 from '../assets/CLASS/CCC/CFS3.png'
import CRF1 from '../assets/CLASS/CCC/CRF1.png'
import CRF2 from '../assets/CLASS/CCC/CRF2.png'
import CRS1 from '../assets/CLASS/CCC/CRS1.png'
import CRS2 from '../assets/CLASS/CCC/CRS2.png'
import CRS3 from '../assets/CLASS/CCC/CRS3.png'
import CSF1 from '../assets/CLASS/CCC/CSF1.png'
import CSS1 from '../assets/CLASS/CCC/CSS1.png'
import CWF1 from '../assets/CLASS/CCC/CWF1.png'
import CWF2 from '../assets/CLASS/CCC/CWF2.png'
import CWS1 from '../assets/CLASS/CCC/CWS1.png'
import CWS2 from '../assets/CLASS/CCC/CWS2.png'
import CWS3 from '../assets/CLASS/CCC/CWS3.png'
import WidgetBot from '@widgetbot/react-embed'

import Winner1 from '../assets/PVP/Winner1.jpg'
import Winner2 from '../assets/PVP/Winner2.jpg'
import Winner3 from '../assets/PVP/Winner3.jpg'
import Winner4 from '../assets/PVP/Winner4.jpg'
import Winner5 from '../assets/PVP/Winner5.jpg'
import Winner6 from '../assets/PVP/Winner6.jpg'
import Winner7 from '../assets/PVP/Winner7.jpg'
import Winner8 from '../assets/PVP/Winner8.jpg'
import backgroundMusic from '../assets/audio/background-music.mp3';

function Home() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(null); 

  useEffect(() => {
    const audio = audioRef.current;

  
    if (audio) {
      audio.volume = 0.05; 
    }


    audio.play().catch((error) => {
      console.log("Autoplay blocked, waiting for user interaction to play music.");
    });

    const handleUserInteraction = () => {
      if (audio) {
        audio.muted = false; 
        audio.play(); 
        setIsMusicPlaying(true); 
      }
    
      window.removeEventListener('click', handleUserInteraction);
    };


    window.addEventListener('click', handleUserInteraction);


    return () => {
      window.removeEventListener('click', handleUserInteraction);
    };
  }, []); 

  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Display 2 slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: false,
    centerPadding: "0px",
    afterChange: (current) => setActiveSlide(current), // Update active slide index
  };

  const spotlightItems = [

  ]

  const location = useLocation()
  const [activeTab, setActiveTab] = useState('home-section'); // Default to 'home-section'
  const leaderboardsSectionRef = useRef(null);
  useEffect(() => {
    // Create an IntersectionObserver to observe the leaderboards section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab('leaderboards-section');
          } else if (!entry.isIntersecting && activeTab === 'leaderboards-section') {
            setActiveTab('home-section'); // Default back to home-section when not in view
          }
        });
      },
      {
        root: null, // relative to viewport
        threshold: 0.5, // When 50% of the section is visible
      }
    );

    // Start observing the leaderboards section
    if (leaderboardsSectionRef.current) {
      observer.observe(leaderboardsSectionRef.current);
    }

    return () => {
      if (leaderboardsSectionRef.current) {
        observer.unobserve(leaderboardsSectionRef.current);
      }
    };
  }, [activeTab]);

  const [totalPlayers, setTotalPlayers] = useState();
  const [serverStatus, setServerStatus] = useState()
  const [orePercent, setOrePercent] = useState(0);  // Initialize with a default value
  const [chipAcc, setChipAcc] = useState(0);        // Initialize with a default value
  const [chipBcc, setChipBcc] = useState(0);        // Initialize with a default value
  const [chipCcc, setChipCcc] = useState(0);        // Initialize with a default value
  
  const [cbName, setCbName] = useState();
  const [cbRace, setCbRace] = useState();
  const [cbStatus, setCbStatus] = useState();
  const [winRace, setWinRace] = useState();
  const [loseRace, setLoseRace] = useState();
  const [topKillers, setTopKillers] = useState([]); // Added topKillers state
  const [guildData, setGuildData] = useState({});

  const [archons, setArchons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching general server data
        const response = await fetch("https://rfapex.gamecp.net/web_api/?do=satu");
        const data = await response.json();
        console.log("API Response:", data);
        if (response.ok) {
          setTotalPlayers(data.result.online_field || 0);
          setServerStatus(data.result.status_game || "OFFLINE");
          setOrePercent(data.result.orepercent || 0);
          setChipAcc(data.result.chip_a || 0);
          setChipBcc(data.result.chip_b || 0);
          setChipCcc(data.result.chip_c || 0);
          setWinRace(data.result?.win_race || "Unknown");
          setLoseRace(data.result?.lose_race || "Unknown");
          setCbName(data.result?.cb_name || "None");
          setCbStatus(data.result?.cb_status || "Unkown");
          setCbRace(data.result?.cb_race || "Unknown");
        }
  
        // Fetching Archons and Top Killers data
        const responseTwo = await fetch("https://rfapex.gamecp.net/web_api/?do=dua");
        const dataTwo = await responseTwo.json();
        console.log("API Response Two:", dataTwo);
  
        if (responseTwo.ok) {
          // Fetch and set Archon data
          const raceAvatars = {
            accretia: "/src/assets/accretia.png",
            bellato: "/src/assets/bellato.png",
            cora: "/src/assets/cora.png",
          };
          const fetchedArchons = [
            {
              name: dataTwo.result.arc_a?.name || "Accretia", // Make sure 'name' is correctly extracted
              race: dataTwo.result.arc_a?.race || "Accretia", // Check for race
              kills: dataTwo.result.arc_a?.kill || 0,
              deaths: dataTwo.result.arc_a?.dead || 0,
            },
            {
              name: dataTwo.result.arc_b?.name || "Bellato",
              race: dataTwo.result.arc_b?.race || "Bellato",
              kills: dataTwo.result.arc_b?.kill || 0,
              deaths: dataTwo.result.arc_b?.dead || 0,
            },
            {
              name: dataTwo.result.arc_c?.name || "Cora",
              race: dataTwo.result.arc_c?.race || "Cora",
              kills: dataTwo.result.arc_c?.kill || 0,
              deaths: dataTwo.result.arc_c?.dead || 0,
            },
          ];
          setArchons(fetchedArchons);

          // Fetching and setting Top Killers data (Top 5)
          const fetchedKillers = dataTwo.result.killer.slice(0, 5).map(killer => ({
            name: killer.name,
            kills: killer.kill,
            deaths: killer.dead,
            class_code: killer.class_code,
            avatar: `/src/assets/${killer.class_code}.png` // Dynamically set the avatar based on race
          }));
          setTopKillers(fetchedKillers); // Set top killers data
          console.log("Top Killers Data:", fetchedKillers);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  useEffect(() => {
    const fetchGuildData = async () => {
      try {
        const response = await fetch("https://rfapex.gamecp.net/web_api/?do=rengking");
        const data = await response.json();
        console.log("API Ranking", data);

        const rawGuilds = data?.result?.guild_points_odin || [];

        const grouped = {
          Accretia: [],
          Bellato: [],
          Cora: [],
        };

        rawGuilds.forEach(guild => {
          if (guild.race === "Accretia") grouped.Accretia.push(guild);
          else if (guild.race === "Bellato") grouped.Bellato.push(guild);
          else if (guild.race === "Cora") grouped.Cora.push(guild);
        });

        const formattedData = {};
        for (const race in grouped) {
          formattedData[race] = grouped[race]
            .slice(0, 5)
            .map(guild => ({
              name: decodeHTML(guild.guild_name),
              avatar: `https://rfapex.gamecp.net/guild_mark/mark_${guild.back_idx}_${guild.mark_idx}.bmp`,
              kills: guild.kill,
              deaths: guild.dead,
              points: guild.guild_points,
              color: guild.color
            }))
        }

        setGuildData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchGuildData();
  }, []);

  function decodeHTML(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  const chipWarData = [
    { icon: OreIcon, progress: `${orePercent}%`, color: "bg-green-500" },
    { icon: AccretiaIcon, progress: `${chipAcc}%`, color: "bg-red-500" },
    { icon: BellatoIcon, progress: `${chipBcc}%`, color: "bg-orange-500" },
    { icon: CoraIcon, progress: `${chipCcc}%`, color: "bg-purple-500" },
  ];

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);
  const videoRef5 = useRef(null);
  const videoRef6 = useRef(null);
  const videoRef7 = useRef(null);
  const videoRef8= useRef(null);
  const videoRef9 = useRef(null);
  const videoRef10 = useRef(null);
  const videoRef11 = useRef(null);
  const videoRef12 = useRef(null);
  const videoRef13 = useRef(null);
  const videoRef14 = useRef(null);
  const videoRef15 = useRef(null);
  const videoRef16 = useRef(null);
  const videoRef17 = useRef(null);
  const videoRef18 = useRef(null);
  const videoRef19 = useRef(null);
  const videoRef20 = useRef(null);
  const videoRef21 = useRef(null);
  const videoRef22 = useRef(null);
  const handleMouseEnter = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Restart the video
      videoRef.current.play(); // Play the video
    }
  };

  const handleMouseLeave = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pause the video
      videoRef.current.currentTime = 0; // Reset the video to start
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle opening and closing the modal
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <audio ref={audioRef} loop muted>
        <source src={backgroundMusic} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <Navbar activeTab={activeTab}/>
      <div
        id="home-section"
        className="w-full h-screen bg-BG1 bg-cover bg-center relative"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-65"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <img
            src={Logo}
            alt="Logo"
            className="w-72 h-72 md:w-96 md:h-96 "
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-ITC2 font-bold text-shadow-red-glow">
  Return to the Beginning. Reclaim the Glory
</h1>

          <p className="font-ITC text-xs md:text-sm lg:text-base mt-4 max-w-2xl">
           The fires have never died. After 4 years of l egendary warfare, the king has returned to reclaim the throne. Rise from the ashes and experience the resurgence of the best RF Online server to ever grace the world of Novus
          </p>

          <Link to="/download">
            <button className="flex items-center mt-6 bg-red-500 text-xl text-black font-bold py-3 px-10 md:px-6 rounded hover:bg-red-600 transform hover:scale-105 transition-all duration-300 mb-10">
              DOWNLOAD NOW
              <FaChevronCircleRight className="text-2xl ml-2 mt-1"/>
            </button>
          </Link>
          <div
  onClick={handleOpenModal}
  className="fixed top-36 right-6 bg-black/50 text-white w-64 p-4 rounded-md shadow-lg cursor-pointer transition-all duration-300 hover:bg-red-700"
>

  {/* Text */}
  <h3 className="text-lg font-semibold">Watch Trailer</h3>
  <p className="text-sm">Click to watch the trailer video</p>
</div>


          {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative w-11/12 md:w-3/4 lg:w-1/2 bg-black p-4 rounded-lg">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-white text-3xl z-50 rounded-full p-1"
              style={{ zIndex: 50 }}
            >
              &times;
            </button>

            {/* Facebook Video Embed */}
            <div className="relative pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Frfonlineapex%2Fvideos%2F1103775624374923%2F&show_text=false&width=560&t=0"
                width="560"
                height="315"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Facebook Video"
                style={{ zIndex: 10 }}
              ></iframe>
            </div>
          </div>
        </div>
      )}

        </div>
      </div>

      <div
        id="leaderboards-section"
        ref={leaderboardsSectionRef} // Set the ref here
  className="w-full min-h-fit bg-BGPoster2 bg-cover bg-center relative">
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900 to-black opacity-90"></div>

  {/* Content */}
  <div className="font-ITC font-bold relative z-10 flex flex-col lg:flex-row items-stretch justify-around text-white p-4 gap-6 bg-gray-800 bg-opacity-20 shadow-lg h-auto">
    {/* Server Status Section */}
   <div className="w-full lg:w-1/2 py-10 px-4 lg:px-12 border-r border-gray-700">
      <h2 className="text-4xl font-semibold text-center mb-6 text-red-500">
        RISING FORCE PHOENIX
      </h2>
      <h3 className="text-2xl text-center mb-4">SERVER STATUS</h3>
      <div className="flex items-center justify-between text-lg">
        {/* Updated Online Status and Total Players */}
        <span
          className={`flex gap-1 items-center ${
            serverStatus === "ONLINE" ? "text-green-500" : "text-red-500"
          }`}
        >
          <FaLightbulb /> {serverStatus}
        </span>
        <span className="flex gap-1 items-center text-white">
          <FaUsers /> {totalPlayers}
        </span>
      </div>
      <h4 className="text-xl font-semibold mt-6 mb-4 text-center flex items-center justify-center">
      <GiMissileSwarm className="mr-2"  /> Chip War
    </h4>
      <div className="space-y-4">
        {chipWarData.map((item, index) => (
          <div key={index} className="flex items-center mb-4">
            <img src={item.icon} alt={`Chip Icon ${index}`} className="mr-3 w-8 h-8" />
            <div className="w-full h-6 bg-gray-300 rounded relative overflow-hidden">
              <div
                className={`h-full ${item.color} flex items-center justify-center`}
                style={{ width: item.progress }}
              >
                <span className="text-white text-sm font-bold">{item.progress}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
    {/* Win and Lose Section */}
<div className="flex justify-between text-xl font-semibold">
<div className="flex flex-col items-center">
  <span className="text-green-500 text-shadow-green-glow">Win</span>
  {winRace === "Accretia" ? (
    <img src={AccretiaIcon} alt="Accretia" className="mt-2 w-12 h-12 object-cover" />
  ) : winRace === "Bellato" ? (
    <img src={BellatoIcon} alt="Bellato" className="mt-2 w-12 h-12 object-cover" />
  ) : winRace === "Cora" ? (
    <img src={CoraIcon} alt="Cora" className="mt-2 w-12 h-12 object-cover" />
  ) : winRace === "DRAW" ? (
    <LuSwords alt="Draw" className="text-green-500 mt-2 w-12 h-12 object-cover" />
  ) : winRace === "None" ? (
    <LuSwords alt="None" className="text-green-500 mt-2 w-12 h-12 object-cover" />
  ) : winRace === "RUNNING" ? (
    <FaRunning alt="Running" className="text-green-500 mt-2 w-12 h-12 object-cover" />
  ) : null}
</div>

  <div className="flex flex-col items-center">
    <span className="text-red-500 text-shadow-red-glow">Lose</span>
    {loseRace === "Accretia" ? (
  <img src={AccretiaIcon} alt="Accretia" className="mt-2 w-12 h-12 object-cover" />
) : loseRace === "Bellato" ? (
  <img src={BellatoIcon} alt="Bellato" className="mt-2 w-12 h-12 object-cover" />
) : loseRace === "Cora" ? (
  <img src={CoraIcon} alt="Cora" className="mt-2 w-12 h-12 object-cover" />
) : loseRace === "DRAW" ? (
  <LuSwords alt="Draw" className="text-red-500 mt-2 w-12 h-12 object-cover" />
) : loseRace === "None" ? (
  <LuSwords alt="None" className="text-red-500 mt-2 w-12 h-12 object-cover" />
)
: loseRace === "RUNNING" ? (
  <FaRunning alt="Running" className="text-red-500 mt-2 w-12 h-12 object-cover" />
) : null}

  </div>
</div>



   {/* Chip Breaker Section */}
<div className={`mt-4 text-lg font-bold ${cbRace === "Accretia" ? "text-red-500" : 
                cbRace === "Bellato" ? "text-orange-500" : 
                cbRace === "Cora" ? "text-purple-500" : "text-white"}`}>
  
  {cbStatus === "GOAL" ? (
    <GrAchievement className="inline-block text-white w-6 h-6 mr-2" />
  ) : cbStatus === "WAFAT" ? (
    <FaGhost className="inline-block text-white w-6 h-6 mr-2" />
  ) : cbStatus === "RUNNING" ? (
    <FaRunning className="inline-block text-green-500 w-6 h-6 mr-2" />
  )  : cbStatus === "KABUR" ? (
    <FaRunning className="inline-block text-green-500 w-6 h-6 mr-2" />
  ) : cbStatus === "DRAW" ? (
    <LuSwords className="inline-block text-green-500 w-6 h-6 mr-2" />
  )
  :(
    null
  )}

  CHIP BREAKER: {cbName}

  {cbStatus === "GOAL" ? (
    <GrAchievement className="inline-block text-white w-6 h-6 ml-2" />
  ) : cbStatus === "WAFAT" ? (
    <FaGhost className="inline-block text-white w-6 h-6 ml-2" />
  ) : cbStatus === "RUNNING" ? (
    <FaRunning className="inline-block text-red-500 w-6 h-6 ml-2" />
  )  : cbStatus === "KABUR" ? (
    <FaRunning className="inline-block text-red-500 w-6 h-6 ml-2" />
  ) : 
  cbStatus === "DRAW" ? (
    <LuSwords className="inline-block text-red-500 w-6 h-6 ml-2" />
  ) :
  (
  null
  )}

</div>

  </div>
    </div>


    {/* Leaderboards Section */}
    <div className="w-full lg:w-1/2 py-10 px-4">
    <h2 className="text-4xl font-semibold text-center mb-6 text-red-500">
        LEADERBOARDS
      </h2>

      {/* Leaderboards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 divide-x divide-gray-700">
      {/* Displaying Archons Section */}
<div className="py-6 px-4">
<h4 className="text-2xl font-semibold mb-4 text-white flex items-center">
      <FaChessKing className="mr-2 text-white" /> Archon
    </h4>
  <ul className="space-y-4">
    {archons.length > 0 ? (
      archons.map((archon, index) => {
        // Dynamically set avatar based on race
        let avatar;
        if (archon.race === 'Accretia') {
          avatar = AccretiaIconRed;
        } else if (archon.race === 'Bellato') {
          avatar = BellatoIconOrange;
        } else if (archon.race === 'Cora') {
          avatar = CoraIconPurple;
        } else {
          avatar = '/src/assets/default.png'; // Fallback if race is not recognized
        }

        return (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-900 p-3 shadow-md text-lg"
          >
            <div className="flex items-center">
              <img
                src={avatar} // Use dynamically determined avatar
                alt={archon.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <span>{archon.name || 'Unknown'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-green-500 w-16 text-center py-1 rounded-md">
                K: {archon.kills || 0}
              </span>
              <span className="bg-red-500 w-16 text-center py-1 rounded-md">
                D: {archon.deaths || 0}
              </span>
            </div>
          </li>
        );
      })
    ) : (
      <li>No Archons Available</li>
    )}
  </ul>
</div>


<div className="py-6 px-4">
<h4 className="text-2xl font-semibold mb-4 text-white flex items-center">
      <GiDwarfHelmet  className="mr-2 text-white" /> Top Killers
    </h4>
  <ul className="space-y-4">
    {topKillers.length > 0 ? (
      topKillers.map((player, index) => {
        // Conditionally set the avatar based on race
        let avatar;
        if (player.class_code.includes('ARF1')) {
          avatar = ARF1;
        } else if (player.class_code.includes('ARF2')) {
          avatar = ARF2;
        } else if (player.class_code.includes('ARS1')) {
          avatar = ARS1;  
        } else if (player.class_code.includes('ARS2')) {
          avatar = ARS2;
        }
        else if (player.class_code.includes('ARS3')) {
          avatar = ARS3;
        }
        else if (player.class_code.includes('ASF1')) {
          avatar = ASF1;
        }
        else if (player.class_code.includes('ASS1')) {
          avatar = ASS1;
        }
        else if (player.class_code.includes('ASS2')) {
          avatar = ASS2;
        }
        else if (player.class_code.includes('AWF1')) {
          avatar = AWF1;
        }
        else if (player.class_code.includes('AWF2')) {
          avatar = AWF2;
        }
        else if (player.class_code.includes('AWS1')) {
          avatar = AWS1;
        }
        else if (player.class_code.includes('AWS2')) {
          avatar = AWS2;
        }
        else if (player.class_code.includes('AWS3')) {
          avatar = AWS3;
        }
        else if (player.class_code.includes('BFF1')) {
          avatar = BFF1;
        }
        else if (player.class_code.includes('BFF2')) {
          avatar = BFF2;
        }
        else if (player.class_code.includes('BFS1')) {
          avatar = BFS1;
        }
        else if (player.class_code.includes('BFS2')) {
          avatar = BFS2;
        }
        else if (player.class_code.includes('BFS3')) {
          avatar = BFS3;
        }
        else if (player.class_code.includes('BRF1')) {
          avatar = BRF1;
        }
        else if (player.class_code.includes('BRF2')) {
          avatar = BRF2;
        }
        else if (player.class_code.includes('BRS1')) {
          avatar = BRS1;
        }
        else if (player.class_code.includes('BRS2')) {
          avatar = BRS2;
        }
        else if (player.class_code.includes('BRS3')) {
          avatar = BRS3;
        }
        else if (player.class_code.includes('BSF1')) {
          avatar = BSF1;
        }
        else if (player.class_code.includes('BSS1')) {
          avatar = BSS1;
        }
        else if (player.class_code.includes('BSS2')) {
          avatar = BSS2;
        }
        else if (player.class_code.includes('BWF1')) {
          avatar = BWF1;
        }
        else if (player.class_code.includes('BWF2')) {
          avatar = BWF2;
        }
        else if (player.class_code.includes('BWS1')) {
          avatar = BWS1;
        }
        else if (player.class_code.includes('BWS2')) {
          avatar = BWS2;
        }
        else if (player.class_code.includes('BWS3')) {
          avatar = BWS3;
        }
        else if (player.class_code.includes('CFF1')) {
          avatar = CFF1;
        }
        else if (player.class_code.includes('CFS1')) {
          avatar = CFS1;
        }
        else if (player.class_code.includes('CFS2')) {
          avatar = CFS2;
        }
        else if (player.class_code.includes('CFS3')) {
          avatar = CFS3;
        }
        else if (player.class_code.includes('CRF1')) {
          avatar = CRF1;
        }
        else if (player.class_code.includes('CRF2')) {
          avatar = CRF2;
        }
        else if (player.class_code.includes('CRS1')) {
          avatar = CRS1;
        }
        else if (player.class_code.includes('CRS2')) {
          avatar = CRS2;
        }
        else if (player.class_code.includes('CRS3')) {
          avatar = CRS3;
        }
        else if (player.class_code.includes('CSF1')) {
          avatar = CSF1;
        }
        else if (player.class_code.includes('CSS1')) {
          avatar = CSS1;
        }
        else if (player.class_code.includes('CWF1')) {
          avatar = CWF1;
        }
        else if (player.class_code.includes('CWF2')) {
          avatar = CWF2;
        }
        else if (player.class_code.includes('CWS1')) {
          avatar = CWS1;
        }
        else if (player.class_code.includes('CWS2')) {
          avatar = CWS2;
        }
        else if (player.class_code.includes('CWS3')) {
          avatar = CWS3;
        }
        else {
          
          avatar = '/src/assets/default-avatar.png'; // Fallback if the race is not recognized
        }

        return (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-900 p-3 shadow-md text-lg"
          >
            <div className="flex items-center">
              <img
                src={avatar}
                alt={player.race}
                className="w-10 h-10 rounded-full mr-3"
              />
              <span>{player.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-green-500 w-16 text-center py-1 rounded-md">
                K: {player.kills}
              </span>
              <span className="bg-red-500 w-16 text-center py-1 rounded-md">
                D: {player.deaths}
              </span>
            </div>
          </li>
        );
      })
    ) : (
      <li>No Top Killers Available</li>
    )}
  </ul>
</div>

      </div>
    </div>
  </div>
</div>

<div className="w-full min-h-fit bg-BG7 bg-cover bg-center relative">
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900 to-black opacity-90"></div>

  <div className="font-ITC relative z-10 px-4 py-12 text-center text-white">
    <h2 className="text-4xl sm:text-5xl md:text-6xl text-shadow-red-glow">Top Guild Honor</h2>
  </div>

  {/* Content Wrapper */}
  <div className="relative z-10 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {Object.entries(guildData).map(([race, guilds]) => (
      <div key={race} className="bg-red-900/25 py-10 px-4 rounded-lg mb-24">
        <div className="flex items-center  justify-center">
         {race === 'Bellato' && < img src={BellatoIcon} className="h-20 w-20" />} 
          {race === 'Cora' && <img src={CoraIcon} className="h-20 w-20"/>} 
          {race === 'Accretia' && <img src={AccretiaIcon}  className="h-20 w-20"/>}
          </div>
        <h2 className="text-xl text-center text-white font-ITC font-bold mb-2">{race} </h2>
                

        <div className="flex font-ITC text-lg text-white text-shadow-red-glow font-bold">
  {/* Place Header */}
  <div className="flex flex-1  text-left">
    <p className="ml-4">TOP</p>
    <p className="ml-10">GUILD</p>
  </div>
  {/* Total Points Header */}
  <div className="flex-1 text-right mr-4">
    <p>TOTAL POINTS</p>
  </div>
</div>
<div className="border border-b"></div>


        <div className="mt-4">
          {guilds.map((guild, index) => {
            let trophyImage = null;
            let classNames = "flex items-center justify-between p-2 rounded mb-2"; // Default styling
            let overlayClass = ""; // Default no overlay
            let backgroundStyle = {}; // Default background style object
            let imageClassNames = "w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"; // Default image size

            // Assign trophy images and background for the top 3 ranks
            if (index === 0) {
              trophyImage = Trophy1; // Top 1 trophy image
              classNames += " bg-BGTexture border-b-4 border-red-500 text-2xl p-3"; // Increase size for Top 1 // GIF for Top 1
              classNames += " text-shadow-red-glow ";
              overlayClass = "absolute inset-0 bg-black opacity-50";
              // Increase the size of the Trophy1 image
              imageClassNames = "w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"; // Set width and height for different screen sizes
            } else if (index === 1) {
              trophyImage = Trophy2; // Top 2 trophy image
              classNames += " bg-BGTexture4"; // Background for Top 2
              overlayClass = "absolute inset-0 bg-black opacity-50"; // Darken background for Top 2
            } else if (index === 2) {
              trophyImage = Trophy3; // Top 3 trophy image
              classNames += " bg-BGTexture4"; // Background for Top 3
              overlayClass = "absolute inset-0 bg-black opacity-50"; // Darken background for Top 3
            } else if (index === 3) {
              trophyImage = Trophy4; // Top 3 trophy image
              classNames += " bg-BGTexture4"; // Background for Top 3
              overlayClass = "absolute inset-0 bg-black opacity-50"; // Darken background for Top 3
            }
            else if (index === 4) {
              trophyImage = Trophy5; // Top 3 trophy image
              classNames += " bg-BGTexture4"; // Background for Top 3
              overlayClass = "absolute inset-0 bg-black opacity-50"; // Darken background for Top 3
            }

            return (
              <div key={index} className={`relative ${classNames}`} style={backgroundStyle}>
                {/* Dark overlay for the background */}
                {overlayClass && <div className={overlayClass}></div>}

                {/* Replace guild.avatar with the respective trophy image */}
                <img
  src={trophyImage}
  alt={`Trophy ${index + 1}`}
  className={`rounded-full relative z-10 ${imageClassNames}`} // Apply the imageClassNames here
/>
                <div className="text-white flex-1 ml-2 relative z-10">
                  <p className="font-bold">{guild.name}</p>
                  <div className="flex items-center mt-2 space-x-2">
                    <span className="bg-green-500 w-12 sm:w-14 text-center py-0.5 text-sm sm:text-base rounded-md">
                      K: {guild.kills || 0}
                    </span>
                    <span className="bg-red-500 w-12 sm:w-14 text-center py-0.5 text-sm sm:text-base rounded-md">
                      D: {guild.deaths || 0}
                    </span>
                  </div>
                </div>
                {/* The points are placed outside the dark overlay */}
                <span className="text-white text-shadow-red-glow font-bold relative z-10">{guild.points} </span>
              </div>
            );
          })}
        </div>
      </div>
    ))}
  </div>
</div>



{/* Background image container */}
<div
  className="w-full min-h-screen bg-BG8 bg-cover bg-center relative">
  <div className="absolute inset-0 bg-black opacity-80"></div> {/* Optional overlay */}
  
  {/* Text section */}
  <div className="font-ITC relative z-10 px-4 py-12 text-center text-white">
    <h2 className="text-6xl text-shadow-red-glow">Guilds</h2>
  </div>

  {/* Image Gallery inside the background */}
  <div className="relative inset-0 flex justify-center items-center z-20 px-4 overflow-auto">
    <div className="container mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 mb-10">

{/** 
<div
className="group relative cursor-pointer overflow-hidden w-full h-full"
onMouseEnter={() => handleMouseEnter(videoRef2)}
onMouseLeave={() => handleMouseLeave(videoRef2)}
>
<Link to="">
  <img
    src={Akatsuki}
    alt="Gallery Image 2"
    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
  />
  <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition duration-500"></div>
</Link>
</div>*/} 
 
      </div>
    </div>
  </div>
</div>

{/** 
<div className="w-full h-fit p-10 bg-BG6 bg-cover bg-center relative">

      <div className="absolute inset-0 bg-black opacity-80"></div>

  
      <div className="text-center relative z-10">
        <h2 className="text-6xl font-ITC text-white text-shadow-red-glow tracking-wider">
          Spotlight
        </h2>
      </div>

  
      <div className="w-full mx-auto mt-8 relative z-10">
        <Slider {...settings}>
          {spotlightItems.map((item, index) => (
            <div key={index} className="relative px-3">
              <div className="w-full h-64 md:h-[480px] lg:h-[540px] xl:h-[600px] overflow-hidden flex items-center justify-center rounded-lg">
                <div
                  className={`w-full h-full bg-cover bg-center transition-all duration-300`}
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
*/}
      
      <Footer />
    </>
  );
}


export default Home;



/* 
{/* Image 4 *
<div
className="group relative cursor-pointer overflow-hidden w-full h-full"
onMouseEnter={() => handleMouseEnter(videoRef1)}
onMouseLeave={() => handleMouseLeave(videoRef1)}
>
<Link to="https://www.youtube.com/watch?v=C-Vk99Xx1-0">
  <img
    src={Fenris}
    alt="Gallery Image 1"
    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
  />
  <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition duration-500"></div>
  <img
    ref={videoRef1}
    src={FenrisVid}
    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
    loop
    muted
  />
</Link>
</div>


<div
className="group relative cursor-pointer overflow-hidden w-full h-full"
onMouseEnter={() => handleMouseEnter(videoRef2)}
onMouseLeave={() => handleMouseLeave(videoRef2)}
>
<Link to="https://www.youtube.com/watch?v=3uXtVN0Zbk4">
  <img
    src={Predators}
    alt="Gallery Image 2"
    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
  />
  <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition duration-500"></div>
  <img
    ref={videoRef2}
    src={PredatorsVid}
    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
    loop
    muted
  />
</Link>
</div>


<div
className="group relative cursor-pointer overflow-hidden w-full h-full"
onMouseEnter={() => handleMouseEnter(videoRef3)}
onMouseLeave={() => handleMouseLeave(videoRef3)}
>
<Link to="https://www.youtube.com/watch?v=GpRS5SuNK1U&t=23s">
  <img
    src={Shadow}
    alt="Gallery Image 3"
    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
  />
  <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition duration-500"></div>
  <img
    ref={videoRef3}
    src={ShadowVid} // Change to the appropriate video source
    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
    loop
    muted
  />
</Link>
</div>
 */

