var radius = 30;

function setup() {
    // put setup code here
    createCanvas(480, 360);
    ellipseMode(RADIUS);
}
function draw() {
    // put drawing code here
    var d;
    var x = width/2;
    var y = height/2;
   
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