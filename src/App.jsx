import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import NavBar from './pages/NavBar'
import { Route, Routes } from 'react-router-dom'
import SideBar from './components/SideBar'
import LeaderBoard from './pages/LeaderBoard'
import Payouts from './pages/Payouts'
import DashBoards from './pages/DashBoards'
import FeaturedCompetition from './pages/FeaturedCompetition'
import AffiLiate from './pages/AffiLiate'

function App() {

  return (
   <div className='flex flex-grow'>
       <NavBar/>
       <SideBar/>
       <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/LeaderBoard" element={<LeaderBoard/>}/>
        <Route path="/Payouts" element={<Payouts/>}/>
        <Route path="/dashboard" element={<DashBoards/>}/>
        <Route path="/featuredcompetition" element={<FeaturedCompetition/>}/>
        <Route path="/affiliate" element={<AffiLiate/>}/>

       </Routes>
    </div>
  )
}

export default App
