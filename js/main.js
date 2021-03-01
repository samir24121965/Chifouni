// put the different choice of the joke in an array
var choice = {
    PIERRE : 0,
    FEUILLE : 1,
    CISEAUX : 2
}

var choice2 = ["PIERRE", "FEUILLE", "CISEAUX"]

function check_choice(nameChoice) {
    var find = false;
    for(i = 0; i <= choice2.length; i++) {
        if (choice2[i] === nameChoice) {
            find = true;
            break; // loop
        }
    }
    return find
}

// An associatif Array is considerate as an object don't have a length property
function objlength(obj) 
{
    var size = 0
    for(var xobj in obj) {
        size++;
    }
    return size
}
// Attribute a number for choices in array
function fill_array(choicePlayer, choicePC) 
{
    if ((choicePlayer === "CISEAUX" || choicePC === "CISEAUX") && (choicePlayer === "PIERRE" || choicePC === "PIERRE")) {
        choice["PIERRE"] = 2 ;
        choice["FEUILLE"] = 0 ;
        choice["CISEAUX"] = 1 ;
    }
    else {
        choice["PIERRE"] = 0 ;
        choice["FEUILLE"] = 1 ;
        choice["CISEAUX"] = 2 ;
    }
}

// Compare and Calculate both score and return who win
function addScore(choicePlayer, choicePC)
{
    var whoWin = ""
    if(choice[choicePlayer] === choice[choicePC]) {
        scorePlayer++;
        scorePC++;
        whoWin = "No Win"
    }
    else if (choice[choicePlayer] <  choice[choicePC]) {
        scorePC++;
        whoWin = "Computer Win"
    }
    else {
        scorePlayer++;
        whoWin = "Player " + player + " Win"
    } 
    return whoWin
}

function randomChoice() {
   return Math.floor(Math.random() * Math.floor(choice2.length))
}

function beginGame()
{
    //var scorePlayer = 0;
    //var scorePC = 0;
    ///var nbTurn = 3 // Number of turn
    var alertMessage = ""
    var whoWin = ""
    while (scorePlayer < nbTurn && scorePC < nbTurn) 
    { 
        do
        {
            var choicePlayer = prompt("Enter a choice (PIERRE/FEUILLE/CISEAUX)").toUpperCase();
        } while (!check_choice(choicePlayer))
        choicePC = choice2[randomChoice()] ;
        fill_array(choicePlayer, choicePC);
        whoWin = addScore(choicePlayer, choicePC);
        alertMessage =  "Choice " + player + " : " + choicePlayer + "\n"
        alertMessage += "Choice Computer  : " + choicePC + "\n"
        alertMessage += "### " + whoWin + " ###" + "\n"
        alertMessage += "Score " + player + " : "  + scorePlayer + "\n"
        alertMessage += "Score Computer  : "  + scorePC
        alert(alertMessage);
    }
    if (scorePlayer === scorePC) {
        alert("No win");
    } 
        else if (scorePlayer > scorePC) {
            alert("Player " + player + " win");
        }
        else {
            alert("Computer win")
        }
}

alert("Welcome Player");
var player = prompt("Enter Your Name please ").toUpperCase();
var rep = prompt("Do you want to begin the game (Y)es/(N)o").toUpperCase();
while (rep === "Y") 
{
    var scorePlayer = 0;
    var scorePC = 0;
    var nbTurn = 3 // Number of turn
    beginGame();
    var rep = prompt("Do you want to continue the game (Y)es/(N)o").toUpperCase();
}
alert("End Game");