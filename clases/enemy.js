class Enemy {
    constructor(positionY, positionX, someURL) {
        this.x = positionX; 
        this.y = positionY; 
        this.width= 45; 
        this.height = 100; 
        this.speed = 2; 
        this.image = new Image;
        this.image.src = someURL;
    }

    drawEnemy = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }

    moveEnemy = () => {
        this.x = this.x - this.speed
    }
}