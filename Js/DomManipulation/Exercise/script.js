var button = document.querySelector("button");



button.addEventListener("click",function(){

    var toggle = false;
    if(document.body.style.background=== "white"){
        document.body.style.background = "purple";
        toggle = !toggle;
    }
    else{
        document.body.style.background = "white";

    }
  
})