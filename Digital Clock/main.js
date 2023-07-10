const time = document.getElementById("time");

setInterval(()=>{
    let d = new Date()
    time.innerHTML = d;
}, 1000)