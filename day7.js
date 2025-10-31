/*Task 1: Greeting Function
Scenario: Create a function that takes a name as an argument and returns a greeting message.
Task:
Define a function greet that takes one parameter name.
The function should print a greeting message like “Hello, [name]!”.
Call the function with different names and print the results.*/
function greet(name){
    console.log("Hello, " + name +"!.")
}
greet("nanda");

/*Task 2: Sum Function
Scenario: Create a function that takes two numbers as arguments and returns their sum.
Task:
Define a function sum that takes two parameters a and b.
The function should return the sum of a and b.
Call the function with different numbers and print the results.*/
function sum(a,b){
    console.log(a+b);
}
sum(5,6)
sum(9,7)
sum(10,24)

/*Task 3: Square Function
Scenario: Create a function that takes a number as an argument and returns its square.
Task:
Define a function square that takes one parameter num.
The function should return the square of num.
Call the function with different numbers and print the results.*/
function squ(a){
    console.log(a*a)
}
squ(5)
squ(8)

/*Task 4: Average Function
Scenario: Create a function that takes an array of numbers as an argument and returns the average.
Task:
hint:[2,5,2] =9/3=3
Define a function average that takes one parameter arr.
The function should return the average of the numbers in arr.
Call the function with different arrays and print the results.*/

var arr = [2, 3, 4, 5, 6];

function avg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(avg(arr)); 