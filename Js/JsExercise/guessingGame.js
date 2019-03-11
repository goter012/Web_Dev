//Create seceret number
var secretNumber =4;


//ask user for guess
var guess = prompt("Guess a number");

//check guess

if(Number(guess) === secretNumber){
   alert("YOU GOT IT RIGHT");
}
else if (Number(guess) > secretNumber){
    alert("Wrong, too high");
}
else{
    alert("Wrong, too low");
}
