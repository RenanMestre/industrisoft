document.getElementById('btnDownload').addEventListener('click', async () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
  
    const data = [
      { máquina: 'Máquina 17', status: 'Inspeção agendada', tipo: 'Preventiva', horário: '08:25' },
      { máquina: 'Produção 24', status: 'Falha crítica', tipo: 'Urgente', horário: 'Há 30 minutos' },
      { máquina: 'Sistema Hidráulico', status: 'Verificação programada', tipo: 'Preventiva', horário: 'Ontem 15:12' },
      { máquina: 'Filtro de Óleo', status: 'Substituição pendente', tipo: 'Corretiva', horário: 'Há 1 hora' },
      { máquina: 'Pressão', status: 'Acima do normal', tipo: 'Corretiva', horário: '15 Abr 2024' },
    ];
  
    doc.setFontSize(16);
    doc.text('Relatório de Máquinas - Manutenção', 20, 20);
  
    doc.setFontSize(12);
    let y = 35;
  
    data.forEach((item, index) => {
      doc.text(`Máquina: ${item.máquina}`, 20, y);
      doc.text(`Status: ${item.status}`, 20, y + 7);
      doc.text(`Tipo: ${item.tipo}`, 20, y + 14);
      doc.text(`Horário: ${item.horário}`, 20, y + 21);
      y += 35;
    });
  
    doc.save('relatorio_maquinas.pdf');
  });
  