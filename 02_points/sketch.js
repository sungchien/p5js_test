function setup() {
    // put setup code here
    createCanvas(400, 300);
    background(0);
}
function draw() {
    // put drawing code here
    stroke(255);
    s = random(1, 10);
    x = random(0, width);
    y = random(0, height);
    strokeWeight(s);
    point(x, y);
}