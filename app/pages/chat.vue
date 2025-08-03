<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl"></div>
      <div class="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl"></div>
    </div>
    
    <!-- Header -->
    <header class="relative z-10 bg-white/10 backdrop-blur-lg border-b border-white/20">
      <div class="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6 flex items-center justify-between">
        <div class="flex items-center space-x-3 md:space-x-6">
          <NuxtLink 
            to="/" 
            class="flex items-center text-purple-200 hover:text-white transition-all duration-200 group text-sm md:text-base"
          >
            <svg class="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            <span class="hidden sm:inline">Back to Home</span>
            <span class="sm:hidden">Back</span>
          </NuxtLink>
          <div class="flex items-center space-x-2 md:space-x-4">
            <div class="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-lg md:rounded-xl flex items-center justify-center">
              <svg class="w-4 h-4 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </div>
            <h1 class="text-lg md:text-2xl font-bold text-white">ChatBot</h1>
          </div>
        </div>
        <div class="flex items-center space-x-3 md:space-x-6">
          <div class="bg-white/10 backdrop-blur-sm px-2 md:px-4 py-1 md:py-2 rounded-full border border-white/20">
            <span class="text-xs md:text-sm text-purple-200">
              {{ chatStore.getMessageCount }} <span class="hidden sm:inline">messages</span><span class="sm:hidden">msg</span>
            </span>
          </div>
          <button 
            @click="clearChat"
            class="bg-red-500/20 hover:bg-red-500/30 text-red-200 hover:text-red-100 px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 border border-red-400/30"
          >
            <span class="hidden sm:inline">Clear Chat</span>
            <span class="sm:hidden">Clear</span>
          </button>
        </div>
      </div>
    </header>

    <!-- Chat Messages Area -->
    <div class="flex-1 max-w-7xl mx-auto w-full px-4 md:px-6 py-4 md:py-8 relative z-10">
      <div 
        ref="messagesContainer"
        class="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl shadow-2xl border border-white/20 h-[calc(100vh-200px)] md:h-[calc(100vh-300px)] overflow-y-auto p-4 md:p-8 mb-4 md:mb-6 space-y-4 md:space-y-6 scrollbar-thin scrollbar-thumb-purple-300/50 scrollbar-track-transparent"
      >
        <!-- Empty state -->
        <div v-if="chatStore.getAllMessages.length === 0" class="text-center text-purple-200 py-8 md:py-16">
          <div class="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-2xl md:rounded-3xl mx-auto mb-4 md:mb-8 flex items-center justify-center border border-white/10">
            <svg class="w-8 h-8 md:w-12 md:h-12 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
          </div>
          <h3 class="text-xl md:text-2xl font-semibold mb-2">Start a conversation</h3>
          <p class="text-purple-300 text-sm md:text-base px-4">Send a message to begin chatting with our intelligent bot</p>
        </div>
        
        <!-- Messages -->
        <div 
          v-for="message in chatStore.getAllMessages" 
          :key="message.id"
          class="flex"
          :class="message.sender === 'user' ? 'justify-end' : 'justify-start'"
        >
          <div class="max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg">
            <!-- User Message -->
            <div 
              v-if="message.sender === 'user'"
              class="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl md:rounded-3xl px-4 md:px-6 py-3 md:py-4 shadow-lg"
            >
              <p class="text-sm md:text-base leading-relaxed break-words">{{ message.text }}</p>
              <p class="text-xs opacity-75 mt-2">
                {{ formatTime(message.timestamp) }}
              </p>
            </div>
            
            <!-- Bot Message -->
            <div 
              v-else
              class="bg-white/10 backdrop-blur-sm text-white rounded-2xl md:rounded-3xl px-4 md:px-6 py-3 md:py-4 border border-white/20 shadow-lg"
            >
              <div class="flex items-center mb-2">
                <div class="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full mr-2 md:mr-3 flex items-center justify-center flex-shrink-0">
                  <svg class="w-2.5 h-2.5 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V5z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-xs font-medium text-purple-200">Bot Assistant</span>
              </div>
              <p class="text-sm md:text-base leading-relaxed break-words">{{ message.text }}</p>
              <p class="text-xs text-purple-300 mt-2">
                {{ formatTime(message.timestamp) }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Message Input -->
      <div class="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-6 border border-white/20">
        <form @submit.prevent="sendMessage" class="flex flex-col sm:flex-row gap-3 md:gap-4">
          <div class="flex-1 relative">
            <input
              v-model="newMessage"
              type="text"
              placeholder="Type your message here..."
              class="w-full px-4 md:px-6 py-3 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-purple-200 transition-all duration-200 text-sm md:text-base"
              :disabled="isLoading"
            />
          </div>
          <button
            type="submit"
            :disabled="!newMessage.trim() || isLoading"
            class="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-3 md:py-4 px-6 md:px-8 rounded-xl md:rounded-2xl transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 text-sm md:text-base min-w-[100px] md:min-w-[120px]"
          >
            <span>{{ isLoading ? 'Sending...' : 'Send' }}</span>
            <svg v-if="!isLoading" class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
            <div v-else class="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, watch } from 'vue'
import { useChatStore } from '~/stores/chat'

// Set page title
useHead({
  title: 'Chat - ChatBot'
})

const chatStore = useChatStore()
const newMessage = ref('')
const isLoading = ref(false)
const messagesContainer = ref(null)

// Format timestamp
const formatTime = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

// Send message function
const sendMessage = async () => {
  if (!newMessage.value.trim()) return
  
  isLoading.value = true
  
  try {
    // Add user message to store
    chatStore.addMessage(newMessage.value.trim(), 'user')
    
    // Clear input
    newMessage.value = ''
    
    // Scroll to bottom
    await nextTick()
    scrollToBottom()
    
  } catch (error) {
    console.error('Error sending message:', error)
  } finally {
    isLoading.value = false
  }
}

// Clear chat function
const clearChat = () => {
  if (confirm('Are you sure you want to clear all messages?')) {
    chatStore.clearMessages()
  }
}

// Scroll to bottom of messages
const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

// Watch for new messages and scroll to bottom
watch(() => chatStore.getMessageCount, () => {
  nextTick(() => {
    scrollToBottom()
  })
})

// Add initial bot greeting when component mounts
onMounted(() => {
  if (chatStore.getMessageCount === 0) {
    setTimeout(() => {
      chatStore.addMessage("Hello! Welcome to the chat. How are you today?", 'bot')
    }, 1000)
  }
})
</script>
