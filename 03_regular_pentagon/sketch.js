function setup() {
    // put setup code here
    createCanvas(400, 400);
    background(0);
    angleMode(DEGREES);
    
    noFill();
}
function draw() {
    // put drawing code here
    background(0);

    x = width*0.5; // x coordinate of the center
    y = height*0.5; // y coordinate of the center
    numEdges = 5; // number of edges
    r = 150; // radius
    d = 180; // start angle 

    stroke('yellow');
    beginShape();
    for (i=0; i<=numEdges; i++) {
        sx = x + r*sin(d);
        sy = y + r*cos(d);
        vertex(sx, sy);
        d += (360/numEdges);
    }
    endShape();

    stroke('lightskyblue');
    circle(x, y, 2*r);
}