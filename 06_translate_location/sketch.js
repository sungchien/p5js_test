var angle = 0.0;
var rot_step = 1;
let toggle = 0;

function setup() {
    // put setup code here
    createCanvas(400, 400);
    angleMode(DEGREES);
}
function draw() {
    // put drawing code here
    background(255);
    translate(mouseX, mouseY);
    rotate(angle);
    if (mouseIsPressed==true) {
        rot_speed = 20;
    }
    else {
        rot_speed = 5;
    }
    if (toggle==0) {
        sq_color = color('rgba(255, 0, 0, 0.5)');
    }
    else if (toggle==1) {
        sq_color = color('rgba(255, 165, 0, 0.5)');
    }
    else if (toggle==2) {
        sq_color = color('rgba(255, 255, 0, 0.5)');
    }
    else {
        sq_color = color('rgba(0, 255, 0, 0.5)');
    }
    fill(sq_color);
    angle += (rot_speed*rot_step);
    triangle(sin(180)*30, cos(180)*30, sin(300)*30, cos(300)*30,sin(60)*30, cos(60)*30);
}

function mouseClicked() {
    toggle = (toggle+1)%4;
}