'use strict';


let question1 = prompt("Do I love to learning new languages? Yes/y or No/n");

if(question1 != null){
    question1 = question1.toLocaleLowerCase();
}

if(question1 == "yes" || question1 == "y"){
    // console.log("Correct!");
    alert(" Correct! ");
    
}
else{
    //console.log("Wrong");
    alert(" Wrong ");
}

let question2 = prompt("Do I love my major? Yes/y or No/n");
if(question2 != null){
    question2 = question2.toLocaleLowerCase();
}

if(question2 == "yes" || question2 == "y"){
    //console.log("Correct!");
    alert(" Correct! ");
}
else{
    //console.log("Wrong");
    alert(" Wrong ");
}


let question3 = prompt("Am I 21 years old? Yes/y or No/n");
if(question3 != null){
    question3 = question3.toLocaleLowerCase();
}

if(question3 == "no" || question3 == "n"){
    //console.log("Correct!");
    alert(" Correct! ");
}
else{
    //console.log("Wrong");
    alert(" Wrong ");
}

let question4 = prompt("Do I study cyber security Yes/y or No/n");
if(question4 != null){
    question4 = question4.toLocaleLowerCase();
}

if(question4 == "no" || question4 == "n"){
   // console.log("Correct!");
    alert(" Correct! ");
}
else{
   // console.log("Wrong");
    alert(" Wrong ");
}

let question5 = prompt("Do I stydy at ASAC? Yes/y or No/n");

if(question5 != null){
    question5 = question5.toLocaleLowerCase();
}

if(question5 == "yes" || question5 == "y"){
   // console.log("Correct!");
    alert(" Correct! ");
}
else{
   // console.log("Wrong");
    alert(" Wrong ");
}

let userName = prompt("Enter your name please");
alert("Welcome to my website "+userName);
alert("Dear "+userName+", I hope you like my website")