import './InicioVideo.css'

const InicioVideo = () => {
  return (
    <div className="video-section">
      <div className="video-overlay">
        <h1 className="video-title">Jardines Inteligentes</h1>
      </div>
      <video
        autoPlay
        loop
        muted
        className="background-video"
      >
        <source src="/src/assets/jardin.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  )
}

export default InicioVideo