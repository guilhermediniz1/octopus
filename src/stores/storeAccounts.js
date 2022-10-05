import { defineStore } from 'pinia'
import { supabase } from '../supabase'

const useStoreAccounts = defineStore('storeAccounts', {
    state:() => {
        return {
            accounts: []
        }
    },
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
            let { data: Account, error } = await supabase.from('Account').select('*')
            this.accounts = Account
        },
        async addAccount({name, balance}) {
            const {data, error} = await supabase.from('Account').insert([{name, balance}])
            console.log(error)
        },
        async deleteAccount(id) {
            const { data, error } = await supabase.from('Account').delete().eq('id', id)
        }
    },
    getters: {
        getAccounts() {
            return this.accounts
        }
    }
})

export default useStoreAccounts
