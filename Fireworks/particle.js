function Particle(x, y, size, vel) {
    this.pos = createVector(x, y);
    this.vel = vel;
    this.acc = createVector(0, 0);
    this.size = size;

    this.applyForce = function(force) {
        this.acc.add(force);
    }

    this.update = function() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    this.render = function() {
        stroke('white');
        strokeWeight(this.size);
        point(this.pos.x, this.pos.y);
    }
}