let YourMove = document.querySelectorAll(".move")
var CompMove = document.querySelector("#access")
var flag = 0
var won = document.getElementById("Won")
var restart = document.getElementById("r-y")
var doNotRestart = document.getElementById("r-n")
var chance = document.getElementById("chance")

function TicTacToe(){

YourMove.forEach((dets) => {

    dets.addEventListener("click", function () {
        if (flag == 0) {
            console.log(dets.childNodes[0].textContent = "x");
            dets.style.pointerEvents = "none";
            document.getElementById("chance").innerHTML = "It's 2nd Player's chance"
            flag = 1
        
            if(CompMove.children[0].children[0].textContent=="x" && CompMove.children[1].children[0].textContent=="x" && CompMove.children[2].children[0].textContent=="x"){
                console.log("Hello Wolrd");
                won.textContent="Player 1 Won"
                IfWon()
                
            }
            else if(CompMove.children[3].children[0].textContent=="x" && CompMove.children[4].children[0].textContent=="x" && CompMove.children[5].children[0].textContent=="x"){
                console.log("Hello Wolrd");
                won.textContent="Player 1 Won"
                IfWon()
                
            }
            else if(CompMove.children[6].children[0].textContent=="x" && CompMove.children[7].children[0].textContent=="x" && CompMove.children[8].children[0].textContent=="x"){
                console.log("Hello Wolrd");
                won.textContent="Player 1 Won"
                IfWon()
                
            }           
            else if(CompMove.children[0].children[0].textContent=="x" && CompMove.children[4].children[0].textContent=="x" && CompMove.children[8].children[0].textContent=="x"){
                console.log("Hello Wolrd");
                won.textContent="Player 1 Won"
                IfWon()
                
            }
            else if(CompMove.children[2].children[0].textContent=="x" && CompMove.children[4].children[0].textContent=="x" && CompMove.children[6].children[0].textContent=="x"){
                console.log("Hello Wolrd");
                won.textContent="Player 1 Won"
                IfWon()
                
            }
            else if(CompMove.children[0].children[0].textContent=="x" && CompMove.children[3].children[0].textContent=="x" && CompMove.children[6].children[0].textContent=="x"){
                console.log("Hello Wolrd");
                won.textContent="Player 1 Won"
                IfWon()
                
            }
            else if(CompMove.children[1].children[0].textContent=="x" && CompMove.children[4].children[0].textContent=="x" && CompMove.children[7].children[0].textContent=="x"){
                console.log("Hello Wolrd");
                won.textContent="Player 1 Won"
                IfWon()
                
            }
            else if(CompMove.children[2].children[0].textContent=="x" && CompMove.children[5].children[0].textContent=="x" && CompMove.children[8].children[0].textContent=="x"){
                console.log("Hello Wolrd");
                won.textContent="Player 1 Won"
                IfWon()
                
            }
            checkAllMovesFilled()
                    
        } else {
            console.log(dets.childNodes[0].textContent = "O");
            document.getElementById("chance").innerHTML = "It's 1st Player's chance"
            dets.style.pointerEvents = "none";
            flag = 0

            if(CompMove.children[0].children[0].textContent=="O" && CompMove.children[1].children[0].textContent=="O" && CompMove.children[2].children[0].textContent=="O"){
                console.log("Hello Wolrd");
                won.textContent="Player 2 Won"
                IfWon()
                
            }
            else if(CompMove.children[3].children[0].textContent=="O" && CompMove.children[4].children[0].textContent=="O" && CompMove.children[5].children[0].textContent=="O"){
                console.log("Hello Wolrd");
                won.textContent="Player 2 Won"
                IfWon()
                
            }
            else if(CompMove.children[6].children[0].textContent=="O" && CompMove.children[7].children[0].textContent=="O" && CompMove.children[8].children[0].textContent=="O"){
                console.log("Hello Wolrd");
                won.textContent="Player 2 Won"
                IfWon()
                
            }           
            else if(CompMove.children[0].children[0].textContent=="O" && CompMove.children[4].children[0].textContent=="O" && CompMove.children[8].children[0].textContent=="O"){
                console.log("Hello Wolrd");
                won.textContent="Player 2 Won"
                IfWon()
                
            }
            else if(CompMove.children[2].children[0].textContent=="O" && CompMove.children[4].children[0].textContent=="O" && CompMove.children[6].children[0].textContent=="O"){
                console.log("Hello Wolrd");
                won.textContent="Player 2 Won"
                IfWon()
                
            }
            else if(CompMove.children[0].children[0].textContent=="O" && CompMove.children[3].children[0].textContent=="O" && CompMove.children[6].children[0].textContent=="O"){
                console.log("Hello Wolrd");
                won.textContent="Player 2 Won"
                IfWon()
                
            }
            else if(CompMove.children[1].children[0].textContent=="O" && CompMove.children[4].children[0].textContent=="O" && CompMove.children[7].children[0].textContent=="O"){
                console.log("Hello Wolrd");
                won.textContent="Player 2 Won"
                IfWon()
                
            }
            else if(CompMove.children[2].children[0].textContent=="O" && CompMove.children[5].children[0].textContent=="O" && CompMove.children[8].children[0].textContent=="O"){
                console.log("Hello Wolrd");
                won.textContent="Player 2 Won"
                IfWon()
                
            }
            checkAllMovesFilled()
        }
    })
})

}


