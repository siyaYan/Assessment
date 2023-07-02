function Draw(chart,data){
    let chart;
    document.getElementById("line").addEventListener("click", function() {
        drawLine(chart,data);
    });
    
    document.getElementById("bar").addEventListener("click", function() {
      drawBar(chart,data) ;
    });
    
    document.getElementById("proportion").addEventListener("click", function() {
      drawPie(chart,data);
    });
}
  
function drawBar(data) {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data["types"],
          datasets: [
            {
              label: "Count",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#c45850"],
              data: data["values"]
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Summary Statistics About National Greenhouse and Energy Register 2021-22'
          }
        }
      });
  }


  function drawPie(chart,data) {
    if (chart) {
    chart.destroy();
    }
    chart = new Chart(document.getElementById("myChart"),
      {
        type: 'pie',
        data: {
          labels: data["types"],
          datasets: [
          {
            label: 'Proportion',
            data: data["props"],
            backgroundColor: ['Red', 'Orange', 'Yellow', 'Blue'],
            }
          ]},
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Proportion About National Greenhouse and Energy Register 2021-22'
            }
          }
        },
      }
    );
  }


  function drawLine(chart, data) {
    // const ctx = document.getElementById('myChart').getContext('2d');
    // const myChart = new Chart(ctx, {
      if (chart) {
    chart.destroy();
    }
    chart = new Chart(document.getElementById("myChart"),
      {
      type: 'line',
      data: {
        labels: mon_unique,
        datasets: [{
          data: ab_val,
          label: "Alberta",
          borderColor: "#3e95cd",
          fill: false
        }, {
          data: BC_val,
          label: "BC",
          borderColor: "#8e5ea2",
          fill: false
        }, {
          data: mb_val,
          label: "Manitoba",
          borderColor: "#3cba9f",
          fill: false
        }, {
          data: nb_val,
          label: "New Brunswick",
          borderColor: "#e8c3b9",
          fill: false
        }, {
          data: nl_val,
          label: "NL",
          borderColor: "#c45850",
          fill: false
        }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Positive Cases of COVID in provinces of Canada'
        },
        hover: {
          mode: 'index',
          intersect: true
        },
      }
    });
  }
