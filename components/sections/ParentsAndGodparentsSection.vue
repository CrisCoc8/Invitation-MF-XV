

<template>
    <section class="pag-section">
        <h1 class="pag-title"> Nuestros Padres  </h1>
        <section class="parents-section">
            <h1 class="parents-column">
                Alejandro 
                <br>
                &  
                <br>
                Beatriz 
            </h1>
            <h1 class="parents-column">
                Miguel Ángel 
                <br>
                &
                <br>
                María de Lourdes
            </h1>
        </section>
        <h1 class="pag-title"> & Padrinos </h1>
        <section v-for="godparent in godparentsData" class="godparents-section">
            <h1 class="godparents-name">
                {{ godparent.name }}
            </h1>
            <p class="godparents-role">
                {{ godparent.role }}
            </p>
        </section>
    </section>
</template>
<script setup>
const godparentsData = [
    {
        name: 'Raúl & Penelope ',
        role: 'Padrinos de Anillos'
    },
    {
        name: 'Víctor & Ana',
        role: 'Padrinos de arras '
    },
    {
        name: 'Alejandro & Sonia',
        role: 'Padrinos de Lazo'
    },
    {
        name: 'Jesús y Karina',
        role: 'Parimos de cojín'
    },
    {
        name: 'Jessica Noemí',
        role: 'Madrina de Biblia y Rosario'
    },
    {
        name: 'Gabriela',
        role: 'Madrina de ramo'
    },
    {
        name: 'Víctor Carrillo ',
        role: 'Padrino de brindis'
    }
]
</script>
<style scoped>

.pag-section{
    background-color: #f9f9f9;
   height: fit-content;
   width: 80%;
   padding: 50px 10%;
   margin: 0;
   text-align: center;
   font-style: italic;
}

.parents-section{
    height: auto;
    width: 100%;
    margin: 50px 0 50px;
    display: flex;
    justify-content: center;

}

.parents-column{
    height: auto;
    width: 60%;
    font-family: Montserrat;
    font-weight: 400;
    text-shadow: 1px 1px 6px rgb(255, 255, 255), 4px 4px 6px rgb(255, 255, 255), 8px 8px 11px rgb(255, 255, 255), 22px 22px 20px rgb(255, 255, 255), -2px -2px 5px rgb(255, 255, 255), 2px 2px 5px rgb(255, 255, 255) !important;
    color: black;
    font-size: 1.5rem;
    font-style: italic;
    text-align: center;
    line-height: normal;
    word-wrap: break-word;
    padding: 0;
    margin: 0;
}

h1.parents-column:nth-child(1){
    width: 40%;
}

.godparents-section{
    height: auto;
    width: 100%;
    margin: 50px 0 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

}

.godparents-name{
    height: auto;
    width: 100%;
    font-family: Montserrat;
    font-weight: 400;
    text-shadow: 1px 1px 6px rgb(255, 255, 255), 4px 4px 6px rgb(255, 255, 255), 8px 8px 11px rgb(255, 255, 255), 22px 22px 20px rgb(255, 255, 255), -2px -2px 5px rgb(255, 255, 255), 2px 2px 5px rgb(255, 255, 255) !important;
    color: black;
    font-size: 1.35rem;
    font-style: italic;
    text-align: center;
    line-height: normal;
    word-wrap: break-word;
    padding: 0;
    margin: 0;
}
.godparents-role{
    height: auto;
    width: 100%;
    font-family: Montserrat;
    font-weight: 600;
    text-shadow: 1px 1px 6px rgb(255, 255, 255), 4px 4px 6px rgb(255, 255, 255), 8px 8px 11px rgb(255, 255, 255), 22px 22px 20px rgb(255, 255, 255), -2px -2px 5px rgb(255, 255, 255), 2px 2px 5px rgb(255, 255, 255) !important;
    color: black;
    font-size: 1.1rem;
    font-style: italic;
    text-align: center;
    line-height: normal;
    word-wrap: break-word;
    padding: 0;
    margin: 0;
}

.pag-title{
    color: black;
    text-align: center;
    font-size: 36px;
    margin: 0 0 25px;
}

</style>