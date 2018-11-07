document.write("Press r, p, or s to start");

var choices = ["r", "p", "s"]
var wins = 0;
var losses = 0;
var ties = 0;

document.onkeyup = function(event){
    var userGuess = event.key;
    
    function computerGuess(){
        var compChoice = choices[Math.floor(Math.random() * choices.length)];
        console.log("computer choice: " + compChoice);

        if (compChoice === "r" && userGuess === "s" || compChoice === "s" && userGuess === "p" || compChoice === "p" && userGuess === "r"){
            losses++;
        } 
        else if (compChoice === "r" && userGuess === "p" || compChoice === "p" && userGuess === "s" || compChoice === "s" && userGuess === "r"){
            wins++;
        } 
        else {
            ties ++;
        }

        var html = 
        "<p>You chose: " + userGuess + "</p>" +
        "<p>The computer chose: " + compChoice + "</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Ties: " + ties + "</p>";

        document.querySelector("#game").innerHTML = html;

    }

    computerGuess();
}


