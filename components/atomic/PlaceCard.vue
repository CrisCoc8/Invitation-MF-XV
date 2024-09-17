<template>
    <section class="place-card">
        <h1 v-if="isDetailedVersion" class="place-title">{{ title }}</h1>
        <img :src=photo alt="" class="place-img">
        <h3 class="place-name">{{ placeName }}</h3>
        <p v-if="isDetailedVersion" class="place-date">
            <strong> &#x2022; Cuándo:</strong>
            {{ date }}
        </p>
        <p class="place-location">
            <strong> &#x2022; Dirección:</strong>
            {{ location }}
        </p>
        <article class="place-btn-section">
            <button class="map-btn"  @click="openMaps(mapBtnMetadata)">
                Ver en el mapa
            </button>
            <button v-if="isDetailedVersion" class="calendar-btn" @click="addToCalendar(calendarBtnMetadata)">
                Agregar al calendario
            </button>
        </article>
    </section>
</template>
<script setup>
import { ref } from 'vue';
defineProps({
    isDetailedVersion: {
        type: Boolean,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    placeName: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    mapBtnMetadata: {
        type: Array,
        required: true
    },
    calendarBtnMetadata: {
        type: Object,
        required: true
    },
}) 

    const createGoogleCalendarUrl = (event) => {
        const baseUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
        const text = `&text=${encodeURIComponent(event.title)}`;
        const dates = `&dates=${event.start}/${event.end}`; // Formato: YYYYMMDDTHHmmss/YYYYMMDDTHHmmss en UTC
        const details = `&details=${encodeURIComponent(event.description)}`;
        const location = `&location=${encodeURIComponent(event.location)}`;

        return `${baseUrl}${text}${dates}${details}${location}`;
    }

    const createAppleCalendarFile = (event) => {
        const data = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'BEGIN:VEVENT',
            `SUMMARY:${event.title}`,
            `DESCRIPTION:${event.description}`,
            `DTSTART:${event.start}`, // Formato: YYYYMMDDTHHmmss
            `DTEND:${event.end}`,
            `LOCATION:${event.location}`,
            'END:VEVENT',
            'END:VCALENDAR'
        ].join('\n');

        const blob = new Blob([data], { type: 'text/calendar;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        return url;
    }

    const addToCalendar = (event) => {
        const userAgent = navigator.userAgent.toLowerCase();
        const isAppleDevice = /mac|ipad|iphone|ipod/.test(userAgent);

        if (isAppleDevice) {
            const appleCalendarUrl = createAppleCalendarFile(event);
            const link = document.createElement('a');
            link.href = appleCalendarUrl;
            link.download = `${event.title}.ics`;
            link.click();
        } else {
            const googleCalendarUrl = createGoogleCalendarUrl(event);
            window.open(googleCalendarUrl, '_blank');
        }
    };
    

    const openMaps = (mapUrls) => {
        const userAgent = navigator.userAgent.toLowerCase();
    const isAppleDevice = /mac|ipad|iphone|ipod/.test(userAgent);
    const url = isAppleDevice ? mapUrls[0] : mapUrls[0]; // 0: Google Maps (Android/PC), 1: Apple Maps (iOS/macOS)

    window.open(url, '_blank');
    }
</script>
<style scoped>
.place-card{
    width: 100%;
    padding: 0 15%;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;

}
.place-title{
    @apply w-full text-2xl md:text-3xl;
    margin-bottom: 25px;
    font-weight: 600;
}
.place-img{
    margin: 0px 0px 25px;
    width: 100%;
    height: 39vh;
    border-radius: 10px;
    @apply shadow-md;
}
.place-location, .place-date{
    @apply w-full text-base md:text-xl;
    font-size: 16px;
    margin-top: 0;
}
.place-name{
    @apply text-lg md:text-2xl;
    margin-bottom: 15px;
}
.place-btn-section{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 10px;
    margin-top: 25px;
}
.map-btn, .calendar-btn{
    @apply shadow-md w-full md:w-11/12 lg:w-10/12 text-base;
    height: 48px;
    border-radius: 8px;
    background-color: #cb8b7a;
    color: white;
    font-weight: 600;
    border: none;
}

.map-btn:hover, .calendar-btn:hover{
    cursor: pointer;
}
</style>