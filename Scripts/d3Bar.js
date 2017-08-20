var D3Chart = function() {
    var ctx,
        margin = { top: 40, left: 75, right: 0, bottom: 75 },
        w = 300,
        h = 150,
        padding = 2,
        chartHeight,
        chartWidth,
        yMax,
        xMax,
        data,
        maxYValue = 0,
        ratio = 0,
        renderType = { lines: 'lines', points: 'points' },
        render = function(objId, dataObj) {
            var selectDiv = d3.select(objId)
                .append("svg:svg") //add a new <svg> html element
                .attr("width", w) //set the width of our svg
                .attr("height", h); //set the height of our svg
            selectDiv.selectAll(".bar")
                .data(dataObj)
                .enter().append("rect")
                .attr("class", "bar")
                .attr("x", function(d, i) {
                    return (i * w / dataObj.length);
                })
                .attr("y", function(d) {
                    return (h - d * 4)
                })
                .attr("width", w / dataObj.length - padding)
                .attr("height", function(d) {
                    return (d * 4)
                })

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