function factorial(n){
    if(n === 0 || n===1){
        return 1;
    }
    else{
         x = 1;
        while(n>0){
            x = x*n;
            n--;
        }

    }
    return x;
}

console.log(factorial(10));

function kebabToSnake(str){
    return str.replace(/-/g,"_");
}

console.log(kebabToSnake("I-Like-Dick"));


//SCOPE

function doMath(){
    var x = 40;
    console.log(x);
}

doMath();//40

//x can't be used outside of function

var x = "hello!";

//In this global context, x is a string "hello"

//global variables can be used within a function
var y = 99;

function doMoreMath(){
    y=100;
    console.log(y);
    //y=100
}
//y =99

//HIGHER ORDER FUNCTIONS-Passing functions to other functions

function sing(){
    console.log("Twinkle twinkle");
    console.log("little star");
}

setInterval(sing,1000);




