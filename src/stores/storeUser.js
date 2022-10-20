import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase'
import { useStoreTransactions } from '@/stores/storeTransactions'
import { useStoreAccounts } from '@/stores/storeAccounts'
import { useRouter } from 'vue-router'
import Toastify from 'toastify-js'

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
      }).catch((error) => {
        Toastify({
          text: "🧐 Ocorreu um erro. Tente Novamente.",
          duration: 3000,
          gravity: "top", 
          position: "right", 
          className: "toast--warning"
        }).showToast();
      })
    },
    loginUser(credentials) {
      signInWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
        const user = userCredential.user
      }).catch((error) => {
        Toastify({
          text: "🧐 Verifique seu Login e Senha.",
          duration: 3000,
          gravity: "top", 
          position: "right", 
          className: "toast--warning"
        }).showToast();
      })
    },
    logoutUser() {
      signOut(auth).then(() => {
        Toastify({
          text: "🫡 Sessão encerrada.",
          duration: 3000,
          gravity: "top", 
          position: "right", 
          className: "toast--neutral"
        }).showToast();
      }).catch((error) => {
        Toastify({
          text: "🧨 Ocorreu um erro inesperado.",
          duration: 3000,
          gravity: "top", 
          position: "right", 
          className: "toast--warning"
        }).showToast();
      })
    }
  }
})