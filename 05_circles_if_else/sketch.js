let toggle = 0;

function setup() {
    // put setup code here
    createCanvas(480, 360);
    angleMode(DEGREES);
}
function draw() {
    // put drawing code here
    if (mouseIsPressed) {
        noStroke();
        if (toggle==0) {
            fill(color('rgba(255, 0, 0, 0.1)'));
            ellipse(mouseX, mouseY, 30, 30);
        }
        else if (toggle==1) {
            fill(color('rgba(0, 255, 0, 0.1)'));
            square(mouseX, mouseY, 30);
        }
        else {
            fill(color('rgba(0, 0, 255, 0.1)'));
            triangle(mouseX+15*sin(180), mouseY+15*cos(180), mouseX+15*sin(60), mouseY+15*cos(60), mouseX+15*sin(300), mouseY+15*cos(300));
        }
    }
}

function mouseClicked() {
    toggle = (toggle+1) % 3;
}