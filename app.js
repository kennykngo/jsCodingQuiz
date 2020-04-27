// timer
var sec = 60;

function startTimer() {
  console.log("Timer is starting");
  var timer = setInterval(function () {
    sec--;
    timerDisplay.innerHTML = "00:" + sec;
    console.log("timer is working");

    // WHEN the game is over
    // THEN I can save my initials and score
    if (sec < 0) {
      clearInterval(timer);
      alert("Game is over");
    }
  }, 1000);

  wrongAnswer = () => {
    sec -= 5;
    timerDisplay.innerHTML = "00:" + sec;
  };
}
//end of timer

const question = document.querySelector("#question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.getElementById("progressBarFull");

var currentQuestion = {};
var acceptingAnswers = false;
var score = 0;
var questionCounter = 0;
var availableQuesions = [];

let questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "<js>",
    choice4: "<scripting>",
    answer: 1,
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'app.js'?",
    choice1: "<script href='app.js'>",
    choice2: "<script name='app.js'>",
    choice3: "<script src='app.js'>",
    choice4: "<script file='app.js'>",
    answer: 3,
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    choice1: "msgBox('Hello World');",
    choice2: "alertBox('Hello World');",
    choice3: "msg('Hello World');",
    choice4: "alert('Hello World');",
    answer: 4,
  },
  {
    question:
      "What is the correct JavaScript syntax to change the content of the HTML element below? <p id='demo'> This is a demonstration. </p>",
    choice1: "document.getElementByName('p').innerHTML = 'Hello World!';",
    choice2: "#demo.innerHTML = 'Hello World!';",
    choice3: "document.getElement('p').innerHTML = 'Hello World!';",
    choice4: "document.getElementById('demo').innerHTML = 'Hello World!';",
    answer: 4,
  },
  {
    question: "How do you call a function named 'myFunction'",
    choice1: "call function myFunction()",
    choice2: "myFunction()",
    choice3: "call myFunction()",
    choice4: "evoke myFunction()",
    answer: 2,
  },
  {
    question: "How to write an IF statement in JavaScript?",
    choice1: "if (i = 5)",
    choice2: "if i = 5 then",
    choice3: "if i == 5",
    choice4: "if (i == 5)",
    answer: 4,
  },
  {
    question:
      "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    choice1: "if <> 5",
    choice2: "if (i <> 5)",
    choice3: "if (i != 5)",
    choice4: "if (i == 5)",
    answer: 3,
  },
  {
    question: "How does a WHILE loop start?",
    choice1: "while (i <= 10)",
    choice2: "while (i <= 10; i++)",
    choice3: "while i =  1 to 10",
    choice4: "while i < 10",
    answer: 1,
  },
  {
    question: "How does a FOR loop start?",
    choice1: "for (i = 0; i < 5; i++)",
    choice2: "for i = 1 to 5",
    choice3: "for (i = 0; i <= 5)",
    choice4: "for (i <= 5; i++)",
    answer: 1,
  },
  {
    question: "How can you add a comment in JavaScript?",
    choice1: "... This is a comment.",
    choice2: "'This is a comment.'",
    choice3: "<!-- This is a comment.-->",
    choice4: "// This is a comment.",
    answer: 4,
  },
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  console.log(availableQuesions);
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("./end.html");
    // create end page with js?
  }
  questionCounter++;
  // MAX_QUESTIONS is currently 3 (line 67);
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  // questionCounterText.innerText = `questionCounter + "/" + MAX_QUESTIONS`; Same thing
  // updating the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  console.log(availableQuesions);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    // if selected answer == currentQuestion's answer (false/ true), the classToApply is set to "correct", else "incorrect"
    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    } else {
      wrongAnswer();
    }

    selectedChoice.parentElement.classList.add(classToApply);

    // removes the class (correct/incorrect) after 1 sec
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();
// ```
// document.querySelector("#wrongAnswer").addEventListener("click",

// evoke timer function
startTimer();
// wrongAnswer();
