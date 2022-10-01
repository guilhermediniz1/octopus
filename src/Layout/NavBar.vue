<script setup>
    import { RouterLink } from 'vue-router';
    import { ref } from 'vue';

    import InsertModal from '../Components/InsertModal.vue';


    function handleModal () {
        isInsertModalOpen.value = !isInsertModalOpen.value
    }

    const isInsertModalOpen = ref(false)

</script>

<template>
    <nav class="">
        <RouterLink to="/" >
            <img src="../assets/icons/home.svg" alt="">
        </RouterLink>
        <RouterLink to="/transactions" >
            <img src="../assets/icons/transactions.svg" alt="">
        </RouterLink>
        <button @click="handleModal" class="main-button">
            <img src="../assets/icons/plus.svg" alt="">
        </button>
        <RouterLink to="/accounts" >
            <img src="../assets/icons/accounts.svg" alt="">
        </RouterLink>
        <RouterLink to="/credit-cards" >
            <img src="../assets/icons/credit-card.svg" alt="">
        </RouterLink>
    </nav>
    <InsertModal @button-clicked="handleModal" v-if="isInsertModalOpen" />
</template>

<style scoped>

nav {
    position: fixed;
    bottom: 0;
    left: 0;

    height: 56px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background-color: var(--black);
    width: 100%;
}

.main-button {
    transform: translateY(-50%);

    width: 48px;
    height: 48px;

    border: none;
    border-radius: 50%;

    outline: none;
    background-color: var(--black);

    cursor: pointer;
}

</style>