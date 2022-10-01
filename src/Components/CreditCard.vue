<script setup>

import { RouterLink } from 'vue-router';

</script>

<template>
    <RouterLink to="/credit-cards/1" class="card">
        <div class="card__tag__container">
            <img class="card__tag" src="../assets/tags/tag-green-black.svg" alt="">
        </div>
        <p class="card__name" >Next</p>
    </RouterLink>
</template>

<style scoped>
.card {
    padding: 8px;
    margin: 8px 0;

    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;

    font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    background-color: var(--pure-white);
}

.card__tag__container {
    width: 32px;
    height: 32px;
}

.card__tag {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card__name {
    font-size: 1rem;
    font-weight: bold;

    color: var(--gray);
}
</style>