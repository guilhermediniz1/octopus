<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStoreAccounts } from '@/stores/storeAccounts'

// Stores
    const storeAccounts = useStoreAccounts()

// Router
    const router = useRouter

// Form data and submission
    const form = reactive({
        name: "",
        balance: 0
    })

    const emit = defineEmits(['buttonClicked'])

    function submitForm() {
        storeAccounts.addAccount(form)
        emit('buttonClicked')
    }

</script>

<template>
    <Teleport to="body">
        <div class="container">
            <div class="modal">
                <div class="modal__dotch"></div>
                <form class="modal__form" action="" @submit.prevent="submitForm" autocomplete="off">
                    <input class="account__name" type="text" name="name" id="name" placeholder="Nome para Conta" v-model="form.name">
                    <input class="account__balance" type="number" step="0.01" name="balance" id="balance" placeholder="Saldo da Conta" v-model="form.balance">
                    <div class="button-group">
                        <button class="button button-cancel" @click.prevent="emit('buttonClicked')">Cancelar</button>
                        <button class="button button-add" type="submit">Adicionar</button>
                    </div>
                </form>
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
.container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

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
    max-width: 30rem;
    
    padding: 16px 24px 24px;

    border-radius: 16px;
    
    background-color: var(--gray);

}

.modal__dotch {
    width: 40px;
    height: 8px;

    margin-inline: auto;
    margin-bottom: 54px;

    border-radius: 4px;

    background-color: var(--black);
}

.modal__form {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.button-group {
    justify-content: flex-end;
}

</style>