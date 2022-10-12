<script setup>
    import { onBeforeMount, onMounted, reactive, ref } from 'vue';
    import { useRoute } from 'vue-router';
    import { useStoreUser } from '@/stores/storeUser'
    import { RouterLink } from 'vue-router';

// Route
    const route = useRoute()

// Store
    const storeUser = useStoreUser()

// Form 
    const userCredential = reactive({
        email: '',
        password: ''
    })

    function handleFormSubmit() {
        if(route.path === '/auth/register') {
            storeUser.registerUser(userCredential)
        } else if (route.path === '/auth') {
            storeUser.loginUser(userCredential)
        }
    }
</script>

<template>
    <div class="container">
        <div class="container__logo">
            <img class="container__logo__image" src="../../assets/images/logo.svg" alt="">
        </div>
        <div class="authorization-card">
            <form @submit.prevent="handleFormSubmit" class="authorization-card__form" action="">
                <input type="email" name="email" id="email" placeholder="E-mail" v-model="userCredential.email">
                <input type="password" name="password" id="password" placeholder="Senha" v-model="userCredential.password">
                <p v-if="route.path === '/auth'" class="text">Ainda não possui uma conta? <RouterLink class="text__link" to="/auth/register">Registre-se aqui.</RouterLink></p>
                <button class="button button-add" type="submit">{{ route.path === '/auth' ? 'Login' : 'Registrar-se' }}</button>
            </form>
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

.text {
    font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
}

.text__link {
    color: white;
    text-decoration: underline;
    text-underline-offset: 2px;
}

.button {
    width: 80%;
    align-self: center;
}
</style>