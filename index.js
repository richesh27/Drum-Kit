
var numberOfDrumBits = document.querySelectorAll(".drum").length;


//click press

for (var i = 0; i < numberOfDrumBits; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        keySoundPress(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
}



// KEYBOARD press 
document.addEventListener("keypress", function (event) {
    keySoundPress(event.key);
    buttonAnimation(event.key);

})

function keySoundPress(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(buttonInnerHTML);

    }
}

function buttonAnimation(key) {

    var currentButton = document.querySelector("." + key);
    currentButton.classList.add("pressed");

    setTimeout(function () {
        currentButton.classList.remove("pressed");
    }, 150);

}





// var audio = new Audio("sounds/tom-1.mp3");
        // audio.play();