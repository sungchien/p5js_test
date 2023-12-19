let baseLength;
let minLength;
let lengthRatio;
let angleChange;
let thicknessRatio;

let leafDensity;
let leafColor;

let deg;

function setup() {
    // put setup code here
    createCanvas(400, 400);
    noLoop();
    angleMode(DEGREES);

    button = createButton('產生樹');
    button.position(480, 55);
    button.mousePressed(newTree);  

    newTree();
}

function newTree() {
    colorMode(RGB, 255);
    background(220);
    
    deg = random(80, 100);
    
    baseLength = random(height/5, height/3);
    minLength = random(1, 10);
    lengthRatio = random(0.25, 0.7);
    angleChange = random(6, 60);
    thickness = random(10, 15);
    thicknessRatio = random(0.4, 0.7);
    
    leafDensity = random(5, 10);
    colorMode(HSB, 360, 255, 255);
    leafColor = color(random(0, 120), 255, 255);

    drawTree(
        width / 2,
        height,
        deg,
        baseLength,
        thickness
    );
}

function drawTree(x, y, angle, length, thickness) {
    let v = [];
    
    const [x1, y1] = [x, y];
    const x2 = x1 + cos(angle) * length;
    const y2 = y1 - sin(angle) * length;
  
    strokeWeight(thickness);
    line(x1, y1, x2, y2);
    
    if (angle>=360) {
        angle -= 360;
    } else if (angle<0) {
        angle += 360;
    }
    
    for (i=0; i<4; i++) {
        v[i] = random(-5, 5);
    }
    
    if (length >= minLength) {
        drawTree(x2, y2, angle + angleChange, length * lengthRatio+v[0], thickness*thicknessRatio);
        drawTree(x2, y2, angle - angleChange, length * lengthRatio+v[1], thickness*thicknessRatio);
        //drawTree(x2, y2, angle + angleChange*2, length * lengthRatio+v[2], thickness*thicknessRatio);
        //drawTree(x2, y2, angle - angleChange*2, length * lengthRatio+v[3], thickness*thicknessRatio);
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