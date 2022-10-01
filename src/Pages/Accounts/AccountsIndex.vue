<script setup>

import Account from '../../Components/Account.vue'

</script>

<template>
    <div class="grid-container">
        <div class="title">
            <p class="title__text">Contas</p>
        </div>
        <div class="container" >
            <strong class="container__title">Todas Contas</strong>
            <div class="container__content">
                <Account />
                <Account />
                <Account />
                <Account />
            </div>
        </div>
    </div>
</template>

<style scoped>
.grid-container {
    height: 100%;

    display: grid;
    grid-template-rows: 1fr 2fr;
}

.title {
    padding: 116px 0 36px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: var(--pure-white);
}

.title__text {
    font-family: 'Poppins';
    font-size: 24px;
    font-weight: bolder;
    color: var(--pure-white);
}

.container {
    height: 100%;

    padding: 24px 24px 56px 24px;

    border-radius: 16px 16px 0 0;

    background-color: #D9D9D9;
}

.container__title {
    font-size: 1rem;
    font-weight: bolder;
    color: var(--light-gray);
}
</style>