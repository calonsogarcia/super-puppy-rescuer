// canvas
let canvas = document.querySelector("#my-canvas")
let ctx = canvas.getContext("2d")

let splashScreen = document.querySelector("#splash-screen")
let startButton = document.querySelector("#start-btn")
let gameoverScreen = document.querySelector ("#gameover-screen")
let restartButton = document.querySelector ("#restart-btn")
let rescuedPuppiesCounter = document.querySelector("#counter")

let gameObj;




// Event listeners
startButton.addEventListener("click", () => {
    canvas.style.display = "block";
    splashScreen.style.display = "none";

    //console.log("hello")

    //start the game
    gameObj = new Game();
    gameObj.sound.play()
    gameObj.gameLoop()
    
})

canvas.addEventListener("click", () => {
  gameObj.kid.jumpKid()
})


window.addEventListener("keydown", (event) => {
    gameObj.kid.moveKid(event)
})


restartButton.addEventListener("click", () => {
    canvas.style.display = "block";
    gameoverScreen.style.display = "none";

    //restart the game
    gameObj = new Game();
    gameObj.sound.play()
    gameObj.gameLoop()
})