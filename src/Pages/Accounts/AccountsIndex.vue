<script setup>
    import Account from '../../Components/Accounts/Account.vue'
    import { useStoreAccounts } from '@/stores/storeAccounts';

// Store
    const storeAccounts = useStoreAccounts()
</script>

<template>
    <div class="grid-container">
        <div class="container" >
            <strong class="container__title">Todas Contas</strong>
            <div v-if="storeAccounts.accountsLoaded" class="container__content">
                <Account 
                    v-for="a in storeAccounts.accounts"
                    :key="a.id"
                    :id="a.id"
                    :name="a.name"
                    :balance="a.balance"
                    :tag="a.tag"
                />
            </div>
            <div v-else class="loading-container">
                <div class="loading">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.grid-container {
    height: 100%;

    display: grid;
    grid-template-rows: 1fr;
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