<script setup>
    import { useStoreTransactions } from '@/stores/storeTransactions';
    import { onMounted, onUpdated, ref } from 'vue';
    import Transaction from '../../Components/Transactions/Transaction.vue';
    import Chart from 'chart.js/auto';


// Store - transactions
    const storeTransactions = useStoreTransactions()
    
// Chart
    let myChart

    // Pre built Code from Utils of Chart.js
    const MONTHS = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

    function months(config) {
        var cfg = config || {};
        var count = cfg.count || 12;
        var section = cfg.section;
        var values = [];
        var i, value;

        for (i = 0; i < count; ++i) {
            value = MONTHS[Math.ceil(i) % 12];
            values.push(value.substring(0, section));
        }

        return values;
    }

    let incomeValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
    let outcomeValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 

    storeTransactions.incomeTransactions.forEach(tr => {
        const [year, month] = tr.date.slice(0,7).split('-')

        incomeValues[Number(month) - 1] += tr.value
    })

    storeTransactions.outcomeTransactions.forEach(tr => {
        const [year, month] = tr.date.slice(0,7).split('-')

        outcomeValues[Number(month) - 1] += tr.value
    })

    onMounted(() => {
        const labels = months({count: 12});

        myChart = new Chart(document.getElementById('chart'), {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Entrada',
                        data: incomeValues,
                        fill: true,
                    borderColor: '#27F460',
                        backgroundColor: 'rgba(39, 244, 96, .25)',
                        tension: 0.2
                    },
                    {
                        label: 'Saída',
                        data: outcomeValues,
                        fill: true,
                    borderColor: '#F24C54',
                        backgroundColor: 'rgba(242, 76, 84, .25)',
                        tension: 0.2
                    },
                ]
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Movimentações'
                    },
                }
            }
        })
        myChart
    })

    onUpdated(() => {
        myChart.update()
    })
</script>

<template>
    <div class="grid-container">
        <div class="container" >
            <div class="chart-container">
                <canvas id="chart" ref="chartRef"></canvas>
            </div>
            <div class="">
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
    max-height: 100%;

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
    min-height: 16rem;
    margin: auto;

    padding-bottom: 2rem;
}

.container__content {
    max-height: 50vh;
    overflow: scroll;
}
</style>