const highScoresList = document.querySelector("#highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map((score) => {
    return `<li class="high-score text-center"><u>${score.name} - ${score.score}</u></li>`;
  })
  .join("");

// highScoresList.innerHTML = highScores
//   .map((score) => {
//     for (var i = 0; i < highScoresList.length; i++) {
//       return `<li class="high-score text-center"><u>${highScoresList[i + 1]} +${
//         score.name
//       } - ${score.score}</u></li>`;
//     }
//   })
//   .join("");
