function setup() {
    // put setup code here
    createCanvas(400, 300);
    background(0);
}
function draw() {
    // put drawing code here
    r = random(255);
    g = random(255);
    b = random(255);
    strokeColor = color(r, g, b);
    //x1 = random(0, width/2);
    //y1 = random(height/2, height);
    x1 = 0;
    y1 = height;
    x2 = random(width/2, width);
    y2 = random(0, height/2);
    stroke(strokeColor);
    line(x1, y1, x2, y2);
}