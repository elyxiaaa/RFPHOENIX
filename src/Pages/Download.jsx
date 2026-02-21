import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { Link } from 'react-router-dom';
import { PiNoteFill } from 'react-icons/pi';
import { FaGoogleDrive } from 'react-icons/fa';
import { SiMediafire, SiMega } from 'react-icons/si';

import AMD from '../assets/AMD.png';
import NVidia from '../assets/NVidia.png';
import winRar from '../assets/winRar.png';

function Download() {
  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION (AAA SAME AS HOME) ================= */}
      <div className="w-full h-screen bg-BG1 bg-cover bg-center relative overflow-hidden">
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
  

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-ITC2 font-bold
            bg-gradient-to-r from-red-500 via-orange-400 to-red-600
            bg-clip-text text-transparent
            drop-shadow-[0_0_25px_rgba(255,80,0,0.9)]">
            RISING FORCE PHOENIX
          </h1>

          <p className="text-2xl md:text-3xl mt-4 font-ITC text-gray-200">
            Download now and conquer the battlefield
          </p>

          {/* Download Buttons AAA */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            {[{
              href: '',
              label: 'MEDIAFIRE',
              icon: <SiMediafire className="text-3xl" />,
            }, {
              href: 'https://drive.google.com/file/d/1wG_Qc3wqQpDEfGobZAfJXVDuJSo_60vT/view?usp=sharing',
              label: 'GOOGLE DRIVE',
              icon: <FaGoogleDrive className="text-3xl" />,
            }, {
              href: 'https://mega.nz/file/UjMD1L5T#tZSKiMDhA-wYWXEC0WB6cjCOax4xDgbqJIBLajGuiFo',
              label: 'MEGA',
              icon: <SiMega className="text-3xl" />,
            }].map((btn, i) => (
              <a key={i} href={btn.href}
              target="_blank" rel="noopener noreferrer">
                <button className="
                  flex items-center gap-3
                  text-lg md:text-xl text-black font-bold
                  py-3 px-8 rounded-xl
                  bg-gradient-to-r from-red-600 via-red-500 to-orange-500
                  shadow-[0_0_25px_rgba(255,90,0,0.7)]
                  hover:from-red-500 hover:via-orange-500 hover:to-orange-400
                  hover:shadow-[0_0_40px_rgba(255,120,0,1)]
                  transform hover:scale-105
                  transition-all duration-300
                "
                 >
                  DOWNLOAD {btn.label}
                  {btn.icon}
                </button>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ================= SYSTEM REQUIREMENTS AAA ================= */}
      <div className="relative bg-black py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/40 to-black" />

        <h2 className="relative text-4xl md:text-5xl font-bold text-center mb-12
          bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400
          bg-clip-text text-transparent
          drop-shadow-[0_0_18px_rgba(255,80,0,0.9)]">
          SYSTEM REQUIREMENTS
        </h2>

        <div className="relative max-w-6xl mx-auto overflow-x-auto">
          <table className="w-full text-center border border-red-500/30 bg-black/60 backdrop-blur-xl">
            <thead className="bg-red-900/40 text-orange-200">
              <tr>
                {['Category', 'Minimum', 'Recommended', 'Performance', 'Ultra'].map((h) => (
                  <th key={h} className="px-6 py-3 border border-red-500/30">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-gray-200">
              {[
                ['Resolution', '720p', '1080p', '1440p', '4K'],
                ['Graphic Quality', 'Low', 'Medium', 'High', 'Ultra'],
                ['Memory', '2 GB', '4 GB', '16 GB', '32 GB'],
                ['OS', 'Windows XP', 'Windows 7', 'Windows 10', 'Windows 11'],
              ].map((row, i) => (
                <tr key={i} className="border border-red-500/20 hover:bg-red-900/20 transition">
                  {row.map((cell, j) => (
                    <td key={j} className="px-6 py-4 border border-red-500/20">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Notes */}
        <div className="relative max-w-4xl mx-auto mt-12 flex gap-4 text-gray-300">
          <PiNoteFill className="w-8 h-8 text-orange-400" />
          <p>
            Performance may vary depending on hardware, drivers, and network conditions.
            Keep drivers updated for the best RF Phoenix experience.
          </p>
        </div>
      </div>

      {/* ================= DRIVERS SECTION AAA ================= */}
      <div className="relative bg-BG1 bg-cover bg-center py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

        <h2 className="relative text-4xl md:text-5xl font-bold text-center mb-16
          bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400
          bg-clip-text text-transparent
          drop-shadow-[0_0_18px_rgba(255,80,0,0.9)]">
          LATEST GRAPHIC DRIVERS
        </h2>

        <div className="relative flex flex-wrap justify-center gap-10 px-6">
          {[{
            img: NVidia,
            link: 'https://www.nvidia.com/Download/index.aspx',
            label: 'GeForce Driver',
          }, {
            img: AMD,
            link: 'https://www.amd.com/en/support',
            label: 'Radeon Driver',
          }, {
            img: winRar,
            link: 'https://www.win-rar.com/download.html',
            label: 'WinRAR Tool',
          }].map((card, i) => (
            <div
              key={i}
              className="
                bg-orange-900/50 backdrop-blur-xl
                border border-red-500/30
                shadow-[0_0_40px_rgba(255,80,0,0.25)]
                hover:shadow-[0_0_70px_rgba(255,120,0,0.5)]
                transition-all duration-500
                rounded-2xl p-8 text-center
              "
            >
              <img src={card.img} className="w-56 h-28 object-contain mx-auto mb-6" />

              <Link to={card.link}>
                <button className="
                  text-black font-bold px-8 py-3 rounded-xl
                  bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400
                  hover:scale-105 transition-all duration-300
                  shadow-[0_0_25px_rgba(255,100,0,0.8)]
                ">
                  {card.label}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Download;