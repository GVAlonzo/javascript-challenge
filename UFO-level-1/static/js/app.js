// console.log("app.js loaded");

// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Function to update the HTML table with data from data.js
//  with passed data as a parameter
function displayTable(displayData){
    displayData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
};

// Initial load of unfiltered data
displayTable(tableData);

// Select the button
var button = d3.select("#filter-btn");
var resetButton = d3.select("#reset-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);
resetButton.on("click",runReset)

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    // Filter data based on the date entered
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  
    // Clear original HTML table
    tbody.html("");

    // Display all filtered data
    displayTable(filteredData);
};

function runReset(){
    tbody.html("");
    displayTable(tableData);
};