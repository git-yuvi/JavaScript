//Function Graph
<html>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.5.0"></script>
<body>

<canvas id="myChart" style="width:100%;max-width:600px"></canvas>

<script>
const xValues = [];
const yValues = [];
generateData("Math.sin(x)", 0, 10, 0.5);

const ctx = document.getElementById('myChart');

new Chart(ctx, {
type: 'line',
data: {
  labels: xValues,
  datasets: [{
    label: 'y = sin(x)',
    data: yValues,
    borderColor: 'rgba(0,0,255,0.5)',
    pointRadius: 1,
    tension: 0.4
  }]
},
options: {
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      text: 'y = sin(x)',
      font: { size: 16 }
    },
  },
  scales: {
    x: {title: { display: true, text: 'x' }},
    y: {title: { display: true, text: 'sin(x)'}
  }
}

}});

function generateData(value, i1, i2, step = 1) {
  for (let x = i1; x <= i2; x += step) {
    yValues.push(eval(value));
