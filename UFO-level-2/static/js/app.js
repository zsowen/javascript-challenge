// from data.js
var tableData = data;

// Select the table
var tbody = d3.select("tbody");

//Create build table function
function buildTable(data) {

    tbody.html("");

    data.forEach((Row) => {

        var row = tbody.append("tr");
        Object.entries(Row).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};


buildTable(tableData)

// Select the buttons
var filterbutton = d3.select("#filter-btn");
var resetbutton = d3.select("#reset-btn")

// Select the form
var form = d3.select("#form");

// Create event handlers 
filterbutton.on("click", filterData);
form.on("submit", filterData);

// Complete the event handler function for the form
function filterData() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input elements and get the raw HTML node
  var inputDate = d3.select("#datetime");
  var inputCity = d3.select("#city");
  var inputState = d3.select("#state");
  var inputCountry = d3.select("#country");
  var inputShape = d3.select("#shape");
  

  // Get the value property of the input elements
  var dateValue = inputDate.property("value");
  var cityValue = inputCity.property("value");
  var stateValue = inputState.property("value");
  var countryValue = inputCountry.property("value");
  var shapeValue = inputShape.property("value");


  //Create a new filtered data set
  var filteredData = tableData.filter(function (desired) {
    return ((desired.datetime === dateValue) && 
            (desired.city === cityValue) &&
            (desired.state === stateValue) &&
            (desired.country === countryValue) &&
            (desired.shape === shapeValue)
  )});

  //View filtered data
  console.log(filteredData);

//Build table with filtered data
buildTable(filteredData)
};

//Create reset funtion
function resetTable(){
    tbody.html("")
    buildTable(tableData)
};

resetbutton.on("click", resetTable)