import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import EngagementAnalytics from './pages/EngagementAnalytics'
import AudienceDemographics from './pages/AudienceDemographics'
import PostsInsights from './pages/PostsInsights'
import ProfileOverview from './pages/ProfileOverview'
import ReelsInsights from './pages/ReelsInsights'



const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/profile" element={<ProfileOverview />} />
        <Route path="/engagement" element={<EngagementAnalytics />} />
        <Route path="/posts" element={<PostsInsights />} />
        <Route path="/reels" element={<ReelsInsights />} />
        <Route path="/audience" element={<AudienceDemographics />} />
        
        </Routes>
      </div>
    </div>
  )
}

export default App