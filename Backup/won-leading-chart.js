var selectWonLeadSeatChart = d3.select('#all-lk-seats')

d3.select('#all-lk-seats').append("div").attr("class", "seattooltip")

selectWonLeadSeatChart.selectAll(".clusterbox")
    .data(sortedData).enter().append("div")
    .attr("class", "clusterbox")
    .style("width", "11px")
    .style("height", "11px")
    .style("float", "left")
    .style("margin", "2px")
    .attr("data-pccode", function(d){
        return d.pcno;
    })
    .attr("data-statecode", function(d){
        return d.stateCode;  
    })
    .style("background-color", function(d){
        return d.colors;
    })
    // .on("mouseover", function(d){
    //     console.log("test");
    //     d3.select(".seattooltip").html("Test")
    // })
    .on("click", function(d, i){
        var fd = _.filter(constituency_2019, function(obj){
            return obj.stateCode === d.stateCode && obj.pcno === d.pcno;
        });
        console.log(fd[0]);
        fetchdataBox("2019",d.stateCode,d.pcno);
//         constituencyName: "Secundrabad"
// leadingCandidate: "G . Kishan Reddy"
// leadingParty: "Bharatiya Janata Party"
// margin: 62114
// pcno: 8
// stateCode: "S29"
// stateName: "Telangana"
// status: "Result Declared"
// trailingCandidate: "Talasani Sai Kiran Yadav"
// trailingParty: "Telangana Rashtra Samithi"

    })



    function drawseatssquare(selector, data){
        var selectWonLeadSeatChart = d3.select(selector)
        // d3.select(selector).append("div").attr("class", "seattooltip")
        selectWonLeadSeatChart.selectAll(".wl-seats")
            .data(data).enter().append("div")
            .attr("class", "wl-seats")
            .style("width", "11px")
            .style("height", "11px")
            .style("float", "left")
            .style("margin", "2px")
            .attr("data-pccode", function(d){
                return d.pcno;
            })
            .attr("data-statecode", function(d){
                return d.stateCode;  
            })
            .style("background-color", function(d){
                return d.colors;
            })
    }

