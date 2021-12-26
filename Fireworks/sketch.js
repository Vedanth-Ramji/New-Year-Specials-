let gravity;
let fireworks = [];

let fireworkBurst1, fireworkBurst2;

function preload() {
    soundFormats('mp3');
    fireworkBurst1 = loadSound('./sounds/fireworkBurst1');
    fireworkBurst2 = loadSound('./sounds/fireworkBurst2');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    gravity = createVector(0, 0.2);
}

function draw() {
    background(0, 0, 0, 150);

    if (random(1) < 0.05) {
        fireworks.push(new Firework());
    }

    for (let i = 0; i < fireworks.length; i++) {
        fireworks[i].update();
        fireworks[i].render();

        if (fireworks[i].firework.pos.y > height + 10) {
            fireworks.splice(i, 1)
        }
    }
}