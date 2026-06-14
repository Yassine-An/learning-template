$(function(){
  const table = $('#coursesTable').DataTable({ pageLength:6, lengthChange:false, searching:true, ordering:true, info:false });
  $('#searchCourse').on('keyup', function(){ table.search(this.value).draw(); });
  $('#filterCat').on('change', function(){
    const v = this.value;
    table.column(3).search(v).draw();
  });

  const ctx = document.getElementById('mainChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Janvier','Février','Mars','Avril','Mai','Juin'],
      datasets: [
        {
          label: 'Inscriptions',
          data: [3200, 4100, 3800, 5200, 4700, 6300],
          backgroundColor: '#f97316',
          borderRadius: 5,
          barThickness: 22
        },
        {
          label: 'Certifications',
          data: [1800, 2400, 2100, 3100, 2900, 4100],
          backgroundColor: '#185fa5',
          borderRadius: 5,
          barThickness: 22
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1e293b',
          titleColor: '#94a3b8',
          bodyColor: '#fff',
          padding: 10,
          cornerRadius: 6
        }
      },
      scales: {
        x: { grid: { display: false }, ticks: { color: '#94a3b8', font: { size: 12 } } },
        y: { grid: { color: '#f0f2f5' }, ticks: { color: '#94a3b8', font: { size: 11 } } }
      }
    }
  });
});