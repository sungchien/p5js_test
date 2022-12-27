var len = 500;
var depth = 7;

function setup() {
    createCanvas(540, 540);
    noStroke();
    noLoop();
}

function draw() {
    var triColor = color(random(0, 255), random(0, 255), random(0, 255));
    
    background(255);
    divide(width / 2 - len / 2, height / 2 + len * sqrt(3) / 4, len, 1, depth, triColor);
}

function mouseClicked() {
    var triColor = color(random(0, 255), random(0, 255), random(0, 255));
    background(255);
    divide(width / 2 - len / 2, height / 2 + len * sqrt(3) / 4, len, 1, depth, triColor);
}

function divide(x, y, l, lvl, max, triColor) {
    if (lvl == max) {
        tri(x, y, l, triColor);
    } else {
        divide(x, y, l / 2, lvl + 1, max, triColor);
        divide(x + l / 2, y, l / 2, lvl + 1, max, triColor);
        divide(x + l / 4, y - l * sqrt(3) / 4, l / 2, lvl + 1, max, triColor);
    }
}

function tri(x, y, l, triColor) {
    push();

    fill(triColor);
    
    triangle(x, y, x + l / 2, y - l * sqrt(3) / 2, x + l, y);
    
    pop();
}