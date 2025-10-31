/*  Task 1: Day of the Week Message
Scenario: Develop a webpage that displays a special message 
based on the current day of the week.

“Start your week strong!” for Monday.
“Keep going!” for Tuesday.
“Halfway there!” for Wednesday.
“Almost the weekend!” for Thursday.
“Happy Friday!” for Friday.
“Enjoy your weekend!” for Saturday and Sunday.*/

var inp=prompt("enter the day");
switch (inp){
    case 'Monday':
        console.log("Start your week strong!");
        break;
    case 'Tuesday':
        console.log("Keep going!");
        break;
    case 'Wednesday':
        console.log("Halfway there!");
        break;
    case 'Thursday':
        console.log("Almost the weekend!");
        break;
    case 'Friday':
        console.log("Happy Friday!");
        break;
    case 'Saturday':
        console.log("Enjoy your weekend!");
        break;
    case 'Sunday':
        console.log("Enjoy your weekend!");
        break;
}


/*Task 2: Traffic Light Simulation
Scenario: Simulate a traffic light system.

“Stop” if the light is red.
“Get Ready” if the light is yellow.
“Go” if the light is green.
Task:

Prompt the user to enter the color of the traffic light.
Display the corresponding action.*/

var ch=prompt("enter the color :");
switch (ch) {
    case 'red':
        console.log("STOP !");
        break;
    case 'yellow':
        console.log("Get Ready");
        break;
    case 'green':
        console.log("GO");
        break;
    default:
        console.log("Invalid color");
}


/*Task 3: Discount Calculator
Scenario: Calculate the discount based on the total purchase amount.

“No discount” if the amount is less than $50.
“5% discount” if the amount is between $50 and $100.
“10% discount” if the amount is between $101 and $200.
“15% discount” if the amount is above $200.*/

var inp=+prompt("enter the amount");
if(inp>0 && inp<50){
    console.log("No discount");
}
else if(inp>=50 && inp<=100){
    console.log("5% discount that is"+ inp*0.05);
}
else if(inp>=101 && inp<200){
    console.log("10% discount that is"+ inp*0.1);
}
else if(inp>=200){
    console.log("15% discount that is"+ inp*0.15);
}


/*Prompt the user to enter the total purchase amount.
Display the discount percentage.*/

var inp=+prompt("enter the amount");
if(inp>0 && inp<50){
    console.log("No discount");
}
else if(inp>=50 && inp<=100){
    console.log("5% discount ");
}
else if(inp>=101 && inp<200){
    console.log("10% discount");
}
else if(inp>=200){
    console.log("15% discount");
}


/*Task 4: Restaurant Menu
Scenario: You are developing a restaurant menu system that provides
 the price of a dish based on the dish name.

Task:
Assume a variable dish holds the name of the dish as a string (e.g.,  "Biriyani", "shawarma", "Fried rice", "veg pula").
Print the price.*/

var ch=prompt("enter the dish name");
switch (ch) {
    case '1':
        console.log("Biriyani---350/-.");
        break;
    case '2':
        console.log("shawarma---150/-.");
        break;
    case '3':
        console.log("Fried rice---100/-.");
        break;
    case '4':
        console.log("veg pula---150/-.");
        break;
}

/*Task 5: Simple Calculator
Scenario: You are developing a simple calculator that performs
 basic arithmetic operations.*/
var inp1 = +prompt("enter the number:");
var inp2 = +prompt("enter the number:");
var ch = prompt("enter the operation (+, -, *, /, //):");

switch (ch) {
    case '+':
        console.log(inp1 + inp2);
        break;
    case '-':
        console.log(inp1 - inp2);
        break;
    case '*':
        console.log(inp1 * inp2);
        break;
    case '/':
        console.log(inp1 / inp2);
        break;
    case '//':
        console.log(Math.floor(inp1 / inp2)); // integer division
        break;
    default:
        console.log("Invalid operation!");
}