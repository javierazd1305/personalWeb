var font;

var tree = [];
var leaves = [];
var count = 0;
var particles = []
var widthFactor = 0.94

function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {
    canvas = createCanvas(window.innerWidth*widthFactor, window.innerHeight);
    canvas.parent('parallax');
    var a = createVector(width / 2, height);
    var b = createVector(width / 2, height*0.9);
    var root = new Branch(a, b);
    tree[0] = root;



}

function draw() {
    background(44, 44, 44);
    //ellipse(mouseX,mouseY,10,10);
    textStyle(BOLD);
    textAlign(CENTER);
    textSize(50);
    noStroke(0);
    fill(255);
    text("WELCOME", window.innerWidth*widthFactor/2, window.innerHeight/2);
    textSize(40);
    text("HAVE FUN AND ENJOY YOUR VISIT", window.innerWidth*widthFactor/2, window.innerHeight/2+45);

    for (var i = 0; i < tree.length; i++) {
        tree[i].show();
        //tree[i].jitter();
      }

      for (var i = 0; i < leaves.length; i++) {
        fill(255, 0, 100, 100);
        noStroke();
        ellipse(leaves[i].x, leaves[i].y, 8, 8);
        leaves[i].y += random(0, 2);
      }

      for (var i = 0; i < particles.length;i++){
        particles[i].jitter()
        particles[i].show();

      }

}

function windowResized() {
  resizeCanvas(windowWidth*widthFactor, windowHeight);
  var a = createVector(width / 2, height);
  var b = createVector(width / 2, height*0.9);
  var root = new Branch(a, b);
  tree=[]
  tree[0] = root;
  count = 0;
  particles =[]
}


function mousePressed() {
  for (var i = tree.length - 1; i >= 0; i--) {
    if (!tree[i].finished) {
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
    }
    tree[i].finished = true;
  }
  count++;

  if (count == 6) {
    for (var i = 0; i < tree.length; i++) {
      if (!tree[i].finished) {
        var leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }
    tree=[]
    var a = createVector(width / 2, height);
    var b = createVector(width / 2, height*0.9);
    var root = new Branch(a, b);
    tree[0] = root;
    count = 0
  }

  var particle = new Particle(createVector(mouseX,mouseY));
  particles.push(particle);

}
