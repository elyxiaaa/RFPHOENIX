import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";


import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer'
import Card from '../Component/Card'
import { FaUsers } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // Updated to use react-router-dom
import Logo from '../assets/Logotext.png'
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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DataTable, { createTheme } from 'react-data-table-component';
createTheme('dark', {
  background: {
    default: 'transparent',
  },
});


import AccuracyPotion from '../assets/CASH/AccuracyPotion.png'
import AtkBlessing from '../assets/CASH/AtkBlessing.png'
import BuildUpPotion from '../assets/CASH/BuildUpPotion.png'
import BurstPotion from '../assets/CASH/BurstPotion.png'
import CashPoint from '../assets/CASH/CashPoint.png'
import CriticalPotion from '../assets/CASH/CriticalPotion.png'
import CurePotion from '../assets/CASH/CurePotion.png'
import DefBlessing from '../assets/CASH/DefBlessing.png'
import DefPotion from '../assets/CASH/DefPotion.png'
import FPPotion from '../assets/CASH/FPPotion.png'
import HPPotion from '../assets/CASH/HPPotion.png'
import LegacyBlade from '../assets/CASH/LegacyBlade.png'
import Magnet from '../assets/CASH/Magnet.jpg'
import QuickSkillPotion from '../assets/CASH/QuickSkillPotion.png'
import Redstone from '../assets/CASH/Redstone.png'
import SGS from '../assets/CASH/SGS.png'
import SmartPotion from '../assets/CASH/SmartPotion.png'
import StaminaPotion from '../assets/CASH/StaminaPotion.png'


//PICTURES
import Akatsuki from '../assets/GUILDS/Akatsuki.jpg'
import Trophy1 from '../assets/HONOR/Trophy1.png'
import Trophy2 from '../assets/HONOR/trophy2.png'
import Trophy3 from '../assets/HONOR/Trophy3.png'
import Trophy4 from '../assets/HONOR/Trophy4.png'
import Trophy5 from '../assets/HONOR/Trophy5.png'
import BGBurn from '../assets/BGBurn.gif'

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
import backgroundMusic from '../assets/audio/background-music.mp3';


import PreRegistrationRaffle from '../assets/EVENTS/PreRegistrationRaffle.jpg'
import GuildRecruitment from '../assets/EVENTS/GuildRecruitment.jpg'
import TopContri from '../assets/EVENTS/TopContri.jpg'
import First50 from '../assets/EVENTS/First50.jpg'
const events = [
    {
      id: 1,
      title: "Pre Registration Raffle",
      poster: PreRegistrationRaffle, 
      mechanics: [
      "Like and share post",
      ],
      rewards: [
      "Exclusive Rewards",
      ],
    },
    {
      id: 2,
      title: "Guild Recruitment Event",
      poster: GuildRecruitment,
      mechanics: [
      "Recruit Guilds",
      ],
      rewards: [
      "Monthly Salary",
      "Guild Perks",
      ],
    },
    {
      id: 3,
      title: "Top 1 Contribution Point Event",
      poster: TopContri,
      mechanics: [
      "Reach the #1 Contribution Points in the leaderboard",
      ],
      rewards: [
      "Cash",
      ],
    },
    {
      id: 4,
      title: "First Level 50",
      poster: First50,
      mechanics: [
      "Reach First Level 50",
      ],
      rewards: [
      "Cash",
      ],
    },
  ];

