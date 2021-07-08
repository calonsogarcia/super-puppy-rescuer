class Kid {
    constructor() {
        this.x = 10;
        this.width = 100; 
        this.height = 200; 
        this.y = canvas.height - this.height; 
       
        this.image = new Image();
        this.image.src = "../images/Super-kid.png"
        //this.speed???
    }
    
  
    drawKid = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }


    moveKid = () => {

    }
    

    jumpKid = () => {

    }

    // checkCollision = () => {} ???
   
}