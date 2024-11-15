<template>
    <section class="banner-section">
        <p class="mt-text">MIS XV</p>
        <h1 class="married-text">Marifer</h1>
        <AtomicCountdown />
    </section>
</template>
<script setup>

</script>
<style scoped>
.banner-section{
    
    @apply bg-[url('../../assets/images/Marifer-6.webp')] ; 
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;
    background-position: 30%;
}


.married-text{
    font-family: 'Parisienne', cursive;
    font-weight: 400;
    text-shadow: 1px 1px 6px rgba(0,0,0,0.9), 4px 4px 6px rgba(0,0,0,0.5), 8px 8px 11px rgba(0,0,0,0.75), 22px 22px 20px rgba(0,0,0,0.4), -2px -2px 5px rgba(0,0,0,0.2), 2px 2px 5px rgba(0,0,0,0.2) !important;
    color: white;
    @apply w-full text-8xl md:text-8xl lg:text-9xl pr-8;
    font-style: italic;
    text-align: right;
    margin: 33px 0;
}

.mt-text{
    font-family: 'Montserrat' !important;
    font-weight: 400;
    text-shadow: 1px 1px 6px rgba(0,0,0,0.9), 4px 4px 6px rgba(0,0,0,0.5), 8px 8px 11px rgba(0,0,0,0.75), 22px 22px 20px rgba(0,0,0,0.4), -2px -2px 5px rgba(0,0,0,0.2), 2px 2px 5px rgba(0,0,0,0.2) !important;
    color: white;
    @apply w-full text-6xl md:text-8xl text-right pr-8;
    font-style: italic;
}

</style>