$(document).ready(function () {
  var ctx = $("#chart-line");
  var myLineChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["World", "East Asia", "Europe", "North America", "West Asia"],
      datasets: [{
        data: [3610000, 1700000,433560,243609, 183533],
        backgroundColor: ["blue", "orange","green", "purple", "red"
        ]
      }]
    },
  });
});

$(document).ready(function () {
  var ctx = $("#charts");
  var myLineChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Asia", "North America", "Europe", "Africa/Sout America/Oceania", "Aviation and Shipping"],
      datasets: [{
        data: [53, 18,17,8, 4],
        backgroundColor: ["blue", "orange","green", "purple", "red"
        ]
      }]
    },
  });
});




