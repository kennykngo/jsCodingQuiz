// variables
var sec = 60;
var score = 0;
var availableQuestions = [];
var questionCounter = 0;
var acceptingAnswers = false;
var currentQuestion = {};

var question = document.querySelector("#question");
var choices = Array.from(document.querySelector(".choice-text"));
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

  wrongAnswer = () => {
    sec--;
    timerDisplay.innerHTML = "00:" + sec;
  };
}

// var highscore = localStorage.getItem("highscore");

let questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "<js>",
    choice4: "<scripting",
    answer: 1,
  },
  {
    question:
      "What is the correct syntax for referring to external script called 'app.js'?",
    choice1: "<script href='app.js'",
    choice2: "<script name='app.js'",
    choice3: "<script src='app.js'",
    choice4: "<script file='app.js'",
    answer: 3,
  },
  {
    question: "How do you display 'Hello World' in the browser console?",
    choice1: "msg('Hello World');",
    choice2: "console.log('Hello World');",
    choice3: "alert('Hello World');",
    choice4: "msg.log('Hello World');",
    answer: 2,
  },
];

var CORRECT_BONUS = 10;
var MAX_QUESTIONS = 3;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  console.log(availableQuestions);
  getNewQuestion();
};

getNewQuestion = () => {
  questionCounter++;
  let questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
  console.log("I got through questions");

  choices.forEach((choice) => {
    let number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
    console.log("I got through choices");
  });

  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
};
// document.querySelector("#wrongAnswer").addEventListener("click",

startTimer();
wrongAnswer();

startGame();
