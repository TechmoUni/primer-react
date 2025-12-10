import { useState } from 'react'
import type { FormEvent } from 'react'
import './Contactos.css'
import { saveContact } from '../services/api'

const Contactos = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  })

  const [status, setStatus] = useState({
    loading: false,
    error: null as string | null,
    success: false
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus({ loading: true, error: null, success: false })

    try {
      await saveContact(formData)
      setStatus({ loading: false, error: null, success: true })
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' })
    } catch (error) {
      setStatus({
        loading: false,
        error: 'Error al enviar el formulario. Por favor, inténtalo de nuevo.',
        success: false
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="contactos-container">
      <div className="leaf-decoration left"></div>
      <div className="leaf-decoration right"></div>
      
      <div className="contactos-content">
        <div className="contactos-info">
          <h2>Contáctanos</h2>
          <div className="separator"></div>
          <p>
            ¿Tienes alguna pregunta o comentario? Estamos aquí para ayudarte.
            Completa el formulario y nos pondremos en contacto contigo lo antes posible.
          </p>
        </div>
        
        <form className="contacto-form" onSubmit={handleSubmit}>
          {status.error && <div className="error-message">{status.error}</div>}
          {status.success && <div className="success-message">¡Mensaje enviado con éxito!</div>}
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="asunto">Asunto</label>
            <input
              type="text"
              id="asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              required
              placeholder="Asunto de tu mensaje"
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              placeholder="Escribe tu mensaje aquí..."
              rows={5}
            />
          </div>

          <button 
            type="submit" 
            className="submit-button"
            disabled={status.loading}
          >
            {status.loading ? (
              <>
                <span className="loading-spinner"></span>
                <span>Enviando...</span>
              </>
            ) : (
              'Enviar Mensaje'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contactos