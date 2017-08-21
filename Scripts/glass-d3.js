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
                .attr("height", h) //set the height of our svg
                .style("fill", "red");
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

        };

    // parse the date / time
    var parseTime = d3.timeParse("%Y");

    // set the ranges
    var x = d3.scaleTime().range([0, w]);
    var y = d3.scaleLinear().range([h, 0]);

    // define the line
    var valueline = d3.line()
        .x(function(d) { return x(d.Date); })
        .y(function(d) { return y(d.Imports); });

    var x = d3.scaleTime().range([0, w]);
    var y = d3.scaleLinear().range([h, 0]);


    renderLine = function(objId, dataObj) {

        // format the data
        dataObj.forEach(function(d) {
            d.Date = parseTime(d.Date);
            d.Imports = +d.Imports;
            d.Exports = +d.Exports;
        });

        // sort years ascending
        dataObj.sort(function(a, b) {
            return a["Date"] - b["Date"];
        })
        var svg = d3.select(objId)
            .append("svg:svg") //add a new <svg> html element
            .attr("width", w) //set the width of our svg
            .attr("height", h); //set the height of our svg;
        var viz = svg.append("path")
            .data([dataObj])
            .attr("class", "line")
            .attr("d", valueline);


    };
    return {
        render: render,
        renderLine: renderLine
    };
};