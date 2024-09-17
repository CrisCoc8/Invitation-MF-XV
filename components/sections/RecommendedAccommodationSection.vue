<template>
    <section class="accomodations-section">
        <h1 class="accomodations-title"> Hospedaje Recomendado </h1>
        <p class="accomodations-desc"> 
            Te dejamos éstas opciónes para que tengas una estadía placentera 
        </p>
        <article v-for="acommodation, index in acommodations" :key="index" class="accomodations-list">
            <AtomicPlaceCard 
            :isDetailedVersion="false"
            :title="acommodation.title" 
            :photo="acommodation.photo" 
            :placeName="acommodation.placeName" 
            :date="acommodation.date" 
            :location="acommodation.location"
            :mapBtnMetadata="acommodation.mapBtnMetadata"
            :calendarBtnMetadata="acommodation.calendarBtnMetadata" />
        </article>
    </section>
</template>
<script setup>

import Hotel1 from '../../assets/images/Hotel1.jpg';
import Hotel2 from '../../assets/images/Hotel2.jpg';

const acommodations = [
        {
            title: '',
            photo: Hotel1,
            placeName: 'Hotel Pabela',
            date: '',
            location: 'Coronel Guerrero #50, Col. Centro, Ocotlán, Jalisco',
            mapBtnMetadata: ['https://maps.app.goo.gl/zbMceKVykFdsCfHeA', 'https://maps.apple.com/?address=Ni%C3%B1os%20H%C3%A9roes%20152,%20Centro,%2047800%20Ocotl%C3%A1n,%20Jal.,%20Mexico&auid=14878617503472791920&ll=20.346492,-102.776597&lsp=9902&q=Hotel%20Pabela&t=m'],
            calendarBtnMetadata: {},
        },
        {
            title: '',
            photo:  Hotel2,
            placeName: 'Hotel Acuario',
            date: '',
            location: 'Av. Universidad #2000 2710, Col. Rio Zula II, Ocotlán, Jalisco',
            mapBtnMetadata: ['https://maps.app.goo.gl/NW4gUzykpL4MwjvNA', 'https://maps.apple.com/?address=Moctezuma%2085,%20Centro,%2047800%20Ocotl%C3%A1n,%20Jal.,%20Mexico&auid=14919084476032398773&ll=20.346876,-102.776082&lsp=9902&q=Hotel%20Acuario&t=m'],
            calendarBtnMetadata: {},
        },
    ]

</script>
<style scoped>

.accomodations-section{
   background-color: #f4e3df;
   background-color: #f9f9f9;
   height: fit-content;
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   padding: 50px 0;
}

.accomodations-list{
    @apply w-full md:w-8/12 lg:w-5/12 xl:w-4/12;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
}

.accomodations-title{
    color: black;
    text-align: center;
    @apply w-full text-5xl md:text-6xl;
    margin: 0 0 35px;
    font-family: 'Great Vibes';
}

.accomodations-desc{
    color: black;
    @apply text-left md:text-center;
    font-size: 18px;
    width: 70%;
    margin: 20px 15% 0px;
}

</style>