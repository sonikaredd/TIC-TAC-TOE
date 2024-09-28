let boxes=document.querySelectorAll('.box');
let resetbtn=document.querySelector('.reset-btn');
let newbtn=document.querySelector('.new-btn');
let msgContainer=document.querySelector('.msg-container');
let msgs=document.querySelector('#msg');

let turnO=true;//playerx,playerO,which player plays frist
//now we are using 2D array (storing game in 2D array pattern)
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,5,6],
    [3,4,5],
    [6,7,8]
];

// reset game
const resetGame = () =>{
    turnO=true;
    enableboxes();
    msgContainer.classList.add("hide");
}

//now clicking on box some event should oocur
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was click");
        if(turnO){//playerO turn
            box.innerText='O';//print o
            turnO=false;//now turn for player x
        }else{//playerX Turn
            box.innerText='X';
            turnO=true;
        }
        box.disabled=true;//once we anyvalue it should not change after click it gain
        checkwinner();
    });
});

//disable boxes after wining
const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

//ensable boxes after wining
const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};

//show winner
const showWinner = (winner) =>{
    msgs.innerText='congratulations, winner is'+ "" +winner;
    msgContainer.classList.remove("hide");
    disableboxes();
 };
 

// for finding winner
const checkwinner = () =>{
    for( let pattern of winpatterns){
        let pos1Val =  boxes[pattern[0]].innerText;
        let pos2Val =  boxes[pattern[1]].innerText;
        let pos3Val =  boxes[pattern[2]].innerText;

        if(pos1Val != ""&& pos2Val != ""&& pos3Val !=""){
            if((pos1Val===pos2Val)&&(pos2Val===pos3Val)){
                console.log("winner",pos1Val);// identifying winner
                showWinner(pos1Val);
            }
        }
    };
    
};

newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);