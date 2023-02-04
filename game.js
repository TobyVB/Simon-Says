var blue = new Audio("blue.mp3");
var green = new Audio("green.mp3");
var red = new Audio("red.mp3");
var yellow = new Audio("yellow.mp3");
var wrongSound = new Audio("wrong.mp3");

var userClickedPattern = [];
var gamePattern = [];
var gamePatternLength = 0

var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var usersTurn = false;
var started = false;

var randomNumber = 0;
var userChosenColour;
var match = 0;
var randomChosenColour = buttonColours[randomNumber];

$(document).keypress(function(event){
  if(started === false){
    nextSequence();
    appendPattern();
    started = true;
    if(started === true){
      level = 1;
      $("h1").text("level "+level);
    }
  }
});

function gameOver(){
  $("h1").text("Game Over, press any key to start.");
  userClickedPattern = [];
  gamePattern = [];
  match = 0;
  started = false;
}
function nextSequence(){
  randomNumber = Math.floor(Math.random()*4);
}

function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
  },100);
}

function checkIfTotalMatch(){
  if(userClickedPattern.length === gamePattern.length){
    usersTurn = false;
    setTimeout(function(){
      playGamePattern();
    },1000);
    userClickedPattern = [];
    return console.log("all of them.");
  }
}

function delayPrep(){
  checkIfTotalMatch();
}
