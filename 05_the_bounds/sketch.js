var x = 120;
var y = 60;
var radius = 12;

function setup() {
    // put setup code here
    createCanvas(240, 120);
    ellipseMode(RADIUS);
}
function draw() {
    // put drawing code here
    var d;
    
    background(204);
    d = dist(mouseX, mouseY, x, y);
    if (d < radius) {
        radius--;
        fill(255, 69, 0);
    }
    else {
        radius++;
        fill(218, 112, 214)
    }
    ellipse(x, y, radius, radius);
}