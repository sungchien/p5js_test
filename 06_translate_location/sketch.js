var angle = 0.0;
var rot_step = 0.01;

function setup() {
    // put setup code here
    createCanvas(200, 200);
}
function draw() {
    // put drawing code here
    background(204);
    translate(mouseX, mouseY);
    rotate(angle);
    if (mouseIsPressed==true) {
        fill(218, 112, 214, 102);
        rot_speed = 20;
    }
    else {
        fill(255, 0, 255, 102);
        rot_speed = 5;
    }
    angle+= (rot_speed*rot_step);
    rect(0, 0, 30, 30);
}