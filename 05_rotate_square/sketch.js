var angle = 0.0;
var rot_step = 1;
var r = 30;
function setup() {
    // put setup code here
    createCanvas(400, 400);
    angleMode(DEGREES);
}
function draw() {
    // put drawing code here
    background(255);
    x = width/2;
    y = height/2;
    
    if (mouseIsPressed==true) {
        rot_speed = 20; // 前進20*rot_step單位
    }
    else {
        rot_speed = 0; // 停止
    }
    angle += (rot_speed*rot_step);

    // 以當時滑鼠對應的座標為原點，旋轉座標系統，當rot_speed愈大，每次改變的角度愈多
    translate(x, y);
    rotate(angle);

    fill(color(255, 0, 0, 160));
    triangle(-r, -r, r, -r, r, r);
    fill(color(255, 255, 255, 0));
    triangle(-r, -r, -r, r, r, r);
}
