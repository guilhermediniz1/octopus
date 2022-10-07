<script setup>
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';
    import useStoreUser from '../../stores/storeUser'

// Route
    const route = useRoute()

// Store
    const storeUser = useStoreUser()

    function loginUser() {
        storeUser.loginUser(email.value)
    }

// Form 
    const email = ref('')
    const isSubmitted = ref(false)

    function handleFormSubmit() {
        loginUser()
        isSubmitted.value = true
    }
</script>

<template>
    <div class="container">
        <div class="container__logo">
            <img class="container__logo__image" src="../../assets/images/logo.svg" alt="">
        </div>
        <div class="authorization-card">
            <form v-if="!isSubmitted" @submit.prevent="handleFormSubmit" class="authorization-card__form" action="">
                <input type="email" name="email" id="email" placeholder="E-mail" v-model="email">
                <button class="button button-add" type="submit">Login</button>
            </form>
            <div v-else>
                <p class="authorization__message-success">O link de acesso foi enviado para seu email</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    height: 100vh;
    width: 100vw;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;

    background-color: var(--black);
}

.container__logo {
    width: 90%;
    max-width: 30rem;
}

.container__logo__image {
    max-width: 100%;
}

.authorization-card {
    width: 90%;
    max-width: 30rem;

    padding: 1.5rem;

    border-radius: 8px;

    background-color: var(--gray);
}

.authorization-card__form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.authorization-card__text {
    font-family: 'DM Sans';
    font-size: .9rem;
    text-align: center;
}

.authorization-card__text-link {
    text-decoration: underline;
    text-underline-offset: 2px;
}

.authorization-card__text-link:visited {
    color: var(--white);
}

.authorization__message-success {
    text-align: center;
}

.button {
    width: 80%;
    align-self: center;
}
</style>