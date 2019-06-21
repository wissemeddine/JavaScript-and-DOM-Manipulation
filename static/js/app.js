//Logic for Filter Table button.   

// Create an object from data.js
var tableData = data;

// YOUR CODE HERE

// creating a filter funcation array to filter the datat based on the entered criteria we define 
function check_fields_and_filter(){

    // Selecting inputs element 
    var dateElement = d3.select("#datetime");
    var cityElement = d3.select("#city");
    var stateElement = d3.select("#state");

    // calling the element's value
    var dateValue = dateElement.property("value");    
    var cityValue = cityElement.property("value");    
    var stateValue = stateElement.property("value");     

    // Ccreating an i statement ti loop through and see the correct input value
    if(dateValue.length != 0){
        var filteredData = tableData.filter(entry => entry.datetime === dateValue);
        return filteredData;
    }
    else if(cityValue.length != 0){
        var filteredData = tableData.filter(entry => entry.city === cityValue);
        return filteredData;
    }
    else if(stateValue.length != 0){
        var filteredData = tableData.filter(entry => entry.state === stateValue);
        return filteredData;
    }
}

// D3.select funcation is able to find inputs entered different
var submit = d3.select("#filter-btn");

// Event Handler
submit.on("click", function(){
    d3.event.preventDefault();
    // check filtered data is list of dictionaries
    filteredData = check_fields_and_filter();
    // Return the filtered data into the HTML table
    var tbody = d3.select("tbody");
    filteredData.forEach(function(ufo_sighting) {
        // Use d3 to append one table row `tr` for each ufo_sighting object 
        var row = tbody.append("tr");
        
        // Loop through each element of the data 
        Object.entries(ufo_sighting).forEach(function([key, value]) {
            // Use d3 to append 1 cell per table value
            var cell = row.append("td");
            // Use d3 to fill in each cell with data values.
            cell.text(value);
        });
    });
});