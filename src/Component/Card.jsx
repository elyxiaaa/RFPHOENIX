import React from 'react'

function Card({ faction, title, power, class: charClass, level, server, color, icon, character }) {
    return (
      <div className="relative group w-72 h-96 mx-auto">
        {/* Default State */}
        <div className="absolute inset-0 bg-BGPoster2 rounded-lg overflow-hidden shadow-lg transition-transform duration-500 group-hover:translate-y-12">
          <div className="text-center p-4">
            <div className={`${color} text-white text-xs font-bold px-3 py-1 rounded-lg inline-block`}>
              RISING FORCE - {faction}
            </div>
            <img
              src={icon}
              alt={`${faction} Emblem`}
              className="w-full h-full object-cover rounded-lg mt-4"
            />
        
            <p className={`${color} text-white  text-xl font-bold mt-4 rounded`}>{title}</p>
 
          </div>
        </div>
        {/* Hover State */}
        <div className="absolute inset-0 bg-BGPoster bg-cover rounded-lg overflow-hidden shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
          <div className="absolute top-4 left-4 text-white text-xs font-bold bg-black px-3 py-1 rounded-lg">

          </div>
          <img
            src={character}
            alt={`${faction} Character`}
            className="w-full h-72 object-cover rounded-lg"
          />
        </div>
      </div>
    );
  }
  

export default Card
