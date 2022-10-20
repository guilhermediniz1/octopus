import { defineStore } from 'pinia'
import { collection, query, orderBy, doc, setDoc, deleteDoc, updateDoc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { v4 as uuid } from 'uuid'
import { useStoreUser } from '@/stores/storeUser'

let accountsCollectionRef
let accountsCollectionQuery

let getAccountsSnapshot = null


export const useStoreAccounts = defineStore('storeAccounts', {
    state:() => ({
        accounts: [],
        accountsLoaded: false,
    }),
    actions: {
        init() {
            const storeUser = useStoreUser()
            accountsCollectionRef = collection(db, 'User', storeUser.user.id, 'Account')
            accountsCollectionQuery = query(accountsCollectionRef, orderBy('name', 'desc'))
            this.getAccounts()
        },
        async getAccounts() {
            this.accountsLoaded = false

            if (getAccountsSnapshot) {
                getAccountsSnapshot() // unsubscribe from any active listener
            } 
      
            getAccountsSnapshot = onSnapshot(accountsCollectionQuery, (querySnapshot) => {
                let accounts = []
                querySnapshot.forEach((doc) => {
                let acccount = {
                    id: doc.id,
                    name: doc.data().name,
                    balance: doc.data().balance,
                    tag: doc.data().tag
                }
                accounts.push(acccount)
                })
                this.accounts = accounts
                this.accountsLoaded = true
            }, error => {
                Toastify({
                    text: "😥 Ocorreu um erro inesperado. Tente Novamente.",
                    duration: 3000,
                    gravity: "top", 
                    position: "right", 
                    className: "toast--warning"
                }).showToast();
            })
        },
        clearAccounts() {
            this.accounts = []
        },
        async addAccount({name, balance, tag}) {
            const storeUser = useStoreUser()
            const accountRef = doc(db, 'User', storeUser.user.id, 'Account', uuid());
            setDoc(accountRef, { name, balance, tag});
        },
        async deleteAccount(id) {
            const storeUser = useStoreUser()
            await deleteDoc(doc(db, 'User', storeUser.user.id, 'Account', id));
        },
        async updateAccounts(value, operation, account_id) {
            const storeUser = useStoreUser()

            const account = this.accounts.filter((account) => {
                if(account.id === account_id) {
                    return account
                }
            })

            await updateDoc(doc(db, 'User', storeUser.user.id, 'Account', account_id), {
                balance: operation === 'in' ? account[0].balance + value : account[0].balance - value 
            })
        }
    },
    getters: {
        totalBalance() {
            let totalBalance = 0
            this.accounts.forEach(account => totalBalance += account.balance)
            return totalBalance.toFixed(2)
        }
    },
})