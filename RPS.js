// let playGame  = confirm("Shall we play rock, paper, or scissor");
// if (playGame){
//     // play
//     let playerChoice = prompt("Please enter rock, paper, or scissor.");
//     if (playerChoice){
//         let playerOne = playerChoice.trim().toLowerCase();
//         if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissor"){
//             let computerChoice = Math.floor(Math.random()*3 + 1)
//             let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissor" ;

//             let result = playerOne === computer ? `Tie! Both chose ${playerOne}` 
//             : playerOne === "rock" && computer === "paper" ? `\nPlayerOne: ${playerOne}\nComputer:${computer}\nComputer Wins!`
//             : playerOne === "paper" && computer === "scissor" ? `\nPlayerOne: ${playerOne}\nComputer:${computer}\nComputer Wins!`
//             : playerOne === "scissor" && computer === "rock" ? `\nPlayerOne: ${playerOne}\nComputer:${computer}\nComputer Wins!`
//             :`\nPlayerOne: ${playerOne}\nComputer:${computer}\nPlayerOne Wins!`
//         alert(result);
//         let playAgain = confirm("Play Again?");
//         playAgain ? location.reload() : alert("Ok Thanks for playing, come again after some time!")
//         }else{
//             alert("You didn't enter rock, paper, or scissor")
//         }
//     }else{
//         alert("I Guess you changed your mind.")
//     }
// }else{
//     alert("Ok, maybe Next Time.")
// }

document.getElementById("rock").onclick = () => playGame("rock");
document.getElementById("paper").onclick = () => playGame("paper");
document.getElementById("scissor").onclick = () => playGame("scissor");
function playGame (playerOne){
    let randomNum = Math.floor(Math.random()*3);
    let computerChoice = ["rock","paper","scissor"];
    let computer = computerChoice[randomNum];

    let result =
    playerOne === computer ? "It's a Tie!" :
    playerOne === "rock" && computer === "paper" ? "Computer Wins!" :
    playerOne === "paper" && computer === "scissor" ? "Computer Wins!":
    playerOne === "scissor" && computer === "rock" ? "Computer Wins!": "You win!"

    document.getElementById("player").textContent = `Player Chose ${playerOne}`;
    document.getElementById("computer").textContent = `Computer Chose ${computer}`;
    document.getElementById("winner").textContent = result
}