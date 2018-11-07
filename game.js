// <!-- message that says "press r, p, or s to start" -->
// <!-- once r, p, or s is clicked get rid of that message and load: -->
//     <!-- you chose: (insert the user's keystroke, but only if it's r, p, or s) -->
//     <!-- the computer chose: (the computer's random choice) -->
//     <!-- wins counter (set to 0)-->
//     <!-- losses counter (set to 0)-->
//     <!-- ties counter (set to 0)-->
// <!-- grab the user's choice and trigger logic that chooses a random computer letter -->
// <!-- compare the user's choice with the computer's -->

//     <!-- if computer's choice is r and the user's choice is s losses++-->
//      <!-- if computer's choice is s and the user's choice is p losses++-->
//     <!-- if computer's choice is p and the user's choice is r losses++-->

    // <!-- if computer's choice is r and the user's choice is p wins++-->
//     <!-- if computer's choice is p and the user's choice is s wins++-->
//     <!-- if computer's choice is s and the user's choice is r wins++-->
//     
//     <!-- catch-all bucket for ties in else, no comparison needed -->

// <!-- reselect the computer's choice but only display it after the user has selected -->
// <!-- retrigger game, add to w/l/t counters -->

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


