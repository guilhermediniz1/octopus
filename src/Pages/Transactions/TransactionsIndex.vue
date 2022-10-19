<script setup>
    import { useStoreTransactions } from '@/stores/storeTransactions';
    import { onMounted, ref } from 'vue';
    import Transaction from '../../Components/Transactions/Transaction.vue';
    import Chart from 'chart.js/auto';


// Store - transactions
    const storeTransactions = useStoreTransactions()
    
// Chart
    const chartRef = ref(null)

    onMounted(() => {
        const labels = ['Jan', 'Fev', 'Mar', 'Mai', 'Abr', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

        const myChart = new Chart(document.getElementById('chart'), {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Entrada',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: true,
                        borderColor: '#27F460',
                        backgroundColor: 'rgba(39, 244, 96, .25)',
                        tension: 0.2
                    },
                    {
                        label: 'Saída',
                        data: [67, 79, 50, 21, 26, 85, 80],
                        fill: true,
                        borderColor: '#F24C54',
                        backgroundColor: 'rgba(242, 76, 84, .25)',
                        tension: 0.2
                    },
                ]
            }
        })
        myChart
    })
</script>

<template>
    <div class="grid-container">
        <div class="container" >
            <div v-if="false" class="container__content">
                <strong class="container__title">Todas Transações</strong>
                <div class="container__content">
                    <Transaction
                    v-for="t in storeTransactions.transactions"
                    :key="t.id"
                    :id="t.id"
                    :description="t.description"
                    :date="t.date"
                    :value="t.value" 
                    :type="t.type"
                    />
                </div>
            </div>
            <div class="chart-container">
                <canvas id="chart" ref="chartRef"></canvas>
            </div>
        </div>
    </div>
</template>

<style scoped>
.grid-container {
    height: 100vh;
    padding-top: 4rem;
    
    display: grid;
    grid-template-rows: 1fr;
}

.container {


    padding: 24px 24px 56px 24px;

    border-radius: 16px 16px 0 0;

    background-color: #D9D9D9;
}

.container__title {
    font-size: 1rem;
    font-weight: bolder;
    color: var(--light-gray);
}

.chart-container {
    width: 100%;
    height: 100%;
    max-height: 20rem;
    margin: auto;
}
</style>