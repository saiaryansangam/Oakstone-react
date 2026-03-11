import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Capital from './pages/Capital'
import About from './pages/About'
import Advisory from './pages/Advisory'
import Finance from './pages/Finance'
import Invest from './pages/Invest'

function App() {
  const location = useLocation();
  const isCapitalPage = location.pathname === '/capital';

  return (
    <>
      <Header isCapitalPage={isCapitalPage} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/capital" element={<Capital />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer isCapitalPage={isCapitalPage} />
    </>
  )
}

export default App
