<script setup>
    import { RouterLink } from 'vue-router'
</script>
<template>
    <header class="header">
        <RouterLink to="/">
            <img class="logo" src="../assets/images/logo.svg" alt="">
        </RouterLink>
    </header>
</template>

<style scoṕed>
.header {
    display: flex;
    align-items: center;

    padding: 1.5rem;
}

.logo {
    width: 8rem;
}
</style>