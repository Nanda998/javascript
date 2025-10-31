/*Task 1: Print Numbers from 1 to 10
Instructions:
Use a for loop to print numbers from 1 to 10.
Display the numbers in the console.*/
for(var i=1;i<=10;i++){
    console.log(i)
}

/*Task 2: Print Even Numbers from 1 to 20
Scenario: Write JavaScript code that prints all even numbers from 1 to 20.
Instructions:
Use a for loop to iterate from 1 to 20.
Use an if statement to check if a number is even and print it.*/
for(var i=1;i<=20;i++){
    if(i%2==0){
        console.log(i)
    }
}

/*Task 3: Print Multiples of 5 up to 50
Scenario: Write JavaScript code that prints all multiples of 5 up to 50.
Instructions:
Use a for loop to iterate from 1 to 50.
Use an if statement to check if a number is a multiple of 5 and print it.*/
for(var i=1;i<=50;i++){
    if(i%5==0){
        console.log(i)
    }
}

/*Task 4: Sum of Numbers from 1 to 100
Scenario: Write JavaScript code that calculates the sum of numbers from 1 to 100.
Instructions:
Use a for loop to iterate from 1 to 100.
Add each number to a sum variable and print the total sum.*/
sum=0
for(var i=1;i<=100;i++){
    sum +=i
}
console.log(sum)

/*Task 5: Create a JavaScript program that calculates the factorial of a given number using a for loop.
Instructions:
Use a for loop to multiplication the given 
Take prompt from the user
hint: take count value as 1;*/
var inp=prompt("enter the number :");
fact=1
for (var i=1;i<=inp;i++){
    fact=fact*i;
}
console.log(fact)

/*Task 6: Print Numbers in Reverse Order
Scenario: Write JavaScript code that prints numbers from 10 to 1 in reverse order.
Instructions:
Use a for loop to count down from 10 to 1.
Display the numbers in the console.*/
for(var i=10;i>=1;i--){
    console.log(i)
}


/*reverse a string input: hello output : olleh
find a even numbers in an array - [23,54,67,64,46,95,98]
iterate an object values and keys using for of loop*/
var inp=prompt('enter the string');
str=''
for(i in inp){
    str=inp[i]+str;
}
console.log(str)

var inp=[23,54,67,64,46,95,98];
for(i in inp){
    if(inp[i]%2==0){
        console.log(inp[i])
    }
}