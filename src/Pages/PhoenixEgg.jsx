import {useState} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";

function PhoenixEgg() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('egg-section'); 

  return (
    <>
      <Navbar activeTab={activeTab} />

      <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden text-white">

        {/* 🔥 FIRE PARTICLES */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(25)].map((_, i) => (
           <span
            className="absolute w-1.5 h-1.5 bg-orange-400 rounded-full opacity-70 animate-float"
            style={{
                left: `${Math.random() * 100}%`,
                bottom: `-${Math.random() * 20}px`,
                animationDuration: `${4 + Math.random() * 6}s`,
                animationDelay: `${Math.random() * 5}s`,
            }}
            />

          ))}
        </div>

        {/* 🔥 Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,80,0,0.25),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/80 to-black" />

        {/* 🐣 CONTENT */}
        <div className="relative z-10 text-center px-6">

          <div className="mb-8 animate-egg">
  <div className="w-32 h-40 mx-auto rounded-full bg-gradient-to-b from-yellow-200 via-orange-300 to-red-500 shadow-[0_0_40px_rgba(255,120,0,0.8)]" />
</div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,80,0,0.9)]">
            PHOENIX EGG
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl mx-auto">
            Something powerful is hatching.  
            This feature is currently under development.
          </p>

          {/* Coming Soon badge */}
          <div className="mt-10 inline-block px-6 py-3 rounded-full border border-red-500 text-red-400 tracking-widest text-sm sm:text-base shadow-[0_0_20px_rgba(255,60,0,0.4)] animate-pulse">
            COMING SOON
          </div>

          {/* 🔙 BACK BUTTON */}
          <div className="mt-12">
            <button
            onClick={() => navigate("/")}
            className="px-8 py-3 rounded-xl border border-red-500 text-red-400 font-semibold
            hover:bg-red-600 hover:text-white
            shadow-[0_0_20px_rgba(255,0,0,0.4)]
            hover:shadow-[0_0_35px_rgba(255,0,0,0.8)]
            transition-all duration-300"
          >
            ← Back to Home
          </button>

          </div>
        </div>
      </div>
    </>
  );
}

export default PhoenixEgg;
