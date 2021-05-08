function computerplay() {
    let result = "";
    let choices = ["rock","paper","scissor"];
    result = choices[Math.floor(Math.random()* 3)];
    return result;
}

function Round(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === computerSelection){
        if (playerSelection.toLowerCase === "rock"){
            return "Equality, Rock and Rock";
        }
        if (playerSelection.toLowerCase === "paper"){
            return "Equality, paper and paper";
        }
        if (playerSelection.toLowerCase === "scissor"){
            return "Equality, scissor and scissor";
        }
    }
    if(playerSelection.toLowerCase() === "rock"){
        if (computerSelection === "paper"){
            return "Loose ! Paper takes Rock";
        }
        if (computerSelection === "scissor"){
            return "Win ! Rock takes scissor";
        }
    }
    if(playerSelection.toLowerCase() === "paper"){
        if (computerSelection === "rock"){
            return "Win ! Paper takes Rock";
        }
        if (computerSelection === "scissor"){
            return "Loose ! scissor takes paper";
        }
    }
    if(playerSelection.toLowerCase() === "scissor"){
        if (computerSelection === "paper"){
            return "Win ! Scissor takes paper";
        }
        if (computerSelection === "rock"){
            return "Loose ! Rock takes scissor";
        }
    }

}

function count(string){
    if (string === "Win ! Scissor takes paper" || string === "Win ! Paper takes Rock" || string === "Win ! Rock takes scissor"){
        return 1;
    }
    if (string === "Loose ! Rock takes scissor" || string === "Loose ! scissor takes paper" || "Loose ! Paper takes Rock"){
        return 2;
    }
    else {
    return 0;
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComp = 0;
    let playerSelection = "";
    while(scorePlayer < 5 || scoreComp < 5){
        playerSelection = prompt("Rock paper or scissors ? :")
        let to_print = Round(playerSelection, computerplay());
        if (count(to_print) === 3){
            scorePlayer = scorePlayer+1;
        }
        if (count(to_print) === 4){
            scoreComp = scoreComp+1;
        }
        console.log(count());
        console.log(to_print);
        console.log("the score is : " + scorePlayer + "/" + scoreComp);
    }
}

game();