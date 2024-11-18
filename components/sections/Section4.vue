<template>
    <section class="section-4">
        <p class="message-text">
            ¡Acompañanos!
            <br>
            <br>
           28 de Diciembre del 2024
        </p>
    </section>
</template>
<script setup>

</script>
<style scoped>
.section-4{
    background-image: url(../../assets/images/Marifer-13.webp);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 60%;
    
    @apply overflow-hidden;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    overflow: hidden;
}

.message-text{
    font-family: 'Montserrat' !important;
    font-weight: 400;
    text-shadow: 1px 1px 6px rgba(0,0,0,0.5), 4px 4px 6px rgba(0,0,0,0.5), 8px 8px 11px rgba(0,0,0,0.75), 22px 22px 20px rgba(0,0,0,0.4), -2px -2px 5px rgba(0,0,0,0.3), 2px 2px 5px rgba(0,0,0,0.3) !important;
    color: white;
    @apply text-3xl md:text-4xl lg:text-5xl;
    font-style: italic;
    text-align: center;
    line-height: normal;
    word-wrap: break-word;
    padding: 0 3% 7.5%;
    margin: 0;
}

</style>