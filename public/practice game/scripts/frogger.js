class Frogger {
    constructor() {
        this.spriteX = 77;
        this.spriteY = 77;
        this.spriteWidth = 250;
        this.spriteHeight = 250;
        this.width = this.spriteWidth / 5;
        this.height = this.spriteHeight / 5;
        this.x = canvas.width / 2 - this.width / 2;
        this.y = canvas.height - this.height - 40;
        this.moving = false;
        this.frameX = 0;
        this.frameY = 2;
    }
    // Character movement
    update() {
        if (keys[38]) { //up 
            if (this.moving == false) {
                this.y -= grid;
                this.moving = true;
                this.frameX = 4
                this.frameY = 3;
            }
        }
        if (keys[40]) { //down
            if (this.moving == false && this.y < canvas.height - this.height * 2) {
                this.y += grid;
                this.moving = true;
                this.frameY = 2;
            }
        }
        if (keys[37]) { //left
            if (this.moving == false && this.x > this.width) {
                this.x -= grid;
                this.moving = true;
                this.frameY = 1;
            }
        }
        if (keys[39]) { //right
            if (this.moving == false && this.x < canvas.width - this.width * 2) {
                this.x += grid;
                this.moving = true;
                this.frameY = 0;
            }
        }
        if (this.y < 0) scored();
    }
    draw() {
        ctx3.drawImage(penguinSprite, this.frameX * this.spriteX, this.frameY * this.spriteY, this.spriteX, this.spriteY, this.x - 7, this.y - 15, this.width * 1.5, this.height * 1.5);
    }
    jump() {
        if (this.moving === false) this.frameX = 4;
        else if (this.frameX === 4) this.frameX = 0;
    }
}

const frogger = new Frogger();