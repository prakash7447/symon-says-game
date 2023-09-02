let gameseq=[];
let userseq=[];

let randomcol=["red","green","yellow","purple"];
let started=false;
let level =0;
let body= document.querySelector("body");
let h2=document.querySelector("h2");
let btn=document.querySelector(".btn");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
       
        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function checkans(idx){
    // let idx=level-1;
    if(gameseq[idx]==userseq[idx]){
        if(gameseq.length==userseq.length){
            
            setTimeout(levelup,1000);
        }}
        else{
        h2.innerHTML=(`game over ,<b>your score${level}</b><br>press enter to start again`);
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
           reset();
        }

}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
    
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randomindx = Math.floor(Math.random()*4);
    let randomcolor =randomcol[randomindx];
    let rndBtn = document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor);
    console.log(gameseq);
    // console.log(rndBtn);
    gameflash(rndBtn);
}

function btnpress(){
    // console.log(this);
  let button= this;
  userflash(button);
  usercolor = button.getAttribute("id");
  userseq.push(usercolor);
//   console.log(userseq)
checkans(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
 started=false;
 gameseq=[];
 userseq=[];
 level=0;
}