function setup() {
    // put setup code here
    createCanvas(480, 360);
    background(0);
    fill('#BA55D3');
}
function draw() {
    // put drawing code here
    band = 16;
    for (var y = band; y <= height-band; y += 8) {
        for (var x = y+band; x <= width-y; x += 8) {
            z = 16 - y/10.0;
            if (z<4)
                z = 4;
            circle(x, y, z);
        }
    }
}