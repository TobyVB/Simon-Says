function playGamePattern(){
  match = 0;
  usersTurn = false;
  setTimeout(function(){
    if(gamePatternLength < gamePattern.length){
      $("#"+gamePattern[gamePatternLength]).fadeOut("fast").fadeIn("fast");
      eval(gamePattern[gamePatternLength]).play();
      gamePatternLength +=1;
      playGamePattern();
    } else if (gamePatternLength === gamePattern.length && started === true){
      appendPattern();
      gamePatternLength = 0;
      level += 1;
      $("h1").text("level "+level);
      setTimeout(function(){
        usersTurn = true;
      },500);
    }
  }, 500)
}

function appendPattern(){
  setTimeout(function(){
    randomChosenColour = buttonColours[randomNumber]
    nextSequence();
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
    $("#"+randomChosenColour).fadeOut("fast").fadeIn("fast");
    eval(randomChosenColour).play();
    usersTurn = true;
  },500);
}

$(".btn").click(function(){
  if (usersTurn === true){
    userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    $(this).fadeOut("fast").fadeIn("fast");
    eval(userChosenColour).play();
    animatePress(userChosenColour);
    if(userChosenColour !== gamePattern[match]){
      $("body").addClass("game-over");
      setTimeout(function(){
        $("body").removeClass("game-over");
      }, 100);
      level = 0;
      gamePattern = [];
      userClickedPattern = [];
      $("h1").text("level "+level);
      wrongSound.play();
      console.log(gamePatternLength);
      return gameOver();
    }
    if(userChosenColour === gamePattern[match]){
      match += 1;
      console.log("one of them.")
    } return delayPrep();
  }
});
