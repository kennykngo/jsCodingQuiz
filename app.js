// variables
var sec = 60;
var timerDisplay = document.querySelector("#timerDisplay");
function startTimer() {
  console.log("Timer is starting");
  var timer = setInterval(function () {
    sec--;
    timerDisplay.innerHTML = "00:" + sec;
    console.log("timer is working");

    // WHEN the game is over
    // THEN I can save my initials and score
    if (sec < 1) {
      clearInterval(timer);
      alert("Game is over");
    }
  }, 1000);

  function wrongAnswer() {
    sec--;
    timerDisplay.innerHTML = "00:" + sec;
  }
}

// document.querySelector("#wrongAnswer").addEventListener("click",

startTimer();
wrongAnswer();
