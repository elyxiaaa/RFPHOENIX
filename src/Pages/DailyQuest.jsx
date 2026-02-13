import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

import VCQuest from "../assets/FARM/VCQuest.jpg";
import MagnetQuest from "../assets/FARM/MagnetQuest.jpg";
import WeeklyQuest from "../assets/FARM/WeeklyQuest.jpg";
import BaalQuest from "../assets/FARM/BaalQuest.jpg";

function DailyQuest() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("guide-section");
  const [openDropdown, setOpenDropdown] = useState(null);

  const dropdownRef = useRef(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
    if (dropdownRef.current && openDropdown !== index) {
      dropdownRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  /* ================= AAA PANEL ================= */
  const Panel = ({ children, className = "" }) => (
    <div
      className={`rounded-2xl bg-black/60 backdrop-blur-xl border border-red-500/30
      shadow-[0_0_45px_rgba(255,60,0,0.25)] hover:shadow-[0_0_70px_rgba(255,120,0,0.45)]
      transition-all duration-500 ${className}`}
    >
      {children}
    </div>
  );

  /* ================= AAA DROPDOWN ================= */
  const Dropdown = ({ data, open, toggle, refProp }) => (
    <div ref={refProp} className="space-y-4">
      {data.map((item, index) => {
        const isOpen = open === index;

        return (
          <Panel key={index}>
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-4
              text-left hover:bg-red-950/40 transition-all duration-300"
            >
              <span className="font-semibold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                {item.title}
              </span>

              <span
                className={`text-orange-300 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                isOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6">{item.content}</div>
            </div>
          </Panel>
        );
      })}
    </div>
  );

  /* ================= QUEST DATA ================= */
  const dropdownData = [
    {
      title: "CLEANSING SETTE DESERT I",
      content: (
        <QuestContent
          img={MagnetQuest}
          progress={[<>Hunt 100 Bellato Guard <span className="text-yellow-500">(Accretia Aim)</span> </>,
             <>Hunt 100 Accretia Guard <span className="text-yellow-500">(Bellato Aim)</span></>,
             <>Hunt 100 Accretia Guard <span className="text-yellow-500">(Cora Aim)</span></>,
             <>Deliver Daily Quest Ticket</>
            ]}
          rewards={[<>Phoenix Blessing <span className="text-yellow-500">(Atk [1Day] )</span></>, <>25 Quest Points</>]}
          type="Party"
          cooldown="24 Hrs"
          modal="magnet_modal"
        />
      ),
    },
    {
      title: "CLEANSING SETTE DESERT II",
      content: (
        <QuestContent
          img={MagnetQuest}
          progress={[<>Hunt 100 Cora Guard <span className="text-yellow-500">(Accretia Aim)</span> </>,
             <>Hunt 100 Cora Guard <span className="text-yellow-500">(Bellato Aim)</span></>,
             <>Hunt 100 Bellato Guard <span className="text-yellow-500">(Cora Aim)</span></>,
             <>Deliver Daily Quest Ticket</>
            ]}
          rewards={[<>Phoenix Blessing <span className="text-yellow-500">(Def [1Day] )</span></>, <>25 Quest Points</>]}
          type="Party"
          cooldown="24 Hrs"
          modal="magnet_modal"
        />
      ),
    },
    {
      title: "LOOT MAGNET QUEST",
      content: (
        <QuestContent
          img={MagnetQuest}
          progress={[<>Hunt 100 Caliana Atrock  </>,
                    <>Hunt 100 Caliana Crew  </>,
                    <>Deliver Daily Quest Ticket</>
            ]}
          rewards={[<>Phoenix Blessing <span className="text-yellow-500">(Def [1Day] )</span></>, <>25 Quest Points</>]}
          type="Party"
          cooldown="4 Hrs"
          modal="magnet_modal"
        />
      ),
    },
    {
      title: "QUEST MASTER I",
      content: (
        <QuestContent
          img={MagnetQuest}
          progress={[<>Hunt Rock Jaw </>,
                    <>Hunt Taravern </>,
                    <>Deliver Quest Master Ticket</>
            ]}
          rewards={[<>Quest Master I</>, <>100 Quest Points</>]}
          type="Party"
          cooldown="12 Days"
          modal="magnet_modal"
        />
      ),
    },
    {
      title: "QUEST MASTER II",
      content: (
        <QuestContent
          img={MagnetQuest}
          progress={[<>Hunt Blink </>,
                    <>Hunt Caliana Queen </>,
                     <>Deliver Quest Master I</>
            ]}
          rewards={[<>Quest Master II</>, <>100 Quest Points</>]}
          type="Party"
          cooldown="12 Days"
          modal="magnet_modal"
        />
      ),
    },
    {
      title: "QUEST MASTER III",
      content: (
        <QuestContent
          img={MagnetQuest}
          progress={[<>Hunt Soul Sinder </>,
                    <>Hunt Dagon </>,
                     <>Deliver Quest Master II</>
            ]}
          rewards={[<>Quest Master III</>, <>100 Quest Points</>]}
          type="Party"
          cooldown="12 Days"
          modal="magnet_modal"
        />
      ),
    },
     {
      title: "QUEST MASTER IV",
      content: (
        <QuestContent
          img={MagnetQuest}
          progress={[<>Hunt Dagan </>,
                    <>Hunt Dagnue </>,
                    <>Deliver Quest Master III</>
            ]}
          rewards={[<>Quest Master Blade</>,
                    <>Phoenix Blessing <span className="text-yellow-500">(Atk) [14Day]</span></>,
                    <>Phoenix Blessing <span className="text-yellow-500">(Def) [14Day]</span></>, 
                    <>Infinity Burst Potion</>,
                    <>100 Quest Points</>]}
          type="Party"
          cooldown="12 Days"
          modal="magnet_modal"
        />
      ),
    },
  ];

  /* ================= RENDER ================= */
  return (
    <>
      <Navbar activeTab={activeTab} />

      <div
        id="guide-section"
        className="relative w-full min-h-screen bg-BG1 bg-cover bg-center overflow-hidden"
      >
        {/* Cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/90 to-black" />

        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,80,0,0.25),transparent_60%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 space-y-16 text-white">
          <h1 className="text-5xl font-COP1 md:text-6xl font-extrabold text-center
          bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400
          bg-clip-text text-transparent
          drop-shadow-[0_0_18px_rgba(255,80,0,0.9)]">
            DAILY QUESTS
          </h1>

          <Panel className="p-8">
            <Dropdown
              data={dropdownData}
              open={openDropdown}
              toggle={toggleDropdown}
            />
          </Panel>
        </div>
      </div>

      <Footer />

      {/* MODALS */}
      {["magnet", "baal", "weekly", "vc"].map((id) => (
        <dialog key={id} id={`${id}_modal`} className="modal">
          <div className="modal-box w-full h-full max-w-[1600px] bg-transparent">
            <img
              src={
                id === "magnet"
                  ? MagnetQuest
                  : id === "baal"
                  ? BaalQuest
                  : id === "weekly"
                  ? WeeklyQuest
                  : VCQuest
              }
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      ))}
    </>
  );
}

/* ================= QUEST CONTENT COMPONENT ================= */
const QuestContent = ({ img, progress, rewards, type, cooldown, modal }) => (
  <div className="flex flex-col md:flex-row items-start">
    <div className="md:w-1/2 w-full text-gray-200">
      <p className="mb-4">
        <strong>
          Claim at <span className="text-red-500">Server Quest NPC</span>
        </strong>
      </p>

      <ul className="mb-4">
        <li>
          Quest Type: <span className="text-yellow-400">{type}</span>
        </li>
        <li>
          Quest Cooldown: <span className="text-yellow-400">{cooldown}</span>
        </li>
      </ul>

      <h3 className="text-orange-400 font-bold mt-4">Progress:</h3>
      <ul className="mb-4">{progress.map((p, i) => <li key={i}>{p}</li>)}</ul>

      <h3 className="text-orange-400 font-bold mt-4">Rewards:</h3>
      <ul className="list-disc list-inside">
        {rewards.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </div>

    <img
      src={img}
      className="md:w-1/2 w-full rounded-lg border border-gray-700 shadow-lg ml-0 md:ml-8 mt-6 md:mt-0 cursor-pointer"
      onClick={() => document.getElementById(modal).showModal()}
    />
  </div>
);

export default DailyQuest;
