// Q1 -- create an array of numbers and take input from the user to add another number to the array 

// array = [4, 45, 34, 6, 3, 1, 1]
// array.push(parseInt(prompt("enter a no.")))

// prompt should be used in browser
// prompt will return string 
// parseInt will convert the string to int 
// push function pushes the new int to the array  

// Q2 -- add more no. until 0
// console.log(array)
// let i
// while(i!=0){
//     i = parseInt(prompt("enter a no."))
//     if(i==0){
//         break;
//     }
//     array.push
// }


// do {
//     i = parseInt(prompt("enter a no."))
//     array.push(i)
// } while (i!=0);

// Q3 -- filter for numbers divisible by 10 in a given array

// arr = [ 10, 20, 30, 45, 33, 60, 5]

// let fil = arr.filter((el)=>{
//      return el%10 == 0
// })
// console.log(fil)

// Q4 -- create an array of given numbers 
// arr = [2, 5, 4, 3]

// let ar = arr.map((el)=>{
//     return el*el
// })
// console.log(ar);

// Q5 -- use reduce to find the factorial of a given number from array of first n natural number
// (n being the number whose factorial needs to be calculated)

// arr = [1, 2, 3, 4]
// const fact = (e1, e2)=>{
//     return e1*e2
// }
// let red = arr.reduce(fact)
// console.log(red);


// Q6 -- guess the Number 

let count = 0
let num = Math.floor(Math.random()* 100)    //// Returns a random integer from 0 to 99
let value
value = prompt("guess the number between 0 to 100 ")

do {
    if (num > value) {
        console.log("number is greater");
    } else {
        console.log("number is smaller");
    }
        count++
        value = prompt("try again")
} while (num!= value);

console.log("you guessed the corrent Number : " + num)
console.log("your score : " , 100 - count);