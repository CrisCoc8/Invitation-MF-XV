<template>
    <section class="dresscode-section">
        <h1 class="dresscode-title"> Codigo de Vestimenta </h1>
        <h1 class="dresscode-desc"> Formal </h1>
        <section class="dresscode-images">
            <img :src=WomanDressCode alt="Girl" class="dresscode-img">
            <img :src=MenDressCode alt="Boy" class="dresscode-img">
        </section>
        

        <p class="dresscode-kids">
            *Te pedimos de preferencia
            <br>
            “NO” usar color rosa 
        </p>
    </section>
</template>
<script setup>
import WomanDressCode from '../../assets/images/woman.webp';
import MenDressCode from '../../assets/images/men.webp';
</script>
<style scoped>

.dresscode-section{
   background-color: #fcedf2;
   height: fit-content;
   width: 100%;
   padding: 65px 0 45px;
   margin: 0;
   text-align: center;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
}

.dresscode-images{
    @apply flex justify-center h-60 mt-14;
}

.dresscode-img{
    margin: auto;
    height: 100%;
}

.dresscode-title{
    @apply w-full text-5xl md:text-6xl;
    color: #797777;
    text-align: center;
    margin: 0 0 15px;
    font-family: 'Parisienne';
}

.dresscode-desc{
    @apply text-3xl md:text-4xl uppercase;
    color: #797777;
    text-align: center;
    font-weight: 600;
    width: 70%;
    margin: 0 15%;
}

.dresscode-kids{
    font-family: 'Parisienne' !important;
    @apply text-3xl md:text-4xl;
    color: #797777;
    text-align: center;
    width: 80%;
    font-weight: 600;
    margin: 60px 10% 20px;
    font-style: italic;
}

</style>