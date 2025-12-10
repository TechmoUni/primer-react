import axios from 'axios'

const OLLAMA_API_URL = 'http://localhost:11434/api/generate'

// Información del sitio web para el contexto del chatbot
const SITE_INFO = {
  servicios: [
    {
      nombre: 'Kits Especializados',
      descripcion: 'kits especializados para cada tipo de especie y ambiente'
    },
    {
      nombre: 'Mascotas Exóticas',
      descripcion: 'Cuidado experto para plantas exóticas, con ambientes especialmente diseñados para su confort y bienestar.'
    },
    {
      nombre: 'Cuidados Agricolas',
      descripcion: 'Programas de prevención y bienestar utilizando las últimas tecnologías.'
    },
    {
      nombre: 'Recomendaciones de uso',
      descripcion: 'Recomendaciones personalizadas para el uso correcto de tus plantas y productos.'
    },
    {
      nombre: 'Tecnología En la agricultura',
      descripcion: 'Equipamiento de última generación para diagnósticos precisos y tratamientos efectivos.'
    },
    {
      nombre: 'Asesoramiento Integral',
      descripcion: 'Asesoramiento integral para el cuidado de tus plantas, desde diagnósticos hasta recomendaciones de uso.'
    }
  ],
  empresa: {
    mision: 'Automatizar y optimizar el cuidado de jardines urbanos mediante tecnología sostenible e inteligente.',
    vision: 'Ser un referente nacional en innovación verde, promoviendo ciudades más ecológicas y conscientes.',
    valores: 'Sostenibilidad, innovación, compromiso social y accesibilidad tecnológica.'
  },
  experiencia: {
    años: '5+ años de experiencia',
    usuarios: '2+ usuarios felices',
    equipo: '1+ futuro ing.'
  },
  Contacto: {
    email: 'tika_tec@gmail.com',
    celular: '77424451',
    direccion: 'Av.petrolera'
  }
}

export const generateResponse = async (prompt: string) => {
  // Crear un contexto enriquecido para Ollama
  const contextualizedPrompt = `
    Eres un asistente virtual de T'IKA-TEC, una empresa especializada en tecnología para jardines urbanos.
    
    Información de la empresa:
    ${JSON.stringify(SITE_INFO, null, 2)}
    
    Instrucciones:
    - Responde preguntas sobre los servicios, la empresa y la experiencia usando la información proporcionada.
    - Mantén un tono amigable y profesional.
    - Si la pregunta no está relacionada con la información proporcionada, indica amablemente que solo puedes ayudar con consultas sobre T'IKA-TEC.
    - Sé conciso en tus respuestas.
    
    Pregunta del usuario: ${prompt}
  `

  try {
    const response = await axios.post(OLLAMA_API_URL, {
      model: 'gemma3',
      prompt: contextualizedPrompt,
      stream: false
    })
    return response.data.response
  } catch (error) {
    console.error('Error al conectar con Ollama:', error)
    throw new Error('Error al generar respuesta')
  }
}