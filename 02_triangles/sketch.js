function setup() {
    // put setup code here
    createCanvas(400, 300);
    background(0);
    noFill();
}
function draw() {
    // put drawing code here
    r = random(255);
    g = random(255);
    b = random(255);
    strokeColor = color(r, g, b);
    x1 = random(width);
    y1 = random(height);
    x2 = random(width);
    y2 = random(height);
    x3 = random(width);
    y3 = random(height);
    stroke(strokeColor);
    triangle(x1, y1, x2, y2, x3, y3);
}