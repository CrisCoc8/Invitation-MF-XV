<template>
    <section class="itinerary-section">
        <h1 class="itinerary-title"> Itinerario </h1>
        <p class="itinerary-desc"> 
            ¡Hora por hora, el detalle de nuestro gran día! 
        </p>
        <img :src=ItineraryPhoto alt="Itinerario" class="itinerary-img">
    </section>
</template>
<script setup>
import ItineraryPhoto from '../../assets/images/itinerary.jpg';

</script>
<style scoped>

.itinerary-section{
   background-color: #f4e3df;
   background-color: #f9f9f9;
   background-color: white;
   height: fit-content;
   width: 100%;
   padding: 50px 0;
}

.itinerary-img{
    display: flex;
    margin: 20px auto;
    width: 90%;
    @apply w-10/12 md:w-9/12 lg:w-7/12 xl:w-6/12 h-96 md:h-min;
}

.itinerary-title{
    color: black;
    text-align: center;
    @apply w-full text-5xl md:text-6xl;
    margin: 0 0 25px;
    font-family: 'Great Vibes';
}

.itinerary-desc{
    color: black;
    text-align: center;
    font-size: 18px;
    width: 70%;
    margin: 45px 15%;
}

</style>