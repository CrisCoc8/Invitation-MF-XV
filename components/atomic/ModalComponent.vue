<template>
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <p class="join-us-text">Quiero festejar mis XV’s bailando y gozando con la gente que más quiero, este 28 de Diciembre del 2024 <br> ¿Vienes?</p>
        <button class="close-btn" @click="closeModal">
          ACEPTAR
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
    @apply fixed inset-0 px-4 bg-black bg-opacity-85 flex items-center justify-center;
  }
  
  .modal-content {
    @apply  rounded-lg text-center shadow-lg;
    padding: 20px;
    border-radius: 20px;
    background-color: #f6eef0;
    box-shadow: inset 5px 5px 5px 0px rgba(0, 0, 0, 0.15), /* Sombra interna */
    0px 5px 15px rgba(0, 0, 0, 0.1); /* Sombra externa */
    border: none;
  }
  
  .join-us-text {
    font-family: 'Great Vibes';
    @apply w-full text-3xl md:text-6xl font-medium;
    color: #797777;
    font-weight: 700;
    text-wrap: balance;
  }
  
  .close-btn {
    @apply mt-6 px-6 py-2 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 uppercase;
    background-color: #f3ced9;
    color: #797777;
    font-family: 'Montserrat' !important;
    font-style: italic;
    border-radius: 25px;
  }
  </style>
  