<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStoreTransactions } from '@/stores/storeTransactions'
import { useStoreAccounts } from '@/stores/storeAccounts'

// Props
const props = defineProps({
    route: String
})

// Stores
const storeTransactions = useStoreTransactions()
const storeAccounts = useStoreAccounts()

// Router
const router = useRouter


// Form data and submission
const form = reactive({
    description: "",
    date: "",
    value: 0, 
    type: 0, 
    pay_method: "",
    account_id: "" 
})

const emit = defineEmits(['buttonClicked'])

function submitForm() {
    storeTransactions.addTransaction(form)
    emit('buttonClicked')
}

</script>

<template>
    <Teleport to="body">
        <div class="container">
            <div class="modal">
                <div class="modal__dotch"></div>
                <form class="modal__form" action="" @submit.prevent="submitForm" autocomplete="off">
                    <input class="transaction__description" type="text" name="description" id="description" placeholder="Descrição" v-model="form.description">
                    <input class="transaction__date" type="date" name="date" id="date" v-model="form.date">
                    <input class="transaction__value" type="number" step="0.01" name="value" id="value" placeholder="R$100,00" v-model="form.value">
                    <div class="transaction__type">
                        <label class="transaction__type__label" for="in">
                            <input class="transaction__type__radio" type="radio" name="type" id="in" value="in" v-model="form.type" required>
                            Entrada
                        </label>
                        <label class="transaction__type__label" for="out">
                            <input class="transaction__type__radio" type="radio" name="type" id="out" value="out"  v-model="form.type">
                            Saída
                        </label>
                    </div>
                    <select class="transaction__pay-method" name="pay-method" id="pay-method" v-model="form.pay_method">
                        <option value="" selected disabled>Método de pagamento</option>
                        <option value="credit-card">Cartão de Crédito</option>
                        <option value="debit">Débito</option>
                        <option value="cash">Dinheiro Físico</option>
                        <option value="pix">Pix</option>
                        <option value="ted">TED</option>
                        <option value="doc">DOC</option>
                        <option value="check">Cheque</option>
                    </select>
                    <select class="transaction__account" name="accounts" id="accounts" v-model="form.account_id">
                        <option value="" selected disabled>Conta</option>
                        <option v-for="account in storeAccounts.accounts" :key="account.id" :value="account.id">{{ account.name }}</option>
                    </select>
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

.transaction__type {
    display: flex;
    flex-direction: column;

    gap: 8px;
}


.transaction__type__radio {
    width: fit-content;
    height: fit-content;
}

.button-group {
    justify-content: flex-end;
}

</style>