import './Servicios.css'

const Servicios = () => {
  const servicios = [
    {
      imagen: '/src/assets/macetas inteligentes.jpg',
      titulo: 'Kits Especializados',
      descripcion: 'kits especializados para cada tipo de especie y ambiente'
    },
    {
      imagen: '/src/assets/CuidadosExoticas.jpg',
      titulo: 'Mascotas Exóticas',
      descripcion: 'Cuidado experto para plantas exóticas, con ambientes especialmente diseñados para su confort y bienestar.'
    },
    {
      imagen: '/src/assets/top_cuidados.jpg',
      titulo: 'Cuidados Agricolas',
      descripcion: 'Programas de prevención y bienestar utilizando las últimas tecnologías.'
    },
    {
      imagen: '/src/assets/cultivos futuristas.jpg',
      titulo: 'Recomendaciones de uso',
      descripcion: 'Recomendaciones personalizadas para el uso correcto de tus plantas y productos.'
    },
    {
      imagen: '/src/assets/revolucion-tecnologica.jpg',
      titulo: 'Tecnología En la agricultura',
      descripcion: 'Equipamiento de última generación para diagnósticos precisos y tratamientos efectivos.'
    },
    {
      imagen: '/src/assets/ia-biologia.jpg',
      titulo: 'Asesoramiento Integral',
      descripcion: 'Asesoramiento integral para el cuidado de tus plantas, desde diagnósticos hasta recomendaciones de uso.'
    }
  ]

  return (
    <div className="servicios-container">
      <div className="servicios-header">
        <div className="leaf-accent left"></div>
        <h2>Nuestros Servicios</h2>
        <div className="leaf-accent right"></div>
      </div>
      
      <div className="servicios-grid">
        {servicios.map((servicio, index) => (
          <div key={index} className="servicio-card">
            <div className="servicio-imagen-container">
              <img 
                src={servicio.imagen} 
                alt={servicio.titulo} 
                className="servicio-imagen"
              />
              <div className="imagen-overlay"></div>
            </div>
            <div className="servicio-contenido">
              <h3>{servicio.titulo}</h3>
              <p>{servicio.descripcion}</p>
              <button className="servicio-btn">Más Información</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Servicios