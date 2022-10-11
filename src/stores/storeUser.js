import { defineStore } from 'pinia'
import { supabase } from '../supabase'
import { useRouter } from 'vue-router'

// Router
    const router = useRouter()

const useStoreUser = defineStore('storeUser', {
    state:() => {
        return {}
    },
    actions: {
        init() {},
        async loginUser(email) {
            let { user, error } = await supabase.auth.signIn({ email })
        },
        async logoutUser(email) {
            let { error } = await supabase.auth.signOut()
        },
    },
    getters: {}
})

export default useStoreUser