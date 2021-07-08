class Game {
    constructor(){
        this.bg = new Image();
        this.bg.src = "./images/Game Screen-Bg.png";
        this.kid;
        this.puppies = [];
        this.enemies = [];
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

        // 4. request animation
        requestAnimationFrame(this.gameLoop)

    }

    checkGameover = () => {
        
    }
}