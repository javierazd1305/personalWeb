function Particle(origin) {
  this.pos = origin

  this.jitter = function() {
    this.pos.x += random(-1, 1);
    this.pos.y += random(-1, 1);
  }

  this.show = function() {
    stroke(255);
    ellipse(this.pos.x,this.pos.y,5,5);
  }

}
