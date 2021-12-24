let currentParticle;
let snowflake = [];

function setup() {
    createCanvas(600, 600);
    currentParticle = new Particle(width / 2, 0);
}

function draw() {
    translate(width / 2, height / 2);
    rotate(PI / 6);
    background(0);

    let count = 0;

    while (!currentParticle.checkFinished(snowflake)) {
        currentParticle.move();
        count++;
    }

    if (count == 0) {
        noLoop();
        console.log('The snowflake is complete');
    }

    snowflake.push(currentParticle);
    currentParticle = new Particle(width / 2, 0);

    for (let i = 0; i < 6; i++) {
        rotate(PI / 3);
        currentParticle.show();
        for (let i = 0; i < snowflake.length; i++) {
            snowflake[i].show();
        }

        push();
        scale(1, -1);
        currentParticle.show();
        for (let i = 0; i < snowflake.length; i++) {
            snowflake[i].show();
        }
        pop();
    }
}