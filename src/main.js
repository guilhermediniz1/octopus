import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from './router'
import App from './App.vue'
import './global.css'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)


createApp(App).use(router).use(pinia).mount('#app')
