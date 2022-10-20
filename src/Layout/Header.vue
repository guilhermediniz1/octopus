<script setup>
    import { RouterLink, useRoute } from 'vue-router'

// Route
    const route = useRoute()

</script>
<template>
    <header class="header">
        <template v-if="route.path === '/'">
            <RouterLink to="/">
                <img class="logo" src="../assets/images/logo.svg" alt="">
            </RouterLink>
        </template>
        <template v-else>
            <p class="page-title">{{ route.path === '/accounts' ? 'Contas' : 'Transações' }}</p>
        </template>
    </header>
</template>

<style scoṕed>
.header {
    width: 100%;

    display: flex;
    align-items: center;

    padding: 1.5rem;
}

.logo {
    width: 8rem;
}

.page-title {
    font-weight: bold;
    text-align: center;
}
</style>