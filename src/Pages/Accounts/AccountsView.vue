<script setup>
</script>

<template>
    <div class="container">
        <div class="account__header">
            <img class="account__header__tag" src="../../assets/tags/tag-lightblue.svg" alt="">
            <h1 class="account__header__name">Conta{{ $route.params.id }}</h1>
        </div>
        <div class="account__info">
            <strong class="account__info__text">Saldo da Conta</strong>
            <p class="account__info__value">R$5024,30</p>
        </div>
        <div class="menu">
            <div class="menu__item">Editar saldo</div>
            <div class="menu__item">Cartões</div>
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

.account__header {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 8px;
}

.account__header__tag {
    width: 24px;
    height: 24px;
}

.account__header__name {
    color: var(--pure-white);
    
    font-size: 1.2rem;
}

.account__info {
    font-family: 'DM Sans';
    display: grid;
    place-items: center;
}

.account__info__text {
    font-size: .8rem;
    font-weight: lighter;
}

.account__info__value {
    font-size: 2rem;
    font-weight: bold;
}

.menu {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 16px;

    font-family: 'DM Sans';
}

.menu__item {
    padding: 1rem;

    border-radius: 8px;

    font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--light-gray);
}
</style>