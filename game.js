class Game {
    constructor(){
        this.bg = new Image();
        this.bg.src = "./images/GameScreen-Bg.png";
        this.kid = new Kid();
        this.puppyArr = [];
        this.enemyArr = [];
    }


    generatePuppy = () => {
    }

    generateEnemy = () => {

    }

    gameLoop = () => {
        // 1. clearing canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // 2. movements of elements 


        // 3. drawing elements
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)
        this.kid.drawKid()

        // 4. request animation
        requestAnimationFrame(this.gameLoop)

    }

    checkGameover = () => {
        
    }
}