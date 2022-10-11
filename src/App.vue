<script setup>
import { RouterView, useRoute } from 'vue-router'
import { onMounted } from 'vue';
import useStoreTransactions from './stores/storeTransactions'; 
import useStoreAccounts from './stores/storeAccounts';
import useStoreUser from './stores/storeUser';

import NavBar from './Layout/NavBar.vue'
import Header from './Layout/Header.vue'

// Store
const storeTransactions = useStoreTransactions()
const storeAccounts = useStoreAccounts()
const storeUser = useStoreUser()

// Route
const route = useRoute()

// Loading all transactions, accounts
onMounted(() => {
  storeTransactions.init()
  storeAccounts.init()
  storeUser.init()
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
