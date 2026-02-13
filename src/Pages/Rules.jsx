import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

function Rules() {
  const location = useLocation();
  const [activeTab] = useState('rule-section');

  return (
    <>
      <Navbar activeTab={activeTab} />

      <div
        id="rule-section"
        className="relative min-h-screen w-full bg-BG1 bg-cover bg-center overflow-hidden flex flex-col items-center"
      >
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/90 to-black" />

        {/* Fire radial glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,80,0,0.25),transparent_60%)]" />

        {/* Title */}
        <h1 className="relative z-10 pt-24 pb-12 text-center font-COP1 font-bold
          text-6xl
          bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400
          bg-clip-text text-transparent
          drop-shadow-[0_0_25px_rgba(255,80,0,0.9)]">
          SERVER RULES
        </h1>

        {/* Table Container */}
        <div className="relative z-10 w-11/12 lg:w-3/4 mb-16
          rounded-2xl border border-red-500/30
          bg-black/60 backdrop-blur-xl
          shadow-[0_0_60px_rgba(255,80,0,0.25)]
          p-6 overflow-x-auto">

          <table className="w-full text-white border-collapse">
            <thead>
              <tr className="text-lg md:text-2xl text-orange-300 border-b border-red-500/40">
                <th className="p-3">#</th>
                <th className="p-3">Rules</th>
                <th className="p-3">Sanction</th>
              </tr>
            </thead>

            <tbody className="text-base md:text-lg">

              {/* Important Notices */}
              <tr className="border-b border-red-500/20">
                <th>❗❗</th>
                <td className="font-bold">
                  <p className="text-red-500 text-2xl md:text-3xl font-bold">Account Information & Responsibility:</p>
                  Players are accountable for their own account information and items. Giving personal account information or gear to friends or pilots is at the player’s own risk. If the password is changed or items/accounts are sold, the player is responsible, and it will not be recovered by the staff.
                </td>
                <td />
              </tr>

              <tr className="border-b border-red-500/20">
                <th>❗❗</th>
                <td className="font-bold">
                  <p className="text-red-500 text-2xl md:text-3xl font-bold">Reporting:</p>
                  A player who reports should have substantial evidence, such as a video or screenshot with the violator's IGN. Please keep in mind that in rare cases, a single screenshot may be insufficient to assess or ban a player.
                </td>
                <td />
              </tr>

              <tr className="border-b border-red-500/20">
                <th>❗❗</th>
                <td className="font-bold">
                  <p className="text-red-500 text-2xl md:text-3xl font-bold">Ban Appeal:</p>
                  Explain your side of the story and the overall scenario, and the administrators will look into it.
                  <br />
                  Write an apologetic letter to those who were involved when you breached the regulation. (Final decision is up to staff and admins.)
                </td>
                <td />
              </tr>

              {/* Rules List */}
              {[
                [
                  1,
                  'Pretending to be a GM/Admin/Staff is not allowed. Anyone caught using nicknames containing "GM" or "Admin" will be sanctioned.',
                  'PERMANENT BAN. Repeat offense may lead to IP Ban.'
                ],
                [2, 'Promotion of other RF Servers inside the game.', 'IP Ban or PERMANENT BAN'],
                [
                  3,
                  'Bug abuse or error items (item errors after race transfer, duping items, etc.)',
                  '3 Days Ban or PERMANENT BAN depending on severity.'
                ],
                [
                  4,
                  'Use of Terrain Glitches.',
                  '1st: 7 Days • 2nd: 1 Month • 3rd: PERMANENT BAN'
                ],
                [
                  5,
                  'Use of unauthorized software. Allowed: RF Clicker. Bannable: RF Helper, Cheat Engine, Sandboxie, etc.',
                  'PERMANENT BAN + IP Ban'
                ],
                [
                  6,
                  'Names consisting of "I" and/or "L" treated as scam attempt.',
                  '7 Day Ban or PERMANENT BAN'
                ],
                [
                  7,
                  'Any disrespect toward GM/Admin/Staff including Facebook or Discord messages.',
                  'PERMANENT BAN + IP Ban'
                ],
                [
                  8,
                  'NUKE, killing players, or planting towers inside CORE when HSK is safe.',
                  '3 Day → 7 Day → 1 Month/PERM BAN + CPT wipe'
                ],
                [
                  9,
                  'PVP Point / CPT Feeding.',
                  '7 Day → 15 Day → PERMANENT BAN (PvP reset)'
                ],
                [
                  10,
                  'Unsolicited Buffing (Trash Buffing).',
                  '12h → 3 Day → 7 Day/PERM BAN'
                ],
                [
                  11,
                  'Debuffing or Healing inside Safe Zone.',
                  'Warning → 3 Day → 7 Day/PERM BAN'
                ],
                [
                  12,
                  'Planting Towers/Traps near Safezone or Portal.',
                  '1 Day → 7 Day → 30 Day/PERM BAN'
                ],
                [
                  13,
                  'Family‑related trashtalk not connected to server.',
                  '48h Chat Block → 7 Day → 30 Day/PERM BAN'
                ],
                [
                  14,
                  'Forced logout.',
                  '1 Day → 5 Day → 7 Day/PERM BAN (video proof required)'
                ],
                [
                  15,
                  'Blocking Race Buffer.',
                  '1 Day → 5 Day → 7 Day/PERM BAN (proof required)'
                ],
              ].map(([num, rule, sanction]) => (
                <tr
                  key={num}
                  className="border-b border-red-500/10 hover:bg-red-900/20 transition-colors duration-300"
                >
                  <th className="p-3 text-orange-300">{num}</th>
                  <td className="p-3">{rule}</td>
                  <td className="p-3 text-red-300">{sanction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Rules;