<template>
    <AtomicModalComponent @close="handleModalClose" />
    <audio id="audio-player" ref="audioPlayer" :src="audioSrc"></audio>
    <button v-if="!showModal" class="floating-btn" @click="togglePlayback">
      <span v-if="!isPlaying" class="material-icons">play_arrow</span> 
      <span v-else class="material-icons">pause</span>
    </button>
    <SectionsBannerSection />
    <SectionsMessageSection />
    <SectionsParentsAndGodparents />
    <SectionsSection4 />
    <SectionsItinerarySection />
    <SectionsDressCodeSection />
    <SectionsWhereAndWhenSection />
    <SectionsOurPhotosSection />
    <SectionsGiftTableSection />
    <SectionsRVSPSection />
    <SectionsWaitForYouSection />
</template>

<script setup>
import { ref } from 'vue';

const showModal = ref(true); 
const isPlaying = ref(false); 
const audioPlayer = ref(null);
const audioSrc = ref('/audio.mp3'); 

const togglePlayback = () => {
  if (isPlaying.value) {
    audioPlayer.value.pause();
  } else {
    audioPlayer.value.play(); 
  }
  isPlaying.value = !isPlaying.value; 
};

const handleModalClose = () => {
  showModal.value = false; 
  if (audioPlayer.value) {
    audioPlayer.value.play();
    isPlaying.value = true;
  }
};
</script>

<style scoped>

#nuxt-devtools-container{
  display: none;
}

.floating-btn {
  position: fixed;
  top: 0px;
  right: 0px;
  background-color: transparent;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  font-size: 30px;
  border-radius: 50%;
  z-index: 999;
}

.floating-btn:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

#audio-player {
  width: 0 !important;
  height: 0 !important;
  border: none;
  visibility: hidden;
  display: none;
}

.material-icons {
  font-size: 30px;
  color: #f2b2a0;
}
</style>
