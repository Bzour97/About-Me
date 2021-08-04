'use strict';

let mark = 0;

let name = prompt("What is your name");

alert("Hey, I love u " + name );


function colorcheck(){

let favColor = prompt("My fav color is Black ?");
favColor = favColor.toLowerCase();

if(favColor == "yes")
   {
   mark++;
   //console.log("This is correct, You are so wonderful and you made my little heart happy")
   alert("This is correct, You are so wonderful and you made my little heart happy");
   }
   
   else
   {
    //console.log("This is a mistake ... try again my friend hehehe")
    alert("This is a mistake ... try again my friend hehehe");
   }
}
colorcheck();

function isdark(){
let darker = prompt("Black is darker than White right for me ?");

darker = darker.toLowerCase();

if(darker == "yes")
    {
    mark++;
    //console.log("This is correct, You are so wonderful and you made my little heart happy")
    alert("This is correct, You are so wonderful and you made my little heart happy");
    }
    
    else
    {
     //console.log("This is a mistake ... try again my friend hehehe")
     alert("This is a mistake ... try again my friend hehehe") ;
    }
}
isdark();

function cigarettecheck(){
let cigarette = prompt("Is Winston my favorite cigarette ?");

cigarette = cigarette.toLowerCase();

if(cigarette == "yes")
    {
    mark++;
    //console.log("This is correct, You are so wonderful and you made my little heart happy")
    alert("This is correct, You are so wonderful and you made my little heart happy")
    }
    
    else
    {
     //console.log("This is a mistake ... try again my friend hehehe")
     alert("This is a mistake ... try again my friend hehehe") 
    }
}
cigarettecheck();

function isTrue(){
let bzour = prompt("Ahmad Al-Bzour is a very smart and wonderful person who sanctifies sleep and does not talking to girls ?")

bzour = bzour.toLowerCase();

if(bzour == "yes")
    {
    mark++;
    //console.log("This is correct, You are so wonderful and you made my little heart happy")
    alert("This is correct, You are so wonderful and you made my little heart happy")
    }
    
    else
    {
     //console.log("This is a mistake ... try again my friend hehehe")
     alert("This is a mistake ... try again my friend hehehe") 
    }
}
isTrue();

function charactercheck(){
let spongeBob = prompt("Is SpongeBob my favorite character ?");
spongeBob = spongeBob.toLowerCase();

if(spongeBob == "yes")
    {
    mark++;
    //console.log("This is correct, You are so wonderful and you made my little heart happy")
    alert("This is correct, You are so wonderful and you made my little heart happy")
    }
    
    else
    {
     //console.log("This is a mistake ... try again my friend hehehe")
     alert("This is a mistake ... try again my friend hehehe") 
    }
}

function sleepcheck(){

let sleep = prompt("How many hours do I sleep a day ?")

sleep = sleep.toLowerCase();
    
if(sleep == 25)
    {
    mark++;
    //console.log("This is correct, You are so wonderful and you made my little heart happy")
    alert("This is correct, You are so wonderful and you made my little heart happy, I sleep " + sleep)
    }
        
    else
    {
        for(let i = 1; i < 4; i++){

            if(sleep > 25)
        alert("I exaggerated too much")
    
        if(sleep < 25)
        alert("You hurt me so much")
    
        sleep = Number(prompt("Choose between 1, 25, 100"))
    
        if(sleep == 25){
        mark++;
        alert("It's true I sleep " + sleep )
        break;}
        }
        if(sleep != 25)
        alert("The number of hours I sleep is 25") 
    }
}
    sleepcheck();
    //console.log("Answer is 25")

    function foodcheck(){
    let favFood = prompt("My favorite food is : choose one of these (Bameeh, Jaj hos, Shawerma, Mahashi, Burger, Malfof)").toLowerCase()

    let arrayFood = ['mansaf', 'msakhan', 'shawerma', 'falafel', 'burger', 'sushi'];
    
    let boolean = false;
    
    for(let j = 1; j < 6; j++){
    
    for(let i = 0; i < arrayFood.length; i++){
    
     if(favFood == arrayFood[i]){
        
        alert("This is correct") 
        boolean = true;
        mark++;
        break;
     }
    }
    
    if(boolean == false){
        alert("This is not correct") 
        favFood = prompt("My favorite food is : choose one of these (Bameeh, Jaj hos, Shawerma, Mahashi, Burger, Malfof)").toLowerCase()
       
    }
    if(boolean == true){
        mark++;
        break;
    }
    
    }
    if(boolean == false){
        alert("Ooooh shit, the correct answer is : Shawerma, Burger, Mansaf and Msakhan")
    }
    }
foodcheck();
alert("Thank you for using Umniah haha teaser .. thank you " + name + ". Your mark is : " + mark);
