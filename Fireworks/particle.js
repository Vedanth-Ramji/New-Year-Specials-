function Particle(x, y, red, green, blue, type) {
    this.pos = createVector(x, y);
    this.acc = createVector(0, 0);
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.type = type;

    if (this.type == 'seed') {
        this.vel = createVector(random(-2, 2), random(-25, -20));
    } else {
        this.vel = p5.Vector.random2D().mult(random(8) / 2);
        this.lifespan = 255;
    }

    this.applyForce = function(force) {
        this.acc.add(force);
    }

    this.update = function() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
        this.lifespan -= 2;
    }

    this.render = function() {
        if (this.type == 'seed') {
            strokeWeight(6);
            stroke(this.red, this.green, this.blue);
        } else {
            strokeWeight(random(1, 4));
            stroke(this.red, this.green, this.blue, this.lifespan);
        }

        point(this.pos.x, this.pos.y);
    }
}