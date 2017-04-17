var font;
var widthFactor = 0.94
var height;
var pointer;
function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {
    //height=350;
    canvas = createCanvas(window.innerWidth*widthFactor,200);
    canvas.parent('KalmanFilterExample');
    background(50);
}

function draw() {
  if (pointer != null) {
    pointer.showLegend();
  }
}

function mousePressed(){
  pos = createVector(mouseX,mouseY);
  pointer = new Pointer(pos);
}

function mouseDragged(){
  background(50);
  pos = createVector(mouseX,mouseY);
  var angle = pointer.getAngle(pos);
  pointer.update(pos,angle,millis());
  pointer.show();
}

function windowResized() {
  resizeCanvas(windowWidth*widthFactor, window.innerWidth*0.25,200);
  background(50);
}
