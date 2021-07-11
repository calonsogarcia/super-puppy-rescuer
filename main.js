// canvas
let canvas = document.querySelector("#my-canvas")
let ctx = canvas.getContext("2d")

let splashScreen = document.querySelector("#splash-screen")
let startButton = document.querySelector("#start-btn")
let gameoverScreen = document.querySelector ("#gameover-screen")
let restartButton = document.querySelector ("#restart-btn")
let puppyCounter = document.querySelector ("#puppy-counter")
let timeCounter = document.querySelector ("#time-counter")

let gameObj;


timeCounter.incrementSeconds = () => {
    seconds += 1;
    timeCounter.innerText = `Time played: ${seconds}`;
}

// Event listeners
startButton.addEventListener("click", () => {
    canvas.style.display = "block";
    splashScreen.style.display = "none";

    //console.log("hello")

    //start the game
    gameObj = new Game();
    gameObj.gameLoop()
    
})

canvas.addEventListener("click", () => {
    gameObj.kid.jumpKid()
})


restartButton.addEventListener("click", () => {
    canvas.style.display = "block";
    gameoverScreen.style.display = "none";

    //restart the game
    gameObj = new Game();
    gameObj.gameLoop()
})