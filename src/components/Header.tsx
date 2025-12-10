import logohojita from '/public/hojita.jpg'
import './Header.css'

const Header = () => {
  return (
    <header className="header-botanical navbar py-3">
      <div className="container position-relative">
        <div className="d-flex align-items-center justify-content-start w-100">
          <img 
            src={logohojita} 
            alt="Logo hojita" 
            className="navbar-brand img-fluid rounded-circle header-logo"
          />
          <h1 className="header-title display-6 mb-0 ms-3">Tika-Tek</h1>
        </div>
      </div>
    </header>
  )
}

export default Header