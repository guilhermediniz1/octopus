<script setup>
</script>

<template>
    <div class="container">
        <div class="credit-card__header">
            <img class="credit-card__header__tag" src="../../assets/tags/tag-lightblue.svg" alt="">
            <h1 class="credit-card__header__name">Cartão - {{ $route.params.id }}</h1>
        </div>
        <div class="credit-card__info">
            <strong class="credit-card__info__text">Limite Disponível</strong>
            <p class="credit-card__info__value">R$524,15</p>
        </div>
        <div class="menu">
            <div class="menu__item">
                <p class="menu__item__title">Fatura Mensal</p>
                <p class="menu__item__value">R$ 495,17</p>
            </div>
            <div class="menu__item">
                <p class="menu__item__title">Limite Utilizado</p>
                <p class="menu__item__value">R$562,30</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    height: 100%;

    padding-top: 80px;
    padding-inline: 8px;
    padding-bottom: 120px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.credit-card__header {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 8px;
}

.credit-card__header__tag {
    width: 32px;
    height: 32px;
}

.credit-card__header__name {
    color: var(--pure-white);
    
    font-size: 1.2rem;
}

.credit-card__info {
    font-family: 'DM Sans';
    display: grid;
    place-items: center;
}

.credit-card__info__text {
    font-size: 1rem;
    font-weight: lighter;
}

.credit-card__info__value {
    font-size: 1.5rem;
    font-weight: bold;
}

.menu {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 16px;

    font-family: 'DM Sans';
}

.menu__item {
    padding: 1rem;

    border-radius: 8px;

    font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: var(--light-gray);
}

.menu__item__title {
    font-size: 1.125rem;
    font-weight: bold;
}

.menu__item__value {
    font-size: 1rem;
    font-weight: normal;
}

</style>