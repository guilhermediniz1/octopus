<script setup>
    import { computed, ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import DeleteModal from '../Transactions/DeleteModal.vue';

// Props
    const props = defineProps({
        id: String,
        name: String,
        balance: Number,
        tag: String        
    })

    const canDelete = ref(false)
    const isDeleteModalOpen = ref(false)

    function tagURL() { 
        return new URL(`../../assets/tags/${props.tag}.svg`, import.meta.url).href
    }
</script>

<template>
    <div class="account" @mouseover="canDelete = true" @mouseleave="canDelete = false">
        <RouterLink :to="'accounts/' + props.id">
          <div class="account__content">
              <div class="account__tag__container">
                  <img class="account__tag" :src="tagURL()" alt="">
              </div>
              <p class="account__name" >{{ props.name }}</p>
          </div>
        </RouterLink>
        <button v-if="canDelete" class="button__delete" @click="isDeleteModalOpen = !isDeleteModalOpen">
            <img class="button__icon" src="../../assets/icons/delete.svg" alt="">
        </button>
    </div>
    <DeleteModal @button-clicked="isDeleteModalOpen = !isDeleteModalOpen" :id="props.id" v-if="isDeleteModalOpen" />
</template>

<style scoped>
.account {
    padding: 8px;
    margin: 8px 0;

    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    background-color: var(--pure-white);
}

.account__content{
    display: flex;
    align-items: center;
    gap: 8px;
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