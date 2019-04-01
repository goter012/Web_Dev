var p1Button = document.querySelector("#p1Button");
var p2Button = document.querySelector("#p2Button");
var p2span = document.getElementById("p2Score");
var p1span = document.getElementById("p1Score");
var p1Score= 0;
var gameOver= false;
var p2Score=0;
var resetButton = document.querySelector("#resetButton");
var inputField = document.querySelector("#gameScore");
var gameOverScore = document.querySelector("#gameLimit");

inputField.addEventListener("change",function(){
    gameOverScore.textContent = inputField.value;
});
resetButton.addEventListener("click",function(){
    resetGame();

});
var winningScore = 5;
p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        console.log(p1Score, winningScore);
        if(p1Score === winningScore){
            p1span.classList.add("winner");
            gameOver = true;
        }
    p1span.textContent = p1Score;
    }
   
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            p2span.classList.add("winner");
            gameOver = true;
        }
    p2span.textContent = p2Score;
    }
});
inputField.addEventListener("change",function(){
    gameOverScore.textContent = inputField.value;
    winningScore = Number(inputField.value);
    resetGame();
});

const resetGame = function(){
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1span.textContent = 0;
    p2span.textContent = 0;
    p1span.classList.remove("winner");
    p2span.classList.remove("winner");
};