var person = {
  name: "Cindy",
  age: 32,
  city: "Missoula"
};

console.log(person.name); //Can use Dot notation

console.log(person["age"]); //Or bracket notation


var someObject = {};

someObject._name = "Hedwig";
someObject.age = 6;

var prop = "color";
someObject[prop] = "red";

// someObject.123 = true; CANT USE NUMBERS IN FRONT OF property.

var someObject1 = {

    friends : [
        {name: "Malfoy"},
        {name: "Crabbe"},
        {name: "Goyle"}

    ],
    color:"baby blue",
    isEvil: true
};

console.log(someObject1.friends[0].name);

var movies = [
    {
        title: "In Bruges",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Frozen",
        rating: 4.5,
        hasWatched: false
    },
    {
        title: "Mad Max Fury Road",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Les Miserables",
        rating: 3.5,
        hasWatched: false
    }
];

    for(var i =0; i<movies.length;i++){
        if(movies[i].hasWatched === true){
            console.log("You have watched " + movies[i].title + " - " +movies[i].rating + " stars");
        }
        else{
            console.log("You have not seen "+ movies[i].title + " - " + movies[i].rating + " stars");
        }
    }


//Can add function as property in OBJECT

var obj = {
    name: "bob",
    age: 45,
    isCool: false,
    friends:[1,2,3,4],
    add : function(x,y){
        return x+y;
    }
};

console.log(obj.add(10,5));