function setup() {
    // put setup code here
    createCanvas(480, 360);
    background(0);
    fill('#BA55D3');
}
function draw() {
    // put drawing code here
    for (var y = 32; y <= height-32; y += 8) {
        for (var x = 12; x <= width; x += 15) {
            z = 16 - y/10.0;
            if (z<4)
                z = 4;
            ellipse(x+y, y, z, z);
        }
    }
}