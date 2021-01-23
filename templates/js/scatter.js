var fire = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: 'scatter'
  };
  
  var water = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'lines',
    type: 'scatter'
  };
  
  var grass = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'lines+markers',
    type: 'scatter'
  };
  var data = [fire, water, grass];
  
  var layout = {
    title: "Pokemon - Stats by Type",
    xaxis: {title: "Type"},
    yaxis: {title: "Stat Rating"}
  };
  

  
  Plotly.newPlot('plot', data, layout);