import { useState, useRef, useEffect } from 'react'
import './ChatBot.css'
import { generateResponse } from '../services/chatService'

interface Message {
  text: string
  isUser: boolean
  timestamp: Date
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      text: 'Hola, soy TikaBot, el asistente virtual de T\'IKA-TEC. ¿En qué puedo ayudarte? Puedes preguntarme sobre nuestros servicios, la empresa o contactarnos.',
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    try {
      const response = await generateResponse(inputMessage)
      const botMessage: Message = {
        text: response,
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      const errorMessage: Message = {
        text: 'Lo siento, hubo un error al procesar tu mensaje. Por favor, intenta de nuevo.',
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const suggestedQuestions = [
    '¿Qué servicios ofrecen?',
    '¿Cuál es su misión?',
    '¿Cuántos años de experiencia tienen?',
    '¿Cómo puedo contactarlos?'
  ]

  const handleSuggestedQuestion = (question: string) => {
    setInputMessage(question)
  }

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <button 
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir chat"
      >
        <img src="/src/assets/tikabot.png" alt="ChatBot" className="chatbot-icon" />
      </button>

      <div className="chatbot-window">
        <div className="chatbot-header">
          <h3>TikaBot</h3>
          <button 
            className="close-button" 
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar chat"
          >×</button>
        </div>

        <div className="messages-container">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.isUser ? 'user-message' : 'bot-message'}`}
            >
              <div className="message-content">{message.text}</div>
              <div className="message-timestamp">
                {message.timestamp.toLocaleTimeString()}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="message bot-message">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="suggested-questions">
          {suggestedQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleSuggestedQuestion(question)}
              className="suggested-question-btn"
            >
              {question}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="chatbot-input-form">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Escribe tu mensaje..."
            disabled={isLoading}
            aria-label="Mensaje"
          />
          <button 
            type="submit" 
            disabled={isLoading || !inputMessage.trim()}
            aria-label="Enviar mensaje"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChatBot