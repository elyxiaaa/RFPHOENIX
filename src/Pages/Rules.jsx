import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useLocation } from 'react-router-dom';
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

function Rules() {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState('rule-section'); // Default to 'home-section'

  return (
    <>
      <Navbar activeTab={activeTab}/>
      <div 
      id="rule-section"
      className="relative h-screen w-full bg-BG1 bg-cover bg-no-repeat flex flex-col items-center justify-start">
         {/* Dark Overlay */}
         <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        {/* Title */}
        
        <p className="px-4 py-16 text-2xl md:text-4xl lg:text-5xl font-COP1 font-bold text-white text-shadow-red-glow text-center relative">
          SERVER RULES
        </p>

        {/* Table Container */}
        <div className="overflow-x-auto w-11/12 lg:w-3/4 bg-black/70 rounded-lg font-ITC2 mb-10 p-5 relative">
          <table className="table-auto text-white w-full p">
            {/* Table Head */}
            <thead className="text-lg md:text-2xl text-white font-">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">Rules</th>
                <th className="p-3">Sanction</th>
              </tr>
            </thead>
            <tbody className="text-xl ">
              {/* row 1 */}
              
                                        {/* row 14 */}
                     {/* row 14 */}
                     <tr className="border-b border-gray-600">
                      <th>❗❗</th>
                      <td className="text-xl font-bold"><p className="text-red-500 text-3xl font-bold"><strong>Account Information & Responsibility:</strong></p> 
                         Players are accountable for their own account information and items. Giving personal account information or gear to friends or pilots is at the player’s own risk. If the password is changed or items/accounts are sold, the player is responsible, and it will not be recovered by the staff.</td>
                    </tr>
                    {/* row 15 */}
                    <tr className="border-b border-gray-600">
                      <th>❗❗</th>
                      <td className="text-xl font-bold"><p className="text-red-500  text-3xl font-bold"><strong>Reporting:</strong></p> A player who reports should have substantial evidence, such as a video or screenshot with the violator's IGN. Please keep in mind that in rare cases, a single screenshot may be insufficient to assess or ban a player.
                      <br/>
                      </td>
                    </tr>
                    {/* row 16 */}
                    <tr className="border-b border-gray-600">
                      <th>❗❗</th>
                      <td className="text-xl font-bold"><p className="text-red-500  text-3xl font-bold"><strong>Ban Appeal:</strong></p> Explain your side of the story and the overall scenario, and the administrators will look into it.
                      <br/>
                      Write an apologetic letter to those who were involved when you breached the regulation. (The final decision will still be up to the staff and administrators).
                      </td>
                    </tr>

                    <tr className="border-b border-gray-600">
                <th>1</th>
                <td>Pretending to be a <strong>GM/Admin/Staff</strong> is not allowed. Anyone caught using nicknames contaning "GM" or "Admin" will be sanctioned.</td>
                <td>PERMANENT BAN. 
                  <br/>
                  For any player found to commit this multiple times will be subject in a IP Ban</td>
              </tr>
              {/* row 2 */}
              <tr className="border-b border-gray-600">
                <th>2</th>
                <td>Promotion of other RF Servers inside the game.</td>
                <td>IP Ban or PERMANENT BAN</td>
              </tr>
              {/* row 3 */}
              <tr className="border-b border-gray-600">
                <th>3</th>
                <td>Bug abuse or error items
                  <br/>
                  ( Item errors after race transfer, duping items,  etc.)</td>
                <td> 3 days or PERMANENT BAN.
                  <br/>
                  (Depending on the gravity of the offense, GM/Admin/Staff will give the final verdict)</td>
              </tr>
              {/* row 4 */}
              <tr className="border-b border-gray-600">
                <th>4</th>
                <td>Use of Terrain Glitches.</td>
                <td className="flex flex-col ">
                  <td>1st offense: 7 Days Ban</td>
                  <td>2nd offense: 1 Month Ban</td>
                  <td>3rd offense: PERMANENT BAN</td>
                </td>
              </tr>
              {/* row 5 */}
              <tr className="border-b border-gray-600">
                <th>5</th>
                <td>Use of unauthorized softwares 
                  <br/>
                  <strong>Allowed: RF Clicker</strong>
                  <br/>
                  <strong>Bannable: (RF Helper, Cheat Engine, Sandboxie and other similar softwares)</strong></td>
                <td>PERMANENT BAN and IP Ban</td>
              </tr>
              {/* row 6 */}
              <tr className="border-b border-gray-600">
                <th>6</th>
                <td>Use of Name consisting of "I" and/or "L" will be treated as a scam attempt. </td>
                <td>7 Day Ban or PERMANENT BAN
                  <br/>
                  (GM/Admin/Staff will give the final verdict)
                </td>
              </tr>
              {/* row 7 */}
              <tr className="border-b border-gray-600">
                <th>7</th>
                <td>Any form if disrespect to any GM/Admin/Staff. 
                  <br/>This includes messages sent to our Facebook Page and Discord.</td>
                <td>PERMANENT BAN and IP Ban</td>
              </tr>
              {/* row 8 */}
              <tr className="border-b border-gray-600">
                <th>8</th>
                <td>NUKE, Killing Players and Planting Guard Towers INSIDE the CORE when HSK is already safe.</td>
                <td className="flex flex-col">
                  <td>1st offense: 3 Day Ban & CPT WIPE</td>
                  <td>2nd offense: 7 Day Ban & CPT WIPE</td>
                  <td>3rd offense: 1 Month OR PERMANENT BAN & CPT WIPE.
                    <br/> (Councils who dropped the nuke will be CPT Wiped)
                  </td>
                </td>
              </tr>
              {/* row 9 */}
              <tr className="border-b border-gray-600">
                <th>9</th>
                <td>PVP Point / CPT Feeding</td>
                <td className="flex flex-col">
                  <td>1ST: 7 Days Ban</td>
                  <td>2ND: 15 Days Ban</td>
                  <td>3RD: PERMANENT BAN</td>
                  <td>Note: If caught, PvP/CPT will be reverted to 0</td>
                </td>
              </tr>
              {/* row 10 */}
              <tr className="border-b border-gray-600">
                <th>10</th>
                <td>Unsolicited Buffing (Trash Buffing)</td>
                <td className="flex flex-col">
                  <td>1st offense: 12 Hours Ban</td>
                  <td>2nd offense: 3 Days Ban</td>
                  <td>3rd offense: 7 Days - PERMANENT BAN.</td>
                </td>
              </tr>
                                   {/* row 11 */}
                                   <tr className="border-b border-gray-600">
                      <th>11</th>
                      <td>Debuffing and/or Healing inside a Safe Zone.</td>
                      <td className="flex flex-col">
                      <td>
                      1st offense: WARNING</td>
                      <td>2nd offense: 3 Days Ban</td>
                      <td>3rd offense: 7 Days - PERMANENT BAN.</td>
                      </td>
                    </tr>
                     {/* row 12 */}
                     <tr className="border-b border-gray-600">
                      <th>12</th>
                      <td>Planting of Towers and Traps in/near the safezone and portal is prohibited.</td>
                      <td className="flex flex-col">
                      <td>
                      1st offense: 1 Day Ban</td>
                      <td>2nd offense: 7 Day Ban</td>
                      <td>3rd offense: 30 Day Ban - PERMANENT BAN.</td>
                      </td>
                    </tr>
                     {/* row 13 */}
                     <tr className="border-b border-gray-600">
                      <th>13</th>
                      <td>Any form of trashtalk relating a person’s family/relatives not connected to the RF Apex server will not be tolerated.</td>
                      <td className="flex flex-col">
                      <td>
                      1st offense: 48 Hours Chat Block</td>
                      <td>2nd offense: 7 Days Ban</td>
                      <td>3rd offense: 30 Days - PERMANENT BAN</td>
                      <br/>
                      <td>Note: Admins will decide how severe the trashtalk is and determine the sanction.</td>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-600">
                      <th>14</th>
                      <td>Forced Logged out</td>
                      <td className="flex flex-col">
                      <td>
                      1st offense: 1 Day ban</td>
                      <td>2nd offense: 5 Days Ban</td>
                      <td>3rd offense: 7 Days - PERMANENT BAN</td>
                      <br/>
                      <td>Note: Reporter must provide video proof.</td>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-600">
                      <th>15</th>
                      <td>Blocking Race Buffer</td>
                      <td className="flex flex-col">
                      <td>
                      1st offense: 1 Day ban</td>
                      <td>2nd offense: 5 Days Ban</td>
                      <td>3rd offense: 7 Days - PERMANENT BAN</td>
                      <br/>
                      <td>Note: Reporter must provide video proof or screenshot.</td>
                      </td>
                    </tr>
              {/* Continue with rows 12-17 as you need */}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Rules
