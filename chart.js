const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Alpha', 'Beta', 'Charlie', 'Delta', 'Echo', 'Felta'],
    datasets: [{
      label: '# of Votes for President',
      
      data: [13, 19, 13, 5, 12, 3],
      
      borderWidth: 5
    


       
    }]
  
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});