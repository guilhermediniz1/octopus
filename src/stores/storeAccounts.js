import { defineStore } from 'pinia'
import { supabase } from '../supabase'

const useStoreAccounts = defineStore('storeAccounts', {
    state:() => ({
        accounts: []
    }),
    actions: {
        init() {
            this.loadAccounts()

            let subscribeToChanges = supabase 
                .from('Account')
                .on('*', payload => {
                    this.loadAccounts()
                })
                .subscribe()
        },
        async loadAccounts() {
            const { data: Account, error } = await supabase
                .from('Account')
                .select('*')
            this.accounts = Account
        },
        async addAccount({name, balance}) {
            const {data, error} = await supabase
                .from('Account')
                .insert([{name, balance}])
        },
        async deleteAccount(id) {
            const { data, error } = await supabase
                .from('Account')
                .delete()
                .eq('id', id)
        },
        async updateBalance(id, newBalance) {
            const { data, error } = await supabase
                .from('Account')
                .update({ balance: newBalance })
                .eq('id', id)
        }
    },
    getters: {
        getAccounts() {
            return this.accounts
        },
        getAccountById: (state) => {
            return (id) => {
                return state.accounts.filter(account => account.id === id)[0]
            }
        }
    },
    persist: true
})

export default useStoreAccounts
