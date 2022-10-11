import Auth from '../Pages/Auth/Index.vue'
import Home from '../Pages/Home/Index.vue'
import TransactionsIndex from '../Pages/Transactions/TransactionsIndex.vue'
import TransactionsView from '../Pages/Transactions/TransactionsIndex.vue'
import AccountsIndex from '../Pages/Accounts/AccountsIndex.vue'
import AccountsView from '../Pages/Accounts/AccountsView.vue'

import { createRouter, createWebHistory } from 'vue-router'
import { supabase } from '../supabase' 
import { SupabaseClient } from '@supabase/supabase-js'

const routes = [
    // Authentication
    {name: 'Auth', path: '/authentication', component: Auth},

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
    console
})

export default router