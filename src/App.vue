<script setup>
import { RouterView } from 'vue-router'
import { onBeforeMount } from 'vue';
import useStoreTransactions from './stores/storeTransactions'; 
import useStoreAccounts from './stores/storeAccounts';

import NavBar from './Layout/NavBar.vue'
import Header from './Layout/Header.vue'

// Store
const storeTransactions = useStoreTransactions()
const storeAccounts = useStoreAccounts()

// Loading all transactions
onBeforeMount(() => {
  storeTransactions.init()
  storeAccounts.init()
})

</script>

<template>
  <div class="app-content">
    <Header />
    <RouterView />
    <NavBar />
  </div>
</template>

<style scoped>
.app-content {
  height: 100vh;
}
</style>
