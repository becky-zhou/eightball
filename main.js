var userName = '';
userName = prompt('What is your name?'); 

var userQuestion = ''; 
userQuestion = prompt(`Hello, ${userName}! What do you want to ask me today?`);

console.log(userQuestion); 

let randomNumber = Math.floor(Math.random() * 8); 
var eightBall = ''; 


if (randomNumber == 1){
    eightBall = "it is Certain"; 
} else if(randomNumber == 2) {
    eightBall = "it is decidedly so"; 
} else if(randomNumber == 3) {
    eightBall = "reply hazy try again";
} else if(randomNumber == 4){
    eightBall = "Cannot predict now.";
} else if(randomNumber == 5){
    eightBall = "Do not count on it.";
} else if(randomNumber == 6){
    eightBall = "My sources say no.";
} else if(randomNumber == 7){
    eightBall = "Outlook not so good.";
} else {
    eightBall = "Signs point to yes."; 
}

 
console.log(eightBall); 
