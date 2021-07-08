// canvas
let canvas = document.querySelector("#my-canvas")
let ctx = canvas.getContext("2d")

let splashScreen = document.querySelector("#splash-screen")
let startButton = document.querySelector("#start-btn")
let gameoverScreen = document.querySelector ("#gameover-screen")
let restartButton = document.querySelector ("#restart-btn")

let game;


// Event listeners
startButton.addEventListener("click", () => {
    canvas.style.display = "block";
    splashScreen.style.display = "none";

    //console.log("hello")

    //start the game
    game = new Game();
    game.gameLoop()
    
})


restartButton.addEventListener("click", () => {
    canvas.style.display = "block";
    gameoverScreen.style.display = "none";

    //restart the game
    game = new Game();
    game.gameLoop()
})