<script setup>
    import { RouterLink, useRoute } from 'vue-router';
    import { ref } from 'vue';

    import InsertTransactionModal from '../Components/Transactions/InsertModal.vue';
    import InsertAccountModal from '../Components/Accounts/InsertModal.vue';

// Route
    const route = useRoute()
</script>

<template>
    <nav class="">
        <RouterLink to="/" >
            <img src="../assets/icons/home.svg" alt="">
        </RouterLink>
        <RouterLink to="/transactions" >
            <img src="../assets/icons/transactions.svg" alt="">
        </RouterLink>
        <RouterLink to="/accounts" >
            <img src="../assets/icons/accounts.svg" alt="">
        </RouterLink>
    </nav>
    <InsertAccountModal @button-clicked="handleModal" />
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