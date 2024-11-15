<template>
    <section class="message-section">
        <p class="message-text">
            Con la bendición de Dios y el amor de toda mi familia, me siento muy feliz de llegar a este momento de mi vida.
            <br>
            <br>
            Quisiera con mucha alegría compartir el comienzo de esta bella etapa con todos ustedes
        </p>
    </section>
</template>
<script setup>

</script>
<style scoped>
.message-section{
    background-image: url(../../assets/images/Marifer-62.webp);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    
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
    @apply text-2xl md:text-4xl lg:text-5xl;
    font-style: italic;
    text-align: center;
    line-height: normal;
    word-wrap: break-word;
    padding: 0 5% 12%;
    margin: 0;
}

</style>