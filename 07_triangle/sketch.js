var len = 500;
var depth = 7;
let triColor;
let slider;

function setup() {
    createCanvas(540, 540);
    noStroke();
    noLoop();
}

function draw() {
    background(255);
    divide(width / 2 - len / 2, height / 2 + len * sqrt(3) / 4, len, 1, depth);
}

/*
function mouseClicked() {
    background(random(0, 255), random(0, 255), random(0, 255));
    divide(width / 2 - len / 2, height / 2 + len * sqrt(3) / 4, len, 1, depth);
}
*/

function divide(x, y, l, lvl, max) {
    if (lvl == max) {
        tri(x, y, l);
    } else {
        divide(x, y, l / 2, lvl + 1, max);
        divide(x + l / 2, y, l / 2, lvl + 1, max);
        divide(x + l / 4, y - l * sqrt(3) / 4, l / 2, lvl + 1, max);
    }
}

function tri(x, y, l) {
    push();

    fill(triColor = color(random(0, 255), random(0, 255), random(0, 255)));
    triangle(x, y, x + l / 2, y - l * sqrt(3) / 2, x + l, y);
    
    pop();
}