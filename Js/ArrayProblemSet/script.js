function printReverse(list){
    for(var i =list.length;i>=0;i-- ){
        console.log(list[i]);
    }
}

var something = [1,2,3,4];

printReverse(something);

function isUniform(list){
    var elem = list[0];
    for(var i =0;i<list.length;i++){

        if(elem != list[i]){
            return false;
        }
    }
    return true;
}

console.log("IS UNIFORM");

var list1= [1,1,1,1];

console.log(isUniform(list1));


console.log("Sum array");

function sumArray(list){
    var sum = 0;

    for(var i =0;i<list.length;i++){
        sum = sum+list[i];
    }
    return sum;
}

var list2 = [5,10,15];

console.log(sumArray(list2));

console.log("MAX");

function max(list){
    var max = list[0];

    for(var i = 0;i<list.length;i++){
        if(max <list[i]){
            max= list[i];
        }
    }
    return max;
}

var list3 = [11,1,1000];

console.log(max(list3));