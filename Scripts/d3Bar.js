var D3Chart = function() {
    var ctx,
        margin = { top: 40, left: 75, right: 0, bottom: 75 },
        chartHeight,
        chartWidth,
        yMax,
        xMax,
        data,
        maxYValue = 0,
        ratio = 0,
        renderType = { lines: 'lines', points: 'points' },
        render = function(objId, dataObj) {
            var selectDiv = d3.select("#2D1M")
                .append("svg:svg") //add a new <svg> html element
                .attr("width", 600)
                .attr("height", 600)
                .style("fill", "blue");
            selectDiv.append("rect") //add a new <rect> html element which will be our bar
                .attr("width", 50) //set the width of our bar
                .attr("height", 200) //set the height of our bar
                .style("fill", "blue"); //fill the bar w/ the color blue
            renderChart();
        },
        renderChart = function() {
            renderBackground();
        },
        renderBackground = function() {

        };
    return {
        render: render
    };
};