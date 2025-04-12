let gameseq = [];// game sequence 
let userseq = [];// user sequence
let btns = ["yellow", "red", "purple", "blue"];

let started = false;// initially game is not started.
let level = 0;// initially level is zero(0).

// this is to start the code 
document.addEventListener("keypress", function () {
    if (started == 0) {
        console.log("game started!");
        started = true;
        levelUp();
    }
});
// to flash the btn and deflash.
function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
};

// to flash the btn and deflash done by user.
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
};

// flash the btn and update the level;
function levelUp() {
    userseq=[];
    level++;
    document.querySelector("h2").innerText = `level ${level}`;
    // choose random btn.
    let rand = Math.floor(Math.random() * 3); // this generate random number between 0 to 3.
    let randcolor = btns[rand];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);//fucntion call for flash and deflash
};

function checkans(indx) {
    if (userseq[indx] === gameseq[indx]) {
        if (userseq.length == gameseq.length) {
            setTimeout( levelUp , 1000);
        }
    }
    else {
        document.querySelector("h2").innerHTML= `Game Over! Your level is <b>${level} </b><br>Press any key to start the game.`;
        document.body.style.backgroundColor="red";
        setTimeout(() => {
            document.body.style.backgroundColor="white";
        }, 300);
        reset();
    }
   
};
function btnPress(){
    let btn = this;
    userFlash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);// console.log(usercolor+" this color is printed!");
    checkans(userseq.length - 1);
};
let allbtns = document.querySelectorAll('.btn');
for (btn of allbtns) {
    btn.addEventListener("click", btnPress);
};
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}