var numSquares = 6;
var colors = generateRandomColors(numSquares);
var message = document.querySelector("#message");

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var h1 = document.querySelector("h1");
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    for(var i =0 ;i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                numSquares = 3;
            }else{
                numSquares = 6;
            }
            reset();
        });
    }
    for(var i = 0;i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
    
        squares[i].addEventListener("click",function(){
            var clickedColor = this.style.backgroundColor;
    
            if(clickedColor === pickedColor){
                message.textContent = "Correct!";
                h1.style.background = clickedColor;
                resetButton.textContent= "Play Again?";
                changeColors(clickedColor);
                
            }
            else{
                this.style.background = "#232323";
    
                message.textContent = "Try Again";
            }
        });
    }
    reset();
}



function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;

    message.textContent = "";
    resetButton.textContent = "New Colors";
    for(var i = 0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }

    }
    h1.style.background = "steelblue";
}
// easyBtn.addEventListener("click",function(){
//         hardBtn.classList.remove("selected");
//         easyBtn.classList.add("selected");
//         numSquares = 3;
//         colors = generateRandomColors(numSquares);
//         pickedColor = pickColor();
//         colorDisplay.textContent = pickedColor;
//         for(var i = 0;i<squares.length;i++){
//             if(colors[i]){
//                 squares[i].style.background=colors[i];
//             }else{
//                 squares[i].style.display = 'none';
//             }
            
//         }
// });
// hardBtn.addEventListener("click",function(){
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0;i<squares.length;i++){
        
//             squares[i].style.background=colors[i];
        
//             squares[i].style.display = 'block';
//         }
        
    

// });
resetButton.addEventListener("click",function(){
    reset();
});

function changeColors (color){
    for(var i = 0;squares.length;i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
    
}

function generateRandomColors(num){
    //Make an array

    var arr = []
    //add num random colors to array
    for(var i =0 ; i<num; i++){
        
        arr.push(randomColor());
    }
    return arr;
}


function randomColor(){
    //pick a red from 0-255
    
    var r= Math.floor(Math.random() * 256);
    var g= Math.floor(Math.random() * 256);
    var b= Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}