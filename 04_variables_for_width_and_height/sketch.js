var w = 600;
var h = 240;
function setup() {
    // put setup code here
     createCanvas(w, h);
}
function draw() {
    // put drawing code here
    var mid;
    
    background(204);
    line(0, 0, width, height); // Line from (0,0) to (width, height), width and height are defined in Canvas
    line(width, 0, 0, height); // Line from (width, 0) to (0, height)
    mid = height/2;
    //ellipse(width/2, mid, mid, mid); // a circle at the center of Canvas
    circle(width/2, mid, mid, mid); // a circle at the center of Canvas
}