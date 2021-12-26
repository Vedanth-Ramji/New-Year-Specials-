let gravity;
let fireworks = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    gravity = createVector(0, 0.5);
}

function draw() {
    background(0);

    if (random(1) < 0.08) {
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