class Obstacle{
    constructor(x, y, width, height, speed, type){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.type = type;
    }
    draw(){
        if (this.type === 'ice1'){
            ctx1.fillStyle = 'blue';
            ctx1.fillRect(this.x, this.y, this.width, this.height);
            ctx1.drawImage(squareIceSprite, 0, 0, 80, 80, this.x, this.y, this.width, this.height);
        } else {
            ctx3.fillStyle = 'blue';
            ctx3.fillRect(this.x, this.y, this.width, this.height);
            ctx3.drawImage(rectIceSprite, 0, 0, 160, 80, this.x, this.y, this.width, this.height);
        }
    }
    update(){
        this.x += this.speed * gameSpeed
        if(this.speed > 0){
        if(this.x > canvas.width + this.width){
            this.x = 0 - this.width
        }
    }else{
        if (this.x < 0 - this.width ){
            this.x = canvas.width + this.width;
        }
    }
    }
}

function initObstacles(){
    // lane 1
    for (let i = 0; i < 2; i++){
        let x = i * 350;
        logsArray.push(new Obstacle(x, canvas.height - grid * 2 - 20, grid * 2, grid, 2,'ice2'))
    }
    // lane 2
    for (let i = 0; i < 2; i++){
        let x = i * 300
        logsArray.push(new Obstacle(x, canvas.height - grid * 3 -20, grid * 2, grid,  -2, 'ice2'))
    }
    // lane 3
    for (let i = 0; i < 2; i++){
        let x = i * 400;
        logsArray.push(new Obstacle(x, canvas.height - grid * 4 - 20, grid * 2, grid, 3, 'ice2'))
    }
    // lane 4
    for (let i = 0; i < 2; i++){
        let x = i * 400;
        logsArray.push(new Obstacle(x, canvas.height - grid * 5 - 20, grid * 2, grid, -2, 'ice2'));
    }
    // lane 5
    for (let i = 0; i < 3; i++){
        let x = i * 200;
        logsArray.push(new Obstacle(x, canvas.height - grid * 6 - 20, grid, grid, 1, 'ice1'));
    }
    }
initObstacles();

function handleObstacles(){
    for(let i = 0; i < carsArray.length; i++){
        carsArray[i].update();
        carsArray[i].draw();
    }
    for(let i = 0; i < logsArray.length; i++){
        logsArray[i].update();
        logsArray[i].draw();
    }

    // collision with logs
    if (frogger.y < 440 && frogger.y > 100){
        safe = false;
        for (let i = 0; i < logsArray.length; i++){
            if (collision(frogger, logsArray[i])){
                frogger.x += logsArray[i].speed * gameSpeed;
                safe = true;
            }
        }
        if (!safe){
            for (let i = 0; i < 30; i++){
                ripplesArray.unshift(new Particle(frogger.x, frogger.y));
            }
            resetGame();
        }
    }
}