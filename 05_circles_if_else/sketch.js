function setup() {
    // put setup code here
    createCanvas(480, 360);
}
function draw() {
    // put drawing code here
    if (mouseIsPressed) {
        fill(color('rgba(255, 0, 0, 0.1)'));
    }
    else {
        fill(255);
    }
    noStroke();
    ellipse(mouseX, mouseY, 30, 30);
}