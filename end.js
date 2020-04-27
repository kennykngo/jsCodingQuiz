const initials = document.querySelector("#initials");
const saveScoreBtn = document.querySelector("#saveScoreBtn");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore = document.querySelector("#finalScore");

finalScore.innerText = mostRecentScore;

initials.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !initials.value;
  // save btn is disabled if no value is input
});

saveHighScore = (e) => {
  console.log("clicked the save button");
  e.preventDefault();
};
