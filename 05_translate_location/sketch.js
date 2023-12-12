var angle = 0.0;
var rot_step = 1;
let toggle = 0;
var toggleColor=8;
var r = 30;

function setup() {
    // put setup code here
    createCanvas(400, 400);
    angleMode(DEGREES);
    colorMode(HSB, 360, 100, 100, 1);
}
function draw() {
    // put drawing code here
    background(255);
    fill(toggle*360/toggleColor, 100, 100, 0.8);

    if (mouseIsPressed==true) {
        rot_speed = 20; // 前進20*rot_step單位
    }
    else {
        rot_speed = 5; // 前進5*rot_step單位
    }
    angle += (rot_speed*rot_step);

    // 以當時滑鼠對應的座標為原點，旋轉座標系統，當rot_speed愈大，每次改變的角度愈多
    translate(mouseX, mouseY);
    rotate(angle);
    triangle(sin(0)*r, cos(0)*r, sin(120)*r, cos(120)*r, sin(240)*r, cos(240)*r);
}

function mouseClicked() {
    toggle = (toggle+1)%toggleColor;
}