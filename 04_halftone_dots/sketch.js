function setup() {
    // put setup code here
    createCanvas(480, 120);
    background(0);
    fill('#BA55D3');
}
function draw() {
    // put drawing code here
    for (var y = 32; y <= height; y += 8) {
        for (var x = 12; x <= width; x += 15) {
            ellipse(x+y, y, 16 - y/10.0, 16 - y/10.0);
        }
    }
}