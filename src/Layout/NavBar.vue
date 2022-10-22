<script setup>
    import { RouterLink, useRoute, useRouter } from 'vue-router';
    import { ref } from 'vue';

    import { useStoreUser } from '../stores/storeUser';
    import InsertTransactionModal from '../Components/Transactions/InsertModal.vue';
    import InsertAccountModal from '../Components/Accounts/InsertModal.vue';

// Route
    const route = useRoute()
    const router = useRouter()

    function handleModal () {
        isInsertModalOpen.value = !isInsertModalOpen.value
    }

    const isInsertModalOpen = ref(false)
    const isUserDropdownOpen = ref(false)

// Logout user
    const storeUser = useStoreUser()
    function logoutUser() {
        storeUser.logoutUser()
        router.push('/auth')
    }

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
        <button @click="isUserDropdownOpen = !isUserDropdownOpen" class="user-button">
            <img class="user-button__icon" src="../assets/icons/user.svg" alt="">
        </button>
        <div v-if="isUserDropdownOpen" class="user-menu">
          <div class="user-menu__items">
            <button type="button" class="button-delete" @click="logoutUser">Logout</button>
          </div>
        </div>
     </nav>
    <InsertTransactionModal @button-clicked="handleModal" v-if="isInsertModalOpen && route.fullPath == '/' || isInsertModalOpen && route.fullPath == '/transactions'" />
    <InsertAccountModal @button-clicked="handleModal" v-else-if="isInsertModalOpen && route.fullPath == '/accounts'" />
</template>

<style scoped>

nav {
    position: relative;
    height: 56px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background-color: var(--black);
    width: 100%;
}
.main-button {
    transform: translateY(-65%);

    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 50%;

    box-shadow: 0 8px 16px rgba(0, 0, 0, .3);

    outline: none;
    background: linear-gradient(45deg, var(--dark-green), var(--light-green));

    cursor: pointer;
}

.user-button {
    position: relative;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
}

.user-menu {
    position: absolute; 
    top: -1rem;
    right: 1.5rem;
    z-index: 40;

    width: 90%;
    max-width: 20rem;
    height: 10rem;

    transform: translateY(-110%);

    background-color:  rgba(10, 10, 10, .5);
    box-shadow: 0 8px 16px rgba(0, 0, 0, .25);
    backdrop-filter: blur(12px);
    border-radius: 8px;

}

.user-menu__items {
    padding: 1.5rem 2rem;

    display: flex;
    flex-direction: column;

    list-style: none;
}

</style>
