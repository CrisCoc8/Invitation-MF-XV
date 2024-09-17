<template>
    <section class="rvsp-section">
        <h1 class="rvsp-title" > 
            Confirmar Asistencia
        </h1>
        <p class="rvsp-thanks">
            ¡GRACIAS POR COMPARTIR ESTE DÍA TAN ESPECIAL CON NOSOTROS!
        </p>
        <p class="rvsp-confirm">
            Favor de confirmar su presencia vía WhatsApp.
        </p>
        <p class="rvsp-support">
            ¡Muchas gracias!
        </p>
        <article class="rvsp-btn-section">
            <button class="rvsp-girlfriend-btn" @click="openWhatsApp('Telma')">
                <img :src="whatsIcon" alt="whatsapp" class="rvsp-img">
               Confirmar con Telma
            </button>
            <button class="rvsp-boyfriend-btn" @click="openWhatsApp('Miguel')">
                <img :src="whatsIcon" alt="whatsapp" class="rvsp-img">
                Confirmar con Miguel
            </button>
        </article>
    </section>
</template>
<script setup>
import whatsIcon from '../../assets/images/whatsapp-icon.svg';

const openWhatsApp = (name) => {
  const phoneNumber = name === 'Telma' ? '3921664396' : '3921321298';
  const message = `Hola ${name}, te confirmo mi asistencia...`; 
  const encodedMessage = encodeURIComponent(message);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
}

</script>
<style scoped>
.rvsp-section{
   background-color: #535250; /* #f2b2a0; **/
   height: fit-content;
   width: 100%;
   font-style: italic;
   margin: 0;
   padding: 50px 7.5%;
}

.rvsp-title{
    color: black;
    text-align: center;
    font-size: 42px;
    margin: 0 0 30px;
    color: white;
    font-family: 'Great Vibes';
    @apply w-full text-5xl md:text-6xl;
    font-family: 'Great Vibes';
}

.rvsp-thanks{
    color: black;
    text-align: center;
    font-size: 24px;
    margin-top: 0;
    font-weight: 600;
    color: white;
    text-transform: capitalize !important;
}
.rvsp-confirm{
    color: black;
    text-align: center;
    font-size: 22px;
    margin: 20px 0 0;
    color: white;
}
.rvsp-support{
    text-align: center;
    font-size: 20px;
    color: white;
}

.rvsp-btn-section{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    row-gap: 15px;
    margin-top: 35px;
    justify-content: center;
}
.rvsp-girlfriend-btn, .rvsp-boyfriend-btn{
    @apply w-full md:w-6/12 md:ml-1 shadow-xl;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center; 
    gap: 15px;
    border-radius: 10px;
    background-color: #17a28a;
    color: white;
    font-size: 16px;
    font-weight: 600;
    border: none;
    font-weight: 400;
}

.rvsp-girlfriend-btn:hover, .rvsp-boyfriend-btn:hover{
    cursor: pointer;
}

.rvsp-img{
    height: 25px;
    width: 25px;
}

</style>