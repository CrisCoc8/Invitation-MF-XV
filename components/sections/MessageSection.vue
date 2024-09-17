<template>
    <section class="message-section">
        <p class="message-text">
            Cuando te das cuenta de que quieres pasar el resto de tu vida con alguien, deseas que el resto de tu vida empiece lo antes posible.
        </p>
    </section>
</template>
<script setup>

</script>
<style scoped>
.message-section{
    background-image: url(../../assets/images/messageSectionPhoto.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 15%;
    
    @apply bg-bkg-top-xs md:bg-top  lg:bg-center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.message-text{
    font-family: Montserrat;
    font-weight: 400;
    text-shadow: 1px 1px 6px rgba(0,0,0,0.1), 4px 4px 6px rgba(0,0,0,0.5), 8px 8px 11px rgba(0,0,0,0.75), 22px 22px 20px rgba(0,0,0,0.4), -2px -2px 5px rgba(0,0,0,0.2), 2px 2px 5px rgba(0,0,0,0.2) !important;
    color: white;
    @apply text-2xl md:text-4xl lg:text-5xl;
    font-style: italic;
    text-align: center;
    line-height: normal;
    word-wrap: break-word;
    padding: 0 10%;
    margin: 0;
}

</style>