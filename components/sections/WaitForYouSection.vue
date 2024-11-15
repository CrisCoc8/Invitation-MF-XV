<template>
    <section class="last-section">
        <p class="mtlast-text">Gracias por ser parte de este día especial...</p>
    </section>
</template>
<script setup>

</script>
<style scoped>
.last-section{
    background-image: url(../../assets/images/foto-20.webp);
    /* background-position: 30% 10%; */
    @apply bg-bkgw-pos-xs md:bg-bkgw-pos-md lg:bg-bkgw-pos-lg xl:bg-bkgw-pos-xl;
    background-size: cover;
    background-repeat: no-repeat;
    height: 37.5vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;
}

.mtlast-text{
    font-family: Montserrat;
    font-weight: 400;
    text-shadow: 1px 1px 6px rgba(0,0,0,0.9), 4px 4px 6px rgba(0,0,0,0.5), 8px 8px 11px rgba(0,0,0,0.75), 22px 22px 20px rgba(0,0,0,0.4), -2px -2px 5px rgba(0,0,0,0.4), 2px 2px 5px rgba(0,0,0,0.4) !important;
    color: white;
    @apply w-full text-3xl md:text-8xl lg:text-6xl text-center mb-2;
    font-style: italic;
    font-family: 'Parisienne', cursive;
}

</style>