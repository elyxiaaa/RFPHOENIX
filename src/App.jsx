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
        isBlocked={true} 
        type="payment"   
      />

    </>
  )
}

export default App
