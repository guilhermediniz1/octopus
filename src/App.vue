<script setup>
import { RouterView, useRoute } from 'vue-router'
import { onBeforeMount } from 'vue';
import useStoreTransactions from './stores/storeTransactions'; 
import useStoreAccounts from './stores/storeAccounts';

import NavBar from './Layout/NavBar.vue'
import Header from './Layout/Header.vue'

// Store
const storeTransactions = useStoreTransactions()
const storeAccounts = useStoreAccounts()

// Route
const route = useRoute()

// Loading all transactions, accounts
onBeforeMount(() => {
  storeTransactions.init()
  storeAccounts.init()
})

</script>

<template>
  <div v-if="route.path != '/authentication' && route.path != '/register'" class="app-content">
    <Header />
    <RouterView />
    <NavBar />
  </div>
  <RouterView v-else />
</template>

<style scoped>
.app-content {
  height: 100vh;
}
</style>
