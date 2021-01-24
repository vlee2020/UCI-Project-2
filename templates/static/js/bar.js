// var trace1 = {
//     x: ["Pikachu", "Eevee"],
//     y: [150.00, 125.00],
//     type: "bar"
// };

// var data = [trace1];

// var layout = {
//     title: "Pokemon - Starter and Legandary",
//     xaxis: {title: "Pokemon"},
//     yaxis: {title: "Total Power"}
// };

// Plotly.newPlot("plot", data, layout);

//data

// connection to local host
// URL = "http://127.0.0.1:5000/data/starter_data";

// d3.json(URL).then(function(starterData) {
//     console.log(starterData);
//     createMarkers(starterData);
// }); 

// // Define SVG area dimensions
// var svgWidth = 960;
// var svgHeight = 660;

// // Define the chart's margins as an object
// var chartMargin = {
//   top: 30,
//   right: 30,
//   bottom: 30,
//   left: 30
// };

// // Define dimensions of the chart area
// var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
// var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// // Select body, append SVG area to it, and set the dimensions
// var svg = d3.select("body")
//   .append("svg")
//   .attr("height", svgHeight)
//   .attr("width", svgWidth);

// // Append a group to the SVG area and shift ('translate') it to the right and to the bottom
// var chartGroup = svg.append("g")
//   .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// // Load data from hours-of-tv-watched.csv
// URL = "http://127.0.0.1:5000/data/starter_data";

// d3.json(URL).then(function(starterData) {

//   console.log(starterData);

//   // Cast the hours value to a number for each piece of starterData
//   starterData.forEach(function(d) {
//     d. = +d.name;
//   });

//   // Configure a band scale for the horizontal axis with a padding of 0.1 (10%)
//   var xBandScale = d3.scaleBand()
//     .domain(starterData.map(name))
//     .range([0, chartWidth])
//     .padding(0.1);

//   // Create a linear scale for the vertical axis.
//   var yLinearScale = d3.scaleLinear()
//     .domain([0, d3.max(starterData, d => d.hours)])
//     .range([chartHeight, 0]);

//   // Create two new functions passing our scales in as arguments
//   // These will be used to create the chart's axes
//   var bottomAxis = d3.axisBottom(xBandScale);
//   var leftAxis = d3.axisLeft(yLinearScale).ticks(10);

//   // Append two SVG group elements to the chartGroup area,
//   // and create the bottom and left axes inside of them
//   chartGroup.append("g")
//     .call(leftAxis);

//   chartGroup.append("g")
//     .attr("transform", `translate(0, ${chartHeight})`)
//     .call(bottomAxis);

//   // Create one SVG rectangle per piece of tvData
//   // Use the linear and band scales to position each rectangle within the chart
//   chartGroup.selectAll(".bar")
//     .data(starterData)
//     .enter()
//     .append("rect")
//     .attr("class", "bar")
//     .attr("x", d => xBandScale(d.name))
//     .attr("y", d => yLinearScale(d.hours))
//     .attr("width", xBandScale.bandwidth())
//     .attr("height", d => chartHeight - yLinearScale(d.hours));

// }).catch(function(error) {
//   console.log(error);
// });

// Parse the Data

// set the dimensions of the canvas
var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 1200 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;


// set the ranges
var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

var y = d3.scale.linear().range([height, 0]);

// define the axis
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")


var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);


// add the SVG element
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");



// Parse the Data
// URL = "http://127.0.0.1:5000/data/starter_data";
// d3.json(URL).then(function(data) {
  URL = "http://127.0.0.1:5000/data/starter_data";
  d3.json(URL,function(data) {
    console.log(data);

    data.forEach(function(d) {
        d.name = d.name;
        d.total_points = +d.total_points;
    });
	
  // scale the range of the data
  x.domain(data.map(function(d) { return d.name; }));
  y.domain([0, d3.max(data, function(d) { return d.total_points; })]);

  // add axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 5)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Frequency");


  // Add bar chart
  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.name); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.total_points); })
      .attr("height", function(d) { return height - y(d.total_points); });

});