<template>
    <section class="parents-section">
        <p></p>
        
        <p class="parents-desc"> Agradezco a mis padres por su constante cuidado y sus valiosos consejos </p>
        <h1 class="parents-names"> Federico Chávez</h1>
        <h1 class="parents-names">& </h1>
        <h1 class="parents-names"> Rosy Zuno </h1>
        <img :src=Divider alt="divider" class="divider-img">
        <p class="parents-desc"> A mis padrinos los admiro y quiero, les agradezco aceptarme como una hija más </p>
        <h1 class="parents-names"> Alejandro Zuno </h1>
        <h1 class="parents-names">& </h1>
        <h1 class="parents-names"> Minerva Arreola </h1>
    </section>
</template>
<script setup>
import Divider from '../../assets/images/divider.png';
</script>
<style scoped>

.parents-section{
   background-color: #fcedf2;
   height: fit-content;
   width: 100%;
   padding: 0 0 50px 0;
   margin: 0;
   text-align: center;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
}

.divider-img{
    height: auto;
    width: 75%;
    margin: 0 auto;
    @apply mt-16 mb-2;
}

.parents-names{
    @apply w-full text-5xl md:text-6xl;
    color: #797777;
    text-align: center;
    font-weight: 400;
    font-family: 'Parisienne';
}

.parents-desc{
    @apply text-3xl md:text-5xl px-3 my-12;
    color: black;
    font-family: 'Parisienne';
    text-align: center;
    font-weight: 700;
    width: 100%;
}

</style>