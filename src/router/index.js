import Home from '../Pages/Home/Index.vue'
import TransactionsIndex from '../Pages/Transactions/TransactionsIndex.vue'
import TransactionsView from '../Pages/Transactions/TransactionsIndex.vue'
import AccountsIndex from '../Pages/Accounts/AccountsIndex.vue'
import AccountsView from '../Pages/Accounts/AccountsView.vue'

const routes = [
    // Home
    {path: '/', component: Home},

    // Transactions
    {path: '/transactions', component: TransactionsIndex},
    {path: '/transactions/:id', component: TransactionsView},

    // Accounts
    {path: '/accounts', component: AccountsIndex},
    {path: '/accounts/:id', component: AccountsView},
]

export default routes