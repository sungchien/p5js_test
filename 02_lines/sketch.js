function setup() {
    // put setup code here
    createCanvas(400, 300);
    background(0);
}
function draw() {
    // put drawing code here
    l = random(0, 255);
    x1 = random(0, width);
    y1 = random(0, height);
    x2 = random(0, width);
    y2 = random(0, height);
    stroke(l);
    line(x1, y1, x2, y2);
}