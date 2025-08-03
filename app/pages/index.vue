<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden px-4 py-8">
    <!-- Background decoration -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      <div class="absolute top-0 right-0 w-48 h-48 md:w-72 md:h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      <div class="absolute bottom-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
    </div>
    
    <div class="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-12 max-w-sm md:max-w-lg w-full border border-white/20">
      <!-- Header -->
      <div class="text-center mb-8 md:mb-12">
        <div class="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-xl md:rounded-2xl mx-auto mb-4 md:mb-6 flex items-center justify-center shadow-lg">
          <svg class="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
        </div>
        <h1 class="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-3 md:mb-4">
          ChatBot
        </h1>
        <p class="text-purple-100 text-base md:text-xl leading-relaxed px-2">
          Experience seamless conversations with our intelligent chat platform
        </p>
      </div>
      
      <!-- Features -->
      <div class="space-y-4 md:space-y-6 mb-8 md:mb-10">
        <div class="bg-white/5 backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/10">
          <h2 class="font-semibold text-white mb-3 md:mb-4 text-base md:text-lg">What makes us special:</h2>
          <div class="grid gap-2 md:gap-3">
            <div class="flex items-center text-purple-100 text-sm md:text-base">
              <div class="w-2 h-2 bg-indigo-400 rounded-full mr-3 flex-shrink-0"></div>
              <span>Real-time messaging experience</span>
            </div>
            <div class="flex items-center text-purple-100 text-sm md:text-base">
              <div class="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
              <span>Intelligent bot responses</span>
            </div>
            <div class="flex items-center text-purple-100 text-sm md:text-base">
              <div class="w-2 h-2 bg-pink-400 rounded-full mr-3 flex-shrink-0"></div>
              <span>Persistent conversation history</span>
            </div>
            <div class="flex items-center text-purple-100 text-sm md:text-base">
              <div class="w-2 h-2 bg-indigo-400 rounded-full mr-3 flex-shrink-0"></div>
              <span>Modern, responsive design</span>
            </div>
          </div>
        </div>
        
        <NuxtLink 
          to="/chat" 
          class="group w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl md:rounded-2xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] block text-center shadow-lg hover:shadow-xl border border-white/20"
        >
          <span class="flex items-center justify-center text-sm md:text-base">
            Start Chatting
            <svg class="ml-2 w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// Set page title
useHead({
  title: 'Welcome - ChatBot'
})
</script>
