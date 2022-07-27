var bluecar = document.getElementById("bluecar");
var racecar = document.getElementById("racecar");
var result = document.getElementById("result");
var score = document.getElementById("score");
var jumpsound = document.getElementById("jumpsound");
var counter = 0;

// bluecar move
bluecar.addEventListener("animationiteration",function(){
    var random = (Math.floor(Math.random()*3)) *130
    bluecar.style.left = random + "px";
    counter = counter + 10;
})

// red car move
window.addEventListener("keydown",function(e){
    if(e.keyCode == "39")
    {
        var racecarleft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"))  // this is for right move.
        if(racecarleft < 260)
        {
            racecar.style.left = (racecarleft + 130) + "px";
        }
        jumpsound.play();
    }

    if(e.keyCode == "37")
    {
    var racecarleft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"))  // this is for left move.
    if(racecarleft > 0)
    {
        racecar.style.left = (racecarleft - 130) + "px"
        
    }
        jumpsound.play();
    }
})



// Game Over

setInterval(function Gameover(){
    var bluecartop = parseInt(window.getComputedStyle(bluecar).getPropertyValue("top"))
    var bluecarleft = parseInt(window.getComputedStyle(bluecar).getPropertyValue("left"))
    var racecarleft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"))
    
    if((bluecarleft === racecarleft) && (bluecartop > 250) && (bluecartop < 450)){
      result.style.display  = "block";
      game.style.display = "none"
      score.innerHTML = `Score: ${counter}`;

      counter = 0;
    }
},10)

