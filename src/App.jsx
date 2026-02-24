import React from "react"
import Home from './Pages/Home'
import Combination from './Pages/Combination'
import Donation from './Pages/Donation'
import Droplist from './Pages/Droplist'
import Farmsite from './Pages/Farmsite'
import Rules from './Pages/Rules'
import Download from './Pages/Download'
import Install from './Pages/Install'
import AccretiaWarrior  from "./Pages/AccretiaWarrior"
import BellatoWarrior from './Pages/BellatoWarrior'
import AccretiaRanger from "./Pages/AccretiaRanger"
import AccretiaLauncher from "./Pages/AccretiaLauncher"
import BellatoRanger from "./Pages/BellatoRanger"
import BellatoForce from "./Pages/BellatoForce"
import CoraWarrior from "./Pages/CoraWarrior"
import CoraRanger from "./Pages/CoraRanger"
import CoraForce from "./Pages/CoraForce"
import Battlepass from "./Pages/Battlepass"
import DailyQuest from "./Pages/DailyQuest"
import PhoenixEgg from "./Pages/PhoenixEgg"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalServiceBlocker from "./Component/GlobalServiceBlocker";
import PausedDeployment from "./Component/PausedDeployment";
function App() {


  return (
    <>
     <PausedDeployment 
        isBlocked={false} 
        type="payment"   
      />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/combination" element={<Combination />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/droplist" element={<Droplist />} />
          <Route path="/farmsite" element={<Farmsite />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/download" element={<Download />} />
          <Route path="/install" element={<Install />} />
          <Route path="/accretiaWarrior" element={<AccretiaWarrior />} />
          <Route path="/accretiaRanger" element={<AccretiaRanger />} />
          <Route path="/accretiaLauncher" element={<AccretiaLauncher />} />
          <Route path="/bellatoWarrior" element={<BellatoWarrior />} />
          <Route path="/bellatoRanger" element={<BellatoRanger />} />
          <Route path="/bellatoForce" element={<BellatoForce />} />
          <Route path="/coraWarrior" element={<CoraWarrior />} />
          <Route path="/coraRanger" element={<CoraRanger />} />
          <Route path="/coraForce" element={<CoraForce />} />
          <Route path="/battlepass" element={<Battlepass />} />
          <Route path="/dailyquest" element={<DailyQuest />} />
          <Route path="/phoenixEgg" element={<PhoenixEgg />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
