var radius = 30;

function setup() {
    // put setup code here
    createCanvas(480, 360);
    colorMode(HSB);
}
function draw() {
    // put drawing code here
    var d;
    var x = width/2;
    var y = height/2;
   
    background(204);
    d = dist(mouseX, mouseY, x, y);
    if (d < radius) {
        radius--;
        hueValue = 240 - (1-d/radius)*50;
        if (hueValue<0) hueValue = 0;
        fill(hueValue, 75, 95);
    }
    else {
        radius++;
        hueValue = 0 + (1-radius/d)*50;
        if (hueValue>240) hueValue = 240;
        fill(hueValue, 75, 95);
    }
    circle(x, y, radius);
}