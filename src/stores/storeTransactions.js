import { defineStore } from 'pinia'
import { collection, query, orderBy, doc, setDoc, deleteDoc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { v4 as uuid } from 'uuid'
import { useStoreUser } from '@/stores/storeUser'
import { useStoreAccounts } from '@/stores/storeAccounts'

let transactionsCollectionRef
let transactionsCollectionQuery

let getTransactionsSnapshot = null


export const useStoreTransactions = defineStore('storeTransactions', {
    state:() => ({
        transactions: [],
        transactionsLoaded: false  
    }),
    actions: {
        init() {
            const storeUser = useStoreUser()
            transactionsCollectionRef = collection(db, 'User', storeUser.user.id, 'Transaction')
            transactionsCollectionQuery = query(transactionsCollectionRef, orderBy('date', 'desc'))
            this.getTransactions()
        },
        async getTransactions() {
            this.transactionsLoaded = false

            if (getTransactionsSnapshot) {
                getTransactionsSnapshot() // unsubscribe from any active listener
            } 
      
            getTransactionsSnapshot = onSnapshot(transactionsCollectionQuery, (querySnapshot) => {
                let transactions = []
                querySnapshot.forEach((doc) => {
                let transaction = {
                    id: doc.id,
                    description: doc.data().description,
                    date: doc.data().date,
                    type: doc.data().type,
                    value: doc.data().value,
                    pay_method: doc.data().pay_method
                }
                transactions.push(transaction)
                })
                this.transactions = transactions
                this.transactionsLoaded = true
            }, error => console.log('error.message: ', error.message))
        },
        clearTransactions() {
            this.transactions = []
        },
        async addTransaction({description, date, value, type, pay_method, account_id}) {
            const storeUser = useStoreUser()
            const storeAccounts = useStoreAccounts()

            const transactionRef = doc(db, 'User',storeUser.user.id,'Transaction', uuid());
            setDoc(transactionRef, { description, date, value, type, pay_method, account_id});

            storeAccounts.updateAccounts(value, type, account_id)
        },
        async deleteTransaction(id) {
            const storeUser = useStoreUser()

            await deleteDoc(doc(db, 'User',storeUser.user.id,'Transaction', id));
        }
    },
    getters: {}
})