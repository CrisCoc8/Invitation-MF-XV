<template>
    <section class="ourphotos-section">
        <h1 class="ourphotos-title"> Nuestras fotos! </h1>
        <img :src=OurPhoto1 alt="ourphoto" class="ourphotos-img">
        <img :src=OurPhoto2 alt="ourphoto" class="ourphotos-img">
        <img :src=OurPhoto3 alt="ourphoto" class="ourphotos-img">
        <img :src=OurPhoto4 alt="ourphoto" class="ourphotos-img">
        <img :src=OurPhoto5 alt="ourphoto" class="ourphotos-img">
        <img :src=OurPhoto6 alt="ourphoto" class="ourphotos-img">
    </section>
</template>
<script setup>
import  OurPhoto1 from '../../assets/images/OurPhoto81.jpg';
import  OurPhoto2 from '../../assets/images/OurPhoto85.jpg';
import  OurPhoto3 from '../../assets/images/OurPhoto5.jpg';
import  OurPhoto4 from '../../assets/images/OurPhoto22.jpg';
import  OurPhoto5 from '../../assets/images/OurPhoto30.jpg';
import  OurPhoto6 from '../../assets/images/OurPhoto51.jpg';
</script>
<style scoped>

.ourphotos-section{
    background-color: #f9f9f9;
   height: fit-content;
   width: 100%;
   padding: 50px 15%;
   margin: 0;
   text-align: center;
}

.ourphotos-img{
    height: auto;
    width: 100%;
    margin: 20px 0;
}

.ourphotos-title{
    color: black;
    text-align: center;
    @apply w-full text-5xl md:text-6xl;
    margin: 0 0 35px;
    font-family: 'Great Vibes';
}

</style>