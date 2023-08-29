let curTime = document.querySelector(".timeContainer h1");
let curDate = document.querySelector(".timeContainer h2");
let setAlarmBtn = document.querySelector("#setAlarmBtn");
let setAlarmAt = document.querySelector("#setAlarmAt");
let audio = new Audio("download.mp3");

document.getElementById("stop").style.display = "none";
setInterval(function () {
  let currentDate = new Date();
  curTime.innerText = currentDate.toLocaleTimeString();
  curDate.innerText = currentDate.toDateString();
}, 1000);

setAlarmBtn.addEventListener("click", function () {
  let alarmTimeAt = setAlarmAt.value;
  alarmTimeAt = alarmTimeAt.split(":");
  let val1 = alarmTimeAt[0];
  let val2 = alarmTimeAt[1];
  if (val1 === undefined || val2 === undefined) {
    alert("please set the time first");
  } else {
    console.log(val1);
    console.log(val2);

    sessionStorage.setItem("hour", val1);
    sessionStorage.setItem("mint", val2);
    setAlarmBtn.style.display = "none";
    document.getElementById("stop").style.display = "block";
    playAlarm();
  }
});

function playAlarm() {
  var k = setInterval(() => {
    document.getElementById("stop").addEventListener("click", () => {
      clearInterval(k);
      console.log("cleared");
    });

    if (
      new Date().getHours() == sessionStorage.getItem("hour") &&
      new Date().getMinutes() ==
        sessionStorage.getItem("mint")
    ) {
      audio.play();
    }
  }, 1000);
}

let stopper = document.getElementById("stop");
stopper.addEventListener("click", () => {
  sessionStorage.setItem("hour", "#");
  sessionStorage.setItem("mint", "#");
  audio.pause();

  document.getElementById("stop").style.display = "none";
  setAlarmBtn.style.display = "block";
  //   document.getElementById(" ").innerHTML = "Set Alarm";
});
