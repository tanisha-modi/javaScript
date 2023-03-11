console.log("tanisha")
var a = 67
var a = "p"   // var se redeclare bhi kr skte h
console.log(a)
a = "harry"
console.log(a)   // error nhi degi ...type btane ki jrvt nhi hai
                 // js is case-sensitive

           
var p = 45;
let b = "harry";   // let can be updated but not redeclared
var c = null;
var d = undefined
console.log(c)
console.log(d)
{
    let b = 'this'
    console.log(b)
}
console.log(b)

const items = {
    "tanihs" : true,
    "shubh": false,
    "lovish": 67,
    "rohan": undefined
}
console.log(items["shubh"])


console.log(b+p)    //concatenate string
console.log(typeof (b+p))


// let six = prompt("whats your age?")   //takes input as string thorugh popup
// six = Number.parseInt(six)
// console.log()              // converts the string to int 
// if ( six > 18) {
//     alert("you are eligible")
// } else {
//     alert("you are not eligible")
// }

// console.log("you can ", (six > 20? "marry" : "not marry now"));


const marks = {          // tho y const h, isme add aur modify kr skte ...bcoz const sirf marks point krne k liye 
    shambhu : 12,
    tanu : 14,
    monu : 12,
    sonu : 10
}

for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("the marks of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]])
    
}

for (let key in marks) {
    console.log("the marks of " +  key + " is " + marks[ key]);
}

let g1 = "shira"
let g2 = "shora"

let sentence = `${g1} is frnd of ${g2}`
console.log(sentence);


let arr = [551, 278, 3, 5, 78, 43, 21, 377]
arr.sort()
console.log(arr);

let compare = (a,b)=>{
   return b-a
}
console.log(arr.sort(compare))

let array = [2,4,54,6]

array.forEach((element) => {        // does not make new array 
    console.log(element*element);
})

let ar = array.map((value, index, array)=>{      // creates new array
    console.log(value, index, array);
    return value +2
})
console.log(ar);

let ar2 = array.filter((value)=>{
    return value > 50;
})
console.log(ar2);

console.log(array)   // map, forEach, filter does not modify original array

// Array reduce method 
let a3 = array.reduce((h1, h2)=>{
    return h1 + h2
})
console.log(a3);
console.log("hell");

// the above function can be also written as 
const reduce_func = (h1, h2)=>{
    return h1 + h2;
}
let red = array.reduce(reduce_func)
console.log(red);

let i 
i = 20
console.log(i)



// let count = 0
// let num = Math.floor(Math.random()* 100)    //// Returns a random integer from 0 to 99
// let value
// value = prompt("guess the number between 0 to 100 ")

// do {
//     if (num > value) {
//         console.log("number is greater");
//     } else {
//         console.log("number is smaller");
//     }
//         count++
//         value = prompt("try again")
// } while (num!= value);

// console.log("you guessed the corrent Number : " + num)
// console.log("your score : " , 100 - count );

console.table(marks)