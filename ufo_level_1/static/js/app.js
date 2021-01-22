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

// Assign the data from `data.js` to a descriptive variable
// var people = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#date_time");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Select the input element and get the raw HTML node
  var inputCity = d3.select("#city_id");

  // Get the value property of the input element
  var inputCityValue = inputCity.property("value");

  var inputState = d3.select("#state_id");

  // Get the value property of the input element
  var inputStateValue = inputState.property("value");

  // Select the input element and get the raw HTML node
  var inputCountry = d3.select("#country_id");

  // Get the value property of the input element
  var inputCountryValue = inputCountry.property("value");

  // Select the input element and get the raw HTML node
  var inputShape = d3.select("#shape_id");

  // Get the value property of the input element
  var inputShapeValue = inputShape.property("value");


 
var filteredData = tableData  
if (inputValue){
  filteredData = filteredData.filter(items => items.datetime === inputValue);
  }
  console.log(filteredData);

if (inputCityValue){
    filteredData = filteredData.filter(items => items.city === inputCityValue);
    }

if (inputStateValue){
      filteredData = filteredData.filter(items => items.state === inputStateValue);
      }
      
if (inputCountryValue){
        filteredData = filteredData.filter(items => items.country === inputCountryValue);
        }
        
if (inputShapeValue){
          filteredData = filteredData.filter(items => items.shape === inputShapeValue);
          }        


    console.log(filteredData); 
  tbody.html(' ')
  filteredData.forEach(function(ufoReport) {
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
}



