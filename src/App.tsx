import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MobileMenu from './components/MobileMenu'
import About from './pages/About'
import Contact from './pages/Contact'
import Music from './pages/Music'
import Home from './pages/Home'
import { MobileMenuProvider } from './contexts/MobileMenuContext'
import ScrollToTop from './utilities/ScrollToTop'
import Header from './components/Header'

const App: React.FC = () => {
  return (
    <MobileMenuProvider>
      <Router>
        <ScrollToTop />
        <Header />
        <MobileMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </Router>
    </MobileMenuProvider>
  )
}

export default App
