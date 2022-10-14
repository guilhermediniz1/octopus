<script setup>
    import { useStoreTransactions } from '@/stores/storeTransactions';
    import { useStoreAccounts } from '../../stores/storeAccounts';
    import Transaction from '@/Components/Transactions/Transaction.vue'

    //Store 
    const storeTransactions = useStoreTransactions()
    const storeAccounts  = useStoreAccounts()
</script>

<template>
    <div class="grid-container">
        <div class="balance">
            <p class="balance__text">Saldo Total</p>
            <h2 class="balance__value">R$ {{ storeAccounts.totalBalance.replace('.', ',') }}</h2>
        </div>
        <div class="container" >
            <strong class="container__title">Últimas Transações</strong>
            <div class="container__content">
                <Transaction
                  v-for="t in storeTransactions.transactions"
                  :key="t.id"
                  :id="t.id"
                  :description="t.description"
                  :date="t.date"
                  :value="t.value"
                  :type="t.type"
                  />
            </div>
        </div>  
    </div>
</template>

<style scoped>
.grid-container {
    height: 100%;

    display: grid;

    grid-template-rows: 1fr 1fr;
}
.balance {
    padding: 136px 0 56px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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