TicTacToe()

function IfWon(){
    if(won.innerHTML=="Player 2 Won" || won.innerHTML=="Player 1 Won")
    {       
        YourMove.forEach(function(dets){
            dets.style.pointerEvents="none"
            setTimeout(() => {
                console.log(dets.childNodes[0].textContent = " ")
            }, 200);
        })
        document.getElementById("Game-over").style.display="flex"
        document.getElementById("Game-over").style.justifyContent="center"
        document.getElementById("Game-over").style.alignItems="center"
        document.getElementById("restart").style.display="block" 
        restartGameIfWon()
    }
}



function restartGameIfWon(){
    restart.addEventListener("click",function(){
        document.getElementById("Game-over").style.display="none"
        YourMove.forEach(function(clear){
            clear.childNodes[0].textContent=" "
            clear.style.pointerEvents = "auto";
        })
        document.getElementById("restart").style.display="none" 
        flag=0
        console.log("restart");
        document.getElementById("chance").innerHTML = "It's 1st Player's chance"
        checkAllMovesFilled()
    })
}


function checkAllMovesFilled() {
    var allMovesFilled = true;
    YourMove.forEach(function (dets) {
        if (dets.childNodes[0].textContent !== "x" && dets.childNodes[0].textContent !== "O") {
            allMovesFilled = false;
        }
    });
    if (allMovesFilled) {
        console.log("All moves filled. Restart the game.");
        document.getElementById("restart").style.display="block"
    }
}
// function restartGame(){
    restart.addEventListener("click",function(){
        YourMove.forEach(function(clear){
            clear.childNodes[0].textContent=" "
            clear.style.pointerEvents = "auto";
        })
        document.getElementById("restart").style.display="none" 
        flag=0
        document.getElementById("chance").innerHTML = "It's 1st Player's chance"
        IfWon()
        checkAllMovesFilled()
    })
// }

// function leItBe(){
    doNotRestart.addEventListener("click",function(){
        YourMove.forEach(function(clear){
            clear.childNodes[0].textContent=" "
            clear.style.pointerEvents = "none";
        })
        document.getElementById("restart").style.display="none" 
        document.getElementById("Game-over").style.display="flex" 
        document.getElementById("Game-over").style.justifyContent="center" 
        document.getElementById("Game-over").style.alignItems="center" 
    })
// }
// restartGame()
// leItBe()
    
