let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const comp_img = document.getElementById('computer-img')
const user_img = document.getElementById('user-img')

function getComputerchoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = ((Math.floor(Math.random()*3)));
  if (randomNumber === 0) {
    comp_img.src = "images/rock.PNG";
  } else if (randomNumber === 1) {
    comp_img.src = "images/paper.PNG";
  } else {
    comp_img.src = "images/scissors.PNG";
  }
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smUserWord = "user".fontsize(3).sub();
  const smCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = convertToWord(user) + smUserWord + " beats " + convertToWord(computer) + smCompWord + ". You win! 🔥";
  document.getElementById(user).classList.add('green-glow');
  setTimeout(function() {document.getElementById(user).classList.remove('green-glow')}, 500);
}

function lose(user, computer) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smUserWord = "user".fontsize(3).sub();
  const smCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = convertToWord(user) + smUserWord + " loses to " + convertToWord(computer) + smCompWord + ". You lose! 💩";
  document.getElementById(user).classList.add('red-glow');
  setTimeout(function() {document.getElementById(user).classList.remove('red-glow')}, 500);
}

function draw(user, computer) {
  const smUserWord = "user".fontsize(3).sub();
  const smCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = convertToWord(user) + smUserWord + " draws with " + convertToWord(computer) + smCompWord + "🤨";
  document.getElementById(user).classList.add('gray-glow');
  setTimeout(function() {document.getElementById(user).classList.remove('gray-glow')}, 500);
}

function game(userChoice) {
  const computerChoice = getComputerchoice();
  console.log("user" + userChoice);
  console.log("comp" + computerChoice);
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break
  }
  checkWinner();
}

function checkWinner() {
  if (userScore > 5) {
    alert("You Win!");
  } else if (computerScore > 5) {
    alert("Computer wins!")
  }
}

function main() {

  comp_img.src = "";
  user_img.src = "";

  rock_div.addEventListener('click', function() {
    game("r");
    user_img.src = "images/rock.PNG";

  })
  paper_div.addEventListener('click', function() {
    game("p");
    user_img.src = "images/paper.PNG";
  })
  scissors_div.addEventListener('click', function() {
    game("s");
    user_img.src = "images/scissors.PNG";
  })
}

main();
