<template>
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <p class="join-us-text">¡Acompáñanos a nuestra boda!</p>
        <button class="close-btn" @click="closeModal">
          Iniciar
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineEmits, ref } from 'vue';
  
  const showModal = ref(true);
  const emit = defineEmits(['close']); 
  
  const closeModal = () => {
    showModal.value = false;
    emit('close'); 
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    @apply fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center;
  }
  
  .modal-content {
    @apply bg-white py-6 px-4 md:px-8 rounded-lg text-center shadow-lg;
  }
  
  .join-us-text {
    font-family: 'Great Vibes';
    @apply w-full text-4xl md:text-6xl font-medium;
  }
  
  .close-btn {
    @apply mt-6 px-6 py-2 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50;
    background-color: #cb8b7a;
  }
  </style>
  