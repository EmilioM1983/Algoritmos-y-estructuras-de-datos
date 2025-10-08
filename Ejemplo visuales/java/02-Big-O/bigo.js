// Configuración del gráfico
        const ctx = document.getElementById('bigOChart').getContext('2d');
        
        // Generar datos para el gráfico
        const nValues = Array.from({length: 20}, (_, i) => i + 1);
        
        const bigOData = {
            O1: nValues.map(() => 1),
            OLogN: nValues.map(n => Math.log2(n)),
            ON: nValues.map(n => n),
            ONLogN: nValues.map(n => n * Math.log2(n)),
            ON2: nValues.map(n => n * n),
            O2N: nValues.map(n => Math.pow(2, n)),
            ONFact: nValues.map(n => {
                // Calcular factorial solo para valores pequeños
                if (n > 10) return 4000000; // Valor máximo para la visualización
                let fact = 1;
                for (let i = 2; i <= n; i++) fact *= i;
                return fact;
            })
        };
        
        // Crear el gráfico
        const bigOChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: nValues,
                datasets: [
                    {
                        label: 'O(1)',
                        data: bigOData.O1,
                        borderColor: '#4CAF50',
                        backgroundColor: 'rgba(76, 175, 80, 0.1)',
                        borderWidth: 2,
                        tension: 0.4,
                        pointRadius: 0
                    },
                    {
                        label: 'O(log n)',
                        data: bigOData.OLogN,
                        borderColor: '#8BC34A',
                        backgroundColor: 'rgba(139, 195, 74, 0.1)',
                        borderWidth: 2,
                        tension: 0.4,
                        pointRadius: 0
                    },
                    {
                        label: 'O(n)',
                        data: bigOData.ON,
                        borderColor: '#FFC107',
                        backgroundColor: 'rgba(255, 193, 7, 0.1)',
                        borderWidth: 2,
                        tension: 0.4,
                        pointRadius: 0
                    },
                    {
                        label: 'O(n log n)',
                        data: bigOData.ONLogN,
                        borderColor: '#FF9800',
                        backgroundColor: 'rgba(255, 152, 0, 0.1)',
                        borderWidth: 2,
                        tension: 0.4,
                        pointRadius: 0
                    },
                    {
                        label: 'O(n²)',
                        data: bigOData.ON2,
                        borderColor: '#F44336',
                        backgroundColor: 'rgba(244, 67, 54, 0.1)',
                        borderWidth: 2,
                        tension: 0.4,
                        pointRadius: 0
                    },
                    {
                        label: 'O(2ⁿ)',
                        data: bigOData.O2N,
                        borderColor: '#9C27B0',
                        backgroundColor: 'rgba(156, 39, 176, 0.1)',
                        borderWidth: 2,
                        tension: 0.4,
                        pointRadius: 0
                    },
                    {
                        label: 'O(n!)',
                        data: bigOData.ONFact,
                        borderColor: '#673AB7',
                        backgroundColor: 'rgba(103, 58, 183, 0.1)',
                        borderWidth: 2,
                        tension: 0.4,
                        pointRadius: 0
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Complejidad Big O - Operaciones vs Elementos',
                        color: '#e6edf3',
                        font: {
                            size: 16
                        }
                    },
                    legend: {
                        labels: {
                            color: '#e6edf3',
                            usePointStyle: true,
                            pointStyle: 'rect'
                        }
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        backgroundColor: 'rgba(33, 38, 45, 0.9)',
                        titleColor: '#e6edf3',
                        bodyColor: '#e6edf3',
                        borderColor: 'rgba(56, 62, 71, 0.8)',
                        borderWidth: 1
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Número de Elementos (n)',
                            color: '#e6edf3'
                        },
                        grid: {
                            color: 'rgba(56, 62, 71, 0.3)'
                        },
                        ticks: {
                            color: '#8b949e'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Operaciones',
                            color: '#e6edf3'
                        },
                        type: 'logarithmic',
                        grid: {
                            color: 'rgba(56, 62, 71, 0.3)'
                        },
                        ticks: {
                            color: '#8b949e'
                        }
                    }
                },
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                }
            }
        });