console.log("good to go");

// create a ready on function for jquery

$(document).ready(readyOn)

function readyOn() {
    /* first set it up so when the user inputs anything into the fields
     it gets put in an object and pushed into an array to be looped over later */


    $("#submittButton").on("click", function () {
        employee.push({
            fName: $("#firstName").val(),
            lName: $("#lastName").val(),
            ID: $("#id").val(),
            title: $("#title").val(),
            monthlySalary: $("#monthlySalary").val(),
        });
        // this will clear the input fields after the submit button is clicked
        $("#firstName").val("")
        $("#lastName").val("")
        $("#id").val("")
        $("#title").val("")
        $("#monthlySalary").val("")
        addEmployee(employee);
    });
    /* attaching a listner to to the table body so when the delete button is clicked it 
    deletes just the row it was clicked on*/

    $("#tableBody").on("click", "#delete", deleteTable);
}
// defining global variables to be updated and appended at the end of the code 

let totalMonthly = 0;
let sum = 0;
let employee = [];


/* empties the tabl so it only adds what is added
 to the employees array in between submitt button clicks */

// then it loops over each item in the employee array and appends them to the table body 

//then adds to the global sum so it can keep track of the total monthly spenditure
function addEmployee(employees) {
    $("#tableBody").empty();
    for (let i = 0; i < employees.length; i++) {
        $("#tableBody").append(
            `<tr><td>` + employees[i].fName + `</td><td>` + employees[i].lName
            + `</td><td>` + employees[i].ID + `</td><td>` + employees[i].title
            + `</td><td>` + employees[i].monthlySalary + `</td><td>`
            + `<button id = "delete"> delete </button></td></tr>`);
        sum = Number(employees[i].monthlySalary)
    };

    // takes the global sum and updates the total monthly variable and appends it the th DOM
    totalMonthly += sum;
    $("#totalSum").text(totalMonthly);
    /* sets it up so the if ttotal monthly gets over 20k
     it colors the text red to alert the user to over spending */

    if (totalMonthly > 20000) {
        $("#totalSum").css("color", "red")
    };
}
//sets up the delete function to delete the row that it was cliocked on 

/*needs to have the event passed in as an argument becuse
 the delete button dosent exist when the page loads 

 finally sets the employee array an empty array to ensure nothing uninentional gets added*/

function deleteTable(event) {
    $(event.target).closest('tr').remove();
    $("#totalSum").text(totalMonthly);
    employee = []
};





