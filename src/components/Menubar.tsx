import './MenuBar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Login from './Login'


const MenuBar = () => {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      <nav className="menu-bar">
        <Link to="/" className="menu-item">Inicio</Link>
        <Link to="/acerca" className="menu-item">Acerca de</Link>
        <Link to="/servicios" className="menu-item">Servicios</Link>
        <Link to="/contactos" className="menu-item">Contactos</Link>
        <button 
          className="menu-item login-button" 
          onClick={() => setShowLogin(true)}
        >
          Login
        </button>
      </nav>
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  )
}

export default MenuBar