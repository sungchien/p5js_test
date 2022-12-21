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
            fill(color('rgba(255, 165, 0, 0.1)'));
            ellipse(mouseX, mouseY, 30, 30);
        }
        else if (toggle==2) {
            fill(color('rgba(255, 255, 0, 0.1)'));
            ellipse(mouseX, mouseY, 30, 30);
        }
        else if (toggle==3){
            fill(color('rgba(0, 255, 0, 0.1)'));
            ellipse(mouseX, mouseY, 30, 30);
        }
        else if (toggle==4){
            fill(color('rgba(0, 0, 255, 0.1)'));
            ellipse(mouseX, mouseY, 30, 30);   
        }
    }
}

function mouseClicked() {
    toggle = (toggle+1) % 5;
}