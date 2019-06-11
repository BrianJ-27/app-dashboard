const ctx = document.getElementById('traffic-chart').getContext('2d');
Chart.defaults.global.legend.display = false

const hourlyChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['12pm','1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'],
        datasets: [{
            backgroundColor: 'rgba(8, 154, 245, 0.6)',
            lineTension: 0.1,
            borderColor: '#B38F00',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDassOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBackgroundColor: 'black',
            pointBorderColor: 'black',
            pointBorderWidth: 5,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'green',
            pointHoverBorderColor: 'orange',
            pointHoverBorderWidth: 'grey',
            pointRadius: 1,
            pointHitRadius: 10,
            data: [500, 800, 450, 950, 675, 1100, 770, 1250, 650, 1500]
        }
     ]
    },

    // Configuration options go here
    options: {
        scales:{
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }

    }
});

const hourData = () => {
    hourlyChart.data.labels.push();
    hourlyChart.data.datasets[0].data = [1500, 400, 850, 550, 975, 100, 70, 350, 950, 500];
    hourlyChart.update();
}
const dailyData = () => {
    hourlyChart.data.labels.push('Mon');
    hourlyChart.data.datasets[0].data = [700, 400, 850, 550, 975, 100, 70, 350, 950, 500];
    hourlyChart.update();
}
const weeklyData = () => {
    hourlyChart.data.labels.push('16-22', '23-29', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31');
    hourlyChart.data.datasets[0].data = [1500, 400, 850, 550, 975, 100, 70, 350, 950, 500];
    hourlyChart.update();
}
const monthlyData = () => {
    hourlyChart.data.labels.push(label);
    hourlyChart.data.datasets[0].data = [1500, 400, 850, 550, 975, 100, 70, 350, 950, 500];
    hourlyChart.update();
}


var bar = document.getElementById('daily-chart').getContext('2d');
var myBarChart = new Chart(bar, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets:[{
            data:[50, 100, 150, 75, 180, 100, 75],
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
    options: {
        legend: {
            position: "right",
            display: true
          }
    }
});