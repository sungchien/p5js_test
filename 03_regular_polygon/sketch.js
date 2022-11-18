function setup() {
    // put setup code here
    createCanvas(200, 150);
    background(102);
    angleMode(DEGREES);
}
function draw() {
    // put drawing code here
    x = width*0.5;
    y = height*0.5;
    numEdges = 5;
    r = 50;
    d = 180;
    beginShape();
    for (i=0; i<numEdges; i++) {
        sx = x + r*sin(d);
        sy = y + r*cos(d);
        vertex(sx, sy);
        d += (360/numEdges);
    }
    endShape();
}