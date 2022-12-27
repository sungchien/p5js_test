function setup() {
    // put setup code here
    createCanvas(400, 400);
}

function draw() {
    // put drawing code here
    var distance, granularity;
    
    background(0);
    fill(255);
    stroke(0);
    distance = dist(width/2, height/2, mouseX, mouseY);
    granularity = map(distance, 0, 300, 1, 200);
    drawSquare(width / 2, height / 2, width / 2, granularity);
}

function drawSquare(x, y, l, g){
    rectMode(CENTER);
    square(x, y, l);
    if (l > g) {
        drawSquare(x, y - l / 2, l / 2, g);
        drawSquare(x + l / 2, y, l / 2, g);
        drawSquare(x, y + l / 2, l / 2, g);
        drawSquare(x - l / 2, y, l / 2, g);
    }
}