const deg = 90;

let baseLength;
let minLength;
let lengthRatio;
let angleChange;

let leafDensity;
let leafColor;

function setup() {
    // put setup code here
    createCanvas(400, 400);
    noLoop();
    angleMode(DEGREES);
    
    baseLength = random(height / 8, height / 2);
    minLength = random(1, 10);
    lengthRatio = random(0.25, 0.75);
    angleChange = random(6, 60);
    
    leafDensity = random(0, 10);
    leafColor = color(random(0, 255), random(0, 255), random(0, 255));
}

function draw() {
    background(220);
    
    drawTree(
        width / 2,
        height,
        deg,
        baseLength
    );
}

function drawTree(x, y, angle, length) {
    const [x1, y1] = [x, y];
    const x2 = x1 + cos(angle) * length;
    const y2 = y1 - sin(angle) * length;
  
    line(x1, y1, x2, y2);
    
    if (length >= minLength) {
        drawTree(x2, y2, angle + angleChange, length * lengthRatio);
        drawTree(x2, y2, angle - angleChange, length * lengthRatio);
    } else {
        drawLeaves(x2, y2)
    }

}

function drawLeaves(x, y) {
    push();
  
    fill(leafColor);
    noStroke();
  
    for (let i = 0; i < leafDensity; i++) {
        circle(
            randomGaussian(x, 10),
            randomGaussian(y, 10),
            random(2, 5)
        );
    }
  
    pop();
}