<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import useStoreUser from '../stores/storeUser'

    const isDropdownOpen = ref(false)

// Store
    const storeUser = useStoreUser()

// Router
    const router = useRouter()

    function logoutUser() {
        storeUser.logoutUser()
        router.push('/authentication')
    }

</script>

<template>
    <header class="header">
        <RouterLink to="/" class="header__link">
            <img class="header__link__logo" src="../assets/images/logo.svg" alt="">
        </RouterLink>          
        <button @click="isDropdownOpen = !isDropdownOpen" class="header__menu-button">
            <img src="../assets/icons/menu.svg" alt="">
            <div v-if="isDropdownOpen" class="dropdown">
                <button @click="logoutUser" class="dropdown__button button button-delete">Sair</button>
            </div>
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

.header__menu-button {
    position: relative;

    border: none;
    background-color: transparent;

    cursor: pointer;
}

.dropdown {
    position: absolute;
    right: 0;
    top: 110%;

    border-radius: 8px;

    overflow: hidden;
}

.dropdown__button {
    padding: 1rem 1.5rem;

}
</style>