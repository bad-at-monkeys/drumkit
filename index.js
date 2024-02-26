// Number of drums by class
const numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Click event listener, passes the letter of the drum that is clicked to makeSound().
// The innerHTML of the drum that is clicked matches with the corresponding letter/
// sound case in the switch statement.
for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    animateButton(buttonInnerHTML);
  });

}

// Keypress event listener
document.addEventListener("keydown", function(event) {
    console.log(event);
    makeSound(event.key);
    animateButton(event.key);
});

// Button animation
function animateButton(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout( (e) => { activeButton.classList.remove("pressed"); }, 100);
}

// Callback function; Makes sound depending on which letter is clicked or pressed
function makeSound(key) {
    switch (key) {
      case "w":
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        let tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
      case "d":
        let tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
      case "j":
        let snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
      case "k":
        let crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
      case "l":
        let kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
      default: console.log(key);
    }
}
