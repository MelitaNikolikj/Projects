let button = document.querySelector('.check')
let secretNumber = Math.trunc(Math.random()*20) + 1;
let number = document.querySelector('.number');
let score = 20;
let highScore = 0;
let guessing = document.querySelector('.guess');
let picture = document.querySelector('.box');
let highLow = document.querySelector('.high-low');
let realScore = document.querySelector('.score');
let againBtn = document.querySelector('.try');
let spanHighScore = document.querySelector('.highscore');

button.addEventListener('click', function(){
    let input = Number(document.getElementById('numberinput').value);
    if(!input){
        guessing.textContent = 'Please enter a number!'
    } else if (input === secretNumber) {
        picture.style.background="url('./assets/NotTraumatized_Mr._Incredible.jpg') no-repeat center/cover";
        guessing.innerHTML='';
        highLow.textContent = '';

        if(score > highScore){
            highScore = score;
            spanHighScore.textContent = highScore;
        }
    } else if (input > secretNumber){
        if(score > 1){
            picture.style.background="url('./assets/Traumatized_Mr._Incredible.jpg') no-repeat center/cover";
            highLow.innerHTML = "GO LOWER!";
            highLow.style.color = 'white';
            score --;
            realScore.textContent = score;
            guessing.textContent = '';
        } else{
            picture.style.background="url('./assets/Lose.png') no-repeat center/cover";
            highLow.textContent = "YOU LOSE!";
            highLow.style.color = 'white';
        }
    } else if(input < secretNumber){
        if(score > 1){
            picture.style.background="url('./assets/Traumatized_Mr._Incredible.jpg') no-repeat center/cover";
            highLow.innerHTML = "GO HIGHER!";
            highLow.style.color = 'white';
            score --;
            realScore.textContent = score;
        } else{
            picture.style.background="url('./assets/Lose.png') no-repeat center/cover";
            highLow.textContent = "YOU LOSE!";
            highLow.style.color = 'white';
        }
    }

})

let newBtn = document.querySelector('.btnagain');

againBtn.addEventListener('click', function(){
    score=20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    guessing.textContent='Start guessing ...'
    picture.style.background = "url('./assets/G03.jpg') no-repeat center/cover"
    realScore.textContent = score;
    document.querySelector('#numberinput').value = '';
})