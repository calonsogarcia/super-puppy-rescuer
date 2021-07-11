class Enemy {
    constructor(positionY, someURL) {
        this.x = canvas.width; 
        this.y = positionY; 
        this.width= 45; 
        this.height = 100; 
        this.speed = 3; 
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