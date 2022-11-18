function setup() {
    // put setup code here
    createCanvas(400, 300);
    background(0);
}
function draw() {
    // put drawing code here
    stroke(255);
    x = random(0, width);
    y = random(0, height);
    point(x, y);
}