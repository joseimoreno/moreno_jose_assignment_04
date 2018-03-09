/*eslint-env browser*/
//STEP 1
/*
var movies = ["Pulp fiction", "Friday", "Reservoir Dogs", "Scarface", "Goodfellas"];
window.console.log(movies[1]);
*/

//STEP 2
/*
var movies = new Array(5);
movies[0] = "Pulp fiction";
movies[1] = "Friday";
movies[2] = "Reservoir Dogs";
movies[3] = "Scarface";
movies[4] = "Goodfellas";
window.console.log(movies[0]);
*/

//STEP 3
/*
var movies = new Array(5);
movies[0] = "Pulp fiction";
movies[1] = "Friday";
movies[2] = "Reservoir Dogs";
movies[3] = "Scarface";
movies[4] = "Goodfellas";
movies[5] = "Boiler Room";
window.console.log(movies.length);
*/

//STEP 4
/*
var movies = ["Pulp fiction", "Friday", "Reservoir Dogs", "Scarface", "Goodfellas"];
delete movies[0];
window.console.log(movies);
*/

//STEP 5
/*
var i;
var movies = ["Pulp fiction", "Friday", "Reservoir Dogs", "Scarface", "Goodfellas", "Boiler Room", "El Infierno"];
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}
*/

//STEP 6
/*
var index;
var movies = ["Pulp fiction", "Friday", "Reservoir Dogs", "Scarface", "Goodfellas", "Boiler Room", "El Infierno"];
for (index in movies) {
    window.console.log(movies[index]);
}
*/

//STEP 7
/*
var index;
var movies = ["Pulp fiction", "Friday", "Reservoir Dogs", "Scarface", "Goodfellas", "Boiler Room", "El Infierno"];
index = movies.sort();
for (index in movies) {
    window.console.log(movies[index]);
}
*/

//STEP 8
/*
var i;
var j;
var movies = ["Pulp fiction", "Friday", "Reservoir Dogs", "Scarface", "Goodfellas", "Boiler Room", "El Infierno"];
var leastFavMovies = ["Steel", "Batman Forever", "Bucky Larson"];
var title1 = "Movies I like:\n";
window.console.log(title1 + "\n\n");
movies[7] = "...";
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}
var title2 = "Movies I regret watching:\n";
window.console.log("\n\n" + title2 + "\n\n");
leastFavMovies[3] = "...";
for (j = 0; j < leastFavMovies.length; j += 1) {
    window.console.log(leastFavMovies[j]);
}
*/

//STEP 9
/*
var i;
var movies = ["Pulp fiction", "Friday", "Reservoir Dogs", "Scarface", "Goodfellas", "Boiler Room", "El Infierno"];
movies = movies.concat("Steel", "Batman Forever", "Bucky Larson");
movies = movies.sort();
movies = movies.reverse();
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}
*/

//STEP 10
/*
var i;
var movies = ["Pulp fiction", "Friday", "Reservoir Dogs", "Scarface", "Goodfellas", "Boiler Room", "El Infierno"];
movies = movies.concat("Steel", "Batman Forever", "Bucky Larson");
movies = movies.sort();
movies = movies.reverse();
movies = movies.pop();
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies);
}
*/

//STEP 11
/*
var i;
var movies = ["Pulp fiction", "Friday", "Reservoir Dogs", "Scarface", "Goodfellas", "Boiler Room", "El Infierno"];
movies = movies.concat("Steel", "Batman Forever", "Bucky Larson");
movies = movies.sort();
movies = movies.reverse();
movies = movies.shift();
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies);
}
*/

//STEP 12
/*
var movies = ["Pulp fiction", "Friday", "Reservoir Dogs", "Scarface", "Goodfellas", "Boiler Room", "El Infierno", "Steel", "Batman Forever", "Bucky Larson"];
movies.splice(7, 9, "Black Panther", "Coco", "CB4");
window.console.log(movies);
*/

//STEP 13
/*
var employee1 = [];
employee1["id"] = "1000";
employee1["name"] = "Pancho Pantera";
employee1["title"] = "Driver";
employee1["department"] = "Shipping and Receiving";
employee1["current"] = false;

var employee2 = [];
employee2["id"] = "1001";
employee2["name"] = "Tony Tiger";
employee2["title"] = "Sales";
employee2["department"] = "Sales and Marketing";
employee2["current"] = true;

var employees = [employee1, employee2];
window.console.log(employees[1]["name"]);
*/

//STEP 14
/*
var employee1 = [];
employee1["id"] = "1000";
employee1["name"] = "Pancho Pantera";
employee1["title"] = "Driver";
employee1["department"] = "Shipping and Receiving";
employee1["current"] = false;

var employee2 = [];
employee2["id"] = "1001";
employee2["name"] = "Tony Tiger";
employee2["title"] = "Sales";
employee2["department"] = "Sales and Marketing";
employee2["current"] = true;

var employees = [employee1, employee2];
var i;
for (i =0; i < 2; i += 1) {
window.console.log(employees[i]["name"]);
}
*/

//STEP 15
/*
var employee1 = [];
employee1["id"] = "1000";
employee1["name"] = "Pancho Pantera";
employee1["title"] = "Driver";
employee1["department"] = "Shipping and Receiving";
employee1["current"] = true;

var employee2 = [];
employee2["id"] = "1001";
employee2["name"] = "Tony Tiger";
employee2["title"] = "Sales";
employee2["department"] = "Sales and Marketing";
employee2["current"] = true;

var employee3 = [];
employee3["id"] = "1002";
employee3["name"] = "Smacks Frog";
employee3["title"] = "Technician";
employee3["department"] = "Manufacturing";
employee3["current"] = false;

var employees = [employee1, employee2, employee3];
var i;
for (i =0; i < employees.length; i += 1) {
    if (employees[i]["current"])
window.console.log(employees[i]["name"]);
}
*/

//STEP 16
/*
var movies = [["Reservoir Dogs", 1], ["Scarface", 2], ["Goodfellas", 3], ["Boiler Room", 4], ["El Infierno", 5]];
var moviesNames = [];
var moviesName = [];
movies.forEach(function (movies) {
    "use strict";
    moviesName = movies.filter(function (item) {
    return typeof item === "string";
});
moviesNames = moviesNames.concat(moviesName);
});
window.console.log(moviesNames);
*/

//STEP 17
/*
var employees = ["Tom", "Herald", "Sally", "Monty", "Tammy"];

function showEmployees(employees) {
    "use strict";
    employees.forEach(function (employee) {
        window.console.log(employee);
    });
}
window.console.log("Employees:");
window.console.log("");
showEmployees(employees);
*/

//STEP 18
/*
var testData = [58, "", "abcd", true, null, false, 0];
function filterValues() {
    "use strict";
    testData =
testData.filter(function (item){
        return item !== "";
    });
    testData =
testData.filter(function (item){
        return item !== null;
    });
    testData =
testData.filter(function (item){
        return item !== false;
    });
    testData =
testData.filter(function (item){
        return item !== 0;
    });
window.console.log(testData);    
}
filterValues(testData);
*/

//STEP 19
/*
var numberSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function randomPosition(numberSet) {
    "use strict";
    var randomNumber = parseInt(Math.random() * numberSet.length, 10);
    return numberSet[randomNumber];
    
}
window.document.write(randomPosition(numberSet));
*/

//STEP 20

var numberSet1 = [1, 2, 3, 4, 5, 12, 7, 9, 8, 10];

function largestNumber(numberSet1) {
    "use strict";
    numberSet1 = numberSet1.sort();
    window.document.write(numberSet1);
}
largestNumber(numberSet1);
