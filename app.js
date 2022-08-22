//score 
let scores = 0;
let compScore = 0;
//loop this entire thing 5 times
for(i=0;i<5;i++){
    //get userChoice
let userChoice = prompt("Choose your weapon: ");


//display userChoice
console.log("you chose "+ userChoice);
//get random computer choice
let computerChoice = function(){
    //random number
    let randomNum = Math.floor(Math.random()*3);
    //conditions 
    if(randomNum==1){
        return 'rock';
    }else if(randomNum==2){
        return 'paper';
    }else{
        return 'scissor';
    }
}
//display computer choice

let comp = computerChoice();
console.log(comp);


//compare
if(userChoice=='rock' ){
    if(comp=='rock'){
        console.log('you are tied');
}}
if(userChoice=='rock' ){
    if(comp=='paper'){
        console.log('you lost');
        compScore++;
}}
if(userChoice=='rock' ){
    if(comp=='scissor'){
        console.log('you won!');
        scores++;
}}
if(userChoice=='paper' ){
    if(comp=='rock'){
        console.log('you won');
        scores++;
}}
if(userChoice=='paper' ){
    if(comp=='paper'){
        console.log('you are tied');
}}
if(userChoice=='paper' ){
    if(comp=='scissor'){
        console.log('you lost');
        compScore++;
}}

if(userChoice=='scissor' ){
    if(comp=='scissor'){
        console.log('you are tied');
}}
if(userChoice=='scissor' ){
    if(comp=='paper'){
        console.log('you won');
        scores++;
}}
if(userChoice=='scissor' ){
    if(comp=='rock'){
        console.log('you lost');
        compScore++;
}}
}

console.log(scores);
console.log(compScore);
if(scores>compScore){
    console.log('yayy you won');
}else if(scores<compScore){
    console.log('damn you lost');
}else{
    console.log('you are tied hehe');
}