function Home() {
  
   const navigate = useNavigate();
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(null); 
const [index, setIndex] = useState(0);

const next = () => setIndex((prev) => (prev + 1) % events.length);
const prev = () => setIndex((prev) => (prev - 1 + events.length) % events.length);

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
    slidesToShow: 2, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: false,
    centerPadding: "0px",
    afterChange: (current) => setActiveSlide(current),
  };
  const location = useLocation()
  const [activeTab, setActiveTab] = useState('home-section'); 
  const leaderboardsSectionRef = useRef(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id); // ← works for BOTH sections
        } else if (!entry.isIntersecting && activeTab === entry.target.id) {
          setActiveTab('home-section');
        }
      });
    },
    {
      root: null,
      threshold: 0.5,
    }
  );
  if (leaderboardsSectionRef.current) {
    observer.observe(leaderboardsSectionRef.current);
  }
  return () => {
    if (leaderboardsSectionRef.current) {
      observer.unobserve(leaderboardsSectionRef.current);
    }
  };
}, [activeTab]);


  const [totalPlayers, setTotalPlayers] = useState(100);
  const [serverStatus, setServerStatus] = useState("");
  const [orePercent, setOrePercent] = useState(82);
  const [chipAcc, setChipAcc] = useState(65);
  const [chipBcc, setChipBcc] = useState(48);
  const [chipCcc, setChipCcc] = useState(72);       
  
  const [cbName, setCbName] = useState("AetherQueen");
  const [cbRace, setCbRace] = useState("Cora");
  const [cbStatus, setCbStatus] = useState("GOAL");
  const [winRace, setWinRace] = useState("Cora");
  const [loseRace, setLoseRace] = useState("Bellato");
  const [guildKillers, setGuildKillers] = useState([]);

  const [topKillers, setTopKillers] = useState([
  { name: "RagnarX", kills: 152, deaths: 21, class_code: "ARS3", avatar: "/src/assets/warrior.png" },
  { name: "NyxBlade", kills: 139, deaths: 18, class_code: "ARS3", avatar: "/src/assets/assassin.png" },
  { name: "VoltPrime", kills: 121, deaths: 25, class_code: "ARS3", avatar: "/src/assets/ranger.png" },
  { name: "Seraphine", kills: 118, deaths: 30, class_code: "ARS3", avatar: "/src/assets/mage.png" },
  { name: "IronClad", kills: 110, deaths: 40, class_code: "ARS3", avatar: "/src/assets/tank.png" },
]);


  const [archons, setArchons] = useState([
  { name: "OverlordX", race: "Accretia", kills: 88, deaths: 12 },
  { name: "MechaQueen", race: "Bellato", kills: 91, deaths: 15 },
  { name: "AetherKing", race: "Cora", kills: 105, deaths: 9 },
]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching general server data
        const response = await fetch("https://phoenix.gamecp.net/web_api/?do=satu");
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
        const responseTwo = await fetch("https://phoenix.gamecp.net/web_api/?do=dua");
        const dataTwo = await responseTwo.json();
        console.log("API Response Two:", dataTwo);
        dataTwo.result.killer_guild
  
        if (responseTwo.ok) {

          const raceAvatars = {
            accretia: "/src/assets/accretia.png",
            bellato: "/src/assets/bellato.png",
            cora: "/src/assets/cora.png",
          };
          const fetchedArchons = [
            {
              name: dataTwo.result.arc_a?.name || "Accretia", 
              race: dataTwo.result.arc_a?.race || "Accretia",
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

          
        const fetchedGuildKillers = dataTwo.result.killer_guild
          ?.slice(0, 9)
          .map(guild => ({
            name: guild.name,
            race: guild.race,
            grade: guild.grade,
            kill: guild.kill,
            dead: guild.dead,
            leader: guild.leader,
            leader_kill: guild.leader_kill,
            leader_dead: guild.leader_dead,
          })) || [];

        setGuildKillers(fetchedGuildKillers);
        }
        
      } 

      catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  function decodeHTML(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

const chipWarData = [
  { icon: OreIcon, progress: `${orePercent}%`, color: "bg-gradient-to-r from-red-600 via-red-500 to-orange-500" },
  { icon: AccretiaIcon, progress: `${chipAcc}%`, color: "bg-gradient-to-r from-red-600 via-red-500 to-orange-500" },
  { icon: BellatoIcon, progress: `${chipBcc}%`, color: "bg-gradient-to-r from-red-600 via-red-500 to-orange-500" },
  { icon: CoraIcon, progress: `${chipCcc}%`, color: "bg-gradient-to-r from-red-600 via-red-500 to-orange-500" },
];


  const videoRef1 = useRef(null);

  const handleMouseEnter = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; 
      videoRef.current.play(); 
    }
  };

  const handleMouseLeave = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.pause(); 
      videoRef.current.currentTime = 0; 
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

 const handleDownloadClick = () => {
    navigate('/Download');
    window.scrollTo(0, 0);
  };

 const [searchText, setSearchText] = useState('');
  const columns = [
    {
      name: 'ID',
      selector: row => row.id, 
    },
    {
      name: 'Item',
      selector: row => row.item,
    },
    {
      name: 'Image',
      selector: row => row.image,
    },
    {
      name: 'Price',
      selector: row => row.price
    },
    {
      name: 'Category',
      selector: row => row.category
    },
  ];
  
  const data = [
      {
      id: 1,
      item: 'Red Stone Box',
      image: <img src={Redstone} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '2,500 CC',
      category: 'Booty',
    },
    {
      id: 2,
      item: 'Legacy Blade',
      image: <img src={LegacyBlade} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '100,000 CC',
      category: 'Booty',
    },
    {
      id: 3,
      item: '[3D] Loot Magnet',
      image: <img src={Magnet} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '30,000 CC',
      category: 'Booty',
    },
    {
      id: 4,
      item: '[7D] Loot Magnet',
      image: <img src={Magnet} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '50,000 CC',
      category: 'Booty',
    },
    {
      id: 5,
      item: '[14D] Loot Magnet',
      image: <img src={Magnet} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '80,000 CC',
      category: 'Booty',
    },
    {
      id: 6,
      item: '[30D] Loot Magnet ',
      image: <img src={Magnet} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '150,000 CC',
      category: 'Booty',
    },
    {
      id: 7,
      item: 'Phoenix Blessing [ATK] [7D]',
      image: <img src={AtkBlessing} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '30,000 CC',
      category: 'Manufacturing Mat.',
    },
    {
      id: 8,
      item: 'Phoenix Blessing [DEF] [7D]',
      image: <img src={DefBlessing} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '30,000 CC',
      category: 'Manufacturing Mat.',
    },
    {
      id: 9,
      item: 'Phoenix Blessing [ATK] [14D]',
      image: <img src={AtkBlessing} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '50,000 CC',
      category: 'Manufacturing Mat.',
    },
    {
      id: 10,
      item: 'Phoenix Blessing [DEF] [14D]',
      image: <img src={DefBlessing} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '50,000 CC',
      category: 'Manufacturing Mat.',
    },
    {
      id: 11,
      item: 'Phoenix Blessing [ATK] [30D]',
      image: <img src={AtkBlessing} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '80,000 CC',
      category: 'Manufacturing Mat.',
    },
    {
      id: 12,
      item: 'Phoenix Blessing [DEF] [30D]',
      image: <img src={DefBlessing} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '80,000 CC',
      category: 'Manufacturing Mat.',
    },
    {
      id: 13,
      item: 'Infinity HP Potion 3500',
      image: <img src={HPPotion} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '50,000 CC',
      category: 'Manufacturing Mat.',
    },
    {
      id: 14,
      item: 'Infinity FP Potion 2000',
      image: <img src={FPPotion} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '50,000 CC',
      category: 'Manufacturing Mat.',
    },
    {
      id: 15,
      item: 'Infinity SP Potion 1000',
      image: <img src={StaminaPotion} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '50,000 CC',
      category: 'Manufacturing Mat.',
    },
    {
      id: 16,
      item: 'Infinity Accuracy Potion',
      image: <img src={AccuracyPotion} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '50,000 CC',
      category: 'Manufacturing Mat.',
    },
    {
      id: 17,
      item: 'Infinity BuildUp Potion',
      image: <img src={BuildUpPotion} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '50,000 CC',
      category: 'Manufacturing Mat.',
    },
    {
      id: 18,
      item: 'Infinity Burst Potion',
      image: <img src={BurstPotion} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '50,000 CC',
      category: 'Manufacturing Mat.',
    },
    {
      id: 19,
      item: 'Infinity Critical Potion',
      image: <img src={CriticalPotion} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '50,000 CC',
      category: 'Manufacturing Mat.',
    },
    {
      id: 20,
      item: 'Infinity Cure Potion',
      image: <img src={CurePotion} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '50,000 CC',
      category: 'Manufacturing Mat.',
    },
    {
      id: 21,
      item: 'Infinity Defense Potion',
      image: <img src={DefPotion} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '50,000 CC',
      category: 'Manufacturing Mat.',
    },
    {
      id: 22,
      item: 'Shiny Luck Jewel',
      image: <img src={SGS} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '50,000 CC',
      category: 'Manufacturing Mat.',
    },
  ]


  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

const filteredData = data.filter(row =>
Object.values(row).some(value =>
  value.toString().toLowerCase().includes(searchText.toLowerCase())
)
);

const avatarMap = {
  ARF1, ARF2, ARS1, ARS2, ARS3,
  ASF1, ASS1, ASS2,
  AWF1, AWF2, AWS1, AWS2, AWS3,

  BFF1, BFF2, BFS1, BFS2, BFS3,
  BRF1, BRF2, BRS1, BRS2, BRS3,
  BSF1, BSS1, BSS2,
  BWF1, BWF2, BWS1, BWS2, BWS3,

  CFF1, CFS1, CFS2, CFS3,
  CRF1, CRF2, CRS1, CRS2, CRS3,
  CSF1, CSS1,
  CWF1, CWF2, CWS1, CWS2, CWS3,
};

const getAvatar = (classCode) => {
  const key = Object.keys(avatarMap).find(code =>
    classCode?.includes(code)
  );

  return key ? avatarMap[key] : "/src/assets/default-avatar.png";
};

const renderRaceIcon = (race, color) => {
  const commonClass = `mt-2 w-12 h-12 ${color}`;

  const raceMap = {
    Accretia: <img src={AccretiaIcon} alt="Accretia" className="mt-2 w-12 h-12 object-cover" />,
    Bellato: <img src={BellatoIcon} alt="Bellato" className="mt-2 w-12 h-12 object-cover" />,
    Cora: <img src={CoraIcon} alt="Cora" className="mt-2 w-12 h-12 object-cover" />,
    DRAW: <LuSwords className={commonClass} />,
    None: <LuSwords className={commonClass} />,
    RUNNING: <FaRunning className={commonClass} />,
  };

  return raceMap[race] || null;
};

const raceColorMap = {
  Accretia: "text-red-500",
  Bellato: "text-orange-500",
  Cora: "text-purple-500",
};

const statusIconMap = {
  GOAL: GrAchievement,
  WAFAT: FaGhost,
  RUNNING: FaRunning,
  KABUR: FaRunning,
  DRAW: LuSwords,
};

const renderStatusIcon = (status, position) => {
  const Icon = statusIconMap[status];
  if (!Icon) return null;

  const color =
    status === "RUNNING" || status === "KABUR" || status === "DRAW"
      ? position === "left"
        ? "text-green-500"
        : "text-red-500"
      : "text-white";

  return <Icon className={`inline-block w-6 h-6 ${color}`} />;
};

const raceAvatarMap = {
  Accretia: AccretiaIconRed,
  Bellato: BellatoIconOrange,
  Cora: CoraIconPurple,
};

  return (
    <>
      <audio ref={audioRef} loop muted>
        <source src={backgroundMusic} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <Navbar activeTab={activeTab}/>
      <div
        id="home-section"
        className="w-full h-screen bg-BG1 bg-cover bg-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-600/20 blur-[150px] rounded-full"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl mb-6
        flex items-center justify-center
        drop-shadow-[0_0_35px_rgba(255,80,0,0.8)]"
      >
        <img
          src={Logo}
          alt="Logo"
          className="w-full h-full object-contain select-none pointer-events-none"
        />
      </div>


          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-ITC2 font-bold
            bg-gradient-to-r from-red-500 via-orange-400 to-red-600
            bg-clip-text text-transparent
            drop-shadow-[0_0_25px_rgba(255,80,0,0.9)]">
            Return to the Beginning. Reclaim the Glory
          </h1>
          <p className="font-ITC text-xs md:text-sm lg:text-base mt-4 max-w-2xl
            text-gray-200
            drop-shadow-[0_6px_12px_rgba(0,0,0,0.9)]">
            The fires have never died. After 4 years of legendary warfare, the king
            has returned to reclaim the throne. Rise from the ashes and experience
            the resurgence of the best RF Online server to ever grace the world of
            Novus
          </p>
            <button
            onClick={handleDownloadClick}
            className="
              flex items-center mt-8
              text-lg md:text-xl text-black font-bold
              py-3 px-10 rounded-xl
              bg-gradient-to-r from-red-600 via-red-500 to-orange-500
              shadow-[0_0_25px_rgba(255,90,0,0.7)]
              hover:from-red-500 hover:via-orange-500 hover:to-orange-400
              hover:shadow-[0_0_40px_rgba(255,120,0,1)]
              transform hover:scale-105
              transition-all duration-300
            ">
              DOWNLOAD NOW
              <FaChevronCircleRight className="text-2xl ml-2 mt-1" />
            </button>
    
          <div
            onClick={handleOpenModal}
            className="
              fixed top-36 right-6
              bg-black/40 backdrop-blur-md
              border border-orange-500/40
              text-white w-64 p-4 rounded-xl
              shadow-[0_0_25px_rgba(255,80,0,0.5)]
              cursor-pointer
              transition-all duration-300
              hover:bg-gradient-to-r hover:from-red-600/80 hover:to-orange-500/80
              hover:shadow-[0_0_35px_rgba(255,120,0,0.9)]
            "
          >
            <h3 className="text-lg font-semibold">Watch Trailer</h3>
            <p className="text-sm text-gray-300">Click to watch the trailer video</p>
          </div>
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
              <div className="
                relative w-11/12 md:w-3/4 lg:w-1/2
                bg-black/90 backdrop-blur-md
                border border-orange-500/40
                p-4 rounded-xl
                shadow-[0_0_40px_rgba(255,80,0,0.6)]
              ">
                <button
                  onClick={handleCloseModal}
                  className="absolute top-2 right-3 text-white text-3xl hover:text-orange-400 transition"
                >
                  &times;
                </button>
                <div className="relative pb-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Frfonlineapex%2Fvideos%2F1103775624374923%2F&show_text=false&width=560&t=0"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Facebook Video"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

<div
  id="leaderboards-section"
  ref={leaderboardsSectionRef}
  className="w-full min-h-fit bg-BG1 bg-cover bg-center relative overflow-hidden" >
  <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/90 to-black"></div>
  <div className="absolute inset-0 pointer-events-none
    bg-[radial-gradient(circle_at_top,rgba(255,80,0,0.25),transparent_60%)]" />
  <div className="font-ITC font-bold relative z-10 flex flex-col lg:flex-row items-stretch justify-around text-white">
    <div className="w-full lg:w-1/2 py-10 px-4 lg:px-12
      bg-black/60 backdrop-blur-xl
border border-red-500/30
shadow-[0_0_45px_rgba(255,60,0,0.25)]
hover:shadow-[0_0_70px_rgba(255,90,0,0.45)]
transition-all duration-500">

      <h2 className="text-4xl font-semibold text-center mb-6
        bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400
        bg-clip-text text-transparent
        drop-shadow-[0_0_18px_rgba(255,80,0,0.9)]">
        RISING FORCE PHOENIX
      </h2>

      <h3 className="text-2xl text-center mb-4 text-orange-300 tracking-wide">
        SERVER STATUS
      </h3>
      <div className="flex items-center justify-between text-lg">
        <span
          className={`flex gap-1 items-center ${
            serverStatus === "ONLINE" ? "text-green-400 + green glow" : "text-red-500"
          }`}
        >
          <FaLightbulb /> {serverStatus}
        </span>
        <span className="flex gap-1 items-center text-orange-200">
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
            <div className="w-full h-6 bg-black/70 border border-red-500/20
            shadow-[0_0_12px_rgba(255,80,0,0.6)]">
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
<div className="flex justify-between text-xl font-semibold">
  <div className="flex flex-col items-center">
    <span className="text-green-400 drop-shadow-[0_0_6px_rgba(0,255,120,0.8)]">
      Win
    </span>
    {renderRaceIcon(winRace, "text-green-500 object-cover")}
  </div>
  <div className="flex flex-col items-center">
    <span className="text-red-400 drop-shadow-[0_0_6px_rgba(255,60,60,0.8)]">
      Lose
    </span>
    {renderRaceIcon(loseRace, "text-red-500 object-cover")}
  </div>

</div>



 <div
  className={`mt-4 text-lg font-bold drop-shadow-[0_0_10px_rgba(255,140,0,0.8)]
    ${raceColorMap[cbRace] || "text-white"}`}
>
  {renderStatusIcon(cbStatus, "left")}

  <span className="mx-2">CHIP BREAKER: {cbName}</span>

  {renderStatusIcon(cbStatus, "right")}
</div>

  </div>
    </div>


    {/* Leaderboards Section */}
    <div className="w-full lg:w-1/2 py-10 px-4
  bg-black/60 backdrop-blur-xl
border border-red-500/30
shadow-[0_0_45px_rgba(255,60,0,0.25)]
hover:shadow-[0_0_70px_rgba(255,90,0,0.45)]
transition-all duration-500">
    <h2 className="text-4xl font-semibold text-center mb-6
  bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400
  bg-clip-text text-transparent
  drop-shadow-[0_0_18px_rgba(255,80,0,0.9)]">
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
      const avatar = raceAvatarMap[archon.race] || "/src/assets/default.png";

      return (
        <li
          key={index}
          className="flex items-center justify-between
          bg-black/60 backdrop-blur-md
          border border-orange-500/20
          rounded-xl p-3 text-lg
          shadow-[0_0_18px_rgba(255,120,0,0.15)]
          hover:shadow-[0_0_25px_rgba(255,150,0,0.35)]
          hover:border-orange-400/40
          transition-all duration-300"
        >
          <div className="flex items-center">
            <img
              src={avatar}
              alt={archon.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <span>{archon.name || "Unknown"}</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="bg-gradient-to-r from-red-700 to-orange-500 w-16 text-center py-1 rounded-md">
              K: {archon.kills || 0}
            </span>
            <span className="bg-gradient-to-r from-red-900 to-red-600 w-16 text-center py-1 rounded-md">
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
      const avatar = getAvatar(player.class_code);

      return (
        <li
          key={index}
          className="flex items-center justify-between bg-black/70 backdrop-blur-md
          border border-red-500/20 rounded-xl p-3
          shadow-[0_0_18px_rgba(255,80,0,0.25)]
          hover:shadow-[0_0_30px_rgba(255,120,0,0.5)]
          transition text-lg"
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
            <span className="bg-gradient-to-r from-red-700 to-orange-500 w-16 text-center py-1 rounded-md">
              K: {player.kills}
            </span>
            <span className="bg-gradient-to-r from-red-900 to-red-600 w-16 text-center py-1 rounded-md">
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

<div className="relative w-full min-h-screen flex flex-col items-center justify-start p-6 text-white overflow-hidden">
  <div className="absolute inset-0
    bg-[radial-gradient(circle_at_50%_30%,rgba(255,80,0,0.35),transparent_60%)]" />
  <div className="absolute inset-0
    bg-gradient-to-br from-black via-red-950 to-orange-900" />
  <div className="absolute inset-0
    bg-[radial-gradient(circle,transparent_55%,rgba(0,0,0,0.9)_100%)]" />
  <div className="relative z-10 px-4 py-12 sm:py-16 text-center font-ITC">
    <h2
      className="
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        font-bold
        bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400
        bg-clip-text text-transparent
        drop-shadow-[0_0_18px_rgba(255,80,0,0.9)]
      "
    >
      EVENTS
    </h2>

    <div className="mt-4 mx-auto w-40 h-[2px]
      bg-gradient-to-r from-transparent via-red-500 to-transparent
      shadow-[0_0_12px_rgba(255,80,0,0.8)]" />
  </div>
  <div className="relative z-10 w-full max-w-6xl
    bg-gradient-to-br from-red-900/40 via-black/60 to-orange-900/40
    border border-red-500/40 rounded-2xl
    shadow-[0_0_60px_rgba(255,60,0,0.35)]
    backdrop-blur-xl overflow-hidden">
        <div className="relative grid md:grid-cols-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={events[index].id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full"
            >
              <img
                src={events[index].poster}
                alt={events[index].title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={events[index].title}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="p-8 flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold text-red-400 mb-6">
                {events[index].title}
              </h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-orange-400 mb-2">
                  Mechanics
                </h3>
                <ul className="space-y-1 text-gray-300">
                  {events[index].mechanics.map((m, i) => (
                    <li key={i}>• {m}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  Rewards
                </h3>
                <ul className="space-y-1 text-gray-300">
                  {events[index].rewards.map((r, i) => (
                    <li key={i}>★ {r}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex items-center justify-between px-6 py-4 border-t border-red-500/30 bg-black/60">
          <button
            onClick={prev}
            className="px-4 py-2 border border-red-500 rounded-lg hover:bg-red-600 transition"
          >
            ← Prev
          </button>

          <div className="flex gap-2">
            {events.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === index ? "bg-red-500" : "bg-gray-600"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="px-4 py-2 border border-red-500 rounded-lg hover:bg-red-600 transition"
          >
            Next →
          </button>
        </div>
      </div>
    </div>



<div className="w-full min-h-screen bg-BG7 bg-cover bg-center relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/90 to-black" />

  <div className="relative z-10 px-4 py-12 text-center text-white font-ITC">
    <h2 className="
      text-4xl md:text-6xl font-bold
      bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400
      bg-clip-text text-transparent
      drop-shadow-[0_0_20px_rgba(255,80,0,0.9)]
    ">
      TOP GUILD KILLERS
    </h2>

    <div className="mt-4 mx-auto w-48 h-[2px]
      bg-gradient-to-r from-transparent via-red-500 to-transparent" />
  </div>

  <div className="
    relative z-10
    max-w-7xl mx-auto
    px-6 pb-16
    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
    gap-8
  ">

    {guildKillers.map((guild, index) => {

      let glow = "";
      if (index === 0 )
        glow = "border-red-500 shadow-[0_0_45px_rgba(255,0,0,0.5)]";
      const raceColor =
        guild.race === "Accretia"
          ? "text-red-500"
          : guild.race === "Bellato"
          ? "text-orange-400"
          : guild.race === "Cora"
          ? "text-purple-400"
          : "text-white";

      return (
        <div
          key={index}
          className={`
            bg-black/70 backdrop-blur-xl
            border border-red-500/30
            rounded-2xl p-6
            transition-all duration-500
            hover:scale-105
            text-center
            ${glow}
          `}
        >
          {/* Rank */}
          <div className="text-sm text-orange-400 font-bold mb-2">
            # {index + 1}
          </div>

          {/* Guild Name */}
          <h3 className="text-2xl font-bold text-white mb-1 truncate">
            {guild.name}
          </h3>

          {/* Race + Grade */}
          <p className={`text-sm mb-3 font-semibold ${raceColor}`}>
            {guild.race} • Grade {guild.grade}
          </p>

          {/* Guild Stats */}
          <div className="flex justify-center gap-4 text-sm mb-4">
            <div className="bg-gradient-to-r from-red-700 to-red-500 px-4 py-1 rounded-lg text-white font-semibold">
              Total Kills: {guild.kill}
            </div>
            <div className="bg-gradient-to-r from-red-900 to-red-600 px-4 py-1 rounded-lg text-white font-semibold">
              Total Deaths: {guild.dead}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-red-500/30 my-4" />

          {/* Leader Info */}
          <p className="text-sm text-orange-300 mb-3">
            Leader: <span className="font-semibold">{guild.leader}</span>
          </p>

          {/* Leader Stats */}
          <div className="flex justify-center gap-4 text-sm">
            <div className="bg-gradient-to-r from-red-600 to-red-400 px-4 py-1 rounded-lg text-white font-semibold">
              K: {guild.leader_kill}
            </div>
            <div className="bg-gradient-to-r from-red-800 to-red-500 px-4 py-1 rounded-lg text-white font-semibold">
              D: {guild.leader_dead}
            </div>
          </div>

        </div>
      );
    })}

  </div>
</div>

<div
  id="cash-section"
  className="relative w-full min-h-screen bg-BG6 bg-cover bg-center py-10 px-6 text-white overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/90 to-black"></div>
  <div className="absolute inset-0 pointer-events-none
    bg-[radial-gradient(circle_at_top,rgba(255,80,0,0.25),transparent_60%)]" />


<div className="font-ITC relative z-10 px-4 py-12 sm:py-16 text-center text-white">
    <h2
      className="
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        font-bold
        bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400
        bg-clip-text text-transparent
        drop-shadow-[0_0_18px_rgba(255,80,0,0.9)]
      "
    >
      CASH SHOP
    </h2>
    <div className="mt-4 mx-auto w-40 h-[2px]
      bg-gradient-to-r from-transparent via-red-500 to-transparent
      shadow-[0_0_12px_rgba(255,80,0,0.8)]" />
  </div>


  <div className="relative max-w-7xl mx-auto">
  
    <div className="flex flex-col items-center lg:flex-row gap-12">
      <div className="w-full">
        <div className="rounded-2xl overflow-hidden
          bg-black/60 backdrop-blur-xl
          border border-red-500/30
          shadow-[0_0_45px_rgba(255,60,0,0.25)]
          hover:shadow-[0_0_70px_rgba(255,90,0,0.45)]
          transition-all duration-500"
        >
          <DataTable
            title={<h3 className="text-2xl font-semibold text-orange-300 px-6 pt-6">CASH SHOP ITEMS</h3>}
            columns={columns}
            data={filteredData}
            theme="dark"
            pagination
            highlightOnHover
            subHeader
            subHeaderComponent={
              <div className="px-6 pb-6">
                <input
                  type="text"
                  placeholder="Search item..."
                  value={searchText}
                  onChange={handleSearch}
                  className="w-full px-4 py-2 rounded-lg
                  bg-black/40 text-white
                  border border-orange-400/40
                  focus:outline-none focus:ring-2 focus:ring-orange-400/40"
                />
              </div>
            }
          />
        </div>
      </div>

    </div>
  </div>
</div>
<div className="w-full min-h-screen bg-BG8 bg-cover bg-center relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/90 to-black"></div>
  <div className="absolute inset-0 pointer-events-none
    bg-[radial-gradient(circle_at_top,rgba(255,80,0,0.25),transparent_60%)]" />
  <div className="font-ITC relative z-10 px-4 py-16 text-center text-white">
    <h2 className="
      text-6xl font-bold
      bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400
      bg-clip-text text-transparent
      drop-shadow-[0_0_18px_rgba(255,80,0,0.9)]
    ">
      GUILDS
    </h2>
  </div>

  {/* ===== GALLERY WRAPPER ===== */}
  <div className="relative z-10 flex justify-center items-center px-4 pb-20">
    <div className="container mx-auto">

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

        {/* ===== GUILD CARD ===== */}
          {/**
        <div
          className="
            group relative cursor-pointer overflow-hidden rounded-2xl
            bg-black/60 backdrop-blur-xl
            border border-red-500/30
            shadow-[0_0_35px_rgba(255,60,0,0.25)]
            hover:shadow-[0_0_60px_rgba(255,100,0,0.45)]
            transition-all duration-500
          "
          onMouseEnter={() => handleMouseEnter(videoRef2)}
          onMouseLeave={() => handleMouseLeave(videoRef2)}
        >
          <Link to="">
        
            <img
              src={Akatsuki}
              alt="Guild"
              className="
                w-full h-full object-cover
                transform group-hover:scale-110
                transition duration-700
              "
            />

            <div className="
              absolute inset-0
              bg-gradient-to-t from-black via-black/40 to-transparent
              opacity-80 group-hover:opacity-40
              transition duration-500
            " />
            <div className="
              absolute inset-0 rounded-2xl
              border border-transparent
              group-hover:border-orange-400/60
              group-hover:shadow-[0_0_25px_rgba(255,120,0,0.6)]
              transition duration-500
            " />

            <div className="
              absolute bottom-3 left-0 right-0 text-center
              text-orange-300 font-bold tracking-wide
              drop-shadow-[0_0_12px_rgba(255,80,0,0.8)]
              opacity-0 group-hover:opacity-100
              transition duration-500
            ">
              Akatsuki
            </div>
          </Link>
          
        </div>
        */}
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

