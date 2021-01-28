// Assign the data from `data.js` to a descriptive variable
var ufoData = data;


// Get a reference to the table body
var tbody = d3.select("tbody");
d3.select("table").attr("class", "table table-striped");

//Loop Through `data` and console.log each UFO report object
ufoData.forEach((ufoReport) => {
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});



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
  
  // Select the input element (date) and get the raw HTML node
  var inputDate = d3.select("#date_time");

  // Get the value property of the input element (date)
  var inputDateValue = inputDate.property("value");

  // Select the input element (city) and get the raw HTML node
  var inputCity = d3.select("#city_id");

  // Get the value property of the input element (city)
  var inputCityValue = inputCity.property("value");

  // Select the input element (state)) and get the raw HTML node
  var inputState = d3.select("#state_id");

  // Get the value property of the input element (state)
  var inputStateValue = inputState.property("value");

  // Select the input element (country) and get the raw HTML node
  var inputCountry = d3.select("#country_id");

  // Get the value property of the input element (country)
  var inputCountryValue = inputCountry.property("value");

  // Select the input element (shape) and get the raw HTML node
  var inputShape = d3.select("#shape_id");

  // Get the value property of the input element (shape)
  var inputShapeValue = inputShape.property("value");


//Filter the table data according to input value entered 
var filteredData = ufoData; 
if (inputDateValue){
  filteredData = filteredData.filter(items => items.datetime === inputDateValue);
  };
  console.log(filteredData);

if (inputCityValue){
    filteredData = filteredData.filter(items => items.city === inputCityValue);
    };

if (inputStateValue){
      filteredData = filteredData.filter(items => items.state === inputStateValue);
      };
      
if (inputCountryValue){
        filteredData = filteredData.filter(items => items.country === inputCountryValue);
        };
        
if (inputShapeValue){
          filteredData = filteredData.filter(items => items.shape === inputShapeValue);
          };       


  console.log(filteredData); 
  tbody.html(' ');
  filteredData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};



