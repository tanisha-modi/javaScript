// alert("enter the value of a")
// let a = prompt("enter the value of a here", "657" /*default value can also be given to prompt*/ )
// a = parseInt(a)
// alert("the type of a is " + (typeof a))
// let write = confirm("do you want to write it to the page")
// if (write) {
//      document.write(a)
//     }
//     else{
//     document.write("please allow me to write")
// }

// window.console.log(window)
// console.log(document.body)
// console.log(document.body.style.background = "yellow")

// fetching weather details

setInterval( async function(){
    let url ="https://jsonplaceholder.typicode.com/todos/1";
     console.log(await fetch(url));
}, 3000) 