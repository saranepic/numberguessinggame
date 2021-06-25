'use strict';
let secretnumber=Math.trunc(Math.random() * 20);
let score=5;
let highscore=0;
document.querySelector('.number').textContent='?';
document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    if(!guess)//when no number
    {
        document.querySelector('.message').textContent="no number !";
    }//when player wins

    else if(guess===secretnumber){
        document.querySelector('.message').textContent="correct number !";
        document.querySelector('body').style.backgroundColor='green';
        document.querySelector('.number').textContent=secretnumber;

        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }
    
    //when number too high
    
    else if(guess>secretnumber){

        if(score>1){
        document.querySelector('.message').textContent="too high !";
        score--;
        document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent="you lost the game !"; 
            document.querySelector('body').style.backgroundColor='red'; 
            document.querySelector('.score').textContent=0;
        }

        //when number too low
    }else if(guess<secretnumber){

        if(score>1){
            document.querySelector('.message').textContent="too low !";
            score--;
            document.querySelector('.score').textContent=score;
            }else{
                document.querySelector('.message').textContent="you lost the game !"; 
                document.querySelector('body').style.backgroundColor='red';
                document.querySelector('.score').textContent=0; 
            }

        
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 5;
    secretnumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent='?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });