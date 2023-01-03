var options = {fill: {
    colors: ['#F44336', '#E91E63', '#9C27B0']
  },
    chart: {
      type: 'bar'
    },
    series: [{
      name: 'terjual',
      data: [30,40,45,50,49,60,70,91,125,45,89,78]
    }],
    xaxis: {
      categories: ["januari","februari","maret","april","maret","april","juni","juli","agustus","september","november","desember"]
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();
  