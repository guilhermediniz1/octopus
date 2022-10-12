import Auth from '../Pages/Auth/Index.vue'
import Home from '../Pages/Home/Index.vue'
import TransactionsIndex from '../Pages/Transactions/TransactionsIndex.vue'
import TransactionsView from '../Pages/Transactions/TransactionsIndex.vue'
import AccountsIndex from '../Pages/Accounts/AccountsIndex.vue'
import AccountsView from '../Pages/Accounts/AccountsView.vue'
import { useStoreUser } from '@/stores/storeUser'
import { createRouter, createWebHistory } from 'vue-router'



const routes = [
    // Authentication
    {name: 'Auth', path: '/auth', component: Auth},
    {name: 'AuthRegister', path: '/auth/register', component: Auth},

    // Home
    {name: 'Home', path: '/', component: Home},

    // Transactions
    {name: 'Transactions', path: '/transactions', component: TransactionsIndex},
    {path: '/transactions/:id', component: TransactionsView},

    // Accounts
    {name: 'Account', path: '/accounts', component: AccountsIndex},
    {path: '/accounts/:id', component: AccountsView},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// Navigation Guards
router.beforeEach(async (to, from) => {
    const storeUser = useStoreUser()

    if(!storeUser.user.id && (to.name !== 'Auth' && to.name !== 'AuthRegister')) {
        return {name: 'Auth'}
    }
    if(storeUser.user.id && (to.name === 'Auth' || to.name === 'AuthRegister')) {
        return false
    }
})

export default router