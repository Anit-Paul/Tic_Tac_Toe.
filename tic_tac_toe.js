let boxes=document.querySelectorAll("#box");
let p=document.querySelector("p");
p.classList.add("hide");
const winPattern=[[1,2,3],[1,4,7],[1,5,9],[2,5,8],[3,6,9],[3,5,7],[4,5,6],[7,8,9]];

let playerNo=1;
let c=0;
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(playerNo==1){
            box.innerText='X';
        
            playerNo=2;
        }
        else{
            box.innerText='O';
            playerNo=1;
        }
        c++;
        box.disabled=true;
        checkWinner();
        if(c==9){
           p.innerText="game draw!";
            p.classList.remove("hide");
        }
    });
});
const disable_boxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable_boxes=()=>{
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
    }
}

const checkWinner=()=>{
    for(let pattern of winPattern){
        let p1=boxes[pattern[0]-1].innerText;
        let p2=boxes[pattern[1]-1].innerText;
        let p3=boxes[pattern[2]-1].innerText;
        if(p1!="" && p2!="" && p3!=""){
        if(p1==p2 && p2==p3){
            disable_boxes();
            let winner=`Congratulations winner is ${p1}!`;
            p.innerText=winner;
            p.classList.remove("hide");
        }
    }
    }
}
let reset=document.querySelector("#reset");
reset.addEventListener("click",()=>{
    playerNo=1;
    enable_boxes();
    p.classList.add("hide");
    c=0;
});
