document.write("Press r, p, or s to start");

var choices = ["r", "p", "s"]
var wins = 0;
var losses = 0;
var ties = 0;

//When a user presses a key it starts the game.
document.onkeyup = function(event){
    var userGuess = event.key;
    
    //this function is the main logic of the game; it is invoked when a user presses a key.  It generates the computer's choice and sets up the conditionals.  
    function computerGuess(){
        var compChoice = choices[Math.floor(Math.random() * choices.length)];
        console.log("computer choice: " + compChoice);

        //this checks to make sure that the player is using the appropriate keys.
        if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")){

            //these conditionals compare the user's guess to the computer's guess and set up the rules for wins/losses/ties and then adds to the appropriate counter depending on the outcome.

            //this is the losses bucket.
            if (compChoice === "r" && userGuess === "s" || compChoice === "s" && userGuess === "p" || compChoice === "p" && userGuess === "r"){
                losses++;
            } 

            //this is the wins bucket.
            else if (compChoice === "r" && userGuess === "p" || compChoice === "p" && userGuess === "s" || compChoice === "s" && userGuess === "r"){
                wins++;
            } 

            //this is the ties bucket.  It doesn't contain conditions similar to above because there are only 3 buckets that can be fallen into--you either fall into the wins bucket or the losses bucket, if you make it past that then the only option left is that it was a tie.
            else {
                ties ++;
            }

        //this block creates the text for the page and displays the user's entry, the computer's generated choice, the number of wins, losses, and ties.
        var html = 
        "<p>You chose: " + userGuess + "</p>" +
        "<p>The computer chose: " + compChoice + "</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Ties: " + ties + "</p>";

        //this takes the var html's block of code and injects it onto the page.
        document.querySelector("#game").innerHTML = html;
        }

        //this alerts the player that they are not using a valid key.
        else {
            alert("Please press 'r', 'p', or 's' to play.");
        }
    }

    //this invokes the logic of the game, but is only called once a key is pressed.
    computerGuess();
}


