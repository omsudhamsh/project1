let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#rs");
let newGame = document.querySelector("#ng");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const resetGame = () => {
        turnO = true;
        enableBoxes();
        msgContainer.classList.add("hide");
    };

    boxes.forEach(box => {
        box.addEventListener("click", () => {
            //console.log("Box was clicked!");
            if (turnO) {
                box.innerHTML = "O";
                turnO = false;
            } else {
                box.innerHTML = "X";
                turnO = true;
            }
            box.disabled = true;

            checkWinner(); //be steady here
        });
    });
    const disableBoxes = () => {
        for(let box of boxes){
            box.disabled = true;
        }
    };
    const enableBoxes = () => {
        for(let box of boxes){
            box.disabled = false;
            box.innerHTML = "";
        }
    };

    const showWinner = (winner) => {
    msg.innerHTML = `Congratulations, Winner is ${winner}`; //This is the important step to do.
    msgContainer.classList.remove("hide");
    disableBoxes();
 };
 
 const checkWinner = () => {
     for (let pattern of winPatterns) {
         let pos1Val = boxes[pattern[0]].innerHTML;
         let pos2Val = boxes[pattern[1]].innerHTML;
         let pos3Val = boxes[pattern[2]].innerHTML;
 
         if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") { 
             if (pos1Val === pos2Val && pos2Val === pos3Val) {
                 //console.log("winner", pos1Val); // Return the winner if there is one.
                 showWinner(pos1Val);
             }
         }
     }
 };
 
 newGame.addEventListener("click", resetGame);
 resetButton.addEventListener("click", resetGame);

 
    