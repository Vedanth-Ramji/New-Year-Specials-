function Particle(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 3;

    this.move = function() {
        this.x -= 1;
        this.y += random(-2, 2);
    }

    this.show = function() {
        fill('yellow');
        stroke('yellow');
        ellipse(this.x, this.y, this.radius * 2);
    }

    this.checkFinished = function(snowflake) {
        let finished = false;

        if (this.x < 1) {
            finished = true;
            return finished;
        }

        for (let i = 0; i < snowflake.length; i++) {
            let d = dist(snowflake[i].x, snowflake[i].y, this.x, this.y);
            if (d < this.radius * 2) {
                finished = true;
                break;
            }
        }

        return finished;
    }
}