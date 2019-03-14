var input = prompt("What do you want to do ?");
var todos = [];


while (input !== "quit"){
    if(input === "new"){
        addItem();
    }
    else if(input === "list"){
        todos.forEach(listItem);
    }
    else if(input === "delete"){
        var index= prompt("Please enter index of To do to delete");
        deleteItem(index);
    }
    else{
        alert("Error");
    }
    input = prompt("What do you want to do?");
}

function addItem(item){
    var response = prompt("Please write what new thing you must do");
        todos.push(response);
}

function listItem(todo, i){
    alert(i + ": "+todo);
}

function deleteItem(item){
    todos.splice(item, 1);
    console.log("Deleted Todo")
}