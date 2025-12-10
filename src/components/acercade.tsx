import logoBot from '../assets/tikabot.png'
import logotika from '/public/logo tikatec copia.png'
import './acercade.css'

const Acerca = () => {
  return (
    <div className="acerca-container">
      <div className="acerca-header">
        <div className="leaf-decoration left"></div>
        <h2>Acerca de Tika-tek</h2>
        <div className="leaf-decoration right"></div>
      </div>

      <div className="acerca-content">
        <div className="acerca-image-container">
          <img 
            src={logoBot} 
            alt="Logo Mundo Animal" 
            className="acerca-logo"
          />
          <div className="image-overlay"></div>
          <img 
            src={logotika} 
            alt="Logo Mundo Animal" 
            className="acerca-logo"
          />
          <div className="image-overlay"></div>
        </div>
        

        <div className="acerca-text">
          <div className="mission-box">
            <h3>Nuestra Misión</h3>
            <p>
            La misión de T’IKA-TEC es automatizar y optimizar el cuidado de jardines urbanos mediante tecnología sostenible e inteligente.
            </p>
          </div>

          <div className="vision-box">
            <h3>Nuestra Visión</h3>
            <p>
            Su visión es ser un referente nacional en innovación verde, promoviendo ciudades más ecológicas y conscientes.
            </p>
          </div>

          <div className="values-box">
            <h3>Nuestros Valores</h3>
            <p>
            Sus valores clave son sostenibilidad, innovación, compromiso social y accesibilidad tecnológica.
            </p>
          </div>
        </div>
      </div>

      <div className="experience-section">
        <div className="experience-card">
          <span className="number">5+</span>
          <p>Años de Experiencia</p>
        </div>
        <div className="experience-card">
          <span className="number">2+</span>
          <p>Usuarios Felices</p>
        </div>
        <div className="experience-card">
          <span className="number">1+</span>
          <p>Futuro ing.</p>
        </div>
      </div>
    </div>
  )
}

export default Acerca