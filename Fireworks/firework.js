function Firework() {
    this.firework = new Particle(random(4, width - 4), height, 4, createVector(0, random(-12, -8)));
    this.exploded = false;
    this.numParticles = 100;
    this.particles = [];

    this.update = function() {
        if (!this.exploded) {
            this.firework.applyForce(gravity);
            this.firework.update();

            if (this.firework.vel.y >= 0) {
                this.exploded = true;
                this.explode();
            }
        } else {
            for (let i = 0; i < this.particles.length; i++) {
                this.particles[i].applyForce(gravity);
                this.particles[i].update();

                if (this.particles[i].pos.y > height + 10) {
                    this.particles.splice(i, 1);
                }
            }
        }
    }

    this.explode = function() {
        for (let i = 0; i < this.numParticles; i++) {
            let vel = p5.Vector.random2D().mult(random(1, 6)).mult(0.85);
            this.particles.push(new Particle(this.firework.pos.x, this.firework.pos.y, 1.5, vel));
        }
    }

    this.render = function() {
        if (!this.exploded) {
            this.firework.render();
        } else {
            for (let i = 0; i < this.particles.length; i++) {
                this.particles[i].render();
            }
        }
    }
}