import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import JobDescription from './components/jobDescription/JobDescription'
import JobSizzler from './components/jobSizzler/JobSizzler.js'
import LinkedPost from './components/linkedpost/LinkedPost.js'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Services from './components/Services'
import Contact from './components/Contact'




const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jobdescription' element={<JobDescription />} />
        <Route path='/jobsizzler' element={<JobSizzler />} />
        <Route path='/linkedpost' element={<LinkedPost />} />
        <Route path='/features' element={<Features/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
