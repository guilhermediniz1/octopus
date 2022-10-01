<script setup>
import { RouterView } from 'vue-router'
import { onBeforeMount } from 'vue';
import useStoreTransactions from './stores/storeTransactions'; 

import NavBar from './Layout/NavBar.vue'
import Header from './Layout/Header.vue'

// Store
const storeTransactions = useStoreTransactions()

// Loading all transactions
onBeforeMount(() => {
  storeTransactions.init()
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
