import React, { useState } from 'react';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import Poster1 from '../assets/Poster1.jpg';
import Download from '../assets/INSTALL/download.jpg'
import Download2 from '../assets/INSTALL/download2.jpg'
import Download3 from '../assets/INSTALL/download3.jpg'
import Download4 from '../assets/INSTALL/download4.jpg'
import Download5 from '../assets/INSTALL/download5.jpg'
import Download6 from '../assets/INSTALL/download6.jpg'
import { Link } from 'react-router-dom';
import { FaShareAlt, FaFacebookF, FaClipboard, FaTimes } from 'react-icons/fa';

function Install() {
  const [showPopup, setShowPopup] = useState(false);
  const [showAlert, setShowAlert] = useState(false);  // State for alert visibility

  // Function to handle copying the URL
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setShowAlert(true);  // Show alert when URL is copied
      setTimeout(() => {
        setShowAlert(false);  // Hide alert after 3 seconds
      }, 3000);
    });
  };

  // Function to handle sharing on Facebook
  const handleFacebookShare = () => {
    const url = window.location.href;
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookShareUrl, '_blank');
  };

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen bg-cover bg-center bg-BG1 pt-16">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

        <h1 className="text-center text-4xl md:text-5xl font-bold font-ITC2 mb-10 text-white text-shadow-red-glow drop-shadow-md">
          Champion's Guide
        </h1>

        <div className="relative font-ITC2 text-white z-10 max-w-5xl w-full mx-auto space-y-10">
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <Link to="/download" className="text-white hover:text-red-700">
                  Return
                </Link>
              </li>
              <li>Installation Guide</li>
            </ul>
          </div>
        </div>

        {/* Installation Guide */}
        <div className="relative font-ITC2 z-10 p-16 max-w-5xl w-full mx-auto bg-white text-black space-y-10">
          
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold">Installation Guide</h1>
            <div className="flex items-center space-x-4">
              <p className="text-sm text-gray-600">Last Edited: December 4, 2024</p>
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => setShowPopup(true)}
              >
                <FaShareAlt size={24} />
              </button>
            </div>
          </div>

          {/* Separator */}
          <hr className="border-t-2 border-gray-200 mb-8" />

          {/* Share Icons Popup */}
          {showPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-80 flex justify-around items-center relative">
                {/* Close Icon */}
                <div
                  className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPopup(false)}
                >
                  <FaTimes size={20} />
                </div>

                {/* Facebook Icon */}
                <div
                  className="cursor-pointer text-blue-600 hover:text-blue-800"
                  onClick={handleFacebookShare}
                >
                  <FaFacebookF size={30} />
                </div>
                {/* Copy URL Icon */}
                <div
                  className="cursor-pointer text-gray-700 hover:text-gray-900"
                  onClick={handleCopyUrl}
                >
                  <FaClipboard size={30} />
                </div>
              </div>
            </div>
          )}

          {/* Steps for Installation */}
          <div className="step space-y-6">
            <div className="step-header">
              <h2 className="text-xl font-semibold">1. Going to the Download Client Page</h2>
            </div>
            <div className="step-image">
              <img src={Download} className="w-full h-auto rounded-lg" alt="Step 1" />
            </div>
            <div className="step-description">
              <p className="text-md">At the landing page of RF Apex official website, Click <strong>Download Now</strong> button.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="step space-y-6">
            <div className="step-header">
              <h2 className="text-xl font-semibold">2. Running the Installation File</h2>
            </div>
            <div className="step-image">
              <img src={Download2} className="w-full h-auto rounded-lg" alt="Step 2" />
            </div>
            <div className="step-description">
              <p className="text-md">Click the <strong>Download Client</strong> button in the middle of the page to start downloading the client. After the download is finished, double-click the downloaded file to start installing Rising Force Apex.</p>
            </div>
          </div>

           {/* Step 3 */}
           <div className="step space-y-6">
            <div className="step-header">
              <h2 className="text-xl font-semibold">3. Creating Folder and adding the folder to Anti-Virus exclusions</h2>
            </div>
            <div className="step-image">
              <img src={Download3} className="w-full h-auto rounded-lg" alt="Step 3" />
            </div>
            <div className="step-description">
              <p className="text-md">While waiting for the download to finish. Go to your <strong>Local Disk (C) or Local Disk (D) </strong> and create a folder called RF Apex. Then go to your anti-virus settings and proceed with the provided image.</p>
              <p className="text-md font-bold"><span className="text-red-500 font-bold">Note</span>: If you're using Local Disk (C), do not put it inside any folder specially Program Files.</p>
            </div>
          </div>

          {/* Step43 */}
          <div className="step space-y-6">
            <div className="step-header">
              <h2 className="text-xl font-semibold">4. Installing and Opening the Game Launcher</h2>
            </div>
            <div className="step-image">
              <img src={Download4} className="w-full h-auto rounded-lg" alt="Step 3" />
            </div>
            <div className="step-description">
              <p className="text-md">Next, click <strong>Extract To</strong> button from <a href="https://www.win-rar.com/download.html?&L=0" className="text-blue-500 font-bold underline">winRAR</a>. Locate the excluded folder from Step 2 then extract the client.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="step space-y-6">
            <div className="step-header">
              <h2 className="text-xl font-semibold">5. Signing Up and Logging In</h2>
            </div>
            <div className="step-image">
              <img src={Download5} className="w-full h-auto rounded-lg" alt="Step 4" />
            </div>
            <div className="step-description">
              <p className="text-md">After the RF Apex launcher is opened, you'll just need to log in. If don't have an account yet, go to <a href="https://rfapex.gamecp.net/register.php" className="text-blue-500 font-bold underline">RF Apex GameCP</a> and create an account.</p>
            </div>
          </div>

          <div className="step space-y-6">
            <div className="step-header">
              <h2 className="text-xl font-semibold">6. Starting the Game</h2>
            </div>
            <div className="step-image">
              <img src={Download6} className="w-full h-auto rounded-lg" alt="Step 4" />
            </div>
            <div className="step-description">
              <p className="text-md">First, you'll need to pick your account, then press the Play button to start your adventure in the world of Rising Force: Apex.</p>
            </div>
          </div>

          {/* Add more steps as necessary */}
        </div>
      </div>


{/* DaisyUI Success Alert for copied URL */}
{showAlert && (
  <div role="alert" className="alert alert-success fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-xs w-full bg-green-600">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 shrink-0 stroke-current text-white"
      fill="none"
      viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span className="text-white">URL copied to clipboard!</span>
  </div>
)}


      <Footer />
    </>
  );
}

export default Install;
