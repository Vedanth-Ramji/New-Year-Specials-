let fireworks = [];
let gravity;

function setup() {
    createCanvas(windowWidth, windowHeight - 400);
    gravity = createVector(0, 0.2);
}

function draw() {
    background(0);

    if (random(1) < 0.1) {
        fireworks.push(new Firework());
    }

    for (let i = 0; i < fireworks.length; i++) {
        fireworks[i].update();
        fireworks[i].render();

        if (fireworks[i].firework.exploded) {
            fireworks.splice(i, 1);
            console.log(fireworks.length);
        }
    }
}