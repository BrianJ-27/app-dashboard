var ctx = document.getElementById('traffic-chart').getContext('2d');


var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgba(8, 154, 245, 0.6)',
            borderColor: '#B38F00',
            data: [500, 1000, 1500, 2000, 2500]
        }],
       
    },

    // Configuration options go here
    options: {}
});

var bar = document.getElementById('daily-chart').getContext('2d');
var myBarChart = new Chart(bar, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets:[{
            data:[50, 100, 150, 200, 250],
            backgroundColor: 'rgba(8, 154, 245, 0.6)'
        }]
    },
    options: {}
});

var doughnut = document.getElementById('doughnut-chart').getContext('2d');
var myDoughnutChart = new Chart(doughnut, {
    type: 'doughnut',
    data: {
        labels: ['phones', 'tablets', 'desktop'],
        datasets:[{
            data:[25, 50, 75],
            backgroundColor: [
                'green',
                'teal',
                'rgba(8, 154, 245, 0.6)' 
           ]
        }]
    },
    options: {}
});