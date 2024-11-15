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
import churchPhoto from '../../assets/images/church.webp';
import receptionPhoto from '../../assets/images/reception.webp';

    const placesInfo = [
        {
            title: 'Ceremonia religiosa ',
            photo: churchPhoto,
            placeName: 'Templo de Nuestra Señora del Rosario',
            date: '28 de Diciembre de 2024 18:00 hrs',
            location: 'Calle Panamá S/N El Rosario, Ocotlán, Jalisco',
            mapBtnMetadata: ['https://maps.app.goo.gl/Up3DvmVhP9oVFQXS9', 'https://maps.apple.com/?address=Coronel%20Guerrero%2052,%20Centro,%2047800%20Ocotl%C3%A1n,%20Jal.,%20Mexico&auid=16115401456969187167&ll=20.345764,-102.773881&lsp=9902&q=Parroquia%20del%20Senor%20de%20la%20Misercordia&t=m'],
            calendarBtnMetadata: {
                "start": "20241228T180000", // AñoMesDíaTHoraMinuto
                "end": "20241026T190000", 
                "title": "XV Marifer",
                "description": "Ceremonia religiosa en el Templo de Nuestra Señora del Rosario",
                "location": "Calle Panamá S/N El Rosario, Ocotlán, Jalisco"
            },
        },
        {
            title: 'Recepción',
            photo:  receptionPhoto,
            placeName: 'Salón de Eventos “Los Kristales”',
            date: '26 de Diciembre de 2024 20:00 hrs',
            location: 'Calle Efraín González Luna #102, El Porvenir, Ocotlán, Jalisco',
            mapBtnMetadata: ['https://maps.app.goo.gl/3Y55WFeDkbHq1enK6', 'https://maps.apple.com/?auid=1973261491745594002&ll=20.399056,-102.739415&lsp=7618&q=Dropped%20Pin&t=m'],
            calendarBtnMetadata: {
                "start": "20241228T200000", // AñoMesDíaTHoraMinuto
                "end": "20241229T030000", 
                "title": "XV Marifer",
                "description": "Salón de Eventos “Los Kristales”",
                "location": "Calle Efraín González Luna #102, El Porvenir, Ocotlán, Jalisco"
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
    color: #797777;
    text-align: center;
    @apply w-full text-5xl md:text-6xl;
    margin: 5px 0 10px;
    font-style: italic;
    font-family: 'Parisienne';
}

.locations-list{
    @apply w-full md:w-8/12 lg:w-5/12 xl:w-4/12;
    margin: 0;
    row-gap: 25px;
    padding-top: 25px;
}

</style>