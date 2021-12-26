function Firework() {
    this.firework = new Particle(random(10, width - 10), height, random(255), random(255), random(255), 'seed');
    this.exploded = false;
    this.particles = [];
    this.numParticles = floor(random(80, 120));

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
            this.particles.push(new Particle(this.firework.pos.x, this.firework.pos.y, this.firework.red, this.firework.green, this.firework.blue, 'nonSeed'));
        }

        if (random(1) < 0.5) {
            fireworkBurst1.play();
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