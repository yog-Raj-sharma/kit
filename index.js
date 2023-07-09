for(var i = 0; i<document.querySelectorAll(".drum").length ; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click" ,sounds);
}
function sounds() {


var buttonInnerHTML = this.innerHTML;
  keypress1(buttonInnerHTML);
  buttonAmination(buttonInnerHTML);
}
document.addEventListener("keypress" , function(ev){  keypress1(ev.key);
                                                        buttonaminAtion(ev.key);});

function keypress1(key)
{
  switch (key) {
    case "w":
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
      break;
      case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
        break;

  case "s":
  var tom3 = new Audio('sounds/tom-3.mp3');
  tom3.play();
    break;

  case "d":
  var tom4 = new Audio('sounds/tom-4.mp3');
  tom4.play();
    break;

  case "j":
  var crash = new Audio('sounds/crash.mp3');
  crash.play();
    break;

  case "k":
  var kick = new Audio('sounds/kick-bass.mp3');
  kick.play();
    break;

  case "l":
  var snare = new Audio('sound/snare.mp3');
  snare.play();
    break;

    default: console.log("deffault");

  }
}

function buttonAmination(currentkey){
  var activeButton = document.querySelector("."+currentkey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
      activeButton.classList.remove("pressed")
  },100);
}
