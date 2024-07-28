let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","green","purple"];

let started = false;
let level = 0;

let highscore = 0;
// let lowScore = Infinity;

let h2 = document.querySelector('h2');  
let highscoreDisplay = document.getElementById('high-score');
// let lowScoreDisplay = document.getElementById('low-score');        

document.addEventListener("keypress", function() {
    // console.log("any key pressed")
    if(!started){
        console.log("game started")
        started == true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq)
    gameFlash(randBtn);

}

function checkAns(idx) {

    if(userSeq[idx] === gameSeq[idx]) {
       if(userSeq.length === gameSeq.length) {
        setTimeout(levelUp,1000);
       }
    }else{
        h2.innerHTML  = `Game Over! Your score was <b>${level}</b> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor = "#304352";
        setTimeout(function (){
            document.querySelector("body").style.color = "white";
        }, 150);
        updateScore();
        reset();
    }
}

function btnPress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress)
}

function updateScore() {
    if(level > highscore){
        highscore = level;
        highscoreDisplay.innerText = highscore;
    }
    // if(level < lowScore && level > 1){
    //     lowScore = level;
    //     lowScoreDisplay.innerText = lowScore;
    // }
}
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
