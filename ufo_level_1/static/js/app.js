// from data.js
var tableData = data;


// YOUR CODE HERE!
var tbody = d3.select("tbody");
d3.select("table").attr("class", "table table-striped");

tableData.forEach(function(ufoReport) {
      console.log(ufoReport);
      var tr = tbody.append("tr")
      tr.append("td").text(ufoReport.datetime)
      tr.append("td").text(ufoReport.city)
      tr.append("td").text(ufoReport.state)
      tr.append("td").text(ufoReport.country)
      tr.append("td").text(ufoReport.shape)
      tr.append("td").text(ufoReport.durationMinutes)
      tr.append("td").text(ufoReport.comments)
    });
