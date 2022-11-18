function setup() {
    // put setup code here
    createCanvas(480, 120);
    noStroke();
}
function draw() {
    // put drawing code here
    background(204, 226, 225);
    fill(255, 0, 0, 160);
    beginShape();
    vertex(180, 82);
    vertex(207, 36);
    vertex(214, 63);
    vertex(407, 11);
    vertex(412, 30);
    vertex(219, 82);
    vertex(226, 109);
    endShape(CLOSE);
}