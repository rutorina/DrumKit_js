for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

document.addEventListener("keypress", keyPress);

function handleClick() {
  var audio; // = new Audio("./sounds/tom-1.mp3");

  switch (this.textContent) {
    case "w":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "a":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    case "s":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "j":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "k":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "l":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    default:
      break;
  }
  audio.play();

  buttonAnimation(this.innerHTML);
}

function keyPress(e) {
  document.querySelector("." + e.key.toLowerCase()).click();
  buttonAnimation(e.key.toLowerCase());
}

function buttonAnimation(e) { 
    //alert(e);
    var activeButton = document.querySelector("." + e);
   // alert(activeButton.innerHTML);
    activeButton.classList.add("pressed");
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
}