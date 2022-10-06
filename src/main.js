import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import routes from './router'
import App from './App.vue'
import './global.css'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const router = createRouter({
    history: createWebHistory(),
    routes
})


createApp(App).use(router).use(pinia).mount('#app')
