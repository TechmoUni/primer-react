import logoMascotas from '/public/hojita.jpg'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section company-info">
          <img 
            src={logoMascotas} 
            alt="Logo Mascotas" 
            className="footer-logo"
          />
          <h3 className="company-name">Tika-tek</h3>
        </div>

        <div className="footer-section contact-info">
          <h4>Contacto</h4>
          <p><span className="icon">📞</span> +591 77424451</p>
          <p><span className="icon">✉️</span> info@tikatek.com</p>
          <p><span className="icon">📍</span> Calle Principal 123, Ciudad</p>
        </div>

        <div className="footer-section social-media">
          <h4>Síguenos en</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <span className="social-icon">🌿</span> Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <span className="social-icon">🌿</span> Instagram
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <span className="social-icon">🌿</span> Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer