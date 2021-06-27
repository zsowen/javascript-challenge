// from data.js
var tableData = data;

// Select the table body
var tbody = d3.select("tbody");

//Build Function to Build Table
function buildTable(data) {

  //Clear any existing table
  tbody.html("");

  //Iterate through the data to create all necessary rows
  data.forEach((dataRow) => {
    var row = tbody.append("tr");
    Object.entries(dataRow).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});
}

//Build the table
buildTable(tableData);


// Select the button
var filterbutton = d3.select("#filter-btn");
var resetbutton = d3.select("#reset-btn")

// Select the form
var form = d3.select("#form");

// Create event handlers 
filterbutton.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  //Check that your data is being capture properly
  console.log(inputValue);
  console.log(tableData);

  //Create a new filtered data set
  var filteredData = tableData.filter(dataRow => dataRow.datetime === inputValue);

  //View filtered data
  console.log(filteredData);

//Build table with filtered data
buildTable(filteredData)
};

//Create reset function
function resetTable(){
  tbody.html("")
  buildTable(tableData)
};

resetbutton.on("click", resetTable)