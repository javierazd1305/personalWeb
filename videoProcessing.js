widthFactor = 0.94
var video;
var threshold;
var trackColor;

function preload() {
    font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {
    height = 350;
    width = window.innerWidth * widthFactor;
    canvas = createCanvas(window.innerWidth*widthFactor, 200);
    canvas.parent('colorTracking');
    background(50);
    video = createCapture(VIDEO);
    video.size(200, 200)
    trackColor = color(255, 0, 0);
    video.hide();
}

function draw() {
    background(50);
    video.loadPixels();
    image(video, 0, 10, video.width, video.height)
    threshold = 80;
    var count = 0;
    var avgX = 0;
    var avgY = 0;
    for (var x = 0; x < video.width; x++) {
        for (var y = 0; y < video.height; y++) {
            var loc = (x + y * video.width) * 4;
            // What is current color
            var r1 = video.pixels[loc];
            var g1 = video.pixels[loc + 1];
            var b1 = video.pixels[loc + 2];
            var r2 = red(trackColor);
            var g2 = green(trackColor);
            var b2 = blue(trackColor);

            var d = distSq(r1, g1, b1, r2, g2, b2);
            if (d < threshold * threshold) {
                stroke(255);
                strokeWeight(1);
                point(x, y);
                avgX += x;
                avgY += y;
                count++;
            }
        }
    }
}

function distSq(x1, y1, z1, x2, y2, z2) {
    var d = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1) + (z2 - z1) * (z2 - z1);
    return d;
}

function mousePressed() {
    var loc1 = (floor(mouseX) + floor(mouseY) * video.width) * 4;
    var col = video.pixels[loc1];
    var col1 = video.pixels[loc1 + 1];
    var col2 = video.pixels[loc1 + 2];
    var col3 = color(col, col1, col2)
    //console.log(col3);
    trackColor = col3;
}

function windowResized() {
    resizeCanvas(windowWidth * widthFactor, 200);
}
