var trace1 = {
    x: ["Pikachu", "Eevee"],
    y: [150.00, 125.00],
    type: "bar"
};

var data = [trace1];

var layout = {
    title: "Pokemon - Starter and Legandary Comparisson",
    xaxis: {title: "Pokemon"},
    yaxis: {title: "Total Power"}
};

Plotly.newPlot("plot", data, layout);
