import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useLocation } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer'
import Card from '../Component/Card'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AccretiaIcon from '../assets/AccretiaIcon.png'
import BellatoIcon from '../assets/BellatoIcon.png'
import CoraIcon from '../assets/CoraIcon.png'
import Page1 from '../assets/CASH/Page1.png'
import Page2 from '../assets/CASH/Page2.png'
import Page3 from '../assets/CASH/Page3.png'
import Page4 from '../assets/CASH/Page4.png'
import Page5 from '../assets/CASH/Page5.png'
import Page6 from '../assets/CASH/Page6.png'
import Page7 from '../assets/CASH/Page7.png'
import Page8 from '../assets/CASH/Page8.png'
import Perma from '../assets/PACKAGE/perma.jpg'
import Sale from '../assets/PACKAGE/sale.jpg'
import March5 from '../assets/PACKAGE/marchplus5.jpg'
import March6 from '../assets/PACKAGE/marchplus6.jpg'
import MarchPack from '../assets/PACKAGE/Marchplus6package.jpg'
import AccretiaWarrior from '../assets/CHAR/ACCRETIA/AWarrior.png'
import AccretiaRanger from '../assets/CHAR/ACCRETIA/ARanger.png'
import AccretiaLauncher from '../assets/CHAR/ACCRETIA/ALauncher.png'
import BellatoWarrior from '../assets/CHAR/BELLATO/BWarrior.png'
import BellatoRanger from '../assets/CHAR/BELLATO/BRanger.png'
import BellatoForce from '../assets/CHAR/BELLATO/BForce.png'
import CoraWarrior from '../assets/CHAR/CORA/CWarrior.png'
import CoraRanger from '../assets/CHAR/CORA/CRanger.png'
import CoraForce from '../assets/CHAR/CORA/CForce.png'
import DataTable, { createTheme } from 'react-data-table-component';
createTheme('dark', {
  background: {
    default: 'transparent',
  },
});


import TalkJade30 from '../assets/CASH/TalkJade30.jpg'
import Attack from '../assets/CASH/Attack.jpg'
import Defense from '../assets/CASH/Defense.jpg'
import H11Amulet from '../assets/CASH/H11Amulet.jpg'
import H11Ring from '../assets/CASH/H11Ring.jpg'
import Magnet from '../assets/CASH/Magnet.jpg'
import Glider30D from '../assets/CASH/Glider30D.jpg'
import Armor15D from '../assets/CASH/Armor15D.jpg'
import Armor30D from '../assets/CASH/Armor30D.jpg'
import AttackAccuracy from '../assets/CASH/AttackAccuracy.jpg'
import AttackAvoid from '../assets/CASH/AttackAvoid.jpg'
import AttackDefense from '../assets/CASH/AttackDefense.jpg'
import DefenseAvoid from '../assets/CASH/DefenseAvoid.jpg'
import LGS from '../assets/CASH/LGS.jpg'
import SGS from '../assets/CASH/SGS.jpg'
import Weapon15D from '../assets/CASH/Weapon15D.jpg'
import Weapon30D from '../assets/CASH/Weapon30D.jpg'



import { TbHexagonLetterGFilled } from "react-icons/tb";
import { FaPaypal } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";


