<script setup>
    import { useStoreAccounts } from '@/stores/storeAccounts';
    import  Chart  from 'chart.js/auto'
    import { InsertTransactionModal } from '@/components/Transaction/InsertModal'
    import { onMounted, ref } from 'vue';

    //Store 
    const storeAccounts  = useStoreAccounts()

    // Chart.js
    const chartRef = ref(null)

    onMounted(() => {  
        const myChart = new Chart(document.getElementById('chart'), { 
            type: 'doughnut',
            data: {
                datasets: [{
                    label: 'My First Dataset',
                    data: [300, 50, 100],
                    backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                    ],
                    borderWidth: 0,
                    borderRadius: 999,
                }]
            },
            options: {
                responsive: true,
                cutout: 95
            },
        })
        myChart;
    })

    // Insert modal
    function handleModal () {
        isInsertModalOpen.value = !isInsertModalOpen.value
    }
    const isInsertModalOpen = ref(false)
</script>

<template>
    <div class="container">
        <div class="total-balance">
            <div class="balance">
                <p class="balance__text">Saldo Total</p>
                <h2 class="balance__value">R$ {{ storeAccounts.totalBalance.replace('.', ',') }}</h2>
            </div>
            <div class="chart-container">
                <canvas id="chart" ref="chartRef"></canvas>
            </div>
        </div>
        <div>
            <button @click="handleModal" class="button--add">Adicionar Transação</button>
        </div>
    </div>
    <InsertTransactionModal @button-clicked="handleModal" v-if="isInsertModalOpen && route.fullPath == '/' || isInsertModalOpen && route.fullPath == '/transactions'" />
</template>

<style scoped>
.container {
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.total-balance {
    max-width: 100%;

    display: grid;
    place-items: center;
    place-content: center;
}

.balance {
    grid-row: 1 / -1;
    grid-column: 1 / -1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--pure-white);
}

.chart-container {
    position: relative;

    max-width: 18rem;

    grid-row: 1 / -1;
    grid-column: 1 / -1;
}
</style>