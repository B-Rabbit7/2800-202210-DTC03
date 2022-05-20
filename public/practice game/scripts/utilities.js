function animate() {
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    ctx4.clearRect(0, 0, canvas.width, canvas.height);
    ctx5.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.drawImage(background_lvl2, 0, 0, canvas.width, canvas.height);
    handleRipples();
    handleObstacles();
    //handleParticles();
    

    frogger.draw();
    frogger.update();


    handleScoreBoard();
    //ctx4.drawImage(grass, 0, 0, canvas.width, canvas.height);
    requestAnimationFrame(animate);
}
animate();

// Emulate up button 
document.getElementById('up').onclick = function () {
    music = true
    window.dispatchEvent(new KeyboardEvent('keydown', {
        key: "e",
        keyCode: 38,
        code: "KeyE",
        which: 38,
        shiftKey: false,
        ctrlKey: false,
        metaKey: false
    }));
    window.dispatchEvent(new KeyboardEvent('keyup', {
        key: "e",
        keyCode: 38,
        code: "KeyE",
        which: 38,
        shiftKey: false,
        ctrlKey: false,
        metaKey: false
    }));
}

// Emulate left button 
document.getElementById('left').onclick = function () {
    window.dispatchEvent(new KeyboardEvent('keydown', {
        key: "e",
        keyCode: 37,
        code: "KeyE",
        which: 38,
        shiftKey: false,
        ctrlKey: false,
        metaKey: false
    }));
    window.dispatchEvent(new KeyboardEvent('keyup', {
        key: "e",
        keyCode: 37,
        code: "KeyE",
        which: 38,
        shiftKey: false,
        ctrlKey: false,
        metaKey: false
    }));
}

// Emulate right button 
document.getElementById('right').onclick = function () {
    window.dispatchEvent(new KeyboardEvent('keydown', {
        key: "e",
        keyCode: 39,
        code: "KeyE",
        which: 39,
        shiftKey: false,
        ctrlKey: false,
        metaKey: false
    }));
    window.dispatchEvent(new KeyboardEvent('keyup', {
        key: "e",
        keyCode: 39,
        code: "KeyE",
        which: 39,
        shiftKey: false,
        ctrlKey: false,
        metaKey: false
    }));
}

// Emulate down button 
document.getElementById('down').onclick = function () {
    window.dispatchEvent(new KeyboardEvent('keydown', {
        key: "e",
        keyCode: 40,
        code: "KeyE",
        which: 40,
        shiftKey: false,
        ctrlKey: false,
        metaKey: false
    }));
    window.dispatchEvent(new KeyboardEvent('keyup', {
        key: "e",
        keyCode: 37,
        code: "KeyE",
        which: 38,
        shiftKey: false,
        ctrlKey: false,
        metaKey: false
    }));
}


window.addEventListener('keydown', function (e) {
    keys = [];
    keys[e.keyCode] = true;
    if (keys[37] || keys[38] || keys[39] || keys[40]) {
        frogger.jump();
    }
})

window.addEventListener('keyup', function (e) {
    delete keys[e.keycode];
    frogger.moving = false;
    frogger.frameX = 0;
});

function scored() {
    score++;
    gameSpeed += 0.5;
    frogger.x = canvas.width / 2 - frogger.width / 2;
    frogger.y = canvas.height - frogger.height - 40;
}

function handleScoreBoard(){
    ctx4.fillStyle = 'black';
    ctx4.strokeStyle = 'black';
    ctx4.font = '15px Verdana';
    ctx4.strokeText('Score', 265, 15);
    ctx4.font = '60px Verdana';
    ctx4.fillText(score, 270, 65);
    ctx4.font = '15px Verdana';
    ctx4.strokeText('Highscore', 15, 15);
    ctx4.font = '30px Verdana';
    ctx4.fillText(highscore[0], 40, 50);
    // ctx4.strokeText('Collisions: ' + collisionCount, 10, 175);
    // ctx4.strokeText('Game Speed: ' + gameSpeed.toFixed(1), 10, 195);
}

// collision detection between two rectangles
function collision(first, second){
    return !(first.x > second.x + second.width || first.x + first.width < second.x || first.y > second.y + second.height || first.y + first.height < second.y)
}

function resetGame(){
    console.log(score);
    $.ajax({
        url: `http://learninghub-env.eba-7q6hwca8.us-west-1.elasticbeanstalk.com/highscore/${score}`,
        type: "get",
        success: function (x){
            console.log(x);
        }
    })
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height - 40;
    score = 0;
    collisionCount++;
    if (egg_count < 5){
    gameSpeed = 0.4;
    }
    else{
        gameSpeed = 4.5;
    }

    document.getElementById("overlay").style.display = "block";
    audio.pause();
}