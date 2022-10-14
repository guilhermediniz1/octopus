<script setup>
    import { ref } from 'vue';
    import DeleteModal from './DeleteModal.vue';
    import { useStoreTransactions } from '@/stores/storeTransactions';
    import { formatDate } from '@/utils/utils.js'

// Props
    const props = defineProps({
        id: String,
        iconPath: String,
        type: String,
        description: String,
        date: String,
        value: Number,
    })

// Store
    const storeTransactions = useStoreTransactions()

//  Booleans
    const canDelete = ref(false)
    const isDeleteModalOpen = ref(false)

// Icon path
    function iconURL() { 
        return new URL(`../../assets/icons/${props.type}.svg`, import.meta.url).href
    }

</script>

<template>
    <div class="transaction" @mouseover="canDelete = true" @mouseleave="canDelete = false">
        <div class="transaction__content">
            <div class="transaction__icon__container">
                <img class="transaction__icon" :src="iconURL()" alt="">
            </div>
            <div>
                <p class="transaction__description">{{ props.description }}</p>
                <small class="transaction__date">{{ formatDate(props.date) }}</small>
            </div>
        </div>
        <p v-if="!canDelete" class="transaction__value" >R$ {{ (props.value.toFixed(2)).replace('.', ',') }}</p>
        <div class="button-group" v-else>
            <button class="button__delete" @click="isDeleteModalOpen = !isDeleteModalOpen">
                <img class="button__icon" src="../../assets/icons/delete.svg" alt="">
            </button>
        </div>
    </div>
    <DeleteModal @button-clicked="isDeleteModalOpen = !isDeleteModalOpen" :id="props.id" v-if="isDeleteModalOpen" />
</template>

<style scoped>
.transaction {
    padding: 8px;
    margin: 8px 0;

    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    background-color: var(--pure-white);
}

.transaction__content {
    display: flex;
    align-items: center;
    gap: 8px;
}

.transaction__icon__container {
    width: 32px;
    height: 32px;
}

.transaction__icon {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.transaction__description {
    font-size: .875rem;
    font-weight: bold;

    color: var(--gray);
}

.transaction__date {
    font-size: .75rem;

    color: var(--light-gray);
}

.transaction__value {
    font-size: .875rem;
    font-weight: 600;
    color: var(--black)
}

.button-group {
    width: fit-content;
    gap: 8px;
}

.button__edit, .button__delete {
    height: 24px;
    width: 24px;

    background: none;
    outline: none;
    border: none;

    cursor: pointer;
}

.button__icon {
    max-height: 100%;
    max-width: 100%;
}
</style>