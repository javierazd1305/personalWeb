function Pointer(pos, time) {
    this.pos = pos;
    this.speed = 0;
    this.time = time;
    this.angle = 0;
    this.acceleration = 0;
    this.errorEstimation = [];
    this.projection = null;
    this.ellapseTime = 0;

    this.show = function() {
        noStroke();
        fill(255);
        ellipse(this.pos.x, this.pos.y, 10, 10);
    }

    this.getAngle = function(target) {
        var angle = degrees(atan2(this.pos.y - target.y, this.pos.x - target.x));
        angle = angle - 180;
        angle = abs(angle);
        return angle;
    }

    this.update = function(pos, angle) {
        timeDiff = (millis() - this.time)/100
        speed = this.calcSpeed(this.pos, pos, timeDiff);
        this.ellapseTime = timeDiff;
        this.time= millis();
        this.acceleration =(speed-this.speed)/(this.ellapseTime*100)
        this.speed = speed
        this.pos = pos;
        this.angle = angle;
        this.projection = this.projectPoint();

    }

    this.showLegend = function() {
        textSize(15);
        fill(255);
        noStroke();
        angle = "angle: " + this.angle
        speed = "speed: " + this.speed
        acceleration = "acce: " + this.acceleration
        text(angle, 20, 30);
        text(speed, 20, 50);
        text(acceleration, 20, 70);
    }

    this.calcSpeed = function(pos1, pos2, time) {
        var distance = dist(pos1.x, pos1.y, pos2.x, pos2.y);
        if (distance == 0) {
            return 0;
        }
        var speed = distance / time
        return speed;
    }

    this.projectPoint = function(){
      x = this.pos.x + cos(this.angle*PI/180)*(this.speed*0.8+this.acceleration*0.5*this.ellapseTime)
      y = this.pos.y - sin(this.angle*PI/180)*(this.speed*0.8+this.acceleration*0.5*this.ellapseTime)
      projected = createVector(x,y);
      noFill();
      stroke(0,255,255);
      ellipse(projected.x,projected.y,20,20);
      return projected
    }
}
