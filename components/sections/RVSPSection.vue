<template>
    <section class="rvsp-section">
        <h1 class="rvsp-title" > 
            Confirmar Asistencia
        </h1>
        <p class="rvsp-thanks">
            ¡Es un día muy especial y que vayas lo hace aún más!
        </p>
        <p class="rvsp-confirm">
            PASE QR
        </p>
        <img :src="qrIcon" alt="whatsapp" class="qr-img">
        <p class="rvsp-support">
           HEMOS RESERVADO:
        </p>
        <article class="invitacion-numbers flex my-2 text-black">
            <span v-if="children === 0" class="adults block w-full text-center">
                <span class="w-full block font-semibold text-4xl">{{ adults }}</span>
                <span class="w-full">Adultos</span>
            </span>
            <template v-else>
                <span class="adults block w-6/12 text-center">
                    <span class="w-full block font-semibold text-4xl">{{ adults }}</span>
                    <span class="w-full">Adultos</span>
                </span>
                <span class="childrens block w-6/12 text-center">
                    <span class="w-full block font-semibold text-4xl">{{ children }}</span>
                    <span class="w-full">Niñ@s</span>
                </span>
            </template>
        </article>
        <p class="rvsp-support mb-2">
           PASE(S) EN TU HONOR
        </p>
        <p class="rvsp-italic">
            Conserva tu pase QR, recuerda que es tu acceso al evento.
        </p>

        <p class="rvsp-support mt-8 font-bold">
            CONFIRMA TU ASISTENCIA
        </p>
        <p class="rvsp-support">
            Favor de confirmar tu asistencia antes del 02 diciembre 2024
        </p>
        <article class="rvsp-btn-section">
            <button class="rvsp-girlfriend-btn" @click="openWhatsApp('Rosy')">
                <img :src="whatsIcon" alt="whatsapp" class="rvsp-img">
               Confirmar con Rosy Zuno
            </button>
            <button class="rvsp-boyfriend-btn" @click="openWhatsApp('Lesly')">
                <img :src="whatsIcon" alt="whatsapp" class="rvsp-img">
                Confirmar con Lesly Zuno
            </button>
        </article>
    </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import whatsIcon from '../../assets/images/whatsapp-icon.webp';
import qrIcon from '../../assets/images/qr.png';

// Referencias reactivas para los valores de adultos y niños
const adults = ref(0);
const children = ref(0);

// Función para obtener parámetros de la URL
const getQueryParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    adults.value = parseInt(urlParams.get('a')) || 0;
    children.value = parseInt(urlParams.get('n')) || 0;
};

const openWhatsApp = (name) => {
    const phoneNumber = name === 'Rosy' ? '3921003930' : '3929285038';
    const message = `Hola ${name}, te confirmo mi asistencia para ${adults.value} adultos y ${children.value} niños...`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
};

// Obtener los parámetros cuando el componente se monta
onMounted(() => {
    getQueryParams();
});
</script>
<style scoped>
.rvsp-section{
   background-color: #fcedf2;
   color: #797777;
   height: fit-content;
   width: 100%;
   font-style: italic;
   margin: 0;
   padding: 50px 7.5%;
}

.rvsp-title{
    text-align: center;
    font-size: 42px;
    margin: 0 0 30px;
    font-family: 'Parisienne';
    @apply w-full text-5xl md:text-6xl;
    font-family: 'Parisienne';
}

.rvsp-thanks{
    text-align: center;
    font-size: 24px;
    margin-top: 0;
    font-weight: 600;
    text-transform: capitalize !important;
}
.rvsp-confirm{
    text-align: center;
    font-size: 22px;
    margin: 20px 0 10px;
}
.rvsp-italic{
    font-family: 'Parisienne';
    font-weight: 600;
    @apply text-2xl text-center;
}

.rvsp-italic{
    font-family: 'Parisienne';
    font-weight: 600;
    @apply text-2xl text-center;
}

.rvsp-support{
    text-align: center;
    font-size: 20px;
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
    @apply w-9/12 md:ml-1 shadow-xl;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center; 
    gap: 7.5px;
    border-radius: 25px;
    background-color: white;
    font-size: 16px;
    font-weight: 600;
    border: none;
    font-weight: 600;
    border: 2px solid #797777;
}

.rvsp-girlfriend-btn:hover, .rvsp-boyfriend-btn:hover{
    cursor: pointer;
}

.rvsp-img{
    height: 25px;
    width: 25px;
}
.qr-img{
    margin: auto;
    height: 75px;
    width: 75px;
    @apply mb-3
}

</style>