// Documents Elements
// Looks "text0" and assign it to the variable called "textField0"
const textField0 = document.getElementById("text0");
const textField1 = document.getElementById("text1");

// Buttons
const increaseScoreButton = document.getElementById("button0");

// Internal Variables
let score = 0;

// Process (What is going to happen in what sequence?)
increaseScoreButton.addEventListener("click", () => {
  increaseScoreByOne();
  updateScoreText();
  checkScoreForSeven();
});

// Controllers
function increaseScoreByOne (){
  score++;
}
function checkScoreForSeven (){
if (score >= 7){
  changeScoreTextColorToGreen()
}
}

// View
function updateScoreText(){
  textField0.innerHTML = "Your Score is: " + score;
}
function changeScoreTextColorToGreen(){
  textField0.style.color = "green";
}

function updateStatusText(newText){
  textField1.innerHTML = newText;
}



// textField0.innerText = showStylizedScore(786);

//function showScore(inputNumber){
//   return inputNumber *100; // Output is a number.
// }
// function showStylizedScore (scoreInput){
//   return "Your score is: "+ scoreInput * 100;
// }
