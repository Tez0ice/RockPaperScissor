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


// function game(){
    
//     const Userchoice = prompt("Rock , Paper or Scissor")
//     const RandInt = getRandomInt(0,3)
//     const RandChoice = getComputerChoice(RandInt)
//     console.log(match(Userchoice,RandChoice))
//     console.log(`Computer Score : ${ComputerScore}`)
//     console.log(`Player Score : ${PlayerScore}`)
 
//     if (PlayerScore == 5){
//         alert("Congrats!!!! You Win 5 rounds")
//     }
//     else{
//         alert("Darn... You Lose")
//     }

// }

var allButton = document.querySelectorAll("button")
var contentDiv = document.querySelector("#content")

let player_Score = document.createElement('p')
let comScore = document.createElement('p')
let result = document.createElement('p')
let resetButton = document.createElement('button')



resetButton.addEventListener("click", () => {
    var child = contentDiv.lastElementChild;
    PlayerScore = 0
    ComputerScore = 0
    result.textContent = ""
    while (child) {
        contentDiv.removeChild(child)
        child = contentDiv.lastElementChild;
    }


    allButton.forEach(function(node){
        node.removeAttribute('disabled','')
    })
})


allButton.forEach(function(node){
    node.addEventListener("click", () => {
        
        let randChoice = getComputerChoice(getRandomInt(0,3))
        console.log(match(node.textContent,randChoice))

        if (contentDiv.childElementCount === 0){
            player_Score.textContent = `Player Score : ${PlayerScore}`
            comScore.textContent = `Computer Score : ${ComputerScore}`  
            contentDiv.append(player_Score,comScore,result,resetButton)
            resetButton.textContent = "Reset"

        }

        else{
            player_Score.textContent = `Player Score : ${PlayerScore}`
            comScore.textContent = `Computer Score : ${ComputerScore}`  
        }

        
        if (PlayerScore == 5){
            allButton.forEach(function(node){
                node.setAttribute('disabled','')
            })
            result.textContent = "Congrats!! You win"

        }

        else if (ComputerScore == 5 ){
            allButton.forEach(function(node){
                node.setAttribute('disabled','')
            })
            result.textContent = "Bruh You Lose..."

    }

    })

}) 
