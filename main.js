let rectangle = document.getElementById('rectangle')
let triangle = document.getElementById('triangle')
let pentagon = document.getElementById('pentagon')
let square = document.getElementById('square')
let circle = document.getElementById('circle')
let hexagon = document.getElementById('hexagon')
let correct = document.getElementById("correct")
let wrong = document.getElementById("wrong")
let modal = document.querySelector(".modal");

let t

let userGuessed = null;

let computerGuess = 0;

let userGuessedId = null;

let button = document.querySelector(".play-footer")
button.addEventListener('click', () => guessShape())
// 
// let openModal = ()=>{
//   modal.style.display = "block";
// }

let borderChange = (name, index) => {

  document.querySelectorAll(".sub").forEach((click) => click.style.border = "1px solid Transparent");

  document.getElementById(name).style.border = "1px solid blue";

  userGuessed = index

  // document.getElementById("mapping").innerText = userGuessed
  // return userGuessed
  // document.getElementById("user-guessed").innerText = document.getElementById("o-" + (Math.floor(Math.random() * 6))).innerText
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
    // setInterval(function(){setTimeout(() => {
    //   modal.style.display = "block"
    // }, 2000)
    // setTimeout(() => {
    //   modal.style.display = "none"
    // }, 2000) }, 4000);

    // setInterval(() => {
    //   setTimeout(() => {
    //     modal.style.display = "block"
    //   }, 2000)
    //   setTimeout(() => {
    //     modal.style.display = "none"
    //   }, 2000)
    // }, 4000)
    setTimeout(() => {
      modal.style.display = "block"
    }, 2000)
    setTimeout(() => {
      modal.style.display = "none"
    }, 4000)
    // setTimeout(() => {
    //   modal.style.display = "none"
    // }, 2000)
    happy.style.display = "block"
    sad.style.display = "none"
    computerCorrect.style.display = "none"
    computerWrong.style.display = "block"
    userWrong.style.display = "none"
    userCorrect.style.display = "block"
  } else {
    wrong.textContent = Number(wrongVal) + 1
    // setInterval(function () {
    //   setTimeout(() => {
    //     modal.style.display = "block"
    //   }, 2000)
    //   setTimeout(() => {
    //     modal.style.display = "none"
    //   }, 2000)
    // }, 4000);

    // setInterval(() => {
    //   setTimeout(() => {
    //     modal.style.display = "block"
    //   }, 2000)
    //   setTimeout(() => {
    //     modal.style.display = "none"
    //   }, 2000)
    // }, 4000)
    setTimeout(() => {
      modal.style.display = "block"
    }, 2000)
    setTimeout(() => {
      modal.style.display = "none"
    }, 4000)
    // window.clearTimeout(t)
    // setTimeout(() => {
    //   modal.style.display = "none"
    // }, 4000)
    sad.style.display = "block"
    happy.style.display = "none"
    computerCorrect.style.display = "block"
    computerWrong.style.display = "none"
    userWrong.style.display = "block"
    userCorrect.style.display = "none"
  }
  //  alert(document.getElementById(`o-${computerGuess}`).innerText)

  document.querySelectorAll(".sub").forEach((click) => click.style.border = "1px solid Transparent");

  //   sad.style.display = "none"
  // happy.style.display = "none"

}

// }
//When button is clicked, the guessSShape functioni is triggered




