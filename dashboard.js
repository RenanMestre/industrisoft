// Atualizar a data e hora na página
function updateDatetime() {
    const datetimeElement = document.getElementById('datetime');
    const now = new Date();
    datetimeElement.textContent = now.toLocaleString();
}

// Atualização dos dados em tempo real
function updateStats() {
    // Dados fictícios para exemplo
    document.getElementById('detected-attacks').textContent = Math.floor(Math.random() * 50);
    document.getElementById('system-status').textContent = `${Math.floor(Math.random() * 100)}%`;
    document.getElementById('blocked-attacks').textContent = Math.floor(Math.random() * 30);
}

// Inicializar gráficos com o Chart.js
function initCharts() {
    const attacksCtx = document.getElementById('attacksChart').getContext('2d');
    const originCtx = document.getElementById('originChart').getContext('2d');

    new Chart(attacksCtx, {
        type: 'pie',
        data: {
            labels: ['Phishing', 'DDoS', 'Malware', 'Ransomware'],
            datasets: [{
                data: [25, 30, 15, 30],
                backgroundColor: ['#3498db', '#f39c12', '#e74c3c', '#9b59b6']
            }]
        }
    });

    new Chart(originCtx, {
        type: 'bar',
        data: {
            labels: ['EUA', 'Rússia', 'China', 'Brasil', 'Alemanha'],
            datasets: [{
                label: 'Ataques por País',
                data: [50, 40, 35, 20, 15],
                backgroundColor: '#2ecc71'
            }]
        }
    });
}

// Atualizar o dashboard a cada 10 segundos
setInterval(updateStats, 10000);
setInterval(updateDatetime, 1000);

// Inicializar a página
document.addEventListener('DOMContentLoaded', () => {
    updateStats();
    updateDatetime();
    initCharts();
});
