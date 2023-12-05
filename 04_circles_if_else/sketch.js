let toggle = 0;
const toggleColor = 5;

function setup() {
    // put setup code here
    createCanvas(480, 360);
    angleMode(DEGREES);
    colorMode(HSB, 360, 100, 100, 1);
    noStroke();
}
function draw() {
    // put drawing code here
    if (mouseIsPressed) {
        fill(toggle*360/toggleColor, 100, 100, 0.1);
        circle(mouseX, mouseY, 30);

    }
}

function mouseClicked() {
    toggle = (toggle+1) % 5;
}