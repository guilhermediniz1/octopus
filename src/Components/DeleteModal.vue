<script setup>
    import { useRouter } from 'vue-router';
    import useStoreTransactions from '../stores/storeTransactions'
    
// Props
    const props = defineProps({
        id: {
            type: String,
            default: ''
        }
    })

// Stores
    const storeTransactions = useStoreTransactions()

// Emits
    const emit = defineEmits(['buttonClicked'])
    
// Router
    const router = useRouter

    function confirmDelete() {
        storeTransactions.deleteTransaction(props.id)
        emit('buttonClicked')
    }

</script>
    
<template>
    <Teleport to="body">
        <div class="container">
            <div class="modal">
                <p>Deseja mesmo deletar esta transação?</p>
                <div class="button-group">
                    <button class="button button-cancel" @click="emit('buttonClicked')">Cancelar</button>
                    <button class="button button-delete" @click="confirmDelete">Deletar</button>
                </div>
            </div>
        </div>
    </Teleport>
</template>
    
<style scoped>
.container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    height: 100vh;
    width: 100vw;

    display: grid;
    place-items: center;

    background: rgba(255, 255, 255, 0.21);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.4px);
    -webkit-backdrop-filter: blur(6.4px);
}

.modal {
    width: 90%;
    max-width: 16rem;
    
    padding: 16px 24px 24px;

    border-radius: 16px;
    
    background-color: var(--gray);

}

.button-group{
    padding-top: 8px;
}
</style>