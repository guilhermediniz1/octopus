import { defineStore } from 'pinia'
import { supabase } from '../supabase'

const useStoreUser = defineStore('storeUser', {
    state:() => {
        return {
            user: {}
        }
    },
    actions: {
        async loginUser(email) {
            let { user, error } = await supabase.auth.signIn({ email })
        },
    },
    getters: {}
})

export default useStoreUser