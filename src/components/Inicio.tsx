import './Inicio.css'
import InicioVideo from './InicioVideo'
import mascotasMain from '/public/edif_verde2.jpg'

const Inicio = () => {
  return (
    <div className="inicio">
      <InicioVideo />
      
      <section className="inicio-bienvenida">
        <div className="inicio-container">
          <img src={mascotasMain} alt="Mascotas Main" className="inicio-imagen" />
          <div className="inicio-texto">
            <h2>Bienvenidos a Tika-tek</h2>
            <p>
            Los jardines automatizados representan una innovación significativa en el campo de la 
jardinería, ya que integran tecnologías como la inteligencia artificial, sensores y sistemas de 
riego automatizado para optimizar el cuidado de las plantas y el paisaje en general. Estos 
sistemas permiten controlar de manera precisa factores como la humedad del suelo, la 
temperatura ambiente, la iluminación y la nutrición de las plantas, lo que se traduce en un 
crecimiento más saludable y una apariencia más exuberante del jardín. 
            </p>
            <p>
            El descuido de los jardines es una problemática que afecta tanto a entornos urbanos como 
rurales, y sus consecuencias van más allá de la mera estética. A medida que la urbanización 
avanza y el ritmo de vida se acelera, los jardines, que una vez fueron oasis de belleza y 
biodiversidad
            </p>
          </div>
        </div>
      </section>

      <section className="servicios-destacados">
        <h2>Nuestros Servicios Destacados</h2>
        <div className="servicios-grid">
          <div className="servicio-card">
            <img src="/src/assets/CuidadosExoticas.jpg" alt="Cuidados Especiales" />
            <h3>Cuidados Exoticos</h3>
            <p>Los mejores cuidados para cuidar tus plantas </p>
          </div>
          <div className="servicio-card">
            <img src="/src/assets/top_cuidados.jpg" alt="Medicina Preventiva" />
            <h3>Cuidados Agricolas</h3>
            <p>Los mejores cuidados para cuidar tus plantas </p>
          </div>
          <div className="servicio-card">
            <img src="/src/assets/cactus_cuidados.jpg" alt="Nutrición y Bienestar" />
            <h3>Cuidados Cactus</h3>
            <p>Los mejores cuidados para cuidar tus plantas </p>
          </div>
          <div className="servicio-card">
            <img src="/src/assets/revolucion-tecnologica.jpg" alt="Nutrición y Bienestar" />
            <h3>Asesoria y Mantenimiento</h3>
            <p>Asesoramiento personalizado para cualquier problema para el usuario</p>
          </div>
        </div>
      </section>

      <section className="compromiso-ambiental">
        <div className="compromiso-content">
          <h2>Nuestro Compromiso con el Medio Ambiente</h2>
          <p>
            En Tika-Tek, no solo nos preocupamos por la salud de sus jardines, sino también por el impacto ambiental de nuestras actividades. Implementamos prácticas sostenibles y eco-amigables en todos nuestros servicios.
          </p>
          <div className="compromiso-puntos">
            <div className="punto">
              <span className="punto-numero">01</span>
              <h3>Productos Sostenibles</h3>
              <p>Utilizamos productos y materiales eco-friendly en nuestros tratamientos y servicios.</p>
            </div>
            <div className="punto">
              <span className="punto-numero">02</span>
              <h3>Gestión de Residuos</h3>
              <p>Programa integral de reciclaje y manejo responsable de residuos tecnologicos.</p>
            </div>
            <div className="punto">
              <span className="punto-numero">03</span>
              <h3>Educación Ambiental</h3>
              <p>Promovemos la conciencia ambiental entre nuestros clientes y la comunidad.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Inicio