function Donation() {
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
      image: <img src={TalkJade30} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '2,500 CC',
      category: 'Booty',
    },
    {
      id: 2,
      item: 'Legacy Blade',
      image: <img src={TalkJade30} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
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
      image: <img src={AttackAccuracy} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '150,000 CC',
      category: 'Booty',
    },
    {
      id: 7,
      item: 'Phoenix Blessing [ATK] [7D]',
      image: <img src={AttackAccuracy} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '30,000 CC',
      category: 'Manufacturing Mat.',
    },
    {
      id: 8,
      item: 'Phoenix Blessing [DEF] [7D]',
      image: <img src={AttackAvoid} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '30,000 CC',
      category: 'Manufacturing Mat.',
    },
    {
      id: 9,
      item: 'Phoenix Blessing [ATK] [14D]',
      image: <img src={AttackAvoid} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '50,000 CC',
      category: 'Manufacturing Mat.',
    },
    {
      id: 10,
      item: 'Phoenix Blessing [DEF] [14D]',
      image: <img src={AttackDefense} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '50,000 CC',
      category: 'Manufacturing Mat.',
    },
    {
      id: 11,
      item: 'Phoenix Blessing [ATK] [30D]',
      image: <img src={AttackDefense} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '80,000 CC',
      category: 'Manufacturing Mat.',
    },
    {
      id: 12,
      item: 'Phoenix Blessing [DEF] [30D]',
      image: <img src={DefenseAvoid} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '80,000 CC',
      category: 'Manufacturing Mat.',
    },
    {
      id: 13,
      item: 'Infinity HP Potion 3500',
      image: <img src={DefenseAvoid} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '50,000 CC',
      category: 'Manufacturing Mat.',
    },
    {
      id: 14,
      item: 'Infinity FP Potion 2000',
      image: <img src={LGS} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '50,000 CC',
      category: 'Manufacturing Mat.',
    },
    {
      id: 15,
      item: 'Infinity SP Potion 1000',
      image: <img src={SGS} alt="[30D] Talk Jade" className="w-16 h-16 rounded-lg p-1 object-cover" />,
      price: '50,000 CC',
      category: 'Manufacturing Mat.',
    },
  ]


  const location = useLocation();
  const [activeTab, setActiveTab] = useState('donation-section'); // Default to 'home-section'
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

