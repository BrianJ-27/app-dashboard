Chart.defaults.global.legend.display = false
//grabbing the canvas element with an id of "traffic-chart"
const ctx = document.getElementById('traffic-chart').getContext('2d');

//default chart that displays when page loads
const defaultChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm'],
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


// Dynamically changes the chart to hourly data when user clicks "hourly" button
const hourData = () => {
    defaultChart.data.datasets[0].data = [1000, 500, 890, 350, 700, 775, 900, 625, 533, 880];
    defaultChart.data.labels = ['5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12am', '1am'];
    defaultChart.update();
}

// Dynamically changes the chart to daily data when user clicks "daily" button
const dailyData = () => {
    defaultChart.data.datasets[0].data = [700, 400, 850, 550, 975, 100, 500];
    defaultChart.data.labels = ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    defaultChart.update();
}

// Dynamically changes the chart to weekly data when user clicks "weekly" button
const weeklyData = () => {
    defaultChart.data.datasets[0].data = [1500, 400, 850, 550, 975, 500, 700, 350, 950, 500];
    defaultChart.data.labels = ['16-22', '23-29', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'];
    defaultChart.update();
}

// Dynamically changes the chart to monthly data when user clicks "monthly" button
const monthlyData = () => {
    defaultChart.data.datasets[0].data = [550, 700, 450, 850, 375, 200, 600, 350, 750, 500];
    defaultChart.data.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct'];
    defaultChart.update();
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