<template>
    <section class="gifts-section">
        <h1 class="gifts-title"> Opciones de regalo </h1>
        <p class="gifts-desc">
            Lo más importante es tu presencia, pero si deseas hacerme un regalo aquí tienes mi sugerencia.
            <br>
            ¡Gracias!
        </p>
        <h1 class="subtitle-text w-full mt-8">
            LLuvia de Sobres
        </h1>
        <img :src=Gift alt="Gift" class="gifts-img">
        <p class="mb-5 w-full uppercase text-md px-3 gift-msg">
            Es un presente en efectivo colocado dentro de un sobre y lo podrás depositar en una caja de madera que encontraras en la entrada
        </p>
        <h1 class="subtitle-text mt-8 mb-3">
            Mesa de Regalos
        </h1>
        <section v-for="giftTable in giftTablesInfo" class="gift-card" @click="openGiftTable(giftTable.url)">
            <img :src="giftTable.placePhoto" alt="" class="gift-icon">
        </section>
        
    </section>
</template>
<script setup>
import Gift from '../../assets/images/gift-1.webp';
import LiverpoolImg from '../../assets/images/liverpool.webp';
import AmazonImg from '../../assets/images/amazon.webp';
const giftTablesInfo = [
    {
        name: 'Amazon',
        placePhoto: AmazonImg,
        url: 'https://www.amazon.com.mx/registries/gl/guest-view/Q970ZEP9ZLBK'
    },
    {
        name: 'Liverpool',
        placePhoto: LiverpoolImg,
        url: 'https://mesaderegalos.liverpool.com.mx/milistaderegalos/51566158'
    }
]

    const openGiftTable = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

</script>
<style scoped>

.gifts-section{
   background-color: white;
   height: fit-content;
   padding: 45px 10% 45px;
   text-align: center;
   justify-content: center;
   display: flex;
   flex-wrap: wrap;
   font-style: italic;
   @apply w-full md:ml-1 my-5;
   gap: 5%;
   color: #797777;
   font-family: 'Parisienne';
}

.gifts-img{
    height: auto;
    width: 100px;
    margin: 15px 0 10px 0;
}

.gift-msg{
    font-family: 'Montserrat';

}

.gifts-title{
    color: #797777;
    text-align: center;
    @apply w-full text-5xl md:text-6xl;
    margin: 0 0 25px;
    font-family: 'Parisienne';
}

.gifts-desc{
    color: #797777;
    text-align: center;
    font-size: 22px;
    font-style: normal;
    width: 100%;
    @apply w-full;
    margin: 5px 0 5px;
    font-family: 'Parisienne';
    font-weight: 600;
}

.subtitle-text {
    font-family: 'Parisienne';
    @apply w-full text-3xl md:text-4xl;
    font-weight: 600;
}

.gift-card{
    width: 199px;
    height: 63px;
    display: flex;
    column-gap: 20px;
    margin-bottom: 15px;
    justify-content: start;
    align-items: center;
    cursor: pointer;
    display: block;
}

.gift-card:hover{
    cursor: pointer;
}

.gift-icon{
    width: 100%;
    height: 58px;
}

section.gift-card:nth-child(5) > img:nth-child(1){
    width: 60px;
    margin-left:  0px;
}

.table-name{
    font-weight: 500;
    color: #797777;
    font-size: 1.25rem;
    font-style: normal;
}

section.gift-card:nth-child(5) > span:nth-child(2){
    margin-left: -10px;
}


</style>