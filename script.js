let boxes = document.querySelectorAll(".box");
let rst = document.querySelector(".rst");
let newGameBtn = document.querySelector(".new-btn");
let msgCon = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");

let turnO=true;

const wP=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO){
            box.innerText='O';
            turnO=false;
        }
        else{
            box.innerText='X';
            turnO=true;
        } 
        box.disabled=true;

        checkWinner();

        
    })
});

const disBtns = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
}

const checkWinner = () =>{
    for (let pattern of wP ){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                disBtns();
            }
        }
    }
}

const showWinner = (winner) =>{
    msg.innerText=`Congrats!, ${winner} is the winner`;
    msgCon.classList.remove("hide");
}

const enaBtns = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const resetGame = () =>{
    turnO = true;
    enaBtns();
    msgCon.classList.add("hide");
}
newGameBtn.addEventListener("click",resetGame);
rst.addEventListener("click",resetGame);