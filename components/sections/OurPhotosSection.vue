<template>
    <div class="ourphotos-section">
      <h2 class="ourphotos-title">Mis Fotos</h2>
      <div class="grid gap-4">
        <div
          v-for="(image, index) in images"
          :key="index"
          :class="`photo-frame ${getGridClasses(index)} ${getRotation(index)}`"
          @click="openModal(image)"
        >
          <img :src="image" alt="Collage Image" class="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
  
      <!-- Modal -->
      <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 modal">
        <div class="relative photo-frame p-0">
          <!-- Close button -->
          <button @click="closeModal" class="absolute top-1 right-3 text-white text-2xl font-normal">X</button>
          <!-- Image -->
          <img :src="currentImage" alt="Modal Image" class="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import OurPhoto1 from '../../assets/images/OurPhoto33.webp';
  import OurPhoto2 from '../../assets/images/OurPhoto68.webp';
  import OurPhoto3 from '../../assets/images/OurPhoto41.webp';
  import OurPhoto4 from '../../assets/images/OurPhoto77.webp';
  import OurPhoto5 from '../../assets/images/OurPhoto29.webp';
  
  // Definimos las rutas de las imágenes
  const images = ref([OurPhoto1, OurPhoto2, OurPhoto3, OurPhoto4, OurPhoto5]);
  
  // Variables y funciones para el modal
  const isModalOpen = ref(false);
  const currentImage = ref(null);
  
  function openModal(image) {
    currentImage.value = image;
    isModalOpen.value = true;
  }
  
  function closeModal() {
    isModalOpen.value = false;
  }
  
  // Función para aplicar clases de rotación
  function getRotation(index) {
    const rotations = ['-rotate-6', 'rotate-3', '-rotate-3', 'rotate-6', '-rotate-12'];
    return rotations[index % rotations.length];
  }
  
  // Función para aplicar el diseño en escalones
  function getGridClasses(index) {
    if (index === 4) return 'col-span-2 justify-self-center mt-3'; // Imagen central en la última fila
    return 'col-span-1';
  }
  </script>
  
  <style scoped>
  .ourphotos-section {
    background-color: #fcedf2;
    padding: 50px 0%;
    text-align: center;
    margin: auto;
  }
  
  .ourphotos-title {
    color: #797777;
    text-align: center;
    @apply w-full text-5xl md:text-6xl;
    margin: 0 0 55px;
    font-family: 'Parisienne';
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 40px;
    column-gap: 12.5px;
    @apply pl-4;
  }
  
  /* Marco de borde blanco para el efecto de foto instantánea */
  .photo-frame {
    background-color: white;
    padding: 4px 4px 16px 4px; /* Borde blanco */
    border-radius: 0px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); /* Sombra para resaltar el borde */
    width: 91%; /* Ajuste de tamaño */
    height: 265px;
    cursor: pointer;
  }
  
  .photo-frame:last-child {
    width: 50%;
  }

  .photo-frame img {
    border-radius: 0%;
  }

  /* Estilos para el modal */
  .fixed {
    backdrop-filter: blur(5px); /* Fondo desenfocado */
  }
  
  .modal .photo-frame img {
    border-radius: 0%;
  }

  .modal .photo-frame {
    height: 55%;
    width: 75%;
    padding: 8px 8px 30px 8px; /* Borde blanco */
    cursor: default; 
  }
  
  button {
    cursor: pointer;
  }
  </style>
  