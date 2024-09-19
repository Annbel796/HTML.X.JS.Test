// Documents Elements
// Looks "text0" and assign it to the variable called "textField0"
const textField0 = document.getElementById("text0");
const textField1 = document.getElementById("text1");

// Intarnal Variables
let score = 0;


// textField0.innerText = showStylizedScore(786);

// Process (What is going to happend)

increaseScoreByOne()

// Controllers


function increaseScoreByOne (){
  score++;
  updateScoreText(score)
}

// View
function updateScoreText(newText){
  textField0.innerHTML = newText;
}

function updateStatusText(newText){
  textField1.innerHTML = newText;
}

//function showScore(inputNumber){
//   return inputNumber *100; // Output is a number.
// }
// function showStylizedScore (scoreInput){
//   return "Your score is: "+ scoreInput * 100;
// }
