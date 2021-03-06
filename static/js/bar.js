// set the dimensions of the canvas

var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 1200 - margin.left - margin.right,
    height = 330 - margin.top - margin.bottom;


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
    .ticks(15);


// add the SVG element
var svg = d3.select("#plot").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
// var tip = d3.tip()
//   .attr('class', 'd3-tip')
//   .offset([-10, 0])
//   .html(function(d) {
//     return "<strong>Total Points:</strong> <span style='color:red'>" + d.total_points + "</span>";
//   })
//   svg.call(tip);

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
      .text("Total Points");
  
  // Add bar chart
  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.name); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.total_points); })
      .attr("height", function(d) { return height - y(d.total_points); })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
  var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
      return "<strong>Total Points:</strong> <span style='color:red'>" + d.total_points + "</span>";
    })
    svg.call(tip);  
});

function type(d) {
  d.total_points = +d.total_points;
  return d;
}