var x = 0;
var y = 0;
var px = 0;
var py = 0;
var easing = 0.05;
function setup() {
    // put setup code here
    createCanvas(480, 480);
}
function draw() {
    // put drawing code here
    var targetX = mouseX;
    var targetY = mouseY;
    var weight;
    
    x += (targetX - x) * easing;
    y += (targetY - y) * easing;
    
    weight = dist(x, y, px, py);
    strokeWeight(weight);
    if (mouseIsPressed) {
        stroke(255, 69, 0, 102);
    }
    else {
        stroke(153, 50, 204, 102);
    }
    line(x, y, px, py);
    py = y;
    px = x;
}