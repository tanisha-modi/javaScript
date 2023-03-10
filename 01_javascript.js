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

