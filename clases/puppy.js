class Puppy {
    constructor(positionY, positionX, puppySpeed, someURL) {
        this.x = positionX; 
        this.y = positionY; 
        this.width= 55; 
        this.height = 100; 
        this.speed = puppySpeed; 
        this.image = new Image;
        this.image.src = someURL;
    }

    drawPuppy = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }

    movePuppy = () => {
        this.x = this.x - this.speed 
    }
}