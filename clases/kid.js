class Kid {
    constructor() {
        this.x = 10;
        this.width = 50; 
        this.height = 80; 
        this.y = canvas.height / 2; 
        this.image = new Image();
        this.image.src = "../images/Super-kid.png"
    }
    
  
    drawKid = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }

    kidGravity = () => {
        if (this.y + this.height < canvas.height)
        this.y++
    }
    


    moveKid = (event) => {
        if(event.code === "ArrowRight" && this.x  + this.width < canvas.width){
            this.x += 10
        }else if(event.code === "ArrowLeft" && this.x > 0){
            this.x -= 10
        }else if(event.code === "ArrowDown" && this.y > 0){
            this.y += 10
        }
    }
    

    jumpKid = () => {
        this.y -= 100;
        if(this.y < 0){
            this.y = 0
        }
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