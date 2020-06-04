//Constants
const GAME_TIME = 60;
const LETTERS = ['a','a','a','e','e','e',
                 'i','i','i','o','o','u',
                 'b','d','d','f','g','h',
                 'j','k','l','m','n','n',
                 'p','r','s','s','t','t',
                 'v','w'];

//HTML Elements
let buttons;
let lblWord;
let lblTime;
let lblScore;
let btnStart;

//Global variables
let time = GAME_TIME;
let score = 0;
let word = "";
let gameStatus = "stopped";
let timerId = -1;
let dragging = false;


let wordlist;

//HTML Elements
export default function ruzzle(list)
{
  wordlist = list;
  buttons = [...(document.getElementById("ruzzlebord").getElementsByTagName("button"))];
  lblWord = document.getElementById("lblWord");
  lblTime = document.getElementById("lblTime");
  lblScore = document.getElementById("lblScore");
  btnStart = document.getElementById("btnStart");
  addEventHandlers();
}

function addEventHandlers(){
    btnStart.addEventListener("click",startGame);
    for (let i = 0; i < buttons.length; i++) {
       buttons[i].addEventListener("mousedown",startDragging);
       buttons[i].addEventListener("mouseup",stopDragging);
       buttons[i].addEventListener("mouseover",continueDragging);
    }
}

function startGame(event) {
    if (gameStatus === "running") return;
    dragging = false;
    time = GAME_TIME;
    score = 0;
    gameStatus = "running";
    word = "";
    // Vervang inhoud van elementen
    lblTime.innerHTML = "Time:" + time;
    lblScore.innerHTML="Score:" + score;
    lblWord.innerHTML=word;
    timerId = setInterval(clockTick, 1000);
    fillBoard();
}

function fillBoard() {
    for (let i = 0; i < buttons.length; i++) {
        let randomIndex =  Math.floor(Math.random() * LETTERS.length);
        buttons[i].innerHTML = LETTERS[randomIndex].toUpperCase();
    }
}

function clockTick(event) {
    time--;
    lblTime.innerHTML="Time:" + time;
    if (time <= 0) {
        //stop the game...
        gameStatus = "stopped";
        clearInterval(timerId);
        alert("Game Finished! Your score: " + score);
    }
}

function startDragging(event) {
    if (gameStatus === "running") {
        dragging = true;
        word += event.target.innerHTML;
        lblWord.innerHTML=word;
    }
}

function continueDragging(event) {
    if (gameStatus === "running" && dragging) {
        word += event.target.innerHTML;
        lblWord.innerHTML=word;
    }
}

function stopDragging(event) {
    checkWord();
    dragging = false;
}

function checkWord() {
    if (wordlist.indexOf(word.toLowerCase()) !== -1) {
        score += word.length;
        lblScore.innerHTML="Score:" + score;
    }
    word = "";
}




