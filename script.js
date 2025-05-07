// Estado geral das máquinas (pizza)
const statusCtx = document.getElementById('statusChart').getContext('2d');
new Chart(statusCtx, {
  type: 'doughnut',
  data: {
    labels: ['Operando', 'Alerta', 'Falha'],
    datasets: [{
      data: [12, 2, 1],
      backgroundColor: ['#4caf50', '#ffc107', '#f44336']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: true
      },
      legend: {
        position: 'bottom'
      }
    }
  }
});

// Temperatura (linha)
const tempCtx = document.getElementById('tempChart').getContext('2d');
new Chart(tempCtx, {
  type: 'line',
  data: {
    labels: Array.from({ length: 12 }, (_, i) => `T${i + 1}`),
    datasets: [{
      label: 'Temperatura (°C)',
      data: [22, 24, 23, 26, 28, 29, 30, 31, 32, 33, 34, 35],
      borderColor: '#42a5f5',
      backgroundColor: 'rgba(66, 165, 245, 0.2)',
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: true
      },
      legend: {
        display: true
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
