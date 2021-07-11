class Game {
    constructor(){
        this.bg = new Image();
        this.bg.src = "./images/GameScreen-Bg.png";
        this.kid = new Kid();
        this.puppyArr = [];
        this.enemyArr = [];
        this.isGameOn = true;
    }


    generatePuppy = () => {
        let lastPuppyIndex = this.puppyArr.length - 1
        this.puppyArr[lastPuppyIndex]
        if (!this.puppyArr.length || this.puppyArr[lastPuppyIndex].x <= canvas.width / 2){
            let randomPos = Math.floor(Math.random() * canvas.height * 2)
            let puppy = new Puppy(randomPos, "./images/Puppy.png")
            this.puppyArr.push(puppy)
           
            let randomPos2 = Math.floor(Math.random() * canvas.height * 1.5)
            let puppy2 = new Puppy(randomPos2, "./images/Puppy2.png")
            this.puppyArr.push(puppy2)
        }
    }

    generateEnemy = () => {
        if (!this.enemyArr.length || this.enemyArr[this.enemyArr.length - 1].x <= canvas.width / 2){
           
            let randomPos = Math.floor(Math.random() * canvas.height * 2)
            let enemy = new Enemy(randomPos, "./images/Grandma.png")
            this.enemyArr.push(enemy)
           
            let randomPos2 = Math.floor(Math.random() * canvas.height * 1.5)
            let enemy2 = new Enemy(randomPos2, "./images/Grandma2.png")
            this.enemyArr.push(enemy2)
        }
    }

   checkPuppyCollision = () => {
       this.puppyArr.forEach((eachPuppy) => {
           let counter = 0
           if(this.kid.kidPuppyColission(eachPuppy)){
            this.puppyArr.splice(0,1)
            counter++
           }
       })
   }


    checkGameover = () => {
        this.enemyArr.forEach((eachEnemy) => {
            if(this.kid.kidEnemyCollision(eachEnemy)){
               // console.log("ups")

                this.isGameOn = false;
                canvas.style.display = "none"
                gameoverScreen.style.display = "block"
            }
        })
    }



    gameLoop = () => {
        // 1. clearing canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // 2. movements of elements 
        this.kid.kidGravity()
        this.enemyArr.forEach((eachEnemy) => {
            eachEnemy.moveEnemy()
        })
        this.puppyArr.forEach((eachPuppy) => {
            eachPuppy.movePuppy()
        })
        this.checkGameover()
        this.checkPuppyCollision()

        // 3. drawing elements
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)
        this.kid.drawKid()
        this.generateEnemy()
        this.generatePuppy()
        this.enemyArr.forEach((eachEnemy) => {
           eachEnemy.drawEnemy()
        })
        this.puppyArr.forEach((eachPuppy) => {
            eachPuppy.drawPuppy()
        })
        

        // 4. request animation
        if (this.isGameOn){
        requestAnimationFrame(this.gameLoop)}
    }
}