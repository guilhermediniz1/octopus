<script setup>
import { RouterView, useRoute } from 'vue-router'
import { onMounted } from 'vue';
import { useStoreUser } from '@/stores/storeUser';

import NavBar from './Layout/NavBar.vue'
import Header from './Layout/Header.vue'

// Store
const storeUser = useStoreUser()

// Route
const route = useRoute()

// Loading all transactions, accounts
onMounted(() => {
  storeUser.init()
})

</script>

<template>
  <div class="app-content">
    <Header v-if="route.path != '/auth' && route.path != '/auth/register'"/>
    <RouterView />
    <NavBar v-if="route.path != '/auth' && route.path != '/auth/register'" />
  </div>
</template>

<style scoped>
.app-content {
  height: 100%;
}
</style>
