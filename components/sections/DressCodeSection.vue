<template>
    <section class="dresscode-section">
        <h1 class="dresscode-title"> Dress Code </h1>
        <img :src=WomanDressCode alt="Girl" class="dresscode-img">
        <p class="dresscode-desc"> <strong>Mujeres:  </strong>Vestido Largo </p>
        <img :src=MenDressCode alt="Boy" class="dresscode-img">
        <p class="dresscode-desc"> <strong> Hombres: </strong>Traje y Corbata </p>

        <p class="dresscode-kids">
             Invitación solo para adultos, agradecemos de su compañía en este día tan especial. 
            <br><br> 
            <span style="text-decoration: underline;">¡Niños, dulces sueños!</span> 
        </p>
    </section>
</template>
<script setup>
import WomanDressCode from '../../assets/images/dresscode-women.webp';
import MenDressCode from '../../assets/images/dresscode-men.webp';
</script>
<style scoped>

.dresscode-section{
   background-color: white;
   height: fit-content;
   width: 100%;
   padding: 50px 0;
   margin: 0;
   text-align: center;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
}

.dresscode-img{
    height: auto;
    width: 140px;
    margin: 20px 0;
}

.dresscode-title{
    @apply w-full text-5xl md:text-6xl;
    color: black;
    text-align: center;
    margin: 0 0 25px;
    font-family: 'Great Vibes';
}

.dresscode-desc{
    @apply text-lg md:text-2xl;
    color: black;
    text-align: center;
    width: 70%;
    margin: 20px 15%;
}

.dresscode-kids{
    @apply text-2xl md:text-3xl;
    color: black;
    text-align: center;
    width: 70%;
    font-weight: 600;
    margin: 60px 15% 20px;
    font-family: Montserrat;
    font-style: italic;
}

</style>