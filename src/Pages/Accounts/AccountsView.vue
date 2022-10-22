<script setup>

    import { reactive, ref, watchEffect } from 'vue';
    import { useRoute } from 'vue-router';
    import { useStoreAccounts } from '@/stores/storeAccounts';
    import EditModal from '../../Components/Accounts/EditModal.vue';

// Store
    const storeAccounts = useStoreAccounts()

// Route instance
    const route = useRoute()
    const isEditing = ref(false)

    function updateValues() {
        currentAccount.name = storeAccounts.accounts.filter(el => el.id === route.params.id)[0].name
        currentAccount.balance = storeAccounts.accounts.filter(el => el.id === route.params.id)[0].balance
        currentAccount.tag = storeAccounts.accounts.filter(el => el.id === route.params.id)[0].tag
    }

    const currentAccount = reactive({ name: '', balance: 0, tag: '' })
  
    watchEffect(() => updateValues() ) 


    function tagURL() { 
        return new URL(`../../assets/tags/${currentAccount.tag}.svg`, import.meta.url).href
    }
</script>

<template>
    <div class="container">
        <div class="account__header">
            <img class="account__header__tag" :src="tagURL()" alt="">
            <h1 class="account__header__name">{{ currentAccount.name }}</h1>
        </div>
        <div class="account__info">
            <strong class="account__info__text">Saldo da Conta</strong>
            <p class="account__info__value">R$ {{ currentAccount.balance }}</p>
        </div>
        <div class="menu">
            <button @click="isEditing = !isEditing" class="menu__item">Editar saldo</button>
        </div>
    </div>
    <EditModal @button-clicked="isEditing = !isEditing" v-if="isEditing" />
</template>

<style scoped>
.container {
    grid-area: content;

    height: 100%;

    padding-inline: 1.5rem;
    padding-bottom: 3rem;  

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

    gap: 16px;

    font-family: 'DM Sans';
}

.menu__item {
    padding: 1rem;

    border-radius: 8px;

    font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    font-weight: bold;
    color: var(--white);

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    outline: none;

    background-color: var(--light-gray);

    cursor: pointer;

    transition: all .2s ease;
}

.menu__item:hover {
    opacity: .75;
}
</style>
