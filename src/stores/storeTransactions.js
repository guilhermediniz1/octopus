import { defineStore } from 'pinia'
import { supabase } from '../supabase'

const useStoreTransactions = defineStore('storeTransactions', {
    state:() => ({
        transactions: []   
    }),
    actions: {
        init() {
            this.loadTransactions().then(() => console.log('State Initialized'))

            let subscribeToChanges = supabase 
                .from('*')
                .on('*', payload => {
                    this.loadTransactions()
                })
                .subscribe()
        },
        async loadTransactions() {
            let { data: Transaction, error } = await supabase.from('Transaction').select('*')
            this.transactions = Transaction
        },
        async addTransaction({description, date, value, type, pay_method}) {
            await supabase.from('Transaction').insert([{ description, date, value, type, pay_method}])
        },
        async deleteTransaction(id) {
            const { data, error } = await supabase.from('Transaction').delete().eq('id', id)
        }
    },
    getters: {
        getTransactions() {
            return this.transactions
        }
    }
})

export default useStoreTransactions