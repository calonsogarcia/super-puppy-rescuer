class Game {
    constructor(){
        this.bg = new Image();
        this.bg.src = "./images/GameScreen-Bg.jpeg";
        this.kid = new Kid();
        this.puppyArr = [];
        this.enemyArr = [];
        this.isGameOn = true;
        this.counter = 0;
        this.currentPuppySpeed = 2;
        this.currentEnemySpeed = 2.5;
    }


    generatePuppy = () => {
        let lastPuppyIndex = this.puppyArr.length - 1
        // this.puppyArr[lastPuppyIndex]
        if (!this.puppyArr.length || this.puppyArr[lastPuppyIndex].x <= canvas.width * 0.75){

            //tryig to make them apeare just inside the canvas and randomly between them
            let randomPos = Math.floor(Math.random() * (canvas.height - 100))
            let randomPosX = Math.floor(Math.random() * 600) + canvas.width
            let puppy = new Puppy(randomPos, randomPosX, this.currentPuppySpeed, "./images/Puppy.png")
            this.puppyArr.push(puppy)
           
            let randomPos2 = Math.floor(Math.random() * (canvas.height - 100))
            let randomPosX2 = Math.floor(Math.random() * 600) + canvas.width
            let puppy2 = new Puppy(randomPos2, randomPosX2, this.currentPuppySpeed, "./images/Puppy2.png")
            this.puppyArr.push(puppy2)
        }
    }

    generateEnemy = () => {
        if (!this.enemyArr.length || this.enemyArr[this.enemyArr.length - 1].x <= canvas.width / 2){
           
            let randomPos = Math.floor(Math.random() * (canvas.height - 100))
            let randomPosX = Math.floor(Math.random() * 600) + canvas.width
            let enemy = new Enemy(randomPos, randomPosX, this.currentEnemySpeed, "./images/Grandma.png")
            this.enemyArr.push(enemy)
           
            let randomPos2 = Math.floor(Math.random() * (canvas.height - 100))
            let randomPosX2 = Math.floor(Math.random() * 500) + canvas.width
            let enemy2 = new Enemy(randomPos2, randomPosX2, this.currentEnemySpeed, "./images/Grandma2.png")
            this.enemyArr.push(enemy2)
        }
    }


   checkPuppyCollision = () => {
       this.puppyArr.forEach((eachPuppy, index) => {
           if(this.kid.kidPuppyColission(eachPuppy)){
            this.puppyArr.splice(index,1)
            this.counter++
            this.currentPuppySpeed += 0.2
            this.currentEnemySpeed += 0.3
           }
       })
   }

   
   checkPuppyCollisionCounter = () => {
       ctx.font = "20px arial MS"
       ctx.fillStyle = "black"
       ctx.fillText(`Puppies rescued: ${this.counter}`, canvas.height /  0.8 , canvas.width / 17)
   }



    checkGameover = () => {
        this.enemyArr.forEach((eachEnemy) => {
            if(this.kid.kidEnemyCollision(eachEnemy)){
               // console.log("ups")

                this.isGameOn = false;
                canvas.style.display = "none"
                gameoverScreen.style.display = "flex"
                rescuedPuppiesCounter.innerHTML = `Total puppies rescued: ${this.counter}`
                //stop music
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
     //   this.increasePuppySpeed()

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
        this.checkPuppyCollisionCounter()
        

        // 4. request animation
        if (this.isGameOn){
        requestAnimationFrame(this.gameLoop)}
    }
}