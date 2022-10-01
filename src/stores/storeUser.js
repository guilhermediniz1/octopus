import { defineStore } from 'pinia'

const useStoreUser = defineStore('sotoreUser', {
    state:() => {
        return {
            name: 'Guilherme Diniz Láu',
            totalBalance: 500.26
        }
    },
    actions: {},
    getters: {}
})

export default useStoreUser