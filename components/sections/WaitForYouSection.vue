<template>
    <section class="last-section">
        <h1 class="wait-text">¡Los esperamos!</h1>
        <p class="mtlast-text">Miguel & Telma</p>
    </section>
</template>
<script setup>

</script>
<style scoped>
.last-section{
    background-image: url(../../assets/images/foto-24.webp);
    /* background-position: 30% 10%; */
    @apply bg-bkgw-pos-xs md:bg-bkgw-pos-md lg:bg-bkgw-pos-lg xl:bg-bkgw-pos-xl;
    background-size: cover;
    background-repeat: no-repeat;
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;
}

.wait-text{
    font-family: Montserrat;
    font-weight: 600;
    color: white;
    font-size: 1.65rem;
    margin: 0;
    @apply text-2xl md:text-3xl lg:text-4xl mb-1 md:mb-2;
    font-style: italic;
    text-align: center;
    
}

.mtlast-text{
    font-family: Montserrat;
    font-weight: 400;
    text-shadow: 1px 1px 6px rgba(0,0,0,0.9), 4px 4px 6px rgba(0,0,0,0.5), 8px 8px 11px rgba(0,0,0,0.75), 22px 22px 20px rgba(0,0,0,0.4), -2px -2px 5px rgba(0,0,0,0.2), 2px 2px 5px rgba(0,0,0,0.2) !important;
    color: white;
    @apply text-5xl md:text-6xl lg:text-7xl;
    font-style: italic;
    margin: 15px 0 25px;
    font-family: 'Parisienne', cursive;
}

</style>