let userInput = document.getElementById("userInput");
let guessButton = document.getElementById("guessButton");
let userOutput = document.getElementById("userOutput");

guessButton.addEventListener("click",function()
{
 let num = Math.ceil(Math.random()*10);  
  if(userInput.value == num){
    userOutput.innerHTML = "Correct !";
  } 
  else{
    userOutput.innerHTML = "Wrong! the number was " + num;
  } 
});

