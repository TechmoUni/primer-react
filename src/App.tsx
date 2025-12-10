import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import MenuBar from './components/Menubar'
import Inicio from './components/Inicio'
import Acerca from './components/acercade'
import Footer from './components/Footer'
import Services from './components/Servicios'
import ChatBot from './components/ChatBot'
import './App.css'
import Contactos from './components/Contactos'
function App() {
  return (
    <Router>
      <Header />
      <MenuBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <ChatBot />
      <Footer />
    </Router>
  )
}

export default App