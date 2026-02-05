import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { MdDownloadForOffline } from "react-icons/md";
import { PiNoteFill } from 'react-icons/pi'; // Import the PiNoteFill icon
import AMD from '../assets/AMD.png'
import NVidia from '../assets/NVidia.png'
import winRar from '../assets/winRar.png'
import { FaGoogleDrive } from "react-icons/fa";
import { SiMediafire } from "react-icons/si";
import { SiMega } from "react-icons/si";

function Download() {
  return (
    <>
      <Navbar />
      <div
        className="w-full h-screen bg-BGPoster bg-cover bg-center relative">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl text-white font-bold font-ITC2 mb-4 text-shadow-red-glow">
          RISING FORCE PHOENIX
        </h1>


          <p className="text-3xl sm:text-4xl lg:text-5xl font-ITC mb-4">
            The Adventure Begins!
          </p>
          <br/>
          <p className="text-xl sm:text-2xl lg:text-3xl font-ITC mb-4">
            Download now and conquer the battlefield!
          </p>

          <div className='flex gap-4'>
          <a href="https://www.mediafire.com/file/2qf9fy59pd9ap5y/RF_Phoenix_v1.09.rar/file">
  <button className="flex gap-2 mt-6 bg-red-500 text-black font-bold py-4 px-8 md:px-10 text-2xl rounded hover:bg-red-600 transform hover:scale-105 transition-all duration-300">
    DOWNLOAD CLIENT <SiMediafire className="text-4xl"/>
  </button>
</a>
<a href="https://drive.google.com/file/d/1QLKuitFRHssZQf73FDkWn4jBV235O11Z/view?usp=sharing">
  <button className="flex gap-2 mt-6 bg-red-500 text-black font-bold py-4 px-8 md:px-10 text-2xl rounded hover:bg-red-600 transform hover:scale-105 transition-all duration-300">
    DOWNLOAD CLIENT <FaGoogleDrive className="text-4xl"/>
  </button>
</a>
<a href="https://www.mediafire.com/file/2qf9fy59pd9ap5y/RF_Phoenix_v1.09.rar/file">
  <button className="flex gap-2 mt-6 bg-red-500 text-black font-bold py-4 px-8 md:px-10 text-2xl rounded hover:bg-red-600 transform hover:scale-105 transition-all duration-300">
    DOWNLOAD CLIENT <SiMega className="text-4xl"/>
  </button>
</a>
</div>



        </div>

{/* Bottom Links Section as Buttons/Links - Positioned Absolute
<div className="absolute bottom-0 left-0 right-0 bg-black/30 text-white py-12">
  <div className="max-w-7xl mx-auto flex justify-center gap-20 px-4 "> 
    {/* Install Guide Link 
    <div className="text-center flex flex-col items-center gap-4">
      <div className="flex items-center gap-2 group"> 
        <IoInformationCircleOutline className="text-3xl text-white/70 group-hover:text-white transition-colors duration-300" />
        <Link to="/install" className="text-xl font-semibold text-white/70 group-hover:text-white transition-colors duration-300">
          INSTALL GUIDE
        </Link>
      </div>
      <p className="text-sm">Step-by-step instructions to get started.</p>
    </div>
*/}
    
    {/* Community Link 
    <div className="text-center flex flex-col items-center gap-4"> 
      <div className="flex items-center gap-2 group"> 
        <IoChatboxEllipsesOutline className="text-3xl text-white/70 group-hover:text-white transition-colors duration-300" />
        <Link to="https://discord.gg/rfonlinePhoenix" className="text-xl font-semibold text-white/70 group-hover:text-white transition-colors duration-300">
          COMMUNITY
        </Link>
      </div>
      <p className="text-sm">Join our community of RF Online players.</p>
    </div>
    */}
    {/* Support Link 
    <div className="text-center flex flex-col items-center gap-4"> 
      <div className="flex items-center gap-2 group"> 
        <BiSupport className="text-3xl text-white/70 group-hover:text-white transition-colors duration-300" />
        <Link to="https://www.facebook.com/rfonlinePhoenix" className="text-xl font-semibold text-white/70 group-hover:text-white transition-colors duration-300">
          SUPPORT
        </Link>
      </div>
      <p className="text-sm">Need help? Our support team is here for you.</p>
    </div>
  </div>
</div>*/}

      </div>
      <div className="bg-black text-white p-8">
  <h2 className="text-2xl font-bold mb-4 text-center">System Requirements</h2>
  <table className="min-w-full border-collapse border border-gray-300">
    <thead>
    <tr>
  <th className="border border-gray-300 px-6 py-3 text-center bg-red-700 bg-opacity-50">Category</th>
  <th className="border border-gray-300 px-6 py-3 text-center bg-red-700 bg-opacity-50">Minimum</th>
  <th className="border border-gray-300 px-6 py-3 text-center bg-red-700 bg-opacity-50">Recommended</th>
  <th className="border border-gray-300 px-6 py-3 text-center bg-red-700 bg-opacity-50">Performance</th>
  <th className="border border-gray-300 px-6 py-3 text-center bg-red-700 bg-opacity-50">Ultra</th>
</tr>

    </thead>
    <tbody>
      {/* Repeat this block for each row */}
      <tr>
        <th className="border border-gray-300 px-6 py-4 text-center bg-red-700 bg-opacity-50">Resolution</th>
        <td className="border border-gray-300 px-6 py-4 text-center">720p</td>
        <td className="border border-gray-300 px-6 py-4 text-center">1080p</td>
        <td className="border border-gray-300 px-6 py-4 text-center">1440p</td>
        <td className="border border-gray-300 px-6 py-4 text-center">4K</td>
      </tr>
      <tr>
        <th className="border border-gray-300 px-6 py-4 text-center  bg-red-700 bg-opacity-50">Graphic Quality</th>
        <td className="border border-gray-300 px-6 py-4 text-center">Low</td>
        <td className="border border-gray-300 px-6 py-4 text-center">Medium</td>
        <td className="border border-gray-300 px-6 py-4 text-center">High</td>
        <td className="border border-gray-300 px-6 py-4 text-center">Ultra</td>
      </tr>
      <tr>
        <th className="border border-gray-300 px-6 py-4 text-center  bg-red-700 bg-opacity-50">Processor (CPU)</th>
        <td className="border border-gray-300 px-6 py-4 text-center">Intel Pentium III 
          <br/>
          AMD Athlon 
        </td>
        <td className="border border-gray-300 px-6 py-4 text-center">Intel Core™2 Duo E6600 2.4 Ghz</td>
        <td className="border border-gray-300 px-6 py-4 text-center">Intel Core i7 9th Gen
          <br/>
          AMD Ryzen 5 3000 Series
        </td>
        <td className="border border-gray-300 px-6 py-4 text-center">Intel Core i7 12th Gen
          <br/>
          AMD Ryzen 7 5000 Series
        </td>
      </tr>
      <tr>
        <th className="border border-gray-300 px-6 py-4 text-center bg-red-700 bg-opacity-50">Memory</th>
        <td className="border border-gray-300 px-6 py-4 text-center">2 GB</td>
        <td className="border border-gray-300 px-6 py-4 text-center">4 GB</td>
        <td className="border border-gray-300 px-6 py-4 text-center">16 GB</td>
        <td className="border border-gray-300 px-6 py-4 text-center">32 GB</td>
      </tr>
      <tr>
        <th className="border border-gray-300 px-6 py-4 text-center bg-red-700 bg-opacity-50">Graphics Card (GPU)</th>
        <td className="border border-gray-300 px-6 py-4 text-center">GeForce3+
          <br/>
          AMD Radeon 8500+
        </td>
        <td className="border border-gray-300 px-6 py-4 text-center">GeForce 8800 GT 
          <br/>
          AMD Radeon R2
        </td>
        <td className="border border-gray-300 px-6 py-4 text-center">GeForce RTX 3060</td>
        <td className="border border-gray-300 px-6 py-4 text-center">GeForce RTX 4080</td>
      </tr>
      <tr>
        <th className="border border-gray-300 px-6 py-4 text-center bg-red-700 bg-opacity-50">Operating System (OS)</th>
        <td className="border border-gray-300 px-6 py-4 text-center">	Windows 98SE/2000/XP</td>
        <td className="border border-gray-300 px-6 py-4 text-center">Windows 7</td>
        <td className="border border-gray-300 px-6 py-4 text-center">Windows 10</td>
        <td className="border border-gray-300 px-6 py-4 text-center">Windows 11</td>
      </tr>
    </tbody>
  </table>
  <div className="mt-10 ml-10 flex items-center space-x-4 text-white">
        <PiNoteFill className="w-8 h-8" /> {/* React icon */}
        <div className="text-md">
          <p>In-game frame rate may vary depending on the hardware manufacturer and personal settings.</p>
          <p>PC performance can also differ due to network connections, PC environment, and management.</p>
          <p>To ensure smooth gameplay, it is recommended to keep all hardware drivers updated to their latest versions.</p>
          <p>System requirements for RF Phoenix may change with newly added content.</p>
          <p>Please install the latest service pack for the operating system and DirectX for normal installation and operation of the game.</p>
        </div>
      </div>

{/* NVidia and AMD Driver Section */}
<div className="mt-20 text-white">
  <h3 className="text-3xl font-bold mb-4 text-center">Latest Graphic Drivers</h3>
  <div className="flex justify-center p-10 items-center space-x-20">
    {/* NVidia Driver */}
    <div className="text-center p-6 border-2 border-gray-300 rounded-lg shadow-lg bg-white">
      <img
        src={NVidia}
        alt="NVIDIA Logo"
        className="w-64 h-32 mx-auto"
      />
      <button className="mt-4 relative overflow-hidden bg-black text-white px-10 py-5 group ">
      <Link to="https://www.nvidia.com/Download/index.aspx" className="block relative z-10">GeForce Driver</Link>
        <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out"></span>
      </button>
    </div>

    {/* AMD Driver */}
    <div className="text-center p-6 border-2 border-gray-300 rounded-lg shadow-lg bg-white">
      <img
        src={AMD}
        alt="AMD Logo"
        className="w-64 h-32 text-white mx-auto"
      />
      <button className="mt-4 relative overflow-hidden bg-black text-white px-10 py-5 group ">
      <Link to="https://www.amd.com/en/support" className="block relative z-10">Radeon Driver</Link>
        <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out"></span>
      </button>
    </div>

    {/* WinRAR Driver */}
    <div className="text-center p-6 border-2 border-gray-300 rounded-lg shadow-lg bg-white">
      <img
        src={winRar} // Assuming you have a WinRAR logo
        alt="WinRAR Logo"
        className="w-64 h-32 mx-auto"
      />
      <button className="mt-4 relative overflow-hidden bg-black text-white px-10 py-5 group ">
      <Link to="https://www.win-rar.com/download.html" className="block relative z-10">WinRAR Tool</Link>
        <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out"></span>
      </button>
    </div>
  </div>
</div>


</div>


      <Footer />
    </>
  );
}

export default Download;
