var moveX = 0;
var image = document.querySelector(".image");
var background_image = document.querySelector("#inner-container");
var container = document.querySelector("#container");
container.addEventListener("keyup", moveBg);


function moveBg() {
    key = event.keyCode;
    console.log(key);

}