var x = 0;
var y = 0;
var px = 0;
var py = 0;
var easing = 0.05;

function setup() {
    // put setup code here
    createCanvas(480, 120);
    textFont("Noto Sans TC");
    textAlign(CENTER, CENTER);
}
function draw() {
    // put drawing code here
    var targetX = mouseX;
    var targetY = mouseY;
    var weight;
    
    x += (targetX - x) * easing;
    y += (targetY - y) * easing;
    
    weight = dist(x, y, px, py)*10;
    //strokeWeight(weight);
    textSize(weight);

    background(72, 61, 139);
    translate(x, y);
    fill(218, 112, 214);
    text("世新資傳知識永傳", 0, 0);
    py = y;
    px = x;
}