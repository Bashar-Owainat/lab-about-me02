'use strict';

let userName = prompt('Enter your name please');
alert('Welcome to my website '+userName);

let score = 0;

function q1 () {
    let question1 = prompt('Do I love to learning new languages? Yes/y or No/n');

    if(question1 !== null){
        question1 = question1.toLocaleLowerCase();
    }

    if(question1 === 'yes' || question1 === 'y'){
        // console.log('Correct!');
        alert(' Correct! ');
        score++;
    }
    else{
        //console.log('Wrong');
        alert(' Wrong. I love to learn new things');
    }
}

q1();

function q2 () {
    let question2 = prompt('Do I love my major? Yes/y or No/n');
    if(question2 !== null){
        question2 = question2.toLocaleLowerCase();
    }

    if(question2 === 'yes' || question2 === 'y'){
    //console.log('Correct!');
        alert(' Correct! ');
        score++;
    }
    else{
    //console.log('Wrong');
        alert(' Wrong. I love my major');
    }
}
q2();


function q3 () {
    let question3 = prompt('Am I 21 years old? Yes/y or No/n');
    if(question3 !== null){
        question3 = question3.toLocaleLowerCase();
    }

    if(question3 === 'no' || question3 === 'n'){
    //console.log('Correct!');
        alert(' Correct! ');
        score++;
    }
    else{
    //console.log('Wrong');
        alert(' Wrong. I\'m 19');
    }
}

q3();

function q4 () {
    let question4 = prompt('Do I study cyber security Yes/y or No/n');
    if(question4 !== null){
        question4 = question4.toLocaleLowerCase();
    }

    if(question4 === 'no' || question4 === 'n'){
        // console.log('Correct!');
        alert(' Correct! ');
        score++;
    }
    else{
        // console.log('Wrong');
        alert(' Wrong. I study software engineering');
    }
}
q4();

function q5 () {
    let question5 = prompt('Do I stydy at ASAC? Yes/y or No/n');

    if(question5 !== null){
        question5 = question5.toLocaleLowerCase();
    }

    if(question5 === 'yes' || question5 === 'y'){
        // console.log('Correct!');
        alert(' Correct! ');
        score++;
    }
    else{
        // console.log('Wrong');
        alert(' Wrong. I study at ASAC');
    }
}
q5();





function q6 () {
    let question6 = Number (prompt('I picked a number from 1 to 40 and you have to guess what is it. Note that you have 4 attempts'));
    let num = 18;

    for(let i = 0; i < 3; i++){
        if(question6 === num){
            alert('Correct!');
            score++;
            break;
        }
        else if ( question6 < num){
            question6 = Number(prompt('Try Again. HINT your number is low'));
        }

        else if (question6 >num && question6 < 41){
            question6 = Number(prompt('Try Again. HINT your number is high'));
        }
        if(i === 2){
            alert('The correct number is 18');
        }
    }
}

q6();

function q7 () {
    let favCharacters = ['Kurapika', 'Gon', 'Killua', 'Leorio', 'Hisoka', 'Netero'];

    let question7 = (prompt('Guess My favoraite characters in Anime Hunter. Note that you have 6 attempts and there are more than one correct answer'));

    let result;
    for (let i = 0; i < 5 ; i++){
        result = favCharacters.indexOf(question7);
        if(result === -1 ){
            question7 = prompt('try another one');
        }
        else if (result !== -1){
            alert('Correct');
            score++;
            break;
        }
        if(i === 4){
            alert('the correct answers are : '+favCharacters);
        }

    }
}
q7();

alert('Dear '+userName+', I hope you like my website your score is '+score+' out of 7');


