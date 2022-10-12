import { defineStore } from 'pinia'
import { collection, query, orderBy, doc, setDoc, deleteDoc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { v4 as uuid } from 'uuid'

let accountsCollectionRef
let accountsCollectionQuery

let getAccountsSnapshot = null


export const useStoreAccounts = defineStore('storeAccounts', {
    state:() => ({
        accounts: [],
        accountsLoaded: false
    }),
    actions: {
        init() {
            accountsCollectionRef = collection(db, 'Account')
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
                    balance: doc.data().balance
                }
                accounts.push(acccount)
                })
                this.accounts = accounts
                this.accountsLoaded = true
            }, error => console.log('error.message: ', error.message))
        },
        clearAccounts() {
            this.accounts = []
        },
        async addAccount({name, balance}) {
            const accountRef = doc(db, 'Account', uuid());
            setDoc(accountRef, { name, balance});
        },
        async deleteAccount(id) {
            await deleteDoc(doc(db, "Account", id));
        },
        async updateBalance(id, newBalance) {
        }
    },
    getters: {},
})