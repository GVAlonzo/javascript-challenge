// ************************************************************
// *  JavaScript Homework - JavaScript and DOM Manipulation
// *
// *    Author: George Alonzo
// *  Due Date: December 11, 2021
// *
// ************************************************************

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

// Select the buttons
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

    var filteredData = tableData;

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the datetime input element and value
    var dateInputElement = d3.select("#datetime");
    var dateInputValue = dateInputElement.property("value");

    // Select the city input element and value
    var cityInputElement = d3.select("#city");
    var cityInputValue = cityInputElement.property("value");    

    // Select the state input element and value
    var stateInputElement = d3.select("#state");
    var stateInputValue = stateInputElement.property("value");    
    
    // Select the country input element and value
    var countryInputElement = d3.select("#country");
    var countryInputValue = countryInputElement.property("value");      
  
    // Select the shape input element and value
    var shapeInputElement = d3.select("#shape");
    var shapeInputValue = shapeInputElement.property("value");  

    if (dateInputValue){
        // Filter data based on the date entered
        filteredData = filteredData.filter(sighting => sighting.datetime === dateInputValue);
    };

    if (cityInputValue){
        // Filter data based on the city entered
        filteredData = filteredData.filter(sighting => sighting.city === cityInputValue);
    };

    if (stateInputValue){
        // Filter data based on the state entered
        filteredData = filteredData.filter(sighting => sighting.state === stateInputValue);        
    };   

    if (countryInputValue){
        // Filter data based on the country entered
        filteredData = filteredData.filter(sighting => sighting.country === countryInputValue);         
    };      

    if (shapeInputValue){
        // Filter data based on the shape entered
        filteredData = filteredData.filter(sighting => sighting.shape === shapeInputValue);           
    };  

    // Clear original HTML table
    tbody.html("");

    // Display all filtered data
    displayTable(filteredData);
};

// Reset function to clear input field(s) and reload original,
//   unfiltered data
function runReset(){
    d3.select("#datetime").node().value = "";
    d3.select("#city").node().value = "";
    d3.select("#state").node().value = "";
    d3.select("#country").node().value = "";
    d3.select("#shape").node().value = "";
    tbody.html("");
    displayTable(tableData);
};