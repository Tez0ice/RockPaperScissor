// This function helps generate random interger between two values min/equal mimimum value while max/the maximum threshold
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
// Using the random int , we then use the value to randomize between 
// Rock, Paper , Scissors based on the random numbers (can be seen below). 


// Function below is computer choice where it will return between the rock,scissors or paper
// RAND expression is number and in this case we will fill the random int function above to randomize between
// rock , scissors or paper 
function getComputerChoice(Rand){
    if (Rand == 0){
        return "Rock"
    }
    else if(Rand == 1){
        return "Scissor"
    }
    else{
        return "Paper"
    }
}

// Assign random int to the global variable using random int function above (line 2-6)

let PlayerScore = 0
let ComputerScore = 0

function match(player , computer){
    if (player.toLowerCase() == "rock" && computer.toLowerCase() == "scissor"){
        PlayerScore += 1
        return "You Win!!! Rock beats Scissor"
    }
    else if (player.toLowerCase() == "rock" && computer.toLowerCase() == "paper"){
        ComputerScore += 1
        return "You Lose... Paper beats Rock"
    }
    else if (player.toLowerCase() == "scissor" && computer.toLowerCase() == "paper"){
        PlayerScore += 1
        return "You Win!!! Scissor beats Paper"
    }
    else if (player.toLowerCase() == "scissor" && computer.toLowerCase() == "rock"){
        ComputerScore += 1
        return "You Lose... Rock beats Scissor"
    }
    else if (player.toLowerCase() == "paper" && computer.toLowerCase() == "scissor"){
        ComputerScore += 1
        return "You Lose... Scissor beats Paper"
    }
    else if (player.toLowerCase() == "paper" && computer.toLowerCase() == "rock"){
        PlayerScore += 1
        return "You Win!!! Paper beats Rock"
    }
    else{
        return "TIE !!!!"
    }
}


function game(){
    while (PlayerScore != 5 && ComputerScore != 5){
        const Userchoice = prompt("Rock , Paper or Scissor")
        const RandInt = getRandomInt(0,3)
        const RandChoice = getComputerChoice(RandInt)
        console.log(match(Userchoice,RandChoice))
        console.log(`Computer Score : ${ComputerScore}`)
        console.log(`Player Score : ${PlayerScore}`)
    }

    if (PlayerScore == 5){
        alert("Congrats!!!! You Win 5 rounds")
    }
    else{
        alert("Darn... You Lose")
    }
}


game()