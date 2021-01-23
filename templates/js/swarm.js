<!-- Code for D3 Swarm Plot tutorial from 
https://www.chartfleau.com/tutorials/d3swarm -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://d3js.org/d3.v5.min.js"></script>
    <title>D3 Swarm Plot</title>
  </head>
  <body></body>
</html>
<script>
  const width = 1920;
  const height = 1080;

  let svg = d3
    .select("body")
    .append("svg")
    .attr("height", height)
    .attr("width", width);

  d3.csv("data.csv").then((data) => {
    let sectors = Array.from(new Set(data.map((d) => d.Sector)));
    let xCoords = sectors.map((d, i) => 150 + i * 150);
    let xScale = d3.scaleOrdinal().domain(sectors).range(xCoords);

    let yScale = d3
      .scaleLinear()
      .domain(d3.extent(data.map((d) => +d["Return"])))
      .range([height - 50, 50]);

    let color = d3.scaleOrdinal().domain(sectors).range(d3.schemePaired);

    let marketcapDomain = d3.extent(data.map((d) => d["Market Cap"]));
    marketcapDomain = marketcapDomain.map((d) => Math.sqrt(d));
    let size = d3.scaleLinear().domain(marketcapDomain).range([5, 30]);

    svg
      .selectAll(".circ")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "circ")
      .attr("stroke", "black")
      .attr("fill", (d) => color(d.Sector))
      .attr("r", (d) => size(Math.sqrt(d["Market Cap"])))
      .attr("cx", (d) => xScale(d.Sector))
      .attr("cy", (d) => yScale(d.Return));

    let simulation = d3
      .forceSimulation(data)
      .force(
        "x",
        d3
          .forceX((d) => {
            return xScale(d.Sector);
          })
          .strength(0.2)
      )
      .force(
        "y",
        d3
          .forceY(function (d) {
            return yScale(d.Return);
          })
          .strength(1)
      )
      .force(
        "collide",
        d3.forceCollide((d) => {
          return size(Math.sqrt(d["Market Cap"]));
        })
      )
      .alphaDecay(0)
      .alpha(0.3)
      .on("tick", tick);

    function tick() {
      d3.selectAll(".circ")
        .attr("cx", (d) => {
          return d.x;
        })
        .attr("cy", (d) => d.y);
    }

    let init_decay = setTimeout(function () {
      console.log("start alpha decay");
      simulation.alphaDecay(0.1);
    }, 3000);
  });
</script>
