import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase'
import { useStoreTransactions } from '@/stores/storeTransactions'
import { useStoreAccounts } from '@/stores/storeAccounts'
import { useRouter } from 'vue-router'

export const useStoreUser = defineStore('storeUser', {
  state: () => {
    return { 
      user: {}
    }
  },
  actions: {
    init() {
      const storeTransactions = useStoreTransactions()
      const storeAccounts = useStoreAccounts()
      const router = useRouter()
      
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid
          this.user.email = user.email
          router.push('/')
          storeTransactions.init()
          storeAccounts.init()
        } else {
          this.user = {}
          router.replace('/auth')
          storeTransactions.clearTransactions()
          storeAccounts.clearAccounts()
        }
      })
    },
    registerUser(credentials) {
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
        const user = userCredential.user
        // console.log('user: ', user)
      }).catch((error) => {
        // console.log('error.message: ', error.message)
      })
    },
    loginUser(credentials) {
      signInWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
        const user = userCredential.user
        // console.log('user: ', user)
      }).catch((error) => {
        // console.log('error.message: ', error.message)
      })
    },
    logoutUser() {
      signOut(auth).then(() => {
        // console.log('User signed out')
      }).catch((error) => {
        // console.log(error.message)
      })
    }
  }
})