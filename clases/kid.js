class Kid {
    constructor() {
        this.x = 10;
        this.width = 60; 
        this.height = 100; 
        this.y = canvas.height / 2; 
        this.image = new Image();
        this.image.src = "../images/Super-kid.png"
        //this.speed???
    }
    
  
    drawKid = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }

    kidGravity = () => {
        if (this.y + this.height < canvas.height)
        this.y++
    }
    

    /*
    moveKid = () => {
        if(this.x > canvas.width){
            this.x++
        }else if (this.x > canvas.width){
            this.x--
        }
    }
    */
    

    jumpKid = () => {
        this.y -= 100;
    }

    kidEnemyCollision = (enemy) => {
        return this.x < enemy.x + enemy.width &&
            this.x + this.width > enemy.x &&
            this.y < enemy.y + enemy.height &&
            this.y + this.height > enemy.y  
    }


    kidPuppyColission = (puppy) => {
        if (this.x < puppy.x + puppy.width &&
            this.x + this.width > puppy.x &&
            this.y < puppy.y + puppy.height &&
            this.y + this.height > puppy.y) {
              // collision detected!
              return true
         }
    }
   
}