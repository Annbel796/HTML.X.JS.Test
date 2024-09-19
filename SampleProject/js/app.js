// Reference "text0" and assign it to the variable called "textField0"
const textField0 = document.getElementById("text0");
textField0.innerText = showStylizedScore(786);

function showScore(inputNumber){
  return inputNumber *100; // Ouput is a number.
}
function showStylizedScore (scoreInput){
  return "Your score is: "+ scoreInput * 100;
}