const filteredData = data.filter(row =>
Object.values(row).some(value =>
  value.toString().toLowerCase().includes(searchText.toLowerCase())
)
);

  return (
    <>
      <Navbar activeTab={activeTab}/>
            {/* New Cash Shop Section */}
            <div 
  id="cash-section"
  className="relative h-full w-full bg-BG6 bg-cover bg-no-repeat p-10 shadow-lg text-white"
>
  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900 to-black opacity-90 pointer-events-none"></div>

  <div className="relative">
  {/* Header */}
  <h2 className="font-COP1 text-shadow-red-glow text-white text-6xl text-center mb-8">
    CASH SHOP
  </h2>

  {/* Cash Point Conversion */}
  <div className="text-center mb-10">
    <div className="p-6 bg-black/70 rounded-lg shadow-md inline-block">
      <h3 className="text-xl font-bold text-shadow-red-glow text-white">Cash Point Conversion</h3>
      <p className="text-2xl font-bold  mt-4">1 PHP = 100 Cash Coins</p>
    </div>
  </div>

  {/* Main Content: Adjusted Widths */}
  <div className="flex flex-col lg:flex-row gap-8 ">
    {/* Left Column: Payment Methods and Fees */}
    <div className="flex-grow lg:flex-grow-0 lg:w-1/3 space-y-6">
    <div className="p-6 bg-black/70 rounded-lg shadow-md ">
  <h3 className="text-xl font-bold text-center text-shadow-red-glow text-white">Payment Methods</h3>
  <ul className="mt-4 space-y-2">
    <li className="flex items-center space-x-2">
      <TbHexagonLetterGFilled className="text-blue-500 text-xl" />
      <span><strong>GCash:</strong> 09173201162 (Jan Vishnu Ancheta)</span>
    </li>
    <li className="flex items-center space-x-2">
      <FaPaypal className="text-blue-500 text-xl" />
      <span><strong>PayPal:</strong> vishnuancheta29@gmail.com</span>
    </li>
    <li className="flex items-center space-x-2">
      <BsBank2 className="text-green-500 text-xl" />
      <span><strong>BDO:</strong> 012930022805 (Jan Vishnu B. Ancheta)</span>
    </li>
    <li className="flex items-center space-x-2">
      <BsBank2 className="text-green-500 text-xl" />
      <span><strong>BPI:</strong> 8129101904 (Jan Vishnu B. Ancheta)</span>
    </li>
  </ul>
</div>

      <div className="p-6 bg-black/70 rounded-lg shadow-md">
        <h3 className="text-center text-xl font-bold text-shadow-red-glow text-white">Processing Fees</h3>
        <ul className="mt-4 space-y-2">
          <li className="flex justify-between">
            <span>Character Job</span>
            <span>200</span>
          </li>
          <li className="flex justify-between">
            <span>Character Gender</span>
            <span>200</span>
          </li>
        </ul>

        <h3 className="text-center text-xl font-bold text-shadow-red-glow text-white mt-6">Conversion Fees</h3>
        <ul className="mt-4 space-y-2">
          <li className="flex justify-between">
            <span>Intense Weapon/Armor</span>
            <span>100/pc</span>
          </li>
          <li className="flex justify-between">
            <span>Type C Weapon/Armor</span>
            <span>150/pc</span>
          </li>
        </ul>

        <h3 className="text-center text-xl font-bold text-shadow-red-glow text-white mt-6">Transfer Fees</h3>
        <ul className="mt-4 space-y-2">
          <li className="flex justify-between">
            <span>Intense Weapon/Armor</span>
            <span>100/pc</span>
          </li>
          <li className="flex justify-between">
            <span>Type C Weapon/Armor</span>
            <span>150/pc</span>
          </li>
        </ul>

        <h3 className="text-center text-xl font-bold text-shadow-red-glow text-whitemt-6">Package Fees</h3>
        <ul className="mt-4 space-y-2">
          <li className="flex justify-between">
            <span>Package Conversion</span>
            <span>1500 (1 bag)</span>
          </li>
          <li className="flex justify-between">
            <span>Package Race Transfer</span>
            <span>1500 (1 bag)</span>
          </li>
          <li className="flex justify-between">
            <span>Additional Bags</span>
            <span>300</span>
          </li>
        </ul>

        <h3 className="text-center text-xl font-bold text-shadow-red-glow text-whitemt-6">Processing Rules</h3>
        <ul className="mt-4 space-y-2">
          <li className="flex justify-between">
            <span>1. No part conversion ( upper = upper | gloves = gloves )</span>
          </li>
          <li className="flex justify-between">
            <span>2. No talic conversion</span>
          </li>
          <li className="flex justify-between">
            <span>3. Additional conversion fees will apply for:</span>
          </li>
          <li className="flex justify-between">
            <span>*Class Type Convert (ex. FR to CR )</span>
          </li>
          <li className="flex justify-between">
            <span>*Ability Type Convert (ex. Sharp to Strong )</span>
          </li>
          <li className="flex justify-between">
            <span>*Race Type Convert (ex. Accretia to Bellato )</span>
          </li>
          <li className="flex justify-between">
            <span>*Weapon Type Convert (ex. Spear to Staff )</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Right Column: DataTable */}
    <div className="flex-grow lg:w-2/3 mb-20">
      <div className="bg-black/70 p-2 rounded-lg overflow-x-auto w-full">
        <DataTable
          title={
            <h3 className="text-shadow-red-glow text-white text-3xl font-bold">
              Cash Shop
            </h3>
          }
          columns={columns}
          data={filteredData}
          theme="dark" // Use the dark theme
          pagination
          defaultSortField="name"
          highlightOnHover
          subHeader
          subHeaderComponent={
            <div className="p-4 bg-transparent rounded-lg">
              <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={handleSearch}
                className="w-full p-2 border border-red-500 text-black rounded-lg"
              />
            </div>
          }
        />
      </div>
    </div>
  </div>
</div>

</div>

           {/* Modals Combination */}
           <dialog id="6_perma_modal" className="modal">
              <div className="modal-box w-full h-full max-w-[900px] bg-transparent">
                <img src={MarchPack} className="w-full h-full object-cover" />
                  </div>
                <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          <dialog id="5_perma_modal" className="modal">
              <div className="modal-box w-full h-full max-w-[900px] bg-transparent">
                <img src={Perma} className="w-full h-full object-cover" />
                  </div>
                <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          <dialog id="6_retail_modal" className="modal">
              <div className="modal-box w-full h-full max-w-[900px] bg-transparent">
                <img src={March6} className="w-full h-full object-cover" />
                  </div>
                <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          <dialog id="5_retail_modal" className="modal">
              <div className="modal-box w-full h-full max-w-[900px] bg-transparent">
                <img src={March5} className="w-full h-full object-cover" />
                  </div>
                <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>


      <Footer />
    </>
  )
}

export default Donation
