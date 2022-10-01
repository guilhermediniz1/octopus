<script setup></script>

<template>
    <header class="header">
        <RouterLink to="/" class="header__link">
            <img class="header__link__logo" src="../assets/images/logo.svg" alt="">
        </RouterLink>          
        <button class="header__menu">
            <img src="../assets/icons/menu.svg" alt="">
        </button>
    </header>
</template>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 80px;

    padding-inline: 16px;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header__link{
    width: 120px;
}

.header__link__logo {
    width: 100%;
}

.header__menu {
    border: none;
    background-color: transparent;
}
</style>