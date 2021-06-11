let rectangle = document.getElementById('rectangle')
let triangle = document.getElementById('triangle')
let pentagon = document.getElementById('pentagon')
let square = document.getElementById('square')
let circle = document.getElementById('circle')
let hexagon = document.getElementById('hexagon')
let correct = document.getElementById("correct")
let wrong = document.getElementById("wrong")
let modal = document.querySelector(".modal");
let modal2 = document.querySelector(".modal2");
let endGame = document.querySelector(".end-game");
let whoWins = document.querySelector(".result-texts")
let userScore = document.querySelector("#userscore")
let computerScore = document.querySelector("#computerscore")
let userGuessed = null;

let computerGuess = 0;

let userGuessedId = null;

let button = document.querySelector(".play-footer")
button.addEventListener('click', () => guessShape())

endGame.addEventListener("click", () => endGuess())

let borderChange = (name, index) => {

  document.querySelectorAll(".sub").forEach((click) => click.style.border = "1px solid Transparent");

  document.getElementById(name).style.border = "1px solid blue";

  userGuessed = index
}


let guessShape = () => {
  computerGuess = Math.floor(Math.random() * 7);
  let correctVal = correct.textContent
  let wrongVal = wrong.textContent
  let userCorrect = document.querySelector('.result-sub1-img1')
  let userWrong = document.querySelector('.result-sub1-img2')
  let computerWrong = document.querySelector('.result-sub2-img1')
  let computerCorrect = document.querySelector('.result-sub2-img2')
  let happy = document.querySelector(".happy")
  let sad = document.querySelector(".sad")
  alert(document.getElementById("o-" + computerGuess).innerText)

  if (computerGuess == userGuessed) {
    correct.textContent = Number(correctVal) + 1
    setTimeout(() => {
      modal.style.display = "block"
    }, 500)
    setTimeout(() => {
      modal.style.display = "none"
    }, 3000)
   
    happy.style.display = "block"
    sad.style.display = "none"
    computerCorrect.style.display = "none"
    computerWrong.style.display = "block"
    userWrong.style.display = "none"
    userCorrect.style.display = "block"
  } else {
    wrong.textContent = Number(wrongVal) + 1
    
    setTimeout(() => {
      modal.style.display = "block"
    }, 500)
    setTimeout(() => {
      modal.style.display = "none"
    }, 3000)
    
    sad.style.display = "block"
    happy.style.display = "none"
    computerCorrect.style.display = "block"
    computerWrong.style.display = "none"
    userWrong.style.display = "block"
    userCorrect.style.display = "none"
  }

  document.querySelectorAll(".sub").forEach((click) => click.style.border = "1px solid Transparent");
}

let endGuess = () => {

  modal2.style.display = "block"

  let userVal = userScore.textContent
  let computerVal = computerScore.textContent
  userScore.textContent = Number(userVal) + Number(correct.textContent)
  computerScore.textContent = Number(computerVal) + Number(wrong.textContent)

  if (userScore.textContent < computerScore.textContent){
    whoWins.innerHTML = "COMPUTER WON"
  }else if (userScore.textContent = computerScore.textContent){
    whoWins.innerHTML = "TIE"
  } else{
    whoWins.innerHTML = "YOU WON"
  }
  

}


// alert("hjbfdf")


