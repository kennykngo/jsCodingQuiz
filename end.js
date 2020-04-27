const initials = document.querySelector("#initials");
const saveScoreBtn = document.querySelector("#saveScoreBtn");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore = document.querySelector("#finalScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 10;
// get what's in localStorage or return an empty array
console.log(highScores);
finalScore.innerText = mostRecentScore;

initials.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !initials.value;
  // save btn is disabled if no value is input
});

saveHighScore = (e) => {
  console.log("clicked the save button");
  e.preventDefault();

  const score = {
    // score: Math.floor(Math.random() * 100),
    score: mostRecentScore,
    name: initials.value,
  };
  highScores.push(score);

  highScores.sort((a, b) => b.score - a.score);

  highScores.splice(10);

  localStorage.setItem("highScores", JSON.stringify(highScores));

  window.location.assign("./highScores.html");

  // sortingHigh = (a, b) => {
  //   a.score > b.score ? a.score - b.score : b.score - a.score;
  // };

  console.log(highScores);
};
