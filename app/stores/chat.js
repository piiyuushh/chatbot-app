import { defineStore } from 'pinia'

export const useChatStore = defineStore('chat', {
  state: () => ({
    messages: []
  }),

  getters: {
    getAllMessages: (state) => state.messages,
    getMessageCount: (state) => state.messages.length
  },

  actions: {
    addMessage(text, sender) {
      const newMessage = {
        id: Date.now(),
        text,
        sender,
        timestamp: new Date()
      }
      
      this.messages.push(newMessage)
      
      // If user sent a message, generate a bot response
      if (sender === 'user') {
        this.generateBotResponse()
      }
    },

    generateBotResponse() {
      const botResponses = [
        "Hello! I'm a bot. How can I help you today?",
        "That's interesting! Tell me more.",
        "I understand what you're saying.",
        "Thanks for sharing that with me!",
        "That's a great point!",
        "I'm here to chat with you anytime.",
        "What else would you like to talk about?",
        "That sounds wonderful!",
        "I appreciate you talking with me.",
        "Is there anything specific you'd like to know?"
      ]
      
      const randomIndex = Math.floor(Math.random() * botResponses.length)
      const randomResponse = botResponses[randomIndex] || "Thanks for chatting with me!"
      
      // Add slight delay to make it feel more natural
      setTimeout(() => {
        this.addBotMessage(randomResponse)
      }, 500 + Math.random() * 1000) // Random delay between 500-1500ms
    },

    addBotMessage(text) {
      const newMessage = {
        id: Date.now(),
        text,
        sender: 'bot',
        timestamp: new Date()
      }
      
      this.messages.push(newMessage)
    },

    clearMessages() {
      this.messages = []
    }
  }
})
