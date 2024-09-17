<template>
    <section class="gifts-section">
        <h1 class="gifts-title"> Mesa de Regalos </h1>
        <p class="gifts-desc">
            Para nosotros tu presencia es nuestro mejor regalo, pero si deseas hacernos llegar un obsequio, te sugerimos la siguiente opción: 
        </p>
        <img :src=Gift alt="Gift" class="gifts-img">
        <div class="w-full"> </div>
        <section v-for="giftTable in giftTablesInfo" class="gift-card" @click="openGiftTable(giftTable.url)">
            <img :src="giftTable.placePhoto" alt="" class="gift-icon">
            <span class="table-name">{{ giftTable.name  }}</span>
        </section>
        <details class="bank-details">
            <summary style="cursor: pointer;"> Ver Datos Bancarios</summary>
            <article class="mt-2">
                <p>  &#x2022; Nombre: Miguel Angel Hernandez Covarrubias</p>
                <p> &#x2022; Num. de cuenta: 4152 3138 7001 3401 </p>
                <p>  &#x2022; Banco: BBVA </p>
            </article>
        </details>
    </section>
</template>
<script setup>
import Gift from '../../assets/images/Gift.webp';
import LiverpoolImg from '../../assets/images/liverpool.webp';
import AmazonImg from '../../assets/images/amazon.jpg';
const giftTablesInfo = [
    {
        name: 'Liverpool',
        placePhoto: LiverpoolImg,
        url: 'https://mesaderegalos.liverpool.com.mx/milistaderegalos/51505769'
    },
    {
        name: 'Amazon',
        placePhoto: AmazonImg,
        url: 'https://www.amazon.com.mx/wedding/registry/2715F9T4RR5K8'
    },
]

    const openGiftTable = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

</script>
<style scoped>

.gifts-section{
   background-color: white;
   height: fit-content;
   padding: 50px 0;
   text-align: center;
   padding: 0 12.5%;
   justify-content: center;
   display: flex;
   flex-wrap: wrap;
   font-style: italic;
   @apply w-full md:ml-1 my-5;
   gap: 5%;
}

.gifts-img{
    height: auto;
    width: 115px;
    margin: 10px 0;
}

.gifts-title{
    color: black;
    text-align: center;
    @apply w-full text-5xl md:text-6xl;
    margin: 35px 0 25px;
    font-family: 'Great Vibes';
}

.gifts-desc{
    color: black;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    width: 100%;
    @apply w-full;
    margin: 5px 0 5px;
}

.gift-card{
    @apply w-full md:w-8/12 lg:w-6/12 mt-2 shadow-md;
    padding: 5px 10px;
    display: flex;
    column-gap: 20px;
    margin-bottom: 15px;
    background-color: white;
    justify-content: start;
    align-items: center;
    border-radius: 20px;
    border: 1px solid;
    border: 5px solid white;
    cursor: pointer;
}

.gift-card:hover{
    cursor: pointer;
}

.gift-icon{
    width: 40px;
    height: 40px;
    margin-left: 10px; 
}

section.gift-card:nth-child(5) > img:nth-child(1){
    width: 60px;
    margin-left:  0px;
}

.table-name{
    font-weight: 500;
    color: black;
    font-size: 1.25rem;
    font-style: normal;
}

section.gift-card:nth-child(5) > span:nth-child(2){
    margin-left: -10px;
}

.bank-details{
    @apply w-full text-lg md:text-xl;
    margin: 25px 0;
    font-style: normal;
}

.bank-details > article{
    @apply w-full text-base md:text-lg;
    margin: 25px 0;
    font-style: normal;
}

</style>