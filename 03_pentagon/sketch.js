function setup() {
    // put setup code here
    createCanvas(400, 400);
    background(0);
    angleMode(DEGREES);
    noFill();
}
function draw() {
    // put drawing code here
    x = width*0.5; // x coordinate of the center
    y = height*0.5; // y coordinate of the center
    r = 150; // radius
    d = 0;  // start angle
    step = 360/5; // increasing angle
 
    stroke('yellow'); // draw the pentagon with yellow line

    beginShape();

    sx = x + r*sin(d);
    sy = y + r*cos(d);
    d += step;
    vertex(sx, sy);
  
    sx = x + r*sin(d);
    sy = y + r*cos(d);
    d += step;
    vertex(sx, sy);
  
    sx = x + r*sin(d);
    sy = y + r*cos(d);
    d += step;
    vertex(sx, sy);

    sx = x + r*sin(d);
    sy = y + r*cos(d);
    d += step;
    vertex(sx, sy);
    
    sx = x + r*sin(d);
    sy = y + r*cos(d);
    d += step;
    vertex(sx, sy);

    sx = x + r*sin(d);
    sy = y + r*cos(d);
    d += step;
    vertex(sx, sy);

    endShape();

    stroke('lightskyblue');
    circle(x, y, 2*r);
}