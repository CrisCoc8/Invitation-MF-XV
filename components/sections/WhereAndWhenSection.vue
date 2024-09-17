<template>
    <section  class="location-section">
        <h1 class="location-title"> Donde & Cuando </h1>
        <article v-for="place, index in placesInfo" :key="index" class="locations-list">
            <AtomicPlaceCard 
            :isDetailedVersion="true"
            :title="place.title" 
            :photo="place.photo" 
            :placeName="place.placeName" 
            :date="place.date" 
            :location="place.location"
            :mapBtnMetadata="place.mapBtnMetadata"
            :calendarBtnMetadata="place.calendarBtnMetadata" />
        </article>
    </section>
</template> 
<script setup>
import churchPhoto from '../../assets/images/church.jpg';
import receptionPhoto from '../../assets/images/reception.jpg';

    const placesInfo = [
        {
            title: 'Ceremonia religiosa ',
            photo: churchPhoto,
            placeName: 'Parroquia del Señor de la Misericordia',
            date: '26 de Octubre de 2024 17:00 hrs',
            location: 'Coronel Guerrero #50, Col. Centro, Ocotlán, Jalisco',
            mapBtnMetadata: ['https://maps.app.goo.gl/AXvksriEm7Fv1Gcb9', 'https://maps.apple.com/?address=Coronel%20Guerrero%2052,%20Centro,%2047800%20Ocotl%C3%A1n,%20Jal.,%20Mexico&auid=16115401456969187167&ll=20.345764,-102.773881&lsp=9902&q=Parroquia%20del%20Senor%20de%20la%20Misercordia&t=m'],
            calendarBtnMetadata: {
                "start": "20241026T170000", // AñoMesDíaTHoraMinuto
                "end": "20241026T180000", 
                "title": "Boda Migue y Telma",
                "description": "Ceremonia religiosa en la Parroquia del Señor de la Misericordia.",
                "location": "Coronel Guerrero #50, Col. Centro, Ocotlán, Jalisco"
            },
        },
        {
            title: 'Recepción',
            photo:  receptionPhoto,
            placeName: 'Salón de eventos "El Molino Jardín"',
            date: '26 de Octubre de 2024 19:00 hrs',
            location: 'Av. Universidad #2000 2710, Col. Rio Zula II, Ocotlán, Jalisco',
            mapBtnMetadata: ['https://www.google.com/maps/place/El+Molino+Jard%C3%ADn/@20.3978043,-102.7432885,18.46z/data=!4m6!3m5!1s0x842ed93dadc32523:0xf8c4010af5e84775!8m2!3d20.3981217!4d-102.7417561!16s%2Fg%2F11pfgy51cf?entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D', 'https://maps.apple.com/?auid=1973261491745594002&ll=20.399056,-102.739415&lsp=7618&q=Dropped%20Pin&t=m'],
            calendarBtnMetadata: {
                "start": "20241026T190000", // AñoMesDíaTHoraMinuto
                "end": "20241027T030000", 
                "title": "Fiesta Miguel y Telma",
                "description": "Celebracion en el Salón de eventos 'El Molino Jardín'.",
                "location": "Av. Universidad #2000 2710, Col. Rio Zula II, Ocotlán, Jalisco"
            },
        },
    ]
</script>
<style scoped>
.location-section{
   background-color:#cbb4a1;
   background-color: #f9f9f9;
   height: fit-content;
   width: 100%;
   padding: 50px 0;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
}

.location-title{
    color: black;
    text-align: center;
    @apply w-full text-5xl md:text-6xl;
    margin: 5px 0 10px;
    font-style: italic;
    font-family: 'Great Vibes';
}

.locations-list{
    @apply w-full md:w-8/12 lg:w-5/12 xl:w-4/12;
    margin: 0;
    row-gap: 25px;
    padding-top: 25px;
}

</style>