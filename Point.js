var altura = 200;
function Ilusion(pos) {
    this.pos = pos
    this.angle = 0;

    this.show = function() {
        stroke(255);
        noFill();
        ellipse(this.pos.x, this.pos.y, 10, 10);
    }

    this.getAngle = function(target) {
        var angle = degrees(atan2(this.pos.y - target.pos.y, this.pos.x - target.pos.x));
        angle = angle - 180;
        angle = abs(angle);
        this.angle = angle;
        target.angle = angle;
        return angle;
    }

    this.projectPoint = function() {
        x = this.pos.x + cos(this.angle * PI / 180) * (20)
        y = this.pos.y - sin(this.angle * PI / 180) * (20)
        var projected = createVector(x, y);
        noFill();
        stroke(0, 255, 255);
        ellipse(projected.x, projected.y, 20, 20);
    }
}

var points = [];
var pointi;
var prev;
var post;
var angle;
var widthFactor=0.94;
function setup() {
    //height=350;
    canvas = createCanvas(window.innerWidth * widthFactor, altura);
    canvas.parent('angleExample');
    background(50);
}

function draw() {
    background(51)
    for (var i = 0; i < points.length; i++) {
        points[i].show();
        if (points.length > 1) {
            prev = points[points.length-2];
            post = points[points.length-1];
            console.log(pos,prev);
            angle = prev.getAngle(post);
            post.projectPoint();
        }
    }
}

function mousePressed() {
    pos = createVector(mouseX, mouseY);
    pointi = new Ilusion(pos);
    points.push(pointi);
}

function windowResized() {
    resizeCanvas(windowWidth * widthFactor, window.innerWidth * 0.25, altura);
    background(50);
}
