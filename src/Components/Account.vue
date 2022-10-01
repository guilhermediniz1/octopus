<script setup>

import { RouterLink } from 'vue-router';

</script>

<template>
    <RouterLink to="/accounts/2" class="account">
        <div class="account__tag__container">
            <img class="account__tag" src="../assets/tags/tag-peach.svg" alt="">
        </div>
        <p class="account__name" >Inter</p>
    </RouterLink>
</template>

<style scoped>
.account {
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

.account__tag__container {
    width: 32px;
    height: 32px;
}

.account__tag {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.account__name {
    font-size: 1rem;
    font-weight: bold;

    color: var(--gray);
}
